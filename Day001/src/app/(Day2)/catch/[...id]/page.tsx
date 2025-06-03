import React from "react";

const page = ({ params }: { params: { id: string[] } }) => {
  const { id } = params;
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-400 font-bold text-2xl">
      <h1>Radha Rani </h1>
      <h1 className="flex flex-col gap-2">
        {id.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </h1>
    </div>
  );
};

export default page;
