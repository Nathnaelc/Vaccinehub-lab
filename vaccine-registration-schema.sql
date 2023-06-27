CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NULL,
    last_name TEXT NULL,
    email TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    location TEXT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW()
);