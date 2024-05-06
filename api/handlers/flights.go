package handlers

import (
	"github.com/gofiber/fiber/v2"

	"github.com/ceeminor/logbook/models"
	"github.com/ceeminor/logbook/database"
)

func HealthCheck(c *fiber.Ctx) error {
	return c.Status(200).SendString("OK")
}

func Home(c *fiber.Ctx) error {
	return c.SendString("Logbook API")
}

func GetFlights(c *fiber.Ctx) error {
	flights := []models.Flight{}
	database.DB.Db.Find(&flights)

	return c.Status(200).JSON(flights)
}

func AddFlight(c *fiber.Ctx) error {
	flight := new(models.Flight)

	if err := c.BodyParser(flight); err != nil {
        	return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map {
			"error": err.Error(),
		})
    }

	database.DB.Db.Create(&flight)

	return c.Status(201).JSON(flight)
}

func DeleteFlight(c *fiber.Ctx) error {
	id := c.Params("id")
	
	var flight models.Flight
    	result := database.DB.Db.Delete(&flight, id)

	if result.Error != nil {
		return c.Status(fiber.StatusInternalServerError).SendString("Error deleting flight.")
	}

	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusInternalServerError).SendString("Flight was not found in database.")
	}
		return c.Status(200).SendString("Successfully deleted flight.")
}
