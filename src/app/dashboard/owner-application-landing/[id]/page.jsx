"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OwnerapplicationLandingForm from "@/components/LandingPagesForms/OwnerapplicationLandingForm";

export default function Page() {
  const params = useParams();
  const id = params?.id;

  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/ownerapplicationlanding/${id}`,
      );

      setEditData(res.data);
    } catch (error) {
      console.error("Error fetching activitylanding page:", error);
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
        <p>Owner application landing page not found.</p>
      </div>
    );
  }

  return <OwnerapplicationLandingForm editData={editData} onSuccess={fetchData} />;
}
