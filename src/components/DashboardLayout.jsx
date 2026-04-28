import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashbord from "../components/Dashbord";
import AllFacilities from "../components/AllFacilities";
import PropertyForm from "../pages/Properties/PropertyForm";
import PropertyList from "../pages/Properties/PropertyList";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import RestaurantList from "../pages/Restaurants/RestaurantList";
import RestaurantForm from "../pages/Restaurants/RestaurantForm";
import RestaurantDetails from "../pages/Restaurants/RestaurantDetails";
import ActivityList from "../pages/Activities/ActivityList";
import ActivityForm from "../pages/Activities/ActivityForm";
import ActivityDetails from "../pages/Activities/ActivityDetails";
import DestinationForm from "../pages/Activities/DestinationForm";
import DestinationList from "../pages/Activities/DestinationList";
import CategoryList from "../pages/Activities/CategoryList";
import CategoryForm from "../pages/Activities/CategoryForm";
import BookingPropertyAdmin from "../components/BookingPropertyAdmin";
import BookingsAdmin from "../components/BookingsAdmin";
import BookingRestaurantAdmin from "../components/BookingRestaurantAdmin";
import CreateProperty from "../pages/Admin/CreateProperty";
import PropertiesList from "../pages/Properties/PropertiesList";
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
             <Route path = "cp" element={<CreateProperty/>}/>
              <Route path="propt" element={<PropertiesList/>}/>
              <Route path="propt/:slug" element={<EditProperty/>}/>
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
