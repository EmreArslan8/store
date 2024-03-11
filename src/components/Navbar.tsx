"use client";
import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="shadow-lg shadow-[gray]/[0.3] border-b-[0.5px] border-[gray]">
            <div className="container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-[15px]">
                <Link href="/">
                    <div className="h-[70px] flex items-center cursor-pointer">

                        <p className="font-semibold text-3xl uppercase bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                            tech store
                        </p>
                    </div>
                </Link>
                <nav className="flex items-center gap-[35px] cursor-pointer list-none">
                    <li className="hover:border-b-[0.5px] text-[24px]" style={{ color: "#02088c", fontWeight: 700, textTransform: "uppercase" }}>Home</li>
                    <li className="hover:border-b-[0.5px] text-[24px]" style={{ color: "#02088c", fontWeight: 700, textTransform: "uppercase" }}>Macbook</li>
                    <li className="hover:border-b-[0.5px] text-[24px]" style={{ color: "#02088c", fontWeight: 700, textTransform: "uppercase" }}>iPhone</li>
                    <li className="hover:border-b-[0.5px] text-[24px]" style={{ color: "#02088c", fontWeight: 700, textTransform: "uppercase" }}>Airpods</li>
                </nav>
                <div>
                    <div className="flex justify-end items- space-x-4">
                        <FaSearch fontSize={30} className="cursor-pointer text-[#02088c] mr-[20px]" />
                        <Link href="/">
                            <IoPersonSharp fontSize={30} className="cursor-pointer text-[#02088c] mr-[20px]" />

                        </Link>
                        <Link href="/">
                            <MdOutlineShoppingBag fontSize={40} className="cursor-pointer text-[#02088c]" />

                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;
