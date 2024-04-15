'use client'
import { GripHorizontal } from "lucide-react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "../ui/toaster";
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
      setIsExpanded(false);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);
  return (
    <>
      <nav
        className={cn(
          "w-full bg-transparent  -top-[54px] left-0 z-30 transition-all duration-200 ease-out",
          isSticky && "sticky bg-white drop-shadow-md ",
          isExpanded && "-top-0"
        )}
      >
        <div className="w-full  drop-shadow-md bg-blue-500" />
        <div
          className={cn(
            "absolute bottom-[-18px] left-[calc(50%_-_20px)] bg-white rounded-lg px-2 "
          )}
        >
          <button
            className="flex"
            onClick={() => {
              setIsExpanded((prev) => !prev);
            }}
          >
            <GripHorizontal className={cn("text-gray-400")} />
          </button>
        </div>
        <div className="w-full justify-between items-center  px-3 py-2 flex drop-shadow-2xl">
          <div className="font-medium text-2xl bg-gradient-to-tr from-blue-500 to-blue-900 bg-clip-text text-transparent">
            DesignTec
          </div>
          <div className="px-2">
            <div className="md:flex hidden">
              <NavbarDesktop />
            </div>
            <div className="md:hidden flex">
              <NavbarMobile />
            </div>
          </div>
        </div>
      </nav>
      <Toaster />
    </>
  );
};

export default Navbar;
