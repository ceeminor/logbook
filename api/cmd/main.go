package main

import (
	"github.com/gofiber/fiber/v2"

    "github.com/ceeminor/logbook/database"
)

func main() {

    database.ConnectDb()

    app := fiber.New()

    Routes(app)

    app.Listen(":3000")
}
