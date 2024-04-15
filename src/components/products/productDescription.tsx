import ImageViewer from "./imagesViewer";
import { Button } from "../ui/button";

interface ProductProps {
  modelNumber: string;
  price: string;
  rejectionPercentage: number;
  fullDescription: string;
  activeMembraneArea: number;
  testedNaclSolution: string;
  testedTds: number;
}
const ProductDescription = ({ product }: { product: ProductProps }) => {
  return (
    <div className="product-description rounded-lg p-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col-reverse md:flex-row  gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">{product.modelNumber}</h3>
            <p className="text-gray-700 mb-4">{product.fullDescription}</p>
            <ul className="list-disc text-gray-700 flex flex-col gap-3 ml-4">
              <li>
                <span className="font-bold"> Active Membrane Area:</span>{" "}
                {product.activeMembraneArea}m²
              </li>
              <li>
                <span className="font-bold"> Rejection Percentage:</span>{" "}
                {product.rejectionPercentage}%
              </li>
              <li>
                {" "}
                <span className="font-bold"> Maximum operating TDS:</span>{" "}
                {product.rejectionPercentage}%
              </li>
              <li>
                <span className="font-bold"> Maximum operating TDS:</span> Up to{" "}
                {product.testedTds} TDS
              </li>
            </ul>
          </div>
          <div className=" flex flex-col md:w-1/2">
            <div className="grow">
              <ImageViewer />
            </div>
            <div className="grow">
              <h2 className="text-2xl font-bold text-primary">
                {" "}
                Premium Quaility
              </h2>
              <p className="text-gray-700 mb-4 max-w-[500px]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                eveniet sint tenetur. Maxime ipsum libero consequuntur quam cum,
                adipisci quas? Minus, rerum in. Doloribus quia quibusdam optio
                voluptatem dolores adipisci.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  mt-10">
          <span className="font-bold text-2xl text-primary">
            Price: {product.price}
          </span>
          <Button
            type="button"
            className="mt-4 max-w-[50%] bg-primary text-white hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
