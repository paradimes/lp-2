import { services } from "../resources";

type ServiceCardProps = {
  title: string;
  description: string;
  //   icon: string;
};

const ServiceCard = ({ title, description }: ServiceCardProps) => (
  <div
    id="service-card"
    className="p-4 bg-stone-200 rounded-lg border-2 border-black shadow-md duration-200 hover:-translate-y-2.5 flex flex-col gap-1	 "
  >
    {/* <img src={icon} alt={title} className=" w-12 h-12 my-0 mx-auto" /> */}
    <h3 className="mt-4 text-left text-lg font-bold  hover:underline">
      {title}
    </h3>
    <p className="text-left leading-snug">{description}</p>
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
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
