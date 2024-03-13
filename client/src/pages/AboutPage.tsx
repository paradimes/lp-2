/* eslint-disable @typescript-eslint/no-unused-vars */
import bg from "../assets/homeBg.jpeg";
import Header from "../components/common/Header";

export default function AboutPage() {
  return (
    <div>
      <div
        id="background-section"
        className="w-full h-[75vh] bg-cover bg-center flex items-start justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
      </div>

      <div className="flex flex-row w-full gap-10 px-10 py-4">
        <h1 className="text-7xl border-2 border-black">ABOUT</h1>
        <p className=" border-2 border-red-500">
          This is the body text that explains more about the service or product.
          It's arranged below the big header text, providing visitors with
          essential information in an engaging manner.
        </p>
      </div>
    </div>
  );
}
