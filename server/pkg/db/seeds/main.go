package seeds

import (
	"github.com/tahsinature/future-proof-gin/pkg/config"
	"github.com/tahsinature/future-proof-gin/pkg/db"
	"github.com/tahsinature/future-proof-gin/pkg/log"
)

func Execute() {
	db.Sync(config.EntryArgs.SyncForce)

	userSeeder := new(UserSeeder)
	postSeeder := new(PostSeeder)
	users := userSeeder.CreateMany(3)
	postSeeder.CreateMany(users, 3)

	log.DB.Info("Seeding Done...")
}
