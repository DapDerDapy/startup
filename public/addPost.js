
/*
function showPendingApprovalMessage() {
  alert("Your post is pending approval!");
}
*/


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

async function addPost(event) {
  event.preventDefault();

  const eventTime = document.getElementById('eventTime').value;
  const eventName = document.getElementById('eventName').value;
  const eventDescription = document.getElementById('eventDescription').value;

  if (!eventTime || !eventName || !eventDescription) {
    alert('Please fill out all fields before adding a post.');
    return;
  }
  
  const newPost = {
    eventTime,
    eventName,
    eventDescription,
  };


  wss.clients.forEach(function each(client) {
  if (client.readyState === WebSocket.OPEN) {
    client.send('new post');
  }
  });
  
  posts.unshift(newPost)
  displayPosts()

  try{
    const response = await fetch('api/post',{
      method:'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newPost)
    });
    const posts = await response.json();
    localStorage.setItem('posts', JSON.stringify(posts));
  } catch {
    this.updatePostsLocal(newPost);
  }
};

async function updatePostsLocal(newPost){
    let posts = [];
    const postsText = localStorage.getItem('posts');
    if (postsText) {
      posts = JSON.parse(postsText);
    }

    posts.unshift(newPost);

    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts()
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