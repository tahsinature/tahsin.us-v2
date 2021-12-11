#!/bin/bash
psql postgresql://$DB_USER:$DB_PASS@localhost:5432/$DB_NAME -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep 1 || psql -U $DB_USER postgres -c "CREATE DATABASE $DB_NAME";

export TEST_DB_NAME=$(echo $DB_NAME)_test
psql postgresql://$DB_USER:$DB_PASS@localhost:5432/$TEST_DB_NAME -tc "SELECT 1 FROM pg_database WHERE datname = '$TEST_DB_NAME'" | grep 1 || psql -U $DB_USER postgres -c "CREATE DATABASE $TEST_DB_NAME";