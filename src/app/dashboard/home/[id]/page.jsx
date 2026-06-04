"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeLandingForms from "@/components/LandingPagesForms/HomeLandingForms";

export default function Page() {
  const params = useParams();
  const id = params?.id;

  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/home/${id}`,
      );

      setEditData(res.data);
    } catch (error) {
      console.error("Error fetching home page:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading...</p>
      </div>
    );
  }

  if (!editData) {
    return (
      <div className="p-6">
        <p>Home page not found.</p>
      </div>
    );
  }

  return <HomeLandingForms editData={editData} onSuccess={fetchData} />;
}
