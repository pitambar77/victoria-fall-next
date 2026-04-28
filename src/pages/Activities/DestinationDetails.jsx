import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getActivities, getCategoriesByDestination } from "../../api/activityApi";

const DestinationDetails = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activities, setActivities] = useState([]);

  // --- Fetch categories for this destination
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategoriesByDestination(id);
        setCategories(res.data);
        if (res.data.length > 0) setSelectedCategory(res.data[0]._id);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
      }
    };
    fetchCategories();
  }, [id]);

  // --- Fetch all activities and filter by selected category
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchActivities = async () => {
      try {
        const res = await getActivities();
        // Some activities store category as string, some as object
        const filtered = res.data.filter((a) => {
          if (!a.category) return false;
          return typeof a.category === "string"
            ? a.category === selectedCategory
            : a.category._id === selectedCategory;
        });
        setActivities(filtered);
      } catch (err) {
        console.error("Error fetching activities:", err);
        setActivities([]);
      }
    };

    fetchActivities();
  }, [selectedCategory]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Destination Activities</h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setSelectedCategory(cat._id)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat._id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Activities List */}
      {activities.length === 0 ? (
        <p className="text-center text-gray-500">No activities available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((act) => (
            <Link
              key={act._id}
              to={`/la/activity/${act._id}`}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {act.bannerImage && (
                <img
                  src={act.bannerImage}
                  alt={act.activityName}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{act.activityName}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  ₹{act.pricePerPerson} / person
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
