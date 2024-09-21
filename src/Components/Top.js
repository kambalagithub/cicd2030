import React, { useEffect, useState } from "react";

const Top = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("Count is", count);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);
  return (
    <div>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Top;
