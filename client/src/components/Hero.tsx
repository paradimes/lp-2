import ArrowIcon from "../assets/ArrowIcon.svg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-28 px-10 items-start lg:items-center">
      <h1 className=" text-[64px] lg:text-[88px] leading-tight">
        Visionaries of form, masters of light
      </h1>
      <div
        id="call-to-action"
        className="flex flex-col items-start justify-center gap-6 max-w-full lg:max-w-[540px] mb-2"
      >
        <p className="">
          At ArchitectsYYZ, we merge innovation with elegance to sculpt spaces
          that resonate with modern living yet stand timeless. Our dedication to
          sustainable design and meticulous attention to detail ensures every
          project is not just a structure, but a landmark of beauty and
          functionality. We're shaping the future, one space at a time.
        </p>
        <button className=" border-[1px] border-black bg-white flex flex-row items-center justify-center gap-4 px-6 py-4 rounded-full">
          <span className="text-[19px]">Start your project today</span>
          <img src={ArrowIcon} />
        </button>
      </div>
    </div>
  );
}
