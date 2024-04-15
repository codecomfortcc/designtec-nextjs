import Link from "next/link";
import OOPS from "@/assets/OOPS.svg";
const PageNotFound = () => {
  return (
    <main className="w-full h-screen  ">
      <div className="h-full flex flex-col justify-center items-center gap-3">
        <div>
          <img src={OOPS} alt="404" className="w-96 h-96" />
        </div>
        <h2 className="text-3xl font-bold font-archivo text-primary">
          Page Not Found
        </h2>
        <p className="text-lg font-thin font-archivo text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-lg font-medium font-archivo text-primary hover:text-slate-700"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
