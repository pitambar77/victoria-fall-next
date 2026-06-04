"use client";

import Sidebar from "@/components/Sidebar";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        router.push("/login");
      }
    } catch {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, [router]);


  return (
    <div className="flex bg-[#f8f7f4]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Topbar */}
        <header className="h-16 flex justify-end items-center px-6 border-b border-gray-300">
          <img
            src="https://via.placeholder.com/35"
            alt="user"
            className="w-9 h-9 rounded-full"
          />
        </header>
       

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children} {/* 🔥 THIS replaces <Routes> */}
        </main>
      </div>
    </div>
  );
}
