import "./App.css";
import { useState } from "react";

function App() {
  const [likeBtn, setLikeBtn] = useState(false);

  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };

  return (
    <>
      <button onClick={handleLike}>{likeBtn ? "Unlike" : "Like"}</button>
    </>
  );
}

export default App;
