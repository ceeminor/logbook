package main

import (
	"github.com/gofiber/fiber/v2"

	"github.com/ceeminor/logbook/handlers"
)

func Routes(app *fiber.App) {
	app.Get("/api", handlers.Home)
	app.Get("/api/flights", handlers.GetFlights)
	app.Post("/api/add", handlers.AddFlight)
	app.Delete("/api/delete/:id", handlers.DeleteFlight)
}
