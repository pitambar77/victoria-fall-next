// import React, { useState } from "react";
// import { BASE_URL } from "../api/config"; // Ensure this points to your backend

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const res = await fetch(`${BASE_URL}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Server error");
//       }

//       localStorage.setItem("token", data.token);
//       setMessage({ type: "success", text: "Login success" });

//       setTimeout(() => {
//         // Navigate to the home/dashboard (adjust as necessary)
//         window.location.href = "/";
//       }, 600);
//     } catch (err) {
//       setMessage({
//         type: "error",
//         text: err.message || "Something went wrong",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-700">Login</h2>

//       <form onSubmit={submit} className="space-y-4">
//         <div className="border rounded-md p-3 flex items-center gap-3">
//           <svg
//             className="w-5 h-5 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"
//             />
//           </svg>
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full outline-none"
//             placeholder="Email Address"
//           />
//         </div>

//         <div className="border rounded-md p-3 flex items-center gap-3 justify-between">
//           <div className="flex items-center gap-3 w-full">
//             <svg
//               className="w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 11V7a4 4 0 10-8 0h8zM6 11v2m6 6v-2"
//               />
//             </svg>
//             <input
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full outline-none"
//               placeholder="Password"
//               type="password"
//             />
//           </div>
//           <button type="button" className="text-gray-400">
//             👁
//           </button>
//         </div>

//         {message && (
//           <div
//             className={`p-3 rounded ${
//               message.type === "error"
//                 ? "bg-red-50 text-red-700"
//                 : "bg-green-50 text-green-700"
//             }`}
//           >
//             {message.text}
//           </div>
//         )}

//         <button
//           disabled={loading}
//           type="submit"
//           className="bg-[#f25922] cursor-pointer text-white px-6 py-2 rounded-full"
//         >
//           {loading ? "Signing in..." : "Sign In"}
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Step 1: Verify username + password & send OTP
  const sendOTP = async () => {
    try {
      setLoading(true);
      setError("");

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/auth/send-otp`,
        { username, password },
      );

      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Step 2: Verify OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/auth/verify-otp`,
        { username, otp },
      );

      localStorage.setItem("token", res.data.token);

      router.push("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white  p-8 shadow-lg rounded-xl w-96">
        <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={sendOTP}
              disabled={loading}
              className="w-full cursor-pointer bg-[#6b6453] text-white py-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOTP}
              disabled={loading}
              className="w-full cursor-pointer bg-[#6b6453] text-white py-2 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
