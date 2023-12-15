const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const postCollection = db.collection('posts');
const userCollection = db.collection('user');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);
  window.location.href = "timeline.html"
  return user;
}

async function addPostDB(post) {
 const result = await postCollection.insertOne(post)
 return result;
}

function getPosts() {
  const query = {post: {$gt: 0, $lt: 900}};
  const options = {
    sort: {post: -1},
    limit: 10,
  };
  const cursor = postCollection.find();
  return cursor.toArray();
}



module.exports = { addPostDB, getPosts, getUser, getUserByToken, createUser, };