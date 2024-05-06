package database

import (
	"fmt"
	"log"
	"os"

	"github.com/ceeminor/logbook/models"

	"gorm.io/gorm"
	"gorm.io/driver/postgres"
	"gorm.io/gorm/logger"
)

type Dbinstance struct {
	Db *gorm.DB
}

var DB Dbinstance

func ConnectDb() {
	dsn := fmt.Sprintf(
		"host=postgres port=5432 user=%s password=%s dbname=%s sslmode=disable TimeZone=America/New_York",
        os.Getenv("DB_USER"),
        os.Getenv("DB_PASSWORD"),
        os.Getenv("DB_NAME"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})

	if err != nil {
		log.Fatalf("Database connection failed: %v", err)
		os.Exit(2)
	}

	log.Println("Database connection OK")
	db.Logger = logger.Default.LogMode(logger.Info)

	log.Println("Running migrations")
	db.AutoMigrate(&models.Flight{})

	DB = Dbinstance {
		Db: db,
	}
}
