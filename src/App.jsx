import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=6er14t0WA38`
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

      <article className="video-article">
        <img className="thumbnail" src="./hqdefault.jpg" />
        <p className="title">Title of the Video</p>
        <p className="chanel">Chanel that uploaded this video</p>
        <p className="time-uploaded">3 yesrs ago</p>
      </article>
    </>
  );
}

export default App;
