-- Linux switch to postgres user with: sudo -i -u postgres 
-- then type in psql to enter interactive shell
-- Next series of lines are to create user, database, and grant priveleges
-- these commands can be done in interactive shell.
-- can also run in initializtion in psql with:
--  psql -U root -d closet_db -f src/db/init.sql

CREATE USER root WITH PASSWORD 'password';
CREATE DATABASE closet_db;
GRANT ALL PRVELEGES ON DATABASE closet_db TO root;

CREATE TABLE IF NOT EXISTS clothing (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    color TEXT,
    image TEXT, 
    tags TEXT[]
);