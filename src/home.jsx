import React, { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  // declare and initialize state
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  // handle delete arrow function
  const handleDelete = (id) => {
    const new_blog = blogs.filter((blog) => blog.id !== id);
    setBlogs(new_blog);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" onDelete={handleDelete} />
    </div>
  );
};

export default Home;
