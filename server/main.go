package main

import (
	"fmt"
	"net/http"
	"log"

	operations "logbook/utils"
)

func get(w http.ResponseWriter, r *http.Request) {

	logbook_data := operations.GetFlights()

	fmt.Fprint(w, logbook_data)
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/api/get_flights", get)

	log.Fatal(http.ListenAndServe(":8080", mux))
}
