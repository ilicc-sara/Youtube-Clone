import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const fetchPost = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98
  // `
  //         );
  //         // const videos = await response.json();
  //         console.log(response);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchPost();
  //   }, []);

  // const data = null;

  useEffect(() => {
    const url =
      "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "df4967c0b8msh2d8256548a51846p17389ajsn17ef79d2ed98",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    const fetchPost = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
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
