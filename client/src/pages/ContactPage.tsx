import bg from "../assets/about.jpeg";
import ContactForm from "../components/Form/ContactForm";
import Hero from "../components/Hero";
import Header from "../components/common/Header";

export default function ContactPage() {
  return (
    <div>
      <div
        id="background-section"
        className=" h-[75vh] bg-cover bg-center flex items-start justify-center m-2 rounded-xl box-border"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Header />
      </div>

      <Hero title="Contact Us" description="" showButton={false} />

      <div id="form" className="mx-5 md:mx-10 mb-8">
        <ContactForm />
      </div>
    </div>
  );
}
