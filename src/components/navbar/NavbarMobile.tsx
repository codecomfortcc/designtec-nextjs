import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { GripVertical } from "lucide-react";

const NavbarMobile = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <GripVertical className="text-blue-500" />
        </SheetTrigger>
        <SheetContent>
     
          <div className="h-full  justify-evenly w-full flex flex-col gap-2 items-center">
            <Link href="/">
              <SheetClose>
                <SheetDescription className="font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 text-2xl select-none active:text-blue-800 active:text-xl active:pb-1">
                  Home
                </SheetDescription>
              </SheetClose>
            </Link>
            <Link href="/about">
              <SheetClose>
                <SheetDescription className="font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 text-2xl select-none active:text-blue-800 active:text-xl active:pb-1">
                  About
                </SheetDescription>
              </SheetClose>
            </Link>
            <Link href="/services">
              <SheetClose>
                <SheetDescription className="font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 text-2xl select-none active:text-blue-800 active:text-xl active:pb-1">
                  Services
                </SheetDescription>
              </SheetClose>
            </Link>
            <Link href="/products">
              <SheetClose>
                <SheetDescription className="font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 text-2xl select-none active:text-blue-800 active:text-xl active:pb-1">
                  Products
                </SheetDescription>
              </SheetClose>
            </Link>
            <Link href="/contact">
              <SheetClose>
                <SheetDescription className="font-medium cursor-pointer transition-all duration-200 ease-in-out hover:text-blue-500 text-2xl select-none active:text-blue-800 active:text-xl active:pb-1">
                  Contacts
                </SheetDescription>
              </SheetClose>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
