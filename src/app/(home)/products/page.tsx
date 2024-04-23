import { CircleDot } from "lucide-react";

const ProductPage = () => {
  return (
    <div className="w-full flex justify-center pb-10 pt-10 min-h-screen ">
      <div className="max-w-[1280px] w-full h-full">
        <div className="flex flex-col w-full h-full ">
        <div className="text-4xl w-96 font-bold  mb-10 flex gap-4 md:self-start items-center justify-start">
          <CircleDot  className="relative top-[3px] text-primary hidden md:flex" />
          Our <span className="text-primary">Products</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

