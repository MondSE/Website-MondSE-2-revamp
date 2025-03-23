import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="fixed w-full py-3 lg:py-6 z-[9999] bg-amber-50 dark:bg-[#0a0a0a]">
        <div
          className=" nav flex justify-between items-center max-w-screen-xl mx-6 xl:mx-auto"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            visibility: "inherit",
            transform: "translate(0px, 0px)",
          }}
        >
          <a href="/" className="text-lg font-bold md:text-2xl">
            almondtua.
          </a>
          <div className=" lg:flex lg:visible gap-10">
            <a
              href="#home"
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Top
            </a>
            <a
              href="#projects"
              className=" relative w-fit whitespace-nowrap uppercase font-normal text-lg"
            >
              Project
            </a>
            <a
              href="#about"
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              About Me
            </a>
            <a
              href="#contact"
              className=" relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
