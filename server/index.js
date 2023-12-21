const express = require("express");
const db = require("./queries.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST"], // Allow GET and POST requests
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Backend with Express Node and Postgres" });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
app.get("/getCustomers", db.getUsers);
app.post("/createCustomer", db.createUser);
app.post("/createPost", db.createPost);
app.get("/getPosts", db.getposts);
