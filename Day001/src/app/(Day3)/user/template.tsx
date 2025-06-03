import React from "react";
import SideBar from "../../Components/SideBar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default layout;
// concept 4.
// 1. children : content of page.tsx is children for layout
// 2. ReactNode : it is react lib which is used for importing all types
// 3. layout can be used in any router

// 4. you have to make any one file either layout.tsx or template.tsx
