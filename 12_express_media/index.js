import express from "express";

const port = 3000;

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

let values = [];

const media = (values) => {
  const sum = values.reduce((accumulator, current) => {
    accumulator += current;
    return accumulator;
  }, 0);
  return sum / values.length;
};

app.get("/", (req, res) => {
  res.render("index", {
    media: values.length > 0 ? media(values).toFixed(1) : "",
    values: values,
  });
});

app.post("/append", (req, res) => {
  const value = parseFloat(req.body.value);
  if (value) {
    values.push(value);
  }

  res.redirect("/");
});

app.post("/reset", (req, res) => {
  values = [];
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
