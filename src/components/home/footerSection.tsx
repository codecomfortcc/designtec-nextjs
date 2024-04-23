import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import Link from "next/link";
const FooterSection = () => {
  return (
    <div id="section-4" className="w-full flex justify-center pb-10 pt-10 bg-primary min-h-screen">
      <div className="max-w-[1280px] w-full h-full">
        <div className="flex flex-col w-full h-full ">
          <div className="w-full flex flex-col items-center gap-5">
            <h2 className="text-white text-4xl max-w-[400px] text-center font-bold">
              Choose reliable RO, Choose DesignTec.
            </h2>
            <p className="text-gray-200 text-center">
              Harness the Power of DesignTec's Leading-Edge RO Membranes
            </p>
            <Button className="bg-white text-primary hover:bg-gray-200 ">
              Contact Us
            </Button>
            <Separator orientation="horizontal" className="w-1/2" />
          </div>
          <div className="flex mt-10 gap-x-10 ">
            <h3 className="text-5xl text-white font-bold leading-[70px]">
              Design Tec <br /> Industries
            </h3>
            <div className="grow">
              <ul>
                <li className="text-white hover:text-red-200 text-lg">
                  <Link href="">Home</Link>
                </li>
                <li className="text-white hover:text-red-200 text-lg">
                  <Link href="">Products</Link>
                </li>
                <li className="text-white hover:text-red-200 text-lg">
                  <Link href="">Services</Link>
                </li>
                <li className="text-white hover:text-red-200 text-lg">
                  <Link href="">Testimonials</Link>
                </li>
                <li className="text-white hover:text-red-200 text-lg">
                  <Link href="">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator orientation="horizontal" className="w-full mt-20" />
          <div>
            <div className="flex justify-center gap-2 md:gap-10 items-center flex-col md:flex-row mt-10">
              <p className="text-white text-sm">
                © {new Date().getFullYear()} DesignTec Industries. All rights
                reserved.
              </p>
              <div className="flex gap-x-5">
                <Link
                  href="/terms"
                  className="text-white hover:text-red-200 text-sm"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="text-white hover:text-red-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
