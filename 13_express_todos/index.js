import express from "express";

const port = 3000;

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

let todos = [];

let idNext = 1;

app.get("/", (req, res) => {
  res.render("index", {
    todos,
  });
});

app.post("/add-task", (req, res) => {
  const todoText = req.body.todotext;
  const todo = {
    text: todoText,
    id: idNext,
    done: false,
  };
  idNext++;
  todos = [...todos, todo];
  res.redirect("/");
});

app.post("/toggle-done", (req, res) => {
  const todoId = parseInt(req.body.id);
  const todo = todos.find((todo) => todo.id === todoId);
  todo.done = !todo.done;
  res.redirect("/");
});

app.post("/remove-done", (req, res) => {
  todos = todos.filter((todo) => todo.done === false);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
