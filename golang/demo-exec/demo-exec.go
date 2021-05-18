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

	cmd = exec.Command("git", "show", "ddff430c325afc542cccc7a4190f27994ca046a1:test/sample.cpp")
	cmd.Dir = "/home/zhulei/workspace/x5mobile-test"
	err = cmd.Run() // output: err is nil
	log.Printf("git show: %v", err)

	cmd = exec.Command("git", "show", "ddff430c325afc542cccc7a4190f27994ca046a1:test/sample.cpp1")
	cmd.Dir = "/home/zhulei/workspace/x5mobile-test"
	err = cmd.Run() // output: err is *os/exec.ExitError
	log.Printf("git show: %v", err)

	/*
	   2021/05/18 17:10:22 demo: exit status 1
	   2021/05/18 17:10:22 git show: <nil>
	   2021/05/18 17:10:37 git show: exit status 128
	*/
}
