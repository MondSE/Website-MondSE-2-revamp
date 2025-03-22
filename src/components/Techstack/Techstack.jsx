import React from "react";

const techStacks = [
  {
    iconLogo: "bx bx-md bxl-html5",
    logoName: "HTML"
  },
  {
    iconLogo: "bx bx-md bxl-css3",
    logoName: "CSS"
  },
  {
    iconLogo: "bx bx-md bxl-tailwind-css",
    logoName: "Tailwind"
  },
  {
    iconLogo: "bx bx-md bxl-javascript",
    logoName: "JavaScript"
  },
  {
    iconLogo: "bx bx-md bxl-php",
    logoName: "PHP"
  },
  {
    iconLogo: "bx bx-md bx-data",
    logoName: "MySQL"
  },
  {
    iconLogo: "bx bx-md bxl-react",
    logoName: "React"
  },
  {
    iconLogo: "bx bx-md ",
    logoName: "Laravel"
  },
];


const Techstack = () => {
  return (
    <div className=" mt-20 mb-24 mx-6 max-w-screen-xl sm:px-10 lg:px-24 lg:mx-auto xl:mx-auto">
      <div className=" overflow-hidden whitespace-nowrap w-full">
        <div className=" flex animate-scroll space-x-5 text-text-200 items-center uppercase container mx-auto">
          <div className="space-x-2 flex items-center">
            <p className=" inline-block lg:text-2xl font-bold">
             TECH STACK
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-10 xl:mt-16 xl:gap-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {/* techstack data array forloop */}
        {techStacks.map((techStack, index) =>(
        <div key={index} className="w-full py-2 rounded-lg flex justify-center gap-2 items-center border-2 border-dashed border-red-500">
          <i className={techStack.iconLogo}></i>
          <p className=" text-sm sm:text-base text">{techStack.logoName}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
