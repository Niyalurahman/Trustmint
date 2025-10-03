package docker

import (
	// "archive/tar"
	"bytes"
	"context"
	"fmt"
	"io"
	"os"
	// "path/filepath"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
)

type TrainOptions struct {
	DatasetPath string
	ConfigPath  string
	OutputPath  string
	ModelName   string
	Framework   string
	CPU         string
	Memory      string
	UseGPU      bool
}

// RunTrainingContainer spins up a Docker container for training
func RunTrainingContainer(opts TrainOptions) error {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv, client.WithAPIVersionNegotiation())
	if err != nil {
		return err
	}

	// Pick image by framework
	image := "trustmint/train-base:latest"
	if opts.Framework == "pytorch" {
		image = "trustmint/train-pytorch:latest"
	} else if opts.Framework == "tensorflow" {
		image = "trustmint/train-tf:latest"
	}

	fmt.Println("🚀 Starting training container with image:", image)

	// Ensure output path exists
	if err := os.MkdirAll(opts.OutputPath, 0755); err != nil {
		return err
	}

	// Mount dataset + config as read-only, output as writable
	hostConfig := &container.HostConfig{
		Binds: []string{
			fmt.Sprintf("%s:/data:ro", opts.DatasetPath),
			fmt.Sprintf("%s:/config:ro", opts.ConfigPath),
			fmt.Sprintf("%s:/output", opts.OutputPath),
		},
	}

	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image: image,
		Cmd:   []string{"python", "train.py", "--config", "/config", "--data", "/data", "--output", "/output"},
		Tty:   false,
	}, hostConfig, nil, nil, "trustmint-train")
	if err != nil {
		return err
	}

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err != nil {
		return err
	}

	statusCh, errCh := cli.ContainerWait(ctx, resp.ID, container.WaitConditionNotRunning)
	select {
	case err := <-errCh:
		if err != nil {
			return err
		}
	case <-statusCh:
	}

	out, err := cli.ContainerLogs(ctx, resp.ID, types.ContainerLogsOptions{ShowStdout: true, ShowStderr: true})
	if err != nil {
		return err
	}
	defer out.Close()

	buf := new(bytes.Buffer)
	if _, err := io.Copy(buf, out); err != nil {
		return err
	}
	fmt.Println("📜 Training logs:\n", buf.String())

	return nil
}
