import React from "react";
import star from "../assets/star.jpg";
import VideoAvatar from "./video";
import capsule from "../assets/capsule.jpg"
import banner from "../assets/meeting.jpeg"


const TaxtBanner: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto">
      {/* digital, star part */}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center font-semibold">
          <h1>DIGITAL-----------</h1>
          <div className="divide-x-2"></div>
        </div>
        <div>
          <img src={star} alt="star" />
        </div>
      </div>
      {/* mark, video part */}
      <div className="flex justify-end items-center  gap-4">
        <div className="w-3/4 h-24 text-center font-bold text-9xl">
          <h1>MARK</h1>
        </div>
        <div className="w-1/4 mr-9 flex justify-center items-center gap-1">
          {/* Use a direct link to a video file instead of YouTube URL */}
          <VideoAvatar src="https://www.example.com/path_to_your_video.mp4" />
          <div className="font-semibold">
            <h1>WATCH</h1>
            <h1>VIDEO INTRO</h1>
          </div>
        </div>
      </div>
      {/* text part */}
      <div className="relative z-10 flex text-center justify-start items-center gap-2 mt-5">
        <div className="text-left font-medium mt-5">
         
            <h1> Static and dynamic code review </h1>
           <h1>can be provide a day before you
           product</h1> 
           <h1>is even released.We can integrated with dev environment</h1>
          
        </div>
        <div className="relative z-20 w-3/4 h-24 text-center font-bold text-9xl">
          <h1>ETING</h1>
        </div>
      </div>
      {/* banner part */}
      <div className="absolute -m-5  flex justify-center items-center w-full"> 
        <div className="w-1/4">
           <img src={capsule} alt="img" />
        </div>
        <div className="w-3/4">
           <img className="w-[840px] h-64" src={banner} alt="banner" />
        </div>
      </div>
     
    </div>
  );
};

export default TaxtBanner;
