import axios from "axios";
import { useEffect, useState } from "react";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <p>Error loading page. Try again</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
