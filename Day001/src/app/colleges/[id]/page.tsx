import { colleges } from "@/app/db/Data";
import React from "react";
const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const college = colleges.find((college) => college.id === Number(id));
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-amber-400">
      <img src={college?.image} alt="" className="w-1/2 h-1/2" />
      <h1 className="text-2xl font-bold">Name : {college?.name}</h1>
      <p className="text-xl font-bold">Location : {college?.location}</p>
      <p className="text-xl font-bold">Description : {college?.description}</p>
    </div>
  );
};

export default page;

// import React from "react";

// const page = () => {
//   return <div>Radha Rani</div>;
// };

// export default page;
