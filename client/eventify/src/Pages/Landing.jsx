import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import { Vortex } from "../components/ui/vortex";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import "./Landing.css";

const words = `DISCOVER, ENGAGE EXPERIENCE`;
function Landing() {
  return (
    <>
      <Vortex
        backgroundColor="black"
        className="min-w-fit  vortex"
        rangeY={800}
        particleCount={100}
        baseRadius={4}
      >
        <Navbar />
        <div className="flex items-center flex-col mt-20">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-9 h-8 mx-2" />
            Eventify
          </div>
          <TextGenerateEffect words={words} />
          <p className="text-white text-sm md:text-lg max-w-xl mt-2 text-center text-focus-in">
            Discover events, manage them, and engage with your community, all on
            one dynamic platform for students and organizers nationwide.
          </p>

          <button
            type="button"
            className="text-[#cacaca] hover:text-white font-lg rounded-full text-lg px-10 py-3 me-2 mt-5 bg-gray-800 bg-opacity-30 hover:bg-opacity-60 hover:bg-gray-850 text-focus-in"
          >
            {" "}
            Create Event
          </button>
        </div>
      </Vortex>
    </>
  );
}

export default Landing;
