import backgroundImage from "../images/main.jpg";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-[70vh] text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center w-[80%] lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
        <p className="lg:text-xl text-slate-100">
          A diverse collection of shows, ranging from sophisticated performances
          to vibrant and energetic productions. Our shows cater to every taste
          and occasion, ensuring a unique and memorable experience for all
          attendees.
        </p>
      </div>
    </div>
  );
};

export default Banner;
