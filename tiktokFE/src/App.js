import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {/* <Video
          channel="@oussama"
          description="hello gues"
          song="lovely by bily eilish"
          messages="34"
          likes="432"
          shares="43"
          url="https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-pve-0068/6727c6d54a7f4836ba5857dd2ec154bb/?VExpiration=1618415828&VSignature=HA3x5ScZ8p2bHH8aCfaz8A&a=1233&br=1514&bt=757&cd=0%7C0%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20210414095516010189073152127CB3BF&lr=&mime_type=video_mp4&net=0&pl=0&qs=4&rc=anVuZGc7bDZ4MzMzNTgzM0ApZTg1NGY0OWQ8N2Q0NTtnO2diNW02MXBnLTZgLS1hLzZzcy8uYjNhXzMvMV9iLjAuNDI6Yw%3D%3D&vl=&vr="
        />
        <Video url="https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-pve-0068/6727c6d54a7f4836ba5857dd2ec154bb/?VExpiration=1618415828&VSignature=HA3x5ScZ8p2bHH8aCfaz8A&a=1233&br=1514&bt=757&cd=0%7C0%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20210414095516010189073152127CB3BF&lr=&mime_type=video_mp4&net=0&pl=0&qs=4&rc=anVuZGc7bDZ4MzMzNTgzM0ApZTg1NGY0OWQ8N2Q0NTtnO2diNW02MXBnLTZgLS1hLzZzcy8uYjNhXzMvMV9iLjAuNDI6Yw%3D%3D&vl=&vr=" /> */}

        {videos.map(
          ({ url, channel, description, song, messages, likes, shares }) => (
            <Video
              channel={channel}
              description={description}
              song={song}
              messages={messages}
              likes={likes}
              shares={shares}
              url={url}
            />
          )
        )}
      </div>

      {/* App container */}
      {/* videos */}
      {/* <video src=""></video> */}
      {/* <video src=""></video> */}
      {/* <video src=""></video> */}
      {/* <video src=""></video> */}
    </div>
  );
}

export default App;
