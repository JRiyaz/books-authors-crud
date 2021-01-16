import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  // declare and initialize state
  const [blogs, setBlogs] = useState(null);

  // add loading effect
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading message for 1 sec
    setTimeout(() => {
      fetch("http://localhost:9000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          // hide the loading message once data is loaded
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
      {/* Show Loading message until data is ready */}
      {loading && <strong>Loading....</strong>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
