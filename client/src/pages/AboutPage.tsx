import bg from "../assets/team.jpeg";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <div>
      <div
        id="background-section"
        className=" h-[75vh] bg-cover bg-center flex items-start justify-center m-2 rounded-xl box-border"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
      </div>

      <Hero title="About Us" description="" showButton={false} />

      <AboutSection />
    </div>
  );
}
