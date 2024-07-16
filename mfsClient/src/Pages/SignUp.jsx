import { Link } from "react-router-dom";
import "../styles/signup.css";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import axiosPublic from "../Hooks/axiosPublic";
import axios from "axios";

const SignUp = () => {
  const [type, setType]= useState(true)
 const publicAxios = axiosPublic()
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userInfo = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      password: form.password.value,
      role: form.role.value
    }
    console.log(userInfo)
    publicAxios.post("/register", {name: "akash"})
    .then(res =>{
      console.log(res.data)
    })
  };
  return (
    <div className="text-center container mx-auto h-screen flex flex-col items-center justify-center">
      <div className="signup-box p-4 lg:p-8 w-[80%]">
        <>
          <h2 className="font-bold text-4xl text-white">E-Taka</h2>
          <div className="text-white my-4">
            <Typewriter
              words={["Please Sign up to join Elite"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </>
        <>
          <form onSubmit={handleSignUp} className="">
            <div>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="User Name"
                className="w-full p-1 rounded-lg"
              />
            </div>
            <div>
              <br />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="w-full p-1 rounded-lg"
              />
            </div>
            <div>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-1 rounded-lg"
              />
            </div>
            <div className="relative">
              <br />
              <input
                type={type? "password": "text"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full p-1 rounded-lg"
              />
              <FaEye className="text-black absolute top-8 right-5 text-lg" onClick={()=>setType(!type)}></FaEye>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <p className="text-white">Join as </p>
              <select name="role" id="">
                <option value="user">User</option>
                <option value="agent">Agent</option>
              </select>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="signup-btn w-full"
            />
          </form>
        </>
        <>
          <Link to={"/"} className="inline-block text-white mt-3 text-sm">Already have an account ? Login</Link>
        </>
      </div>
    </div>
  );
};

export default SignUp;
