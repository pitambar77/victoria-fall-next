"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBed, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const [openRooms, setOpenRooms] = useState(false);
  const [openRestaurants, setOpenRestaurants] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);

  /* ✅ ACTIVE CHECK */
  const isActive = (path) => pathname===path;

  /* ✅ AUTO OPEN DROPDOWN */
  useEffect(() => {
    if (pathname.startsWith("/dashboard/properties")) {
      setOpenRooms(true);
    }
    if (pathname.startsWith("/dashboard/restaurants")) {
      setOpenRestaurants(true);
    }
    if (pathname.startsWith("/dashboard/activities")) {
      setOpenActivities(true);
    }
  }, [pathname]);

  return (
    <aside className="w-64 bg-[#554e3d] text-gray-200 shadow-xl flex flex-col py-6 px-4 fixed top-0 left-0 h-screen overflow-y-auto z-50">
      {/* Logo */}
      <div className="text-center mt-4 mb-10">
        <img
          src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo-wh.png"
          alt="logo"
          className="w-30"
        />
      </div>

      <nav className="flex flex-col gap-2">
        {/* HOME */}
        <Link
          href="/dashboard"
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            pathname === "/dashboard"
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          <FaHome /> Home
        </Link>

        {/* ROOMS */}
        <button
          onClick={() => setOpenRooms(!openRooms)}
          className={`flex items-center justify-between px-3 py-2 rounded-md ${
            isActive("/dashboard/properties")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          <span className="flex items-center gap-2">
            <FaBed /> Rooms
          </span>
          {openRooms ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openRooms && (
          <div className="ml-6 flex flex-col gap-1">
            <Link
              href="/dashboard/properties"
              className={`px-2 py-1 rounded text-sm ${
                isActive("/dashboard/properties") &&
                pathname === "/dashboard/properties"
                  ? "text-[#c40] font-semibold"
                  : "text-gray-300 hover:text-[#c40]"
              }`}
            >
              All Properties
            </Link>

            <Link
              href="/dashboard/properties/create"
              className={`px-2 py-1 rounded text-sm ${
                isActive("/dashboard/properties/create")
                  ? "text-[#c40] font-semibold"
                  : "text-gray-300 hover:text-[#c40]"
              }`}
            >
              Create Property
            </Link>
          </div>
        )}

        {/* RESTAURANTS */}
        <button
          onClick={() => setOpenRestaurants(!openRestaurants)}
          className={`flex items-center justify-between px-3 py-2 rounded-md ${
            isActive("/dashboard/restaurants")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          <span className="flex items-center gap-2">
            <FaBed /> Restaurants
          </span>
          {openRestaurants ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openRestaurants && (
          <div className="ml-6 flex flex-col gap-1">
            <Link
              href="/dashboard/restaurants"
              className={`px-2 py-1 rounded text-sm ${
                pathname === "/dashboard/restaurants"
                  ? "text-[#c40] font-semibold"
                  : "text-gray-300 hover:text-[#c40]"
              }`}
            >
              All Restaurants
            </Link>

            <Link
              href="/dashboard/restaurants/create"
              className={`px-2 py-1 rounded text-sm ${
                isActive("/dashboard/restaurants/create")
                  ? "text-[#c40] font-semibold"
                  : "text-gray-300 hover:text-[#c40]"
              }`}
            >
              Add Restaurant
            </Link>
          </div>
        )}

        {/* ACTIVITIES */}
        <button
          onClick={() => setOpenActivities(!openActivities)}
          className={`flex items-center justify-between px-3 py-2 rounded-md ${
            isActive("/dashboard/activities")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          <span className="flex items-center gap-2">
            <FaBed /> Activities
          </span>
          {openActivities ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openActivities && (
          <div className="ml-6 flex flex-col gap-1 space-y-1">
            {[
              { href: "/dashboard/activities", label: "All Activities" },
              {
                href: "/dashboard/activities/create",
                label: "Add Activity",
              },
              {
                href: "/dashboard/activities/destinations",
                label: "All Destination",
              },
              {
                href: "/dashboard/activities/destinations/create",
                label: "Add Destination",
              },
              {
                href: "/dashboard/activities/categories",
                label: "All Categories",
              },
              {
                href: "/dashboard/activities/categories/create",
                label: "Add Category",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded text-sm ${
                  isActive(item.href)
                    ? "text-[#c40] font-semibold"
                    : "text-gray-300 hover:text-[#c40]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* BOOKINGS */}
        <Link
          href="/dashboard/activities-booking-list"
          className={`px-3 py-2 rounded ${
            isActive("/dashboard/activities-booking-list")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Activity Booking
        </Link>

        <Link
          href="/dashboard/properties-booking-list"
          className={`px-3 py-2 rounded ${
            isActive("/dashboard/properties-booking-list")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Property Booking
        </Link>

        <Link
          href="/dashboard/restaurants-booking-list"
          className={`px-3 py-2 rounded ${
            isActive("/dashboard/restaurants-booking-list")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Restaurant Booking
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
