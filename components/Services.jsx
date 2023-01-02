import React from "react";

const Services = ({ services }) => {
  return (
    <div className=" py-10 px-10">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl px-4 font-bold">Services</h1>
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
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio possimus accusantium expedita ad. Dolores, debitis
                quis voluptas nisi ad, vel non voluptatem quam, consequuntur
                facere alias cupiditate in vitae dolor!
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
