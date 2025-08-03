import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.post("/sum", (req, res) => {
  const firstnumber = parseFloat(req.body.firstnumber);
  const secondnumber = parseFloat(req.body.secondnumber);
  const sum = firstnumber + secondnumber;

  res.render("risultato", { result: sum.toFixed(3) });
});

app.listen(port, () => {
  console.log(`app in ascolto sulla porta ${port}`);
});
