/* eslint-disable @typescript-eslint/no-unused-vars */
import bg from "../assets/bg.png";
import CallToAction from "../Hero";
import Header from "./Header";

export default function HeroNavBGStandard() {
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
    </div>
  );
}
