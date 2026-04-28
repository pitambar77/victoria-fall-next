import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Gallery from "../../../components/Gallery";
import { getRestaurantBySlug } from "../../../api/restaurantApi.js";

export default function ModalGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [restaurant, setRestaurant] = useState(null);

  // const { id } = useParams();

  const { slug } = useParams(); // ✅ slug instead of id

  // useEffect(() => {
  //   axios
  //     .get(`http://victoria-fall-backend.manoramaseoservice.com/api/restaurants/${id}`)
  //     .then((res) => setRestaurant(res.data))
  //     .catch(console.error);
  // }, [id]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await getRestaurantBySlug(slug);
        setRestaurant(res.data);
      } catch (err) {
        console.error("Failed to fetch restaurant gallery", err);
      }
    };

    fetchRestaurant();
  }, [slug]);

  if (!restaurant) return <p className="p-6">Loading...</p>;
  if (!restaurant.galleryImages || restaurant.galleryImages.length === 0)
    return <p className="p-6">No images available.</p>;

  const images = restaurant.galleryImages; // ✅ use backend images

  const openGallery = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div>
        <Gallery
          title={restaurant.name}
          images={restaurant.galleryImages}
          buttonText="VIEW ALL RESTAURANTS →"
          showButton={true}
        />
      </div>
    </>
  );
}
