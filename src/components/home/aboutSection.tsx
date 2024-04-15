const AboutSection = () => {
  return (
    <div className="h-64 mb-20 mt-20 w-full border-t-2  border-b-2 border-solid ">
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
        <h1 className="md:text-4xl font-bold text-gray-400 text-center text-3xl">
          Thousands of <br className="flex md:hidden" />{" "}
          <span className="text-primary text-5xl">loyal customers</span>{" "}
          <br className="flex md:hidden" /> across india
        </h1>
        <p className="italic text-primary">-- India's choice --</p>
      </div>
    </div>
  );
};

export default AboutSection;
