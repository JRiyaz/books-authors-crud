import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  // Destructure the data
  const { data: blogs, loading, error } = useFetch(
    "http://localhost:9000/blogs"
  );

  return (
    <div className="home">
      {/* Show resource error to the user if there is any */}
      {error && <strong>{error}</strong>}
      {/* Show Loading message until data is ready */}
      {loading && <strong>Loading....</strong>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
