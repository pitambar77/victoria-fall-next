import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import { getDestinationBySlug } from "../api/destinationApi.js";

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/wheretoafrica/" },
  { icon: FaInstagram, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaYoutube, url: "#" },
  { icon: FaVimeoV, url: "#" },
];

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const queryClient = useQueryClient();

  const prefetchConcierge = () => {
    queryClient.prefetchQuery({
      queryKey: ["destination", "victorial-falls"],
      queryFn: () =>
        getDestinationBySlug("victorial-falls").then((res) => res.data),
    });
  };

  const prefetchExperience = () => {
    queryClient.prefetchQuery({
      queryKey: ["destination", "victoria-falls"],
      queryFn: () =>
        getDestinationBySlug("victoria-falls").then((res) => res.data),
    });
  };

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* ----------- Top Contact Bar ----------- */}
      <div className="hd bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block relative z-[50]">
        <div className="max-w-[1140px] mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <BsPhone />
              <span>SOUTH AFRICA: +27 31 535 2811</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Victoria Falls: +263 77 2366698</span>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
              (Icon, i) => (
                <a key={i} href="#" className="hover:text-gray-900 transition-colors">
                  <Icon />
                </a>
              )
            )}
          </div> */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ----------- Transparent Header (above banner) ----------- */}


      {/* ----------- Sticky Header ----------- */}
      <nav
        className=" top-10 left-0 w-full  shadow-sm transition-all duration-700 transform "
         
      >
        <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative px-4 ">
          {/* Left Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-8 text-[14px] uppercase">
            <li>
              <Link href="/" className="hover:text-[#c40]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/properties" className="hover:text-[#c40]">
                Find your stay
              </Link>
            </li>
            <li>
              <Link
                href="/luxury-concierge-services"
                className="hover:text-[#c40]"
              >
                Concierge Services
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="hover:text-[#c40]">
                Restaurant
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <Link href="/">
            <img
              src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
              alt="logo"
              className="w-28"
            />
          </Link>

          {/* Right Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-6 text-[14px]  uppercase">
            <li>
              <Link
                href="/victoria-falls-experiences"
                className="hover:text-[#c40]"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link href="/owners-application" className="hover:text-[#c40]">
                Owner Application
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-[#c40]">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* ----------- Mobile Drawer Menu (Right Slide) ----------- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[998]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-full h-full  bg-[#aca188]  z-[999] shadow-xl flex flex-col items-center justify-start pt-16 space-y-6 hd uppercase text-sm text-white/80 "
            >
              {/* Close Icon */}
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Menu Links */}
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/properties-landing" onClick={() => setMenuOpen(false)}>
                Find your stay
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/experience-landing" onClick={() => setMenuOpen(false)}>
                Concierge Services
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/restaurants" onClick={() => setMenuOpen(false)}>
                Restaurant
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link
                href="/victoria-falls-experiences"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/owners-application" onClick={() => setMenuOpen(false)}>
                Owner Application
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

              <div className="pt-8 flex space-x-4 text-lg">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};


export default Header