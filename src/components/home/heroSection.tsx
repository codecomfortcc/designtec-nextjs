import { Button } from "@/components/ui/button";
import logo from "../../assets/newlogofinal.png";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="w-full mt-20 mb-20 flex justify-center">
      <div className="max-w-[1280px] w-full ">
        <div id="section-1" className="w-full h-full flex gap-2  ">
          <div className="w-full flex h-full gap-5 flex-col max-md:justify-center max-md:items-center">
            <h3 className="text-3xl font-medium ml-2  "> DESIGNTEC </h3>

            <div className="flex flex-col gap-10 max-md:justify-center max-md:items-center">
              <h1 className="md:text-8xl sm:text-7xl text-5xl font-bold max-md:flex max-md:items-center max-md:flex-col">
                <span>
                  Pure{" "}
                  <span className="bg-gradient-to-tr from-primary to-blue-300 text-transparent bg-clip-text">
                    Water
                  </span>
                </span>{" "}
                <span>Pure Life</span>
              </h1>
              <p className="ml-2 max-w-[400px] max-md:text-center">
                World-renowned providers of cutting-edge water treatment
                solutions, known for their unwavering consistency, unwavering
                reliability, and exceptional longevity.
              </p>
            </div>
            <div className="ml-2">
              <Button className="flex gap-2 rounded-full px-8 py-4 hover:bg-white hover:border-primary hover:border-2 hover:text-primary  transition-all duration-200 ease-in-out  ">
                <span>View Products</span>
                <ArrowDown />
              </Button>
            </div>
          </div>
          <div className="w-full h-full relative justify-center items-center md:flex hidden ">
            <div
              aria-label="true"
              className="absolute w-96 h-96 top-20 right-20 rounded-[81%_19%_32%_68%_/_58%_53%_47%_42%] -z-10 bg-gradient-to-tr to-blue-300 from-primary/70 blur-[200px]"
            />
            <div>
              <Image
                src={logo}
                className="w-full h-[500px] object-cover drop-shadow-lg"
                alt={"hello"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
