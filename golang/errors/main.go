package main

import (
	"errors"
	"fmt"
)

func main() {
	err := errors.New("new error")
	fmt.Println(err)
}
