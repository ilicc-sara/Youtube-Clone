import { useState, useEffect } from "react";
import Article from "./Article";
import "./App.css";

function App() {
  const [videos, setVideos] = useState(null);

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
        console.log(result.items);

        setVideos(result.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, []);

  function formatDate(string) {
    const index = string.indexOf("T");

    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    const dateOfUploading = string.slice(0, index).split("-");

    if (year > dateOfUploading[0]) {
      return `${year - dateOfUploading[0]} years ago`;
    }
    if (
      year == dateOfUploading[0] &&
      Number(month) !== Number(dateOfUploading[1])
    ) {
      return `${month - dateOfUploading[1]} months ago`;
    }
    if (month == dateOfUploading[1]) {
      return `${day - dateOfUploading[2]} days ago`;
    }
  }

  return (
    <>
      <h1 href="#">YouTube</h1>

      <main className="video-container">
        {videos &&
          videos.map((video, index) => (
            <Article
              key={index}
              thumbnail={video.snippet.thumbnails.default.url}
              title={video.snippet.title}
              chanel={video.snippet.channelTitle}
              time={formatDate(video.snippet.publishedAt)}
            />
          ))}
      </main>
    </>
  );
}

export default App;
