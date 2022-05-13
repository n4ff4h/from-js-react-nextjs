import { useState } from "react";

// Can also use object destructuring since props is an object
// eg: { title } instead of props in Header argument
function Header(props) {
  console.log(props.title);
  return <h1>{props.title ? props.title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  // Note: useState() returns an array in which we use it's items by using object destructuring
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  {
    /* Nesting the Header component */
  }
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />

      {/* Keys help React identify which items have changed, are added, or are removed. */}
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
