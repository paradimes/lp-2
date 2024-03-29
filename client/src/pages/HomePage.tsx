import bg from "../assets/homeBg.jpeg";
import Hero from "../components/Hero";
import Header from "../components/Header";

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

      <Hero
        title="Visionaries of form, masters of light"
        description="At ArchitectsNYC, we merge innovation with elegance to sculpt spaces that resonate with modern living yet stand timeless. Our dedication to sustainable design and meticulous attention to detail ensures every project is not just a structure, but a landmark of beauty and functionality. We're shaping the future, one space at a time."
        buttonTitle="Start your project today"
        showButton={true}
        link="contact"
      />
    </div>
  );
}
