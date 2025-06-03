import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-red-400 font-bold text-2xl">
      <div className="flex flex-col gap-2 justify-center items-center bg-amber-300 p-4 rounded-lg h-1/3 w-1/3">
        <h1>Radhe Radhe</h1>
        <h1>This Page does not exist</h1>
        <Link href="/" className="p-2 rounded-lg bg-amber-300 text-black">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

// concept 1.
// not-found.tsx only one file
// error.tsx will work only if there any error inside pages
