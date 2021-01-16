import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  // declare and initialize state
  const [blogs, setBlogs] = useState(null);

  // add loading effect
  const [loading, setLoading] = useState(true);

  // store error and show to the user
  const [error, setError] = useState(null);

  useEffect(() => {
    // Show loading message for 1 sec
    setTimeout(() => {
      fetch("http://localhost:9000/blogs")
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("Resource doesn't exists");
        })
        .then((data) => {
          setBlogs(data);
          // hide the loading message once data is loaded
          setLoading(false);
          setError(null);
        })
        // catch the error
        .catch((err) => {
          setError(err.message);
          // Change the status of loading
          setLoading(false);
        });
    }, 1000);
  }, []);

  // handle delete arrow function
  const handleDelete = (id) => {
    const new_blog = blogs.filter((blog) => blog.id !== id);
    setBlogs(new_blog);
  };

  return (
    <div className="home">
      {/* Show resource error to the user if there is any */}
      {error && <strong>{error}</strong>}
      {/* Show Loading message until data is ready */}
      {loading && <strong>Loading....</strong>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
