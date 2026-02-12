import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="enter the title of todo.."
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="enter the description of todo.."
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button
        style={{ margin: 10, padding: 10 }}
        onClick={() => {
          fetch("http://localhost:3033/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title,
              description
            })
          })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
