import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/image"); 

    socket.onmessage = (event) => {
      setUrl("data:video/mp4;base64," + event.data); 
    };

    return () => {
      socket.close();
    };
  }, []);

  return <ReactPlayer url={url} playing width={960} height={540} />;
};

export default VideoPlayer;
