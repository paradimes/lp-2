import bg from "../assets/servicesBg.jpeg";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Header from "../components/common/Header";

export default function ServicesPage() {
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
        title="Elevate Your Space, Embrace Innovation"
        description="At ArchitectsYYZ, we blend creativity with functionality to bring your vision to life. Our dedicated team offers a comprehensive suite of services designed to meet every aspect of your architectural and design needs. Explore our services below to see how we can transform your space into a masterpiece of form and function."
        showButton={false}
      />
      <ServicesSection />
    </div>
  );
}
