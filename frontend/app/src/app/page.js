async function getAllPosts() {
  const res = await fetch('http://backend:3000/posts');
  const posts = res.json();

  return posts
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="m-4">
      <h1 className="text-4xl mb-4 underline">Post List</h1>
      {posts.map((post) => (
        <p className="mb-1" key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
}
