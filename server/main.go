package main

import (
	"fmt"
	"net/http"
)

func handlerFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Welcome")
}

func main() {
	http.HandleFunc("/api", handlerFunc)
	http.ListenAndServe(":8080", nil)
}
