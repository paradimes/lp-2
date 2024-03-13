import { services } from "../resources";
import backgroundImage from "../assets/service-card-design.svg";

type ServiceCardProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

const ServiceCard = ({
  title,
  description,
  backgroundImage,
}: ServiceCardProps) => (
  <div className="relative p-4 rounded-lg m-2 overflow-hidden shadow-lg duration-200 hover:-translate-y-2.5 ">
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
  </div>
);

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="text-center my-8 rounded-lg bg-stone-100  mx-5 lg:mx-10"
    >
      <div
        id="services-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center gap-6 p-4"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            backgroundImage={backgroundImage}
          />
        ))}
      </div>
    </section>
  );
}
