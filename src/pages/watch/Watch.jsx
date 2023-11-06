import React, { useRef } from 'react';
import './watch.scss';
import { ArrowBackOutlined, Forward5, Fullscreen } from '@mui/icons-material';

const Watch = () => {
  const videoRef = useRef(null);

  const handleSkipForward = () => {
    const video = videoRef.current;
    video.currentTime += 5;
  };

  const handleSkipBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 5;
  };

  const handleMouseEnter = () => {
    document.getElementById("skipButtons").style.opacity = "1";
  };

  const handleMouseLeave = () => {
    document.getElementById("skipButtons").style.opacity = "0";
  };


  return (
    <div className="watch" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="back">
        <ArrowBackOutlined />
        <span>Home</span>
      </div>
      <video
        className="video"
        autoPlay
        controls
        controlsList='nodownload'
        src="https://imdb-video.media-imdb.com/vi2163260441/1434659607842-pgv4ql-1556354704370.mp4?Expires=1699269120&Signature=odOCJKKo96-cmRjDlWILACpZCAUszUU2yRAd1C5PfLZu4HPjNkjs~-38cDRsy5IqqMCk4H1kJCv6z14QIB2yInnCat6K7UVnXYykBh55QelGd~osLLvn-0srBnzjWnpk8BCalj2Gzq0GEFRL8OIMTqKy0P46itRcFZ6KXfzhame8qikE6EffSYoDlqS4OBqJfzK5PP4BDOMsNfpXI6scBq2SuDG1Ia2X0x~akcQprSM5Xn7bHh8wEsBxPIGHAxUsB29O05VQZZ-WjrKBONPRu9gt~sUUT~WklbEyp4WnFlvlSVdsO5pVWtDaYy0VYf-74AE91IUxmlhiT~iKZ88Dng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
        ref={videoRef}
      ></video>

      <div id="skipButtons" className="skip-buttons">
        <button onClick={handleSkipBackward} className="skip-button left"><Forward5/></button>
        <button onClick={handleSkipForward} className="skip-button right"><Forward5/></button>
      </div>

      
    </div>
  );
};

export default Watch;
