import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashbord from "../components/Dashbord";
import AllFacilities from "../components/AllFacilities";
import PropertyForm from "../Pages/Properties/PropertyForm";
import PropertyList from "../Pages/Properties/PropertyList";
import PropertyDetails from "../Pages/Properties/PropertyDetails";
import RestaurantList from "../Pages/Restaurants/RestaurantList";
import RestaurantForm from "../Pages/Restaurants/RestaurantForm";
import RestaurantDetails from "../Pages/Restaurants/RestaurantDetails";
import ActivityList from "../Pages/Activities/ActivityList";
import ActivityForm from "../Pages/Activities/ActivityForm";
import ActivityDetails from "../Pages/Activities/ActivityDetails";
import DestinationForm from "../Pages/Activities/DestinationForm";
import DestinationList from "../Pages/Activities/DestinationList";
import CategoryList from "../Pages/Activities/CategoryList";
import CategoryForm from "../Pages/Activities/CategoryForm";
import BookingPropertyAdmin from "../components/BookingPropertyAdmin";
import BookingsAdmin from "../components/BookingsAdmin";
import BookingRestaurantAdmin from "../components/BookingRestaurantAdmin";
import CreateProperty from "../Pages/Admin/CreateProperty";
import PropertiesList from "../Pages/Properties/PropertiesList";
import EditProperty from "./properties/EditProperty";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#f8f7f4]  ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col ml-64 ">
        {/* Topbar */}
        <header className="h-16 flex justify-end items-center px-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/35"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </header>

        {/* Nested Dashboard Routes */}
        <main className="hd flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashbord />} />
            {/* <Route path="rooms/all" element={<PropertyList />} />
            <Route path="rooms/add" element={<PropertyForm />} /> */}
            <Route path="cp" element={<CreateProperty />} />
            <Route path="propt" element={<PropertiesList />} />
            <Route path="propt/:slug" element={<EditProperty />} />
            {/* <Route path="properties/edit/:id" element={<PropertyForm />} /> */}
            {/* <Route path="properties/:id" element={<PropertyDetails />} /> */}
            <Route path="restaurants/all" element={<RestaurantList />} />
            <Route path="restaurants/add" element={<RestaurantForm />} />
            <Route path="restaurants/edit/:id" element={<RestaurantForm />} />
            <Route path="restaurants/:id" element={<RestaurantDetails />} />

            <Route path="activities/all" element={<ActivityList />} />
            <Route path="activities/add" element={<ActivityForm />} />
            <Route path="activities/edit/:id" element={<ActivityForm />} />
            <Route path="activities/:id" element={<ActivityDetails />} />

            <Route path="destination/add" element={<DestinationForm />} />
            <Route path="destination/all" element={<DestinationList />} />
            <Route path="destination/edit/:id" element={<DestinationForm />} />

            <Route path="categories/all" element={<CategoryList />} />
            <Route path="categories/add" element={<CategoryForm />} />

            <Route path="actbooking" element={<BookingsAdmin />} />
            <Route path="property-booking" element={<BookingPropertyAdmin />} />
            <Route
              path="restaurant-booking"
              element={<BookingRestaurantAdmin />}
            />
            <Route path="facilities" element={<AllFacilities />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
