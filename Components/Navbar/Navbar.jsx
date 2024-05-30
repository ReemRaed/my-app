"use client";
import Link from "next/link";
import React from "react";
import Classes from "../../styles/Pages/Navbar.module.scss";
import { FaHome, FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={Classes.navbar}>
      <Link href="/PostListing">
        <label  
          className={
            pathname === "/PostListing" ? Classes.active : Classes.label
          }
        > Home
        </label>
        <FaHome
          className={
            pathname === "/PostListing" ? Classes.active : Classes.icon
          }
        />
      </Link>
      <Link href="/favouritePosts">
        <label
          className={
            pathname === "/favouritePosts" ? Classes.active : Classes.label
          }
        >
        Favorite
        </label>
        <FaHeart
          className={
            pathname === "/favouritePosts" ? Classes.active : Classes.icon
          }
        />
      </Link>
    </nav>
  );
};

export default Navbar;
