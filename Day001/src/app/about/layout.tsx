import React from "react";
import Button from "../Components/Button";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Button />
      {children}
    </div>
  );
};

export default layout;
