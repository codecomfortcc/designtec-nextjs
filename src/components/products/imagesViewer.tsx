import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import sports from "../../assets/sportscar.jpg";
const ImageViewer = () => {
  return (
    <div className="flex w-full border-2 border-accent shadow-md mb-5 rounded-md h-20">
      <Carousel className="w-full px-10 h-20">
        <CarouselContent className="w-full h-full items-center mt-2">
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/4  select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/4 select-none cursor-pointer basis-1/4 w-16 h-16 border object-cover border-gray-300 ">
            <img src={sports} alt="" className="w-full h-full object-cover" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default ImageViewer;
