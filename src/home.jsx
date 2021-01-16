import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  // Declare and initialize state.
  const [blogs, setBlogs] = useState(null);

  // Add loading effect.
  const [loading, setLoading] = useState(true);

  // Store error and show to the user.
  const [error, setError] = useState(null);

  useEffect(() => {
    // Show loading message for 1 sec.
    setTimeout(() => {
      // Fetch data from the given resource.
      fetch("http://localhost:9000/blogs")
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("Resource doesn't exists");
        })
        .then((data) => {
          setBlogs(data);
          // Hide the loading message once data is loaded.
          setLoading(false);
          // Assign null to hide the error message.
          setError(null);
        })
        // catch the error
        .catch((err) => {
          // Assign the error message.
          setError(err.message);
          // Change the status of loading.
          setLoading(false);
        });
    }, 1000);
  }, []);

  // Handle delete arrow function.
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
