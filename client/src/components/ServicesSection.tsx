import { services } from "../resources";
import backgroundImage from "../assets/service-card-design.svg";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  backgroundImage: string;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const ServiceCard = ({
  title,
  description,
  backgroundImage,
  index,
}: ServiceCardProps) => (
  <motion.div
    className="relative p-4 rounded-lg m-2 overflow-hidden shadow-lg"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={index}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
  >
    {/* Background Image Container */}
    <div className="absolute inset-0 opacity-35">
      <img
        src={backgroundImage}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    {/* Content */}
    <div className="relative z-10 flex flex-col gap-1">
      <h3 className="mt-4 text-lg font-bold text-left hover:underline ">
        {title}
      </h3>
      <p className="text-left leading-snug">{description}</p>
    </div>
  </motion.div>
);

export default function ServicesSection() {
  return (
    <div
      id="services-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-5 justify-center gap-6 p-4 text-center my-8 rounded-lg bg-stone-100  mx-5 lg:mx-10"
    >
      {services.map((service) => (
        <ServiceCard
          index={service.id}
          key={service.id}
          {...service}
          backgroundImage={backgroundImage}
        />
      ))}
    </div>
  );
}
