
import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Globe,
  Coins,
  Smartphone,
} from 'lucide-react';
import ProjectGroup from './ProjectGroup';
import { projects, projectGroups } from '../data/projects';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'blockchain', label: 'Blockchain', icon: Coins },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A showcase of projects spanning mobile apps, blockchain, and web
              development.
            </p>
          </div>

          {/* Project Groups */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-text-primary mb-2 text-center">
              Product Ecosystems
            </h3>
            <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
              Larger products built as a family of apps sharing one backend.
            </p>
            <div className="space-y-10">
              {projectGroups.map((group) => (
                <ProjectGroup key={group.id} group={group} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Highlighted Work
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group card-featured overflow-hidden block cursor-pointer ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-8">
                    <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h4>

                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      {project.liveUrl && (
                        <span className="flex items-center text-primary-600 group-hover:text-primary-700 text-sm font-medium transition-colors duration-200">
                          <ExternalLink size={18} className="mr-2" />
                          Live
                        </span>
                      )}

                      {project.githubUrl && (
                        <span
                          role="link"
                          className="flex items-center text-text-secondary hover:text-text-primary font-medium transition-colors duration-200"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            window.open(
                              project.githubUrl,
                              '_blank',
                              'noopener,noreferrer'
                            );
                          }}
                        >
                          <Github size={18} className="mr-2" />
                          Code
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-surface text-text-secondary border border-border hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                <filter.icon size={18} className="mr-2" />
                {filter.label}
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group card overflow-hidden block cursor-pointer ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h4>

                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    {project.liveUrl && (
                      <span className="flex items-center text-blue-600 group-hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </span>
                    )}

                    {project.githubUrl && (
                      <span
                        role="link"
                        className="flex items-center text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          window.open(
                            project.githubUrl,
                            '_blank',
                            'noopener,noreferrer'
                          );
                        }}
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
