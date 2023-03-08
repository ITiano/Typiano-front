import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ navItem }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={navItem.path}
      className={`px-3 py-1.5 font-semibold rounded-full ${pathname === navItem.path ? "text-dark bg-mainBlue" : "text-gray-4"}`}
    >
      {navItem.title}
    </Link>
  );
};

export default NavItem;
