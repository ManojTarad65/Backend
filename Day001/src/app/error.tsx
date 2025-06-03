"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-400 font-bold text-2xl">
      <div className="flex flex-col gap-2 justify-center items-center bg-red-500 p-4 rounded-lg h-1/3 w-1/3">
        <h1>Radhe Radhe</h1>
        <h1>Error Has Occurred</h1>
        <Link href="/" className="p-2 rounded-lg bg-amber-300 text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


// concept 1
// 1. error.tsx is used for error handling,
// 2. error.tsx will work only if there any error inside pages



