import { useState, useEffect } from "react";
import Article from "./Article";
import "./App.css";
import { formatDistance, subDays, formatDistanceToNow } from "date-fns";

function App() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const url =
      "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
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
        setVideos([]);
      }
    };

    fetchPost();
  }, []);

  // function formatDate(string) {
  //   const index = string.indexOf("T");

  //   let day = new Date().getDate();
  //   let month = new Date().getMonth() + 1;
  //   let year = new Date().getFullYear();

  //   const dateOfUploading = string.slice(0, index).split("-");
  //   let yearOfUploading = Number(dateOfUploading[0]);
  //   let monthOfUploading = Number(dateOfUploading[1]);
  //   let dayOfUploading = Number(dateOfUploading[2]);

  //   let yearDifference = year - yearOfUploading;
  //   let monthDifference = month - monthOfUploading;
  //   let daysDifference = day - dayOfUploading;

  //   if (year > yearOfUploading) {
  //     return yearDifference === 1
  //       ? `${yearDifference} year ago`
  //       : `${yearDifference} years ago`;
  //   }
  //   if (Number(year) === yearOfUploading && month !== monthOfUploading) {
  //     return monthDifference === 1
  //       ? `${monthDifference} month ago`
  //       : `${monthDifference} months ago`;
  //   }
  //   if (
  //     Number(year) === yearOfUploading &&
  //     Number(month) === monthOfUploading
  //   ) {
  //     if (daysDifference === 0) {
  //       return "Today";
  //     }
  //     if (daysDifference === 1) {
  //       return "1 day ago";
  //     }
  //     if (daysDifference < 7) {
  //       return `${daysDifference} days ago`;
  //     }
  //     if (daysDifference === 7 || (daysDifference > 7 && daysDifference < 14)) {
  //       return `1 week  ago`;
  //     }
  //     if (daysDifference > 14 && daysDifference < 21) {
  //       return `2 weeks ago`;
  //     }
  //     if (daysDifference > 21) {
  //       return "3 weeks ago";
  //     }
  //   }
  // }

  function formatDate(string) {
    const index = string.indexOf("T");

    const dateOfUploading = string.slice(0, index).split("-");

    const timeAgo = formatDistanceToNow(dateOfUploading, { addSuffix: true });

    return timeAgo.replace("about ", "");
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
