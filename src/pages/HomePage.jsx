import React from "react";
import { useState } from "react";
import Navigator from "../components/Navigator";

const HomePage = () => {
  const [onhovervalue, setonhovervalue] = useState(false);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-6 h-screen w-full bg-bg_color">
        <div className="grid col-span-1 row-start-3 row-span-2 place-content-center">
          <Navigator />
        </div>

        <div className="grid col-span-3 row-start-2 col-start-3 justify-items-start">
          <h5 className="text-[#6f39ec] font-bold text-[3rem]">
            Your Search For A
          </h5>
        </div>
        <div className="scroller grid col-span-6 row-start-2 col-start-3 justify-content-start align-items-center">
          <span className="text-white font-bold text-[3rem]">
            Comic Enthusiast
            <br />
            <br />
            Web & App Developer
            <br />
            <br />
            UI/UX Designer
            <br />
            <br />
            Avid Movie Viewer
            <br />
            <br />
            Good Listener
          </span>
        </div>

        <div className="align-items-end grid col-span-3 row-start-2 col-start-3 justify-items-start">
          <h5 className="text-[#6f39ec] font-bold text-[3rem]">Ends Here</h5>
        </div>

        <div className="ml-24 grid col-span-6 row-start-1 col-start-6">
          <img
            className="z-[-10px] h-full w-full"
            src="Image.png"
            alt="Hero Image"
          />
        </div>

        <div className="grid col-span-1 row-start-2 col-start-11 place-content-evenly">
          <button
            onClick={onClickUrl("https://www.linkedin.com/in/harshilvadgama/")}
            onMouseEnter={() => setonhovervalue(!onhovervalue)}
            onMouseLeave={() => setonhovervalue(!onhovervalue)}
          >
            <svg
              className={`z-[-10px] h-[4.5rem] w-[4.5rem] ${onhovervalue ? 'fill-accent_color' : 'fill-none' }`}
              width="68"
              height="67"
              viewBox="0 0 68 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Linkedin Profile Link"
            >
              <rect
                
                x="1.9624"
                y="0.996826"
                width="65"
                height="65"
                rx="32.5"
                stroke="white"
                stroke-width="2"
              />
              <path
                
                d="M34.5922 28.4374C36.5336 26.4543 39.0612 25.1561 42.0014 25.1561C48.4316 25.1561 53.6446 30.3688 53.6446 36.7992V52.6763H49.4107V36.7992C49.4107 32.7072 46.0935 29.39 42.0014 29.39C37.9094 29.39 34.5922 32.7072 34.5922 36.7992V52.6763H30.3583V26.2146H34.5922V28.4374ZM19.7736 21.9807C18.0198 21.9807 16.5981 20.559 16.5981 18.8053C16.5981 17.0515 18.0198 15.6299 19.7736 15.6299C21.5273 15.6299 22.949 17.0515 22.949 18.8053C22.949 20.559 21.5273 21.9807 19.7736 21.9807ZM17.6566 26.2146H21.8905V52.6763H17.6566V26.2146Z"
                fill="white"
              />
            </svg>
            {/* <img
              className="z-[-10px] h-[4.5rem] w-[4.5rem]"
              src="Linkedin.svg"
              alt="Linkedin Profile Link"
            /> */}
          </button>
          <button onClick={onClickUrl("https://github.com/HarshilVadgama31")}>
            <svg
              className="z-[-10px] h-[4.5rem] w-[4.5rem] hover:stroke-accent_color hover:fill-accent_color"
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Github Profile Link"
            >
              <rect
                x="1.9624"
                y="0.996826"
                width="62"
                height="62"
                rx="31"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M32.9651 5.33015C18.2317 5.33015 6.29834 17.2635 6.29834 31.9968C6.29834 43.7968 13.9317 53.7635 24.5317 57.2968C25.865 57.5302 26.365 56.7302 26.365 56.0302C26.365 55.3968 26.3317 53.2968 26.3317 51.0635C19.6317 52.2968 17.8983 49.4302 17.365 47.9302C17.065 47.1635 15.765 44.7968 14.6317 44.1635C13.6983 43.6635 12.365 42.4302 14.5983 42.3968C16.6983 42.3635 18.1983 44.3302 18.6983 45.1302C21.0983 49.1635 24.9317 48.0302 26.465 47.3302C26.6983 45.5968 27.3983 44.4302 28.1651 43.7635C22.2317 43.0968 16.0317 40.7968 16.0317 30.5968C16.0317 27.6968 17.065 25.2968 18.765 23.4302C18.4983 22.7635 17.565 20.0302 19.0317 16.3635C19.0317 16.3635 21.265 15.6635 26.365 19.0968C28.4984 18.4968 30.7651 18.1968 33.0317 18.1968C35.2984 18.1968 37.5651 18.4968 39.6984 19.0968C44.7984 15.6302 47.0317 16.3635 47.0317 16.3635C48.4984 20.0302 47.5651 22.7635 47.2984 23.4302C48.9984 25.2968 50.0317 27.6635 50.0317 30.5968C50.0317 40.8302 43.7984 43.0968 37.8651 43.7635C38.8317 44.5968 39.6651 46.1968 39.6651 48.6968C39.6651 52.2635 39.6317 55.1302 39.6317 56.0302C39.6317 56.7302 40.1317 57.5635 41.4651 57.2968C52.3197 53.6323 59.6288 43.4536 59.6317 31.9968C59.6317 17.2635 47.6984 5.33015 32.9651 5.33015Z"
                fill="white"
              />
            </svg>
            {/* <img
              className="z-[-10px] h-[4.5rem] w-[4.5rem]"
              src="Github.svg"
              alt="Github Profile Link"
            /> */}
          </button>
        </div>

        <div className="grid col-span-5 row-start-4 col-start-4 place-content-center">
          <h3 className=" text-[#6f39ec] font-bold text-[3.7rem]">
            Full Stack Developer
          </h3>
        </div>

        <div className="grid col-start-2 row-start-3  col-span-10">
          {/* <div className="overflow-hidden h-[38rem]"> */}
          <h1 className=" text-white font-bold text-[29.5rem]">Harshil</h1>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
