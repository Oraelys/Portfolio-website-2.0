
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-noise"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
            <span className="gradient-text">
              Alan Amos
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary mb-4 animate-fadeInUp animation-delay-200">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-400">
            Passionate about creating innovative solutions through full-stack development 
             and artificial intelligence. Building the future, one line of code at a time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeInUp animation-delay-600">
            <button
              onClick={scrollToAbout}
              className="btn-primary px-8 py-3"
            >
              Learn More About Me
            </button>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary px-8 py-3"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 animate-fadeInUp animation-delay-800">
            <a
              href="https://github.com/oraelys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:alanamos0001@gmail.com"
              className="text-text-secondary hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-text-muted hover:text-primary-600 transition-colors duration-200" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;