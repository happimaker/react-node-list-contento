export const fetchPosts = async function() {
  const response = await fetch('/api/posts');
  if (!response.ok) throw new Error({
    type: 'API Failure'
  });

  const posts = await response.json();
  return posts;
}

export const deletePost = async function(postId) {
  const response = await fetch(`/api/posts/${postId}`, { method: 'delete' });
  if (!response.ok) throw new Error({
    type: 'API Failure'
  });
}
