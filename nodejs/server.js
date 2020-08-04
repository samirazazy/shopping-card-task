import express from "express";
import data from "./data";
import path from 'path'

const app = express();

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = data.items.find((el) => el._id === itemId);

  item ?
    res.send(item) :
    res.status(404).send({
      msg: "Item is not found..."
    })
});

app.get("/api/items", (req, res) => res.send(data.items));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("reactjs/build"))

  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'reactjs', 'build', 'index.js')))
}

app.listen(PORT, () => console.log(`server started successfully at ${PORT} `))