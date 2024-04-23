import { CircleDot } from "lucide-react";
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="w-full container flex justify-center pb-10 pt-10 min-h-screen ">
      <div className="max-w-[1280px] w-full h-full">
        <div className="flex flex-col  w-full h-full ">
        <div className="text-4xl w-96 font-bold flex gap-4 md:self-start mb-3 items-center justify-start">
              <CircleDot className="relative top-[3px] text-primary hidden md:flex" />
              <p>
                About <span className="text-primary">DesignTec</span>
              </p>
            </div>
          <div>
        
            <p className="mt-4 text-xl text-gray-700 leading-relaxed max-w-[800px]">
              DesignTec is a leading innovator in water filtration, specializing
              in high-performance reverse osmosis (RO) membranes tailored
              specifically for 4-inch and 8-inch applications. We understand
              that not every filtration need requires a large-scale solution,
              and our focused selection delivers exceptional performance while
              maximizing efficiency for your unique requirements.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold text-primary">
                Expertise & Innovation
              </h2>
              <p className="text-gray-600">
                Backed by extensive experience in membrane technology, we
                leverage cutting-edge materials and manufacturing processes to
                create exceptional 4-inch and 8-inch RO membranes. Our
                commitment to innovation ensures our products consistently meet
                the evolving demands of the water treatment industry.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold text-primary">
                Optimized Performance & Reliability
              </h2>
              <p className="text-gray-600">
                DesignTec membranes are built to last, offering superior
                durability and consistent filtration performance in 4-inch and
                8-inch configurations. We subject our membranes to rigorous
                testing to guarantee they meet the highest quality standards.
                You can trust DesignTec to provide reliable and long-lasting
                solutions for your specific water treatment needs.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-medium text-white bg-primary hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Learn More About Our Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

