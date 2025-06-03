import React from "react";

const About = () => {
  const name: string = "Jai prakash";
  return (
    <div className="h-screen flex items-center justify-center text-white font-bold bg-gradient-to-r from-blue-500 to-violet-500">
      Welcome to About page
      <p>{`Name : ${name}`}</p>
    </div>
  );
};

export default About;
