import Link from "next/link";
import React from "react";
import ReactTyped from "react-typed";

const Hero = () => {
  return (
    <div className="w-full lg:h-screen h-96 hero items-center flex md:px-20 lg:justify-start justify-center ">
      <div className="flex flex-col md:px-10">
        <h2 className="lg:text-[50px]">Hello, Welcome to</h2>
        <h1 className="lg:text-[80px] text-[35px] font-bold">
          LAC Global Limited
        </h1>

        <h3 className="lg:text-4xl text-white">
          <ReactTyped
            strings={["Innovative", "Creative", "High Quality", "Dedication"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </h3>
        <div className="mt-10 text-lg font-semibold">
          <Link href="/about">
            <div className="w-32 flex items-center justify-center px-2 py-1 h-12 border border-green-700 rounded-lg hover:bg-[#228b22] hover:border-none transition duration-200">
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
