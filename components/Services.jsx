import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Services = ({ services }) => {
  return (
    <div className=" py-10 px-10">
      <div className="flex items-center justify-between lg:px-14">
        <h1 className="text-6xl text-[#228b22] px-4 font-bold">Services</h1>
        <div className="flex items-center justify-center">
          <Link href="/services">
            <div className="w-36 text-lg flex items-center justify-around px-1 py-1 h-14  text-white underline rounded-xl bg-[#228b22] hover:bg-black hover:transition-all hover:duration-150 transition duration-200">
              See All
              <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>

      <div className="my-12 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8">
        {services.map((service) => {
          return (
            <div
              key={service.title}
              className="lg:w-3/12  w-full p-4 shadow-lg shadow-black rounded-lg"
            >
              <div className="flex items-center justify-center">
                <h1 className="text-4xl text-[#228b22] p-5 font-bold items-center align-middle">
                  {service.title}
                </h1>
              </div>
              <div>{service.preview}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
