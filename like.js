function like(button) {
  const likeCountElement = button.nextElementSibling;
  let likeCount = parseInt(likeCountElement.textContent);
  const isLiked = button.classList.contains('liked');

  if (!isLiked) {
    likeCount++;
    likeCountElement.textContent = likeCount;
    button.classList.add('liked');
  } else {
    likeCount--;
    likeCountElement.textContent = likeCount;
    button.classList.remove('liked');
  }
}
