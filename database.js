const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const postCollection = db.collection('posts');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});



async function addPostDB(post) {
    /*
  try {
    const result = await postsCollection.insertOne(post);
    console.log('Post added:', post);
    return result;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
  */
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

module.exports = { addPostDB, getPosts };