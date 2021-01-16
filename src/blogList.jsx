export const BlogList = (props) => {
  return (
    <div className="block-list">
      <h2>{props.title}</h2>

      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>

          <p>
            Written by: <strong>{blog.author}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
