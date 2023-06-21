package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type flight struct {
	ID 			string	`json:"id"`
	Airline		string	`json:"airline"`
	Aircraft	string 	`json:"aircraft"`
	Departure   string	`json:"departure"`
	Arrival     string	`json:"arrival"`
	Date		string	`json:"date"`
}

func getFlights(context *gin.Context) {
	// Once implemented, these values will come from the database
	var dbID = "1"
	var dbAirline = "Airline"
	var dbAircraft = "Aircraft"
	var dbDeparture = "Departure"
	var dbArrival = "Arrival"
	var dbDate = "Date"

	var flights = []flight {
		{
			ID: dbID,
			Airline: dbAirline,
			Aircraft: dbAircraft,
			Departure: dbDeparture,
			Arrival: dbArrival,
			Date: dbDate,
		},
	}
	context.IndentedJSON(http.StatusOK, flights)
}

func addFlight(context *gin.Context) {
	var newFlight flight

	if err := context.BindJSON(&newFlight); err != nil {
		return
	}

	// add flight to the database

	context.IndentedJSON(http.StatusCreated, newFlight)
}

func main() {
	router := gin.Default()

	router.GET("/api/flights", getFlights)
	router.POST("/api/add", addFlight)

	router.Run("localhost:8080")
}
