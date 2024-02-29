"use client"
import {  signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
const EmployeeLogin = () => {
  const router = useRouter();
  const [show, setShow] = useState(false)
  const handleEmployeeLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   const response = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    })
  }

  return (
    <div className="bg-[url('https://i.ibb.co/dcdPV7s/blue-curve-background-53876-113112.jpg')] bg-cover min-h-screen flex flex-col justify-center items-center border-black">
      <form className="space-y-4 my-10 w-4/5 md:w-1/2 p-10 glass rounded-lg" onSubmit={handleEmployeeLogin}>
        <h1 className="text-4xl font-bold text-center">Employee Login</h1>
        <div className="form-control w-full">
          <label className="text-md font-semibold">Email</label>
          <input
            type="Email"
            placeholder="Enter your email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>

        <div className="form-control w-full relative">
          <label className="text-md font-semibold">Password</label>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            className="input input-bordered"
            required
            name="password"
          />
          <span
            className="absolute top-10 right-3"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEyeSlash className="cursor-pointer"></FaEyeSlash> : <FaEye className="cursor-pointer"></FaEye>}
          </span>
        </div>

        <div className="flex  justify-center">
          <button
            type="submit"
            className="font-bold btn bg-emerald-400 hover:bg-emerald-500 hover:text-white w-full"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeLogin;