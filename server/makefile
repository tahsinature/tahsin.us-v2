prepare:
	curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh && curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s
run:
	go run pkg/main.go -r
run-watch:
	air
syncdb:
	go run pkg/main.go --syncf
seed:
	go run pkg/main.go --syncf --seed
test:
	go clean -cache && go test -v ./pkg/tests
dependency:
	docker-compose up -d db redis
