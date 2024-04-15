import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
interface CarouselProps {
  images: Array<string>;
}

const ProductViewer = ({ images }: CarouselProps) => {
  return (
    <Carousel className="w-full max-w-[1280px] max-h-screen ">
      <CarouselContent className=" max-h-screen">
        {images.map((product) => (
          <CarouselItem className="bg-cover max-h-screen">
            <img src={product} className="w-full h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-0 top-[50%] bg-gray-500/0 hover:bg-gray-500/20 hover:text-blue-200 border-0 text-white w-32 h-full rounded-[50%_0%_0%_50%_/_50%_10%_10%_50%]" />
      <CarouselPrevious className="absolute  left-0 top-[50%] bg-gray-500/0 hover:bg-gray-500/20 hover:text-blue-200 border-0 text-white  w-32 h-full rounded-[0%_50%_50%_0%_/_10%_50%_50%_10%]" />
    </Carousel>
  );
};

export default ProductViewer;
