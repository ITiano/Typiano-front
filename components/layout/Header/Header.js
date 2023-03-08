import React, { useEffect, useState } from "react";
import routes from "routes/routes";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

const navItems = [routes.home, routes.guide, routes.courses, routes.aboutUs, routes.contactUs];

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      const calcScrollY = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", calcScrollY);
      return () => window.removeEventListener("scroll", calcScrollY);
    }
  }, [scrollY]);
 
  return (
    <header
      className={`fixed w-full h-[64px] top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-[250ms] ${
        scrollY ? "bg-white/40 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="layout-max-w flex-between-center p-3 md:px-4">
        <h2 className="text-dark font-bold text-center text-base">Typiano</h2>
        <Navbar navItems={navItems} />
        <UserProfile navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
