const BlogList = (props) => {
  return (
    <div className="block-list">
      <h2>{props.title}</h2>
      {props.blogs.length <= 0 && <h1>Book list is empty</h1>}
      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>

          <p>
            Written by: <strong>{blog.author}</strong>
          </p>

          <button type="button" onClick={() => props.onDelete(blog.id)}>
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
