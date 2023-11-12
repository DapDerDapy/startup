async function loadPosts() {
  try {
    const response = await fetch('/api/posts');
    posts = await response.json();
    console.log('Posts loaded from the server:', posts);
    localStorage.setItem('posts', JSON.stringify(posts));
  } catch (error) {
    console.error('Error loading posts from the server:', error);

    const postsText = localStorage.getItem('posts');
    if (postsText) {
      posts = JSON.parse(postsText);
      console.log('Posts loaded from local storage:', posts);
    }
  }

  displayPosts(posts);
}

// Assuming posts are stored in an array called 'posts'
//let posts = [];


function addPost(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  const eventTime = document.getElementById('eventTime').value;
  const eventName = document.getElementById('eventName').value;
  const eventDescription = document.getElementById('eventDescription').value;

  // Check if any field is empty before proceeding
  if (!eventTime || !eventName || !eventDescription) {
    alert('Please fill out all fields before adding a post.');
    return;
  }

  const newPost = {
    eventTime,
    eventName,
    eventDescription,
    // Add other properties as needed
  };

  // Add the new post to the array
  posts.unshift(newPost);
  console.log('Posts after adding:', posts); // Log the posts array
  // Call a function to update the HTML and display the posts
  displayPosts();
}

  function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear existing posts

    // Update the DOM with the posts
    for (const post of posts) {
      const container = document.createElement('div');
      container.className = 'container';

      const section = document.createElement('section');
      const eventInfo = document.createElement('div');
      eventInfo.className = 'event-info';

      const h1 = document.createElement('h1');
      h1.innerHTML = `<span>${post.eventTime}</span> - ${post.eventName}`;

      const p = document.createElement('p');
      p.textContent = post.eventDescription;

      eventInfo.appendChild(h1);
      eventInfo.appendChild(p);
      section.appendChild(eventInfo);
      container.appendChild(section);

      postsContainer.appendChild(container);
    }
  }

loadPosts();