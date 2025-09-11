import express from "express";
import sqlite3 from "sqlite3";

const port = 3000;

const app = express();

const db = new sqlite3.Database("./db/todos.db");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  const todos = [];

  db.all("SELECT * FROM todos", (err, items) => {
    items.forEach((item) => {
      const todo = { ...item, done: item.done === 0 ? false : true };
      todos.push(todo);
    });
    res.render("index", {
      todos,
    });
  });
});

app.post("/add-task", (req, res) => {
  const todoText = req.body.todotext;

  const stmt = db.prepare("INSERT INTO todos (text) VALUES (?)");
  stmt.run(todoText);
  stmt.finalize();

  res.redirect("/");
});

app.post("/toggle-done", (req, res) => {
  const todoId = parseInt(req.body.id);

  db.get("SELECT done FROM todos WHERE id = ?", todoId, (err, row) => {
    const done = 1 - row.done;

    const stmt = db.prepare("UPDATE todos SET done = ? WHERE id = ?");
    stmt.run(done, todoId);
    stmt.finalize();

    res.redirect("/");
  });
});

app.post("/remove-done", (req, res) => {
  db.run("DELETE FROM todos WHERE done = ?", 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
