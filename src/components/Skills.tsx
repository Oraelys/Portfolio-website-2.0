import  { useEffect, useRef, useState } from 'react';
import { Code2, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React/TypeScript', level: 75 },
        { name: 'React Native', level: 75 },
        { name: 'Next.js', level: 60 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'Fire base', level: 60},
        { name: 'Node.js/Express', level: 65 }
      ]
    },
    {
      icon: Terminal,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma / UI Prototyping', level: 70 }
      ]
    }
  ];
  

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications across various domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`group bg-surface p-8 rounded-2xl shadow-sm border border-border-light hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-surface-secondary group-hover:scale-110 transition-transform duration-200">
                    <category.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary ml-4">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-text-secondary">{skill.name}</span>
                        <span className="text-sm text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? 'animate-slideInLeft' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp animation-delay-1000' : ''}`}>
            <h3 className="text-2xl font-bold text-text-primary mb-8">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface p-6 rounded-lg shadow-sm border border-border-light hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-text-primary mb-2">Data Analysis with Python</h4>
                <p className="text-primary-600 font-medium">FreeCodeCamp</p>
                <p className="text-sm text-text-muted">Advanced certification in Python data analysis</p>
              </div>
              <div className="bg-surface p-6 rounded-lg shadow-sm border border-border-light hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-text-primary mb-2">Blockchain Development</h4>
                <p className="text-primary-600 font-medium">Self-Taught Expert</p>
                <p className="text-sm text-text-muted">Extensive experience with Solana and Ethereum</p>
              </div>
              <div className="bg-surface p-6 rounded-lg shadow-sm border border-border-light hover:shadow-md transition-shadow duration-200">
                <h4 className="font-bold text-text-primary mb-2">Research Publications</h4>
                <p className="text-primary-600 font-medium">MDPI & Synapse</p>
                <p className="text-sm text-text-muted">Published researcher in medical technology</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;