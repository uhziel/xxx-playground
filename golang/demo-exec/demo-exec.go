package main

import (
	"log"
	"os/exec"
)

// https://golang.google.cn/pkg/os/exec

func main() {
	cmd := exec.Command("cat", "/etc/shadow")
	err := cmd.Run()
	log.Printf("demo: %v", err)
}
