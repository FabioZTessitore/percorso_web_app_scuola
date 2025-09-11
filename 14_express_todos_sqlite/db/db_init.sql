DROP TABLE IF EXISTS todos;
CREATE TABLE todos (
    id INTEGER PRIMARY KEY,
    text TEXT,
    done INTEGER DEFAULT 0
);

INSERT INTO todos (text) VALUES ("Task 1");
INSERT INTO todos (text) VALUES ("Task 2");