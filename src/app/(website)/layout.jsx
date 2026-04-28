"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
