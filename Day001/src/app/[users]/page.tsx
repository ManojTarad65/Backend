import React from "react";

const page = ({ params }: { params: { users: string } }) => {
  const { users } = params;
  return (
    <div className="h-screen flex items-center justify-center bg-amber-300 font-bold text-2xl">
      {users}
    </div>
  );
};

export default page;
