import React, {} from "react";
import Video from "./Video";
import "./App.css";

function App() {

    const videos = [
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          channel: "channel",
          song: "song",
          likes: "0",
          messages: "messages",
          description: "description",
          shares: "0"
        },
        {
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            channel: "channel",
            song: "song",
            likes: "0",
            messages: "messages",
            description: "description",
            shares: "0"
        },
        {
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            channel: "channel",
            song: "song",
            likes: "0",
            messages: "messages",
            description: "description",
            shares: "0"
        },
        {
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            channel: "channel",
            song: "song",
            likes: "0",
            messages: "messages",
            description: "description",
            shares: "0"
        }
      ];

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;