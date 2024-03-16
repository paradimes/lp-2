import { aboutArray } from "@/resources";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

type AboutGridCardProps = {
  title: string;
  description: string;
  index: number;
};

const AboutGridCard = ({ title, description, index }: AboutGridCardProps) => {
  return (
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p>{description}</p>
    </motion.section>
  );
};

export default function AboutSection() {
  return (
    <motion.div
      className="about-page mx-5 md:mx-10 mb-8 py-4"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutArray.map((card) => (
          <AboutGridCard index={card.id} key={card.id} {...card} />
        ))}
      </div>
    </motion.div>
  );
}
