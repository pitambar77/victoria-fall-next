"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/concierge`,
      );

      setData(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE}/api/concierge/${id}`);

      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Home Page</h2>

        <button
          onClick={() => router.push("/dashboard/concierge/create")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Create New
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">Title</th>

              <th className="border p-3 text-left">Subtitle</th>

              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center p-6">
                  Loading...
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item) => (
                <tr key={item._id}>
                  <td className="border p-3">{item.title}</td>

                  <td className="border p-3">{item.subtitle}</td>

                  <td className="border p-3">
                    <div className="flex gap-2 justify-center flex-wrap">
                      {/* <Link
                        href={`/dashboard/home/${item._id}`}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        View
                      </Link> */}

                      <button
                        onClick={() =>
                          router.push(`/dashboard/concierge/${item._id}`)
                        }
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      {/* <button
                        onClick={() =>
                          router.push(`/dashboard/home/seo/${item._id}`)
                        }
                        className="bg-purple-600 text-white px-3 py-1 rounded"
                      >
                        SEO
                      </button> */}

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-6 text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
