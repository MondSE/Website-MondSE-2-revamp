import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="fixed w-full py-3 lg:py-6 z-[9999] bg-amber-50 dark:bg-[#0a0a0a]">
        <div
          className="nav flex justify-between items-center max-w-screen-xl mx-6 xl:mx-auto"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            visibility: "inherit",
            transform: "translate(0px, 0px)",
          }}
        >
          <Link href="/" className="text-lg font-bold md:text-2xl">
            almondtua.
          </Link>
          <div className="lg:flex lg:visible gap-10">
            <Link
              href="/#home"
              className="relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Top
            </Link>
            <Link
              href="/#projects"
              className="relative w-fit whitespace-nowrap uppercase font-normal text-lg"
            >
              Project
            </Link>
            <Link
              href="/#about"
              className="relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              About Me
            </Link>
            <Link
              href="/#contact"
              className="relative w-fit overflow-hidden whitespace-nowrap uppercase font-normal text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
