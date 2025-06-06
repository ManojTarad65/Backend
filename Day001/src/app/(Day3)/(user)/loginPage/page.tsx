"use client";
import React from "react";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-violet-500 font-bold text-2xl">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-2xl font-bold text-center">Login Page</h1>
        <form action="" className="flex flex-col gap-2 p-2 border border-black rounded-lg">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" className="border border-black p-2 rounded-lg" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" className="border border-black p-2 rounded-lg" />
          <button type="submit" className="p-2 rounded-lg bg-black text-white cursor-pointer">Login</button>
        </form>
        <button className="p-2 rounded-lg text-white cursor-pointer"> Don&apos;t have an account? <Link href="/signup" className="text-red-500 font-bold">Signup</Link></button>
      </div>
    </div>
  );
};

export default LoginPage;
