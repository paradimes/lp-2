import bg from "../assets/bg.png";
import Hero from "../components/Hero";
import Header from "../components/common/Header";

export default function PortfolioPage() {
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
        title="Transforming visions into reality"
        description="Discover the cornerstone of our creativity and expertise through our curated collection of projects. Each design in our portfolio represents a unique fusion of functionality, innovation, and aesthetic excellence, meticulously tailored to meet the specific needs and aspirations of our clients. From sleek modern homes to dynamic commercial spaces, our portfolio showcases our commitment to pushing boundaries and crafting environments that inspire."
      />
    </div>
  );
}
