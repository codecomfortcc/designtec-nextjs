import { Button } from "@/components/ui/button";
import sportscar from "@/assets/sportscar.jpg";
import Image from "next/image";
const ViewCard = () => {
  return (
    <div className=" bg-white rounded-[20px] drop-shadow-lg overflow-clip cursor-pointer">
      <Image
        src={sportscar}
        className="w-full h-64 aspect-video object-cover shadow-inner  rounded-t-lg border-none outline-none"
        alt={"hello"}
      />
      <div className="p-8">
        <div className="flex justify-between w-full items-baseline">
          <h3 className="text-3xl font-bold mb-5">Our Product</h3>
        </div>
        <p className="text-gray-700 mb-3 max-w-[400px] line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          nobis dolorem commodi! Excepturi nam harum consequatur quod laborum
          commodi quo cum neque quisquam maxime quaerat, consequuntur numquam
          deleniti praesentium ipsum.
        </p>
        <div className="flex  gap-2 ">
          <Button
            className="w-full mt-4 z-[100] border-primary border-2 text-primary hover:bg-primary hover:text-white"
            variant={"outline"}
          >
            View Product
          </Button>
          <Button className="w-full mt-4 z-[100]">Get Enquiry</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
