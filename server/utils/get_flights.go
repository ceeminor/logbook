package utils

import (
	"time"
)

type Flight struct {
	airline string
	departure string
	arrival string
	aircraft string
	date string
}

type PageData struct {
	Title string
	Flights []Flight

}

func GetFlights() (interface{}) {

	airline := "American"
	departure := "KRIC"
	arrival := "KMCO"
	aircraft := "A321"
	date := time.Now().Format("2006-01-02")

	logbookData := PageData {
		Title: "Flights",
		Flights: []Flight {
			{
				airline: airline, 
				departure: departure, 
				arrival: arrival, 
				aircraft: aircraft,
				date: date,
			},
		},
	}
	return logbookData
}
