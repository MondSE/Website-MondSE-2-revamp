import React from "react";

const Footer = () => {
  return (
    <footer className=" grid grid-cols-1 gap-14 mx-6 max-w-screen-xl xl:mx-auto rounded-2xl pt-10 lg:mx-24">
      <div className=" flex flex-col lg:flex-row lg:justify-between gap-6">
        <section id="contact">
          <div className=" flex flex-col gap-4 justify-between">
            <h2 className=" uppercase italic text-5xl">let's work together</h2>
            <a
              href=""
              className=" btn-primary text-white btn mb-10 w-fit text-lg group"
            >
              Contact me
            </a>
          </div>
        </section>
        <div className=" flex flex-col gap-2">
          <h2 className=" uppercase italic text-2xl">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>social networks</font>
            </font>
          </h2>
          <a
            href="https://github.com/MondSE"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/almond-rae-tuazon-647a2726a"
            target="_blank"
            rel="noopener noreferrer"
            className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
          >
            linkedin
          </a>
        </div>
      </div>
      <div className="space-y-1">
        <h1>Almond Rae Tuazon</h1>
        <div className="flex justify-between pb-8">
          <p className="">Copyright 2025. All right</p>
          <p className="">Philippines, 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
