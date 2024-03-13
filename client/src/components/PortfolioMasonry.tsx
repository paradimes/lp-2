type Project = {
  id: number;
  title: string;
  description: string;
  projectImg: string;
};

type PortfolioMasonryProps = {
  projects: Project[];
};

export default function PortfolioMasonry({ projects }: PortfolioMasonryProps) {
  return (
    <div className="masonry columns-1 md:columns-2 lg:columns-3  gap-x-4 m-5 md:m-10  ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="masonry-item break-inside-avoid mb-4 bg-stone-200 hover:bg-stone-300 rounded-lg p-4"
        >
          <h3 className="font-bold hover:underline">{project.title}</h3>
          <p>{project.description}</p>
          <img
            className="w-full object-cover rounded-3xl mt-3"
            src={project.projectImg}
            alt={project.title}
          />
        </div>
      ))}
    </div>
  );
}
