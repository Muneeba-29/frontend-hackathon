import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

function Signup() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/signup", form);
            alert("Signup successful, now login!");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.msg || "Signup failed");
        }
    };

    return (
      <div
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-300 to-pink-600"
>

            <div className="bg-transparent p-8 rounded-lg shadow-2xl border border-pink-700 text-center w-[90%] max-w-md">
                <h1 className="text-pink-700 text-3xl font-bold mb-6">Signup</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Username */}
                    <div className="relative">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            className="w-full py-3 pl-6 pr-10 rounded-full border-2 border-pink-700 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                            onChange={handleChange}
                        />
                        <i className="bx bxs-user absolute right-4 top-3.5 text-white text-xl"><CiUser /></i>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full py-3 pl-6 pr-10 rounded-full border-2 border-pink-700 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                            onChange={handleChange}
                        />
                        <i className="bx bx-envelope absolute right-4 top-3.5 text-white text-xl"><TfiEmail /></i>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full py-3 pl-6 pr-10 rounded-full border-2 border-pink-700 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                            onChange={handleChange}
                        />
                        <i className="bx bxs-lock-alt absolute right-4 top-3.5 text-white text-xl"><CiLock /></i>
                    </div>


                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-full bg-pink-700 border-2 border-pink-700 text-pink-100 font-bold text-lg hover:bg-pink-200 transition duration-300"
                    >
                        Signup
                    </button>

                    <p className="text-white text-sm">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-pink-700 underline cursor-pointer"
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
