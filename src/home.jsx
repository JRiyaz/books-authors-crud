import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Riyaz");

  const handleClick = (params) => {
    console.log(params);
    setName("Riyaz J");
  };

  const handleClickString = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <div>{name}</div>
      <button onClick={() => handleClick(name)}>Click Me</button>
      <button onClick={handleClickString}>Click to Console</button>
    </div>
  );
};

export default Home;
