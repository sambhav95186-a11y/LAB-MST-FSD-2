import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const count = text.length;
  const exceeded = count > 100;

  const handlePost = () => {
    alert("Post submitted successfully!");
    setText("");
  };

  return (
    <div className="box">
      <h2>Create Post</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post..."
      />

      <p className={exceeded ? "error" : ""}>
        {count} / 100
      </p>

      {exceeded && (
        <p className="error">Limit exceeded</p>
      )}

      <button
        disabled={text.trim() === "" || exceeded}
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
}

export default App;