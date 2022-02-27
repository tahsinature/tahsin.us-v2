package seeds

import (
	"github.com/tahsinature/tahsin.us/pkg/config"
	"github.com/tahsinature/tahsin.us/pkg/db"
	"github.com/tahsinature/tahsin.us/pkg/log"
)

func Execute() {
	db.Sync(config.EntryArgs.SyncForce)

	userSeeder := new(UserSeeder)
	postSeeder := new(PostSeeder)
	users := userSeeder.CreateMany(3)
	postSeeder.CreateMany(users, 3)

	log.DB.Info("Seeding Done...")
}
