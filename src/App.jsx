import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://rapidapi.com/search/Tools?sortBy=ByRelevance`
        );
        const videos = await response.json();
        console.log(videos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <h1>YouTube</h1>
    </>
  );
}

export default App;
