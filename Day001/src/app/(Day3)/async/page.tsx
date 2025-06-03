// import React from "react";

// const page = () => {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   //   setTimeout(() => {
//   //     console.log(5);
//   //   }, 20000);
//   console.log(6);
//   console.log(7);
//   console.log(8);
//   console.log(9);
//   return <div>page</div>;
// };

// export default page;

// concept 1

// 1. javascript have compiler or interpreter

// 1. what is interpreter ?
// interpreter is a program that converts the code into machine code line by line

// 2. what is compiler ?
// compiler is a program that converts the code into machine code all at once'

// 3. What is jit (just in time) ?
// javascript will have both interpreter and compiler
// jit make javascript so fast

// 4. javascript is number one language

// concept 2
// 1. asynchronization : there are so many functions which takes time so async ignores them and continue the next line
// 2. synchronization :  if there is a function then and it is taking time then it will wait for that function to complete

import { colleges } from "@/app/db/Data";
import React from "react";

const AsyncFunction = async () => {
  const collegeData = await colleges;
  return (
    <div>
      {collegeData.map((college) => (
        <div key={college.id}>
          <img src={college.image} alt="" />
          <h1>{college.name}</h1>
          <p>{college.location}</p>
        </div>
      ))}
    </div>
  );
};

export default AsyncFunction;

// concept 3
// 1. if you want to make a function async then you have to use "async" keyword
// 2. await is used to wait for a function to complete
