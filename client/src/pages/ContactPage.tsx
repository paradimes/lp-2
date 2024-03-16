import bg from "../assets/about.jpeg";
import ContactForm from "../components/Form/ContactForm";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { motion } from "framer-motion";

const fadeInVariant = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
};

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

      <motion.div
        id="form"
        className="mx-5 md:mx-10 mb-8"
        variants={fadeInVariant}
        initial="initial"
        animate="animate"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
