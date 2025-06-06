"use client";
import React from "react";
import Link from "next/link";
const AdminPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-violet-500 font-bold text-2xl">
      <div className="flex flex-col gap-2 p-2 ">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form action="" className="flex flex-col gap-5 border-2 p-2 border-black rounded-lg">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name" className="border border-black p-2 rounded-lg" />
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter username" className="border border-black p-2 rounded-lg" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter password" className="border border-black p-2 rounded-lg" />
          <button type="submit" className="p-2 rounded-lg bg-black text-white cursor-pointer">Signup</button>
        </form>
        <button className="p-2 rounded-lg text-white cursor-pointer"> Already have an account? <Link href="/loginPage" className="text-red-500 font-bold">Login</Link></button>
      </div>
    </div>
  );
};

export default AdminPage;
