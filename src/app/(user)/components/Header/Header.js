"use client";

import React from "react";
import routes from "@routes/routes";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import LogoTypiano from "@assets/vectors/LogoTypiano";
import useScroll from "@hooks/useScroll";

const navItems = [routes.home, routes.courses, routes.aboutUs, routes.contactUs];

const Header = () => {
  const { isInTop, isScrollingDown } = useScroll();

  return (
    <header
      className={`fixed w-full h-[70px] top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 md:px-4 ${
        isInTop
          ? "bg-transparent -translate-y-0 !h-[60px]"
          : !isScrollingDown
          ? "bg-white/40 backdrop-blur-md shadow -translate-y-0"
          : isScrollingDown
          ? "-translate-y-full"
          : ""
      }`}
    >
      <div className="max-w-layout flex-between-center px-3  h-full">
        <LogoTypiano className="text-dark-900 font-bold text-center text-base" />
        <Navbar navItems={navItems} />
        <UserProfile navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
