import { Link } from "react-router-dom";
function navbar() {
  return (
    <nav className="navbar">
      <h1>Books & Authors</h1>
      <div className="links">
        {/* Replace anchor (a) tag with Link tag from react-router-dom. It is because the anchor tage actually
        send request to server even if we are using router in the application. To make the request in side the 
        React app without sending the data to the server we must use Link tag */}
        <Link to="/">Home</Link>
        <Link
          to="/create"
          //   style={{
          //     color: "white",
          //     backgroundColor: "#f1356d",
          //     borderRadius: "8px",
          //   }}
        >
          New Book
        </Link>
      </div>
    </nav>
  );
}

export default navbar;
