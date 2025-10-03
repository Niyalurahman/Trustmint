// cmd/train.go
package cmd

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/Niyalurahman/trustmint/internal/crypto"
	"github.com/Niyalurahman/trustmint/internal/docker"
	"github.com/spf13/cobra"
)

var (
	dataset    string
	configFile string
	modelName  string
	framework  string
	outputDir  string
	cpu        string
	memory     string
	useGPU     bool
)

var trainCmd = &cobra.Command{
	Use:   "train",
	Short: "Train an AI model securely in Docker",
	RunE: func(cmd *cobra.Command, args []string) error {
		if dataset == "" || configFile == "" || modelName == "" {
			return fmt.Errorf("dataset, config, and model name are required")
		}

		opts := docker.TrainOptions{
			DatasetPath: dataset,
			ConfigPath:  configFile,
			OutputPath:  outputDir,
			ModelName:   modelName,
			Framework:   framework,
			CPU:         cpu,
			Memory:      memory,
			UseGPU:      useGPU,
		}

		if err := docker.RunTrainingContainer(opts); err != nil {
			return err
		}

		// Compute hashes
		hashes := []string{}
		files := []string{dataset, configFile, filepath.Join(outputDir, modelName+".bin")}
		for _, f := range files {
			if h, err := crypto.HashFile(f); err == nil {
				hashes = append(hashes, h)
			}
		}
		merkle := crypto.MerkleRoot(hashes)

		metadata := map[string]interface{}{
			"model":       modelName,
			"framework":   framework,
			"timestamp":   time.Now().UTC().String(),
			"hashes":      hashes,
			"merkle_root": merkle,
		}
		metaFile := filepath.Join(outputDir, "metadata.json")
		f, _ := os.Create(metaFile)
		defer f.Close()
		json.NewEncoder(f).Encode(metadata)

		fmt.Println("✅ Training complete. Metadata saved to", metaFile)
		return nil
	},
}

func init() {
	rootCmd.AddCommand(trainCmd)

	trainCmd.Flags().StringVar(&dataset, "dataset", "", "Path to dataset (required)")
	trainCmd.Flags().StringVar(&configFile, "config", "", "Training config YAML (required)")
	trainCmd.Flags().StringVar(&modelName, "name", "model", "Model name")
	trainCmd.Flags().StringVar(&framework, "framework", "sklearn", "Framework: sklearn|pytorch|tensorflow")
	trainCmd.Flags().StringVar(&outputDir, "out", "./output", "Output directory")
	trainCmd.Flags().StringVar(&cpu, "cpu", "1", "CPU limit")
	trainCmd.Flags().StringVar(&memory, "mem", "512m", "Memory limit")
	trainCmd.Flags().BoolVar(&useGPU, "gpu", false, "Use GPU")
}
