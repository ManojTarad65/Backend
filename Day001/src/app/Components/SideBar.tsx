"use client";

import React from "react";

const SideBar = () => {

  return (
    <div className="h-screen w-1/5 bg-yellow-900 absolute font-bold text-2xl text-white text-center">
      <h1 className="mt-10">About Me </h1>
      <div className="h-25 w-25 bg-black rounded-full mx-auto mt-10">
      </div>
      <h1 className="mt-10">Manoj Tarad</h1>
      <p>Full Stack Developer</p>

      <div className="mt-10 flex flex-col gap-12">
      
        <ul className="flex flex-col gap-4 text-2xl font-bold">
          <li className="cursor-pointer hover:text-red-500 text-red-400">Home</li>
          <li className="cursor-pointer hover:text-red-500 text-red-400">About</li>
          <li className="cursor-pointer hover:text-red-500 text-red-400">Colleges</li>
          <li className="cursor-pointer hover:text-red-500 text-red-400">Contact</li>
          <li className="cursor-pointer hover:text-red-500 text-red-400">Project</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
