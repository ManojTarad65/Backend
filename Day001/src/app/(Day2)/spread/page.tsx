import React from "react";

const page = () => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  const newArray = [...numberArray];
  console.log(newArray);
  return (
    <div>
      {newArray.map((number) => {
        return <p>{number}</p>;
      })}
    </div>
  );
};

export default page;
