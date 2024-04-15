import ViewCard from "./ViewCard";

const ProductView = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-5 ">
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
      </div>
    </div>
  );
};

export default ProductView;
