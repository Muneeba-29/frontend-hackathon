import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, form);


      //FOR LOGOUT
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user.id);
          
      alert("Login Successful");
      
      navigate("/layout");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
     <div
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-300 to-pink-600"
>
      <div className="bg-transparent p-8 rounded-lg shadow-2xl border border-pink-700 text-center w-[90%] max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full py-3 pl-6 pr-10 rounded-full border-2 border-pink-700 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              onChange={handleChange}
            />
            <i className="bx bxs-user absolute right-4 top-3.5 text-white text-xl"><TfiEmail/></i>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full py-3 pl-6 pr-10 rounded-full border-2 border-pink-700 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              onChange={handleChange}
            />
            <i className="bx bxs-lock-alt absolute right-4 top-3.5 text-white text-xl"><CiLock/></i>
          </div>

          <div className="flex justify-between text-white text-sm px-2">
            <p>Remember me</p>
            <p className="cursor-pointer hover:underline">Forgot password?</p>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-pink-700 border-2 border-pink-700 text-pink-100 font-bold text-lg hover:bg-pink-300 transition duration-300"
          >
            Login
          </button>

          <p className="text-white text-sm">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-pink-700 underline cursor-pointer"
            >
            Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;