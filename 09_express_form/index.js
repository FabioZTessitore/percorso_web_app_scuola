import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.post("/sum", (req, res) => {
  // qui deve leggere i dati presenti
  // nella richiesta, gestirli e inviare la risposta
  // console.log(req.body);

  const firstnumber = parseFloat(req.body.firstnumber);
  const secondnumber = parseFloat(req.body.secondnumber);
  const sum = firstnumber + secondnumber;

  res.send({ result: sum });
});

app.listen(port, () => {
  console.log(`app in ascolto sulla porta ${port}`);
});
