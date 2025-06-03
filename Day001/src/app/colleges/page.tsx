import React from "react";
import { colleges } from "@/app/db/Data";
import Link from "next/link";
const page = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-amber-400 p-4">
      {colleges.map((college) => (
        <Link
          href={`/colleges/${college.id}`}
          key={college.id}
          className="bg-gray-200 p-4 rounded-lg font-bold text-xl"
        >
          <img src={college.image} alt="" />
          <h1>Name : {college.name}</h1>
          <p>Location : {college.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default page;
