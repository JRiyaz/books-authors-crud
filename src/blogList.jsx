const BlogList = (props) => {
  const len = props.blogs.length;
  return (
    <div className="block-list">
      {/* Show a message `Book List is Empty' when list is empty */}
      {len <= 0 && <h1>Book List is Empty</h1>}

      {/* Show a h2 when list is not empty */}
      {len > 0 && <h2>{props.title}</h2>}

      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>

          <br />
          <p>{blog.body}</p>

          <br />
          <p>
            Written by: <strong>{blog.author}</strong>
          </p>

          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
