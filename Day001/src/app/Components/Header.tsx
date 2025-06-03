// import React from "react";
// import Link from "next/link";
// const Header = () => {
//   return (
//     <div className="flex justify-around p-4 bg-gray-900 text-white font-bold">
//       <div className="logo">Logo</div>
//       <div className="flex gap-5">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/colleges">Colleges</Link>
//         <Link href="/contact">Contact</Link>
//         <Link href="/project">Project</Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

// concept 1.
// we have to user link as much as possible

// concept 2 (use router)
// we have to use
"use client";
import React from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about");
    alert("Do you want to visit on about Page ");
    console.log("About Page");
  };
  return (
    <div className="flex justify-around p-4 bg-gray-900 text-white font-bold">
      <div className="logo">Logo</div>
      <div className="flex gap-5">
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={handleClick}>About</div>
        <div onClick={() => router.push("/colleges")}>Colleges</div>
        <div onClick={() => router.push("/contact")}>Contact</div>
        <div onClick={() => router.push("/project")}>Project</div>
      </div>
    </div>
  );
};

export default Header;

// concept 3 "  e" is a react hook and you have to use "use client"
