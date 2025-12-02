import FadeInOnScroll from "./scroll";

export default function TTDcard({
  title,
  description,
  imageSrc,
  imageFirst,
}: {
  title: string;
  description: any;
  imageSrc: string;
  imageFirst: boolean;
}) {
  return (
    <FadeInOnScroll>
      <div
        className={`TTD-card flex flex-col md:flex-row md:items-center items-center justify-center gap-4 md:gap-16 px-6 md:px-12 py-16 ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* IMAGE SIDE */}
        <div className="TTD-image w-full md:w-1/2 flex items-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-bottom-2xl shadow-lg"
          />
        </div>

        {/* TEXT SIDE */}
        <div className="TTD-text w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start gap-4">
          <h1 className="text-xl md:text-4xl leading-relaxed font-semibold">
            {title}
          </h1>
          <h3 className="text-lg md:text-xl font-light leading-relaxed">
            {description}
          </h3>
          <h3 className="text-lg md:text-xl font-light leading-relaxed">
            Contact us for more info!
          </h3>
          <button className="TTD-button bg-[#3D3935] text-white px-6 py-2 rounded-md mt-4 hover:bg-[#5a554f] transition">
            <a href="#contactUs">Contact us for more info</a>
          </button>
        </div>
      </div>
    </FadeInOnScroll>
  );
}