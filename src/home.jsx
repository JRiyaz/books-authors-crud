import React, { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  // declare and initialize state
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  // Just checking the useEffect
  const [name, setName] = useState("Riyaz");

  useEffect(() => {
    console.log("useEffect ran");
    console.log(name);

    // The name dependency make sure that the useEffect will run when the name changes
    // Other than that it will not run every time like before ( when we were not using the dependency)
    // Here dependency is `name`.
  }, [name]);

  // handle delete arrow function
  const handleDelete = (id) => {
    const new_blog = blogs.filter((blog) => blog.id !== id);
    setBlogs(new_blog);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" onDelete={handleDelete} />

      {/* checking the functionality of useEffect */}
      <h1>{name}</h1>
      <button type="button" onClick={() => setName("Riyaz J")}>
        Click to change name
      </button>
    </div>
  );
};

export default Home;
