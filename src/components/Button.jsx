"use client";

import Link from "next/link";

export default function Button({
  children,
  onClick,
  href,
  target = "_self",
  className = "",
}) {
  const baseStyle =
    "text-white border-0 bg-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[10px] px-[20px] hover:bg-[#c40] transition-colors duration-300 cursor-pointer ease-out";

  // If href exists → render link
  if (href) {
    // External link
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target={target}
          rel="noopener noreferrer"
          className={`${baseStyle} ${className}`}
        >
          {children}
        </a>
      );
    }

    // Internal link (Next.js navigation)
    return (
      <Link href={href} className={`${baseStyle} ${className}`}>
        {children}
      </Link>
    );
  }

  // Otherwise render button
  return (
    <button onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
}
