package models

import (
	"gorm.io/gorm"
)

type Flight struct {
	gorm.Model
	Airline string `json:"airline" gorm:"text;not null;default:null"`
	FlightNumber string `json:"flightnumber" gorm:"text;not null;default:null"`
	Aircraft string `json:"aircraft" gorm:"text;not null;default:null"`
	Departure string `json:"departure" gorm:"text;not null;default:null"`
	Arrival string `json:"arrival" gorm:"text;not null;default:null"`
	Date string `json:"date" gorm:"text;not null;default:null"`
}
