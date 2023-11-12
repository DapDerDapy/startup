const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Assuming posts are stored in an array called 'posts'
//let posts = [];

// GetPosts
apiRouter.get('/posts', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(posts);
});


// SubmitPost
apiRouter.post('/posts', (req, res) => {
  const newPost = req.body;
  posts.unshift(newPost); // Assuming you want to add the new post at the beginning of the array

  // Send a response indicating success
  res.status(201).json({ message: 'Post added successfully', posts });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//const posts = []; // Store posts in memory. In a production environment, you would use a database.

//apiRouter.post('/addPost', (req, res) => {
  //const newPost = req.body; // Assuming your frontend sends the post data in the request body

  // Add the new post to the array
  //posts.unshift(newPost); // Add to the beginning of the array to show the latest post first

  // Send a response indicating success
  //res.status(200).json({ message: 'Post added successfully', posts });
//});