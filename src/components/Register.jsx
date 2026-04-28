import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/config"; // Ensure this points to your backend

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    role: "superadmin",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, form);

      const data = res.data;

      // store token locally
      localStorage.setItem("token", data.token);

      setMessage({ type: "success", text: "Registered successfully" });
    } catch (err) {
      setMessage({
        type: "error",
        text:
          err.response?.data?.message ||
          err.message ||
          "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 max-w-lg mx-auto rounded-lg shadow-lg">
      <div className="flex justify-end mb-4">
        {/* <button className="bg-red-500 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c0 2.21-1.343 4-3 4s-3-1.79-3-4 1.343-4 3-4 3 1.79 3 4zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Owner
        </button> */}
      </div>

      <form onSubmit={submit} className="space-y-6">
        <div className="border rounded-md p-4 flex items-center gap-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A6.002 6.002 0 0112 15c1.657 0 3.156.672 4.243 1.757M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full outline-none  px-2 py-2"
            placeholder="Username"
          />
        </div>

        <div className="border rounded-md p-4 flex items-center gap-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"
            />
          </svg>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full outline-none  px-2 py-2"
            placeholder="Email Address"
          />
        </div>

        <div className="border rounded-md p-4 flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3 w-full">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11V7a4 4 0 10-8 0h8zM6 11v2m6 6v-2"
              />
            </svg>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full outline-none  px-2 py-2"
              placeholder="Password"
              type="password"
            />
          </div>
          <button type="button" className="text-gray-400">
            👁
          </button>
        </div>

        <div className="border rounded-md p-4 flex items-center gap-3">
          <div className="flex items-center gap-2 pr-2 border-r">
            <svg className="w-3 h-3" viewBox="0 0 20 20">
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </div>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full outline-none  pl-3 py-2"
            placeholder="Phone"
          />
        </div>

        {message && (
          <div
            className={`p-3 rounded ${
              message.type === "error"
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          disabled={loading}
          type="submit"
          className="bg-[#f25922] cursor-pointer text-white px-6 py-2 rounded-full w-full mt-4 duration-300 hover:bg-[#aca188] focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
