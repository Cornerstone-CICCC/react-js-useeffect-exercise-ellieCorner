import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("red");

  const handleSendMessage = () => {
    setMessage("Hello from React");
  };

  const handleUpdateLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleChangeColor = () => {
    setColor((prev) => {
      if (prev === "red") return "blue";
      return "red";
    });
  };

  useEffect(() => {
    console.log(`Message is changed into ${message}`);
  }, [message]);

  useEffect(() => {
    console.log(`Likes updated to ${likes}!`);
  }, [likes]);

  useEffect(() => {
    console.log(`Color is changed into ${color}`);
  }, [color]);

  return (
    <div>
      <h2>Message Logger</h2>
      <button onClick={handleSendMessage}>Send Message</button>
      <p>{message}</p>

      <h2>Like Counter</h2>
      <button onClick={handleUpdateLike}>Like</button>
      <p>{likes}</p>

      <h2>Color Box</h2>
      <button onClick={handleChangeColor}>Change Color</button>
      <div style={{ width: 100, height: 100, color }}>Color Box</div>
    </div>
  );
}

export default App;
