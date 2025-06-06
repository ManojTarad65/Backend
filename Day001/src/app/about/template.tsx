import React from "react";
import SideBar from "../Components/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar/>
      {children}
    </div>
  );
};

export default layout;
