"use client";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [input, setInput] = useState("");

  return (
    <div className="h-screen w-1/5 bg-yellow-900 absolute font-bold text-2xl text-white text-center">
      <h1>SideBar</h1>
      <div className="flex flex-col gap-2 items-center ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 w-[90%] rounded-lg bg-amber-300"
        />
        <div className="flex gap-2 mt-10">
          <Link
            href="/user/loginPage"
            className="p-2 rounded-lg bg-amber-300 text-black"
          >
            Login
          </Link>
          <Link
            href="/user/adminPage"
            className="p-2 rounded-lg bg-amber-300 text-black"
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
