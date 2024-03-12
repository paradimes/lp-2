/* eslint-disable @typescript-eslint/no-unused-vars */
import bg from "../assets/bg.png";
import CallToAction from "../components/Hero";
import Header from "../components/common/Header";

export default function HomePage() {
  return (
    <div>
      <div
        id="background-section"
        className=" h-[75vh] bg-cover bg-center flex items-start justify-center m-2 rounded-xl box-border"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
      </div>

      <CallToAction />
      {/* <div className="flex flex-row w-full gap-10 px-10 py-4">
        <h1 className="text-7xl border-2 border-black">
          Visionaries of form, masters of light
        </h1>
        <p className=" border-2 border-red-500 max-w-[40vw]">
          At ArchitectsYYZ, we merge innovation with elegance to sculpt spaces
          that resonate with modern living yet stand timeless. Our dedication to
          sustainable design and meticulous attention to detail ensures every
          project is not just a structure, but a landmark of beauty and
          functionality. We're shaping the future, one space at a time.
        </p>
      </div> */}
    </div>
  );
}
