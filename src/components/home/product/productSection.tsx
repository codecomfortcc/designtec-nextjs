import { CircleDot } from "lucide-react";
import ProductView from "./productview";

const ProductSection = () => {
  return (
    <div className="w-full flex justify-center mb-20 shadow-inner shadow-[inset -2px_0px_2px_rgba(0, 0, 0, 0.2)] shadow-sm">
      <div className="max-w-[1280px] w-full h-full mx-2">
        <div
          id="section-1"
          className="w-full items-center h-full flex flex-col"
        >
          <div className="text-4xl w-72 font-bold mt-5 mb-10 flex gap-4 md:self-start items-center justify-center">
            <CircleDot className="relative top-[3px] text-primary hidden md:flex" />
            Our <span className="text-primary">Products</span>
          </div>
          <div className=" w-full  flex justify-center ">
            <ProductView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
