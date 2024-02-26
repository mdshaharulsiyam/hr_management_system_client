"use client";
import { coreContext } from "@/provider/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
const useLoginPage = () => {
  const router = useRouter();
  const { logIn, googleLogIn } = useContext(coreContext);
  const [loading, setloading] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      logIn(email, password)
        .then((userCredential) => {
          setloading(false);
          const user = userCredential.user;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `logged in user succesfuly`,
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/");
        })
        .catch((error) => {
          setloading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
            footer: "unable to log in user",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const loginwithgoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        const userData = {
          profileImage: user.photoURL,
          username: user.displayName,
          useremail: user.email,
          role: "user",
          emailVerified: user.emailVerified,
        };
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        //   setloading(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire("opps!!", `${errorMessage}`, "error");
      });
    // setloading(false)
  };
  return (
    <>
      <div className="p-5 border  py-16 w-3/4 lg:w-1/2 mx-auto my-4  rounded-lg  shadow-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-3xl text-center uppercase py-3">sign in your employee account</h3>
        <form className="space-y-4" onSubmit={handleForm}>
          <div className="form-control w-full">
            <label className="text-md font-semibold">Email</label>
            <input
              type="Email"
              placeholder="Enter your nEmail"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control w-full">
            <label className="text-md font-semibold">password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              name="password"
            />
          </div>

          <div className="flex  justify-center">
            <button
              type="submit"
              className="font-bold btn  bg-emerald-400 px-20"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default useLoginPage;
