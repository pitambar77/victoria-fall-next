"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";

const BookingsAdmin = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editBooking, setEditBooking] = useState(null);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 5;

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://victoria-fall-backend-production.up.railway.app/api/actbookings");
      setBookings(res.data);
      setFilteredBookings(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);


  const formatLocalDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`; // DD-MM-YYYY format
};

  // Search filter
  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = bookings.filter(
      (b) =>
        b.fullName.toLowerCase().includes(lowerSearch) ||
        b.email.toLowerCase().includes(lowerSearch) ||
        (b.restaurant && b.restaurant.toLowerCase().includes(lowerSearch))
    );
    setFilteredBookings(filtered);
    setCurrentPage(1); // reset page
  }, [search, bookings]);

  // Pagination logic
  const indexOfLast = currentPage * bookingsPerPage;
  const indexOfFirst = indexOfLast - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`https://victoria-fall-backend-production.up.railway.app/api/actbookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
      setMessage("Booking deleted successfully");
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete booking");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openEditModal = (booking) => {
    setEditBooking(booking);
    setFormData({ ...booking });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://victoria-fall-backend-production.up.railway.app/api/actbookings/${editBooking._id}`, formData);
      setMessage("Booking updated successfully");
      setEditBooking(null);
      fetchBookings();
    } catch (err) {
      console.error(err);
      setMessage("Failed to update booking");
    }
  };

  return (
    <div className=" mx-auto p-6 mt-20">
      <h1 className="text-2xl font-semibold mb-4">Bookings Admin</h1>

      {message && <p className="text-sm text-red-600 mb-4">{message}</p>}

      {/* Search */}
      <input
        type="text"
        placeholder="Search by Name, Email, or Restaurant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded mb-4 w-full sm:w-1/2"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">#</th>
                  <th className="py-2 px-4 border">Full Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Mobile</th>
                  <th className="py-2 px-4 border">activity</th>
                  <th className="py-2 px-4 border">activityDate</th>
                  <th className="py-2 px-4 border">adultt</th>
                  <th className="py-2 px-4 border">child</th>
                  <th className="py-2 px-4 border">infant</th>

                  <th className="py-2 px-4 border">pick Location</th>
                  <th className="py-2 px-4 border">Message</th>

                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((b, idx) => (
                  <tr key={b._id} className="text-center border-t">
                    <td className="py-2 px-4 border">{indexOfFirst + idx + 1}</td>
                    <td className="py-2 px-4 border">{b.fullName}</td>
                    <td className="py-2 px-4 border">{b.email}</td>
                    <td className="py-2 px-4 border">{b.mobile}</td>
                    <td className="py-2 px-4 border">{b.activity}</td>
                    <td className="py-2 px-4 border">{formatLocalDate(b.activityDate)}</td>
                    <td className="py-2 px-4 border">{b.adult}</td>
                    <td className="py-2 px-4 border">{b.child}</td>
                    <td className="py-2 px-4 border">{b.infant}</td>

                    <td className="py-2 px-4 border">{b.pickLocation}</td>
                    <td className="py-2 px-4 border">{b.message}</td>

                    <td className="py-2 px-4 border flex flex-col justify-center gap-2">
                      <Button onClick={() => openEditModal(b)}>Edit</Button>
                      <Button
                        onClick={() => handleDelete(b._id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <Button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </Button>
            <span className="px-2 py-1 border rounded">{currentPage}</span>
            <Button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </>
      )}

      {/* Edit Modal */}
      {editBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-md w-full max-w-2xl p-6 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setEditBooking(null)}
            >
              <IoIosClose />
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="Restaurant"
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="date"
                  name="activityDate"
                  value={formData.activityDate}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="Pick up Location"
                  name="pickLocation"
                  value={formData.pickLocation}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="number"
                  name="adult"
                  value={formData.adult}
                  onChange={handleChange}
                  min="1"
                  className="border px-3 py-2 rounded w-full"
                  required
                />
                <input
                  type="number"
                  name="child"
                  value={formData.child}
                  onChange={handleChange}
                  min="1"
                  className="border px-3 py-2 rounded w-full"
                  required

                />
                 <input
                  type="number"
                  name="infant"
                  value={formData.infant}
                  onChange={handleChange}
                  min="1"
                  className="border px-3 py-2 rounded w-full"
                  required
                />
              </div>
              <Button type="submit">Update Booking</Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsAdmin;
