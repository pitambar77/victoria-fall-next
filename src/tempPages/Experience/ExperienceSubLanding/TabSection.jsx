"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  getActivities,
  getCategoriesByDestination,
} from "../../../api/activityApi";

const TabSection = ({ destinationId }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const [allActivities, setAllActivities] = useState([]); // 🔥 cache
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH CATEGORIES ================= */
  useEffect(() => {
    if (!destinationId) return;

    const fetchCategories = async () => {
      try {
        const res = await getCategoriesByDestination(destinationId);
        setCategories(res.data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
      }
    };

    fetchCategories();
  }, [destinationId]);

  /* ================= FETCH ACTIVITIES (ONCE) ================= */
  useEffect(() => {
    if (!destinationId) return;

    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await getActivities();

        const destinationActivities = res.data.filter(
          (a) => a.destination?._id === destinationId
        );

        setAllActivities(destinationActivities);
        // setActivities(destinationActivities.slice(0, 9)); // default: ALL
          setActivities(destinationActivities); // default: ALL
      } catch (err) {
        console.error("Error fetching activities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [destinationId]);

  /* ================= FILTER ON TAB CLICK (INSTANT) ================= */
  useEffect(() => {
    if (!allActivities.length) return;

    let filtered = allActivities;

    if (selectedCategory !== "ALL") {
      filtered = allActivities.filter((a) =>
        typeof a.category === "string"
          ? a.category === selectedCategory
          : a.category?._id === selectedCategory
      );
    } else {
      // filtered = allActivities.slice(0, 9); // ✅ 3 rows
       filtered = allActivities; // ✅ 3 rows
    }

    setActivities(filtered);
  }, [selectedCategory, allActivities]);

  return (
    <div className="bg-amber-50/60 py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        <h2 className="hd text-center text-xl md:text-[30px] mb-6 md:mb-14 font-semibold tracking-[3px] uppercase">
          Activities
        </h2>

        <p className="hd text-center text-gray-600">
          Choose the category of activities to suit your preferences.
        </p>

        {/* ================= CATEGORY TABS ================= */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`hd px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "ALL"
                ? "bg-[#aca188] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setSelectedCategory(cat._id)}
              className={`hd px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat._id
                  ? "bg-[#aca188] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ================= ACTIVITIES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
          {loading ? (
            <p className="text-center col-span-full">Loading activities...</p>
          ) : activities.length === 0 ? (
            <p className="text-center col-span-full">
              No activities available.
            </p>
          ) : (
            activities.map((act) => (
              <Link
                key={act.slug}
                href={`/victoria-falls-experiences/${act.slug}`}
                className="bg-white rounded-md shadow-md overflow-hidden group"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={act.banner?.[0]?.bannerImage || act.overviewImage}
                    alt={act.activityName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-[500] uppercase">
                    {act.activityName}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    ${act.pricePerPerson ?? "N/A"} / person
                  </p>
                  <div className="mt-3 inline-block border rounded-full text-[14px] uppercase py-[8px] px-[20px]">
                    View Activity
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TabSection;




