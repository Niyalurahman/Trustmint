// internal/crypto/crypto.go
package crypto

import (
	"crypto/sha256"
	"encoding/hex"
	"os" // ✅ added
)

func HashFile(path string) (string, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:]), nil
}

func MerkleRoot(hashes []string) string {
	if len(hashes) == 0 {
		return ""
	}
	for len(hashes) > 1 {
		var newHashes []string
		for i := 0; i < len(hashes); i += 2 {
			if i+1 < len(hashes) {
				combined := hashes[i] + hashes[i+1]
				sum := sha256.Sum256([]byte(combined))
				newHashes = append(newHashes, hex.EncodeToString(sum[:]))
			} else {
				newHashes = append(newHashes, hashes[i])
			}
		}
		hashes = newHashes
	}
	return hashes[0]
}
