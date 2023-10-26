function createFakeFriendRequests() {
  const pendingRequestsContainer = document.querySelector('#pendingRequestsForm .container');
  const fakeRequests = [
    'AliceSlays',
    'Billybobjoe',
    'Charlie_Sheen',
    'David_sus',
    'stinky',
  ];

  if (fakeRequests.length > 0) {
    fakeRequests.forEach((request) => {
      const listItem = document.createElement('li');
      listItem.textContent = request;

      const actionsContainer = document.createElement('div');
      actionsContainer.classList.add('actions-container');

      const acceptButton = document.createElement('button');
      acceptButton.classList.add('accept-button');
      acceptButton.textContent = '✓'; // Accept button
      acceptButton.addEventListener('click', () => handleAccept(request, listItem));

      const rejectButton = document.createElement('button');
      rejectButton.classList.add('reject-button');
      rejectButton.textContent = '✗'; // X button
      rejectButton.addEventListener('click', () => handleReject(listItem));

      actionsContainer.appendChild(acceptButton);
      actionsContainer.appendChild(rejectButton);

      listItem.appendChild(actionsContainer);

      pendingRequestsContainer.appendChild(listItem);
    });
  }
}

function handleAccept(request, listItem) {
  // Handle the acceptance of a friend request
  // Add the friend to your friends list here

  const friendsList = document.querySelector('#friendsList .friends-list');
  const friendItem = document.createElement('li');
  const friendBox = document.createElement('div');
  friendBox.classList.add('friend-box');
  friendBox.textContent = request;

  friendItem.appendChild(friendBox);
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    // Handle removing the friend
    friendItem.remove();
  });
  friendItem.appendChild(removeButton);

  friendsList.appendChild(friendItem);

  // Remove the request item
  listItem.remove();
}

function handleReject(listItem) {
  // Handle the rejection of a friend request
  // Remove the request item
  listItem.remove();
}

// Call the function to create fake friend requests when the page loads
window.addEventListener('load', createFakeFriendRequests);

