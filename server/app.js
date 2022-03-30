const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const apiUrl = "https://jsonplaceholder.typicode.com/users";

app.get("/users", (req, res) => {
  let userData;
  axios
    .get(apiUrl)
    .then((resp) => {
      console.log(resp.data, "Line 18");
      userData = resp.data;
      res.status(200).json(userData);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/users", (req, res) => {
  let { id, name, email } = req.body;
  let data = {
    id,
    name,
    email,
  };
  axios
    .post(apiUrl, data)
    .then((resp) => {
      console.log(resp.data);
      res.status(201).json(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/users/:id", (req, res) => {
  let { id } = req.params;
  let { name, email } = req.body;

  let data = {
    name,
    email,
  };

  axios
    .put(`${apiUrl}/${id}`, data)
    .then((resp) => {
      console.log(resp.data);
      res.status(200).json(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/users/:id", (req, res) => {
  let { id } = req.params;

  axios
    .put(`${apiUrl}/${id}`)
    .then((resp) => {
      console.log(resp.data);
      res.status(200).json(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("server runs on port", port);
});
