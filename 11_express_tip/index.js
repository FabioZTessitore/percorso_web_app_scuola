import express from "express";
import path from "path";

const port = 3000;

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.post("/calculate", (req, res) => {
  const price = parseFloat(req.body.price);
  const tip_perc = parseFloat(req.body.tip);
  const tip = (price * tip_perc) / 100;
  const total = price + tip;

  res.render("result", {
    price: price.toFixed(2),
    tip_perc: tip_perc.toFixed(1),
    tip: tip.toFixed(2),
    total: total.toFixed(2),
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
