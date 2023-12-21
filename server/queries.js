const { request, response } = require("express");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "labinsta",
  password: "DBSB3272",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const {
    username,
    usermail,
    userphone,
    userprofilepic,
    usernumfollowers,
    usernumfollowing,
  } = request.body;
  pool.query(
    "INSERT INTO Users (U_username, U_email, U_phone, U_profilepic, U_numfollowers, U_numfollowing) VALUES ($1, $2,$3,$4,$5,$6)",
    [
      username,
      usermail,
      userphone,
      userprofilepic,
      usernumfollowers,
      usernumfollowing,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("UserAdded");
    }
  );
};

const createPost = (request, response) => {
  const { user_id, postimage } = request.body;
  pool.query(
    "INSERT INTO Post (U_id, post_pic) VALUES ($1, $2)",
    [user_id, postimage],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("PostAdded");
    }
  );
};

const getposts = async (request, response) => {
  try {
    const allposts = await pool.query("SELECT * FROM Post");
    response.json(allposts.rows);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  createPost,
  getposts,
};
