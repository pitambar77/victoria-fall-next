import React, { useState } from "react";
import { BASE_URL } from "../api/config"; // Ensure this points to your backend

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Server error");
      }

      localStorage.setItem("token", data.token);
      setMessage({ type: "success", text: "Login success" });

      setTimeout(() => {
        // Navigate to the home/dashboard (adjust as necessary)
        window.location.href = "/";
      }, 600);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Login</h2>

      <form onSubmit={submit} className="space-y-4">
        <div className="border rounded-md p-3 flex items-center gap-3">
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
            className="w-full outline-none"
            placeholder="Email Address"
          />
        </div>

        <div className="border rounded-md p-3 flex items-center gap-3 justify-between">
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
              className="w-full outline-none"
              placeholder="Password"
              type="password"
            />
          </div>
          <button type="button" className="text-gray-400">
            👁
          </button>
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
          className="bg-[#f25922] cursor-pointer text-white px-6 py-2 rounded-full"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
