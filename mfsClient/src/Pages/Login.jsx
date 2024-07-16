import { Typewriter } from 'react-simple-typewriter';
import "../styles/signup.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const Login = () => {
    const [type, setType] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const userInfo = {
      phone: form.phone.value,
      password: form.password.value
    };
    console.log(userInfo);
  };
  return (
    <div className="text-center container mx-auto h-screen flex flex-col items-center justify-center">
      <div className="signup-box p-4 lg:p-8 w-[80%]">
        <>
          <h2 className="font-bold text-4xl text-white">E-Taka</h2>
          <div className="text-white my-4">
            <Typewriter
              words={["Welcome Back, Please login"]}
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
          <form onSubmit={handleLogin} className="">
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

            <div className='relative'>
              <br />
              <input
                type={type ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full p-1 rounded-lg"
              />
              <FaEye
                className="text-black absolute top-8 right-5 text-lg"
                onClick={() => setType(!type)}></FaEye>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="signup-btn w-full"
            />
          </form>
        </>
        <>
          <Link to={"/signup"} className="text-white inline-block mt-3 text-sm">
            Don't have account ? <span>Login</span>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Login;