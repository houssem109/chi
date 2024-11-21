import Footer from "../shared/Footer";
import Nav from "../shared/Nav";
import { SliverText } from "../ui/silver-text";
import ProjectCard from "./ProjectCard";

const ProjectsPage: React.FC = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'Description of project 1 goes here.',
        photos: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/250',
          'https://via.placeholder.com/350',
        ],
      },
      {
        title: 'Project 2',
        description: 'Description of project 2 goes here.',
        photos: [
          'https://via.placeholder.com/350',
          'https://via.placeholder.com/450',
          'https://via.placeholder.com/550',
        ],
      },
      // Add more projects as needed
    ];    
  
    return (
      <main className="overflow-hidden p-0 w-full dark:bg-neutral-950 bg-white dark:bg-grid-white/5 bg-grid-black/[0.2] relative">
        <Nav />
        <div className="max-w-[1700px] mx-auto relative mb-10 pt-5 xl:px-[80px] mt-0 sm:px-[40px] px-4 min-h-[calc(100vh-60px)] flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <SliverText className="text-4xl font-bold">Projects</SliverText>
            <button className="text-neutral-200 bg-emerald-500 active:scale-100 transition-all bg-gradient-to-tr from-emerald-600 to-emerald-700 py-2 text-[16px] px-10 font-sans font-semibold rounded-md hover:from-neutral-300 hover:to-neutral-400 hover:text-black shadow-[0px_0px_20px_#05966988]">
              Add Project
            </button>
          </div>
  
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                photos={project.photos} // Passing the array of photos here
              />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    );
  };
  export default ProjectsPage;