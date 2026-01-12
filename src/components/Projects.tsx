import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Globe, Coins, Brain, Wrench } from 'lucide-react';

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

  const projects = [
    // 🚀 Flagship Projects
    {
      id: 1,
      title: 'Notty Terminal',
      description: 'A revolutionary permissionless launchpad powered by a Dynamic Reputation System (DRS). Notty transforms on-chain behavior into verifiable reputation and trust, solving the rug-pull problem by creating a transparent ecosystem where every wallet builds a reputation based on real activity.',
      category: 'blockchain',
      technologies: ['Solana', 'Rust', 'Anchor', 'React', 'Web3.js'],
      image: 'https://raw.githubusercontent.com/NimrodTheDev/Notty-Terminal/refs/heads/main/public/Hero2.png?w=800',
      liveUrl: 'https://solana-market-place.onrender.com/',
      githubUrl: 'https://github.com/NimrodTheDev/Notty-Terminal',
      featured: true
    },
    {
      id: 2,
      title: 'What The Burn',
      description: 'A full-stack Web3 platform featuring a unique burn-to-claim mechanic. Users burn tokens to increase scarcity, dynamically upgrade NFTs, and boost overall collection value. I built the Solidity smart contracts, Django backend, and integrated the frontend with RainbowKit for wallet authentication.',
      category: 'blockchain',
      technologies: ['Solidity', 'Django', 'React', 'RainbowKit', 'Web3.js'],
      image: 'https://raw.githubusercontent.com/phanstudio/What-the-burn/refs/heads/main/public/what.png?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      liveUrl: 'https://what-the-burn.vercel.app/',
      githubUrl: 'https://github.com/phanstudio/What-the-burn',
      featured: true
    },
    
    {
      id: 3,
      title: 'Ovena',
      description: 'A multi-restaurant food delivery platform with driver and user applications. Designed and deployed scalable backend infrastructure, integrating Paystack for payments, Mailchimp for SMS notifications, Termii for OTP verification, and GCP OAuth for secure authentication.',
      category: 'web',
      technologies: ['Django', 'PostgreSQL', 'React', 'GCP', 'Paystack'],
      image: 'https://github.com/phanstudio/ovena/blob/dev/public/food2.png?raw=true&auto=compress&cs=tinysrgb',
      featured: true
    },
    {
      id: 4,
      title: 'Habit Tracker App',
      description: 'An simple but effective application for tracking desired habits on a daily, weekly or monthly basis. User friendly design. React and React-Native for the App structure and Appwrite for user authentication and data storage.',
      category: 'web',
      technologies: ['React', 'React Native', 'Appwrite'],
      image: 'https://raw.githubusercontent.com/oraelys/Habit-Tracker-app/main/assets/images/Habittrackerimage.jpg',
      featured: true
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'blockchain', label: 'Blockchain', icon: Coins },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'ai', label: 'AI/ML', icon: Brain },
    { id: 'tools', label: 'Tools', icon: Wrench }
  ];
  

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A showcase of innovative projects spanning blockchain, AI, web development, and automation tools
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Highlighted Work</h3>
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
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
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
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="flex items-center text-text-secondary hover:text-text-primary font-medium transition-colors duration-200 cursor-pointer"
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </span>
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
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
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
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="flex items-center text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 cursor-pointer"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;