"use client";

import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      {children}
      <Footer/>
    </>
  );
}
