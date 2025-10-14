import 
// React,
 { useEffect, useRef, useState } from 'react';
import { BookOpen, Calendar, ExternalLink, Award } from 'lucide-react';

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const publications = [
    {
      title: 'Enhancing the Interpretability of Malaria and Typhoid Diagnosis with Explainable AI and Large Language Models',
      journal: 'MDPI - Healthcare',
      year: '2024',
      description: 'Malaria and Typhoid fever are prevalent diseases in tropical regions, and both are exacerbated by unclear protocols, drug resistance, and environmental factors. Prompt and accurate diagnosis is crucial to improve accessibility and reduce mortality rates.',
      url: 'https://www.mdpi.com/2414-6366/9/9/216',
      type: 'Research Paper',
      citations: 12
    },
    {
      title: 'Developing an Explainable Artificial Intelligence System for the Mobile-Based Diagnosis of Febrile Diseases Using Random Forest, LIME, and GPT',
      journal: 'Synapse Medical Journal',
      year: '2024',
      description: 'This study proposes a mobile-based explainable artificial intelligence (XAI) platform designed for diagnosing febrile illnesses.',
      url: 'https://synapse.koreamed.org/articles/1516090744',
      type: 'Research Paper',
      citations: 8
    }
  ];

  const achievements = [
    {
      title: 'Data Analysis with Python Certification',
      issuer: 'FreeCodeCamp',
      year: '2024',
      description: 'Advanced certification covering data manipulation, analysis, and visualization with Python.',
      url: 'https://www.freecodecamp.org/certification/peterben/data-analysis-with-python-v7',
      icon: Award
    },
    {
      title: 'Open Source Contributor',
      issuer: 'GitHub',
      year: '2020-Present',
      description: 'Active contributor to various open-source projects in blockchain and web development.',
      url: 'https://github.com/phanstudio',
      icon: BookOpen
    }
  ];

  return (
    <section id="publications" ref={sectionRef} className="py-20 bg-gradient-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Publications & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Research contributions and professional achievements in technology and innovation
            </p>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Research Publications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className={`group bg-surface p-8 rounded-2xl shadow-sm border border-border-light hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-surface-secondary group-hover:scale-110 transition-transform duration-200">
                      <BookOpen className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                      {pub.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {pub.title}
                  </h4>
                  
                  <div className="flex items-center text-text-muted text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium text-primary-600">{pub.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{pub.year}</span>
                    <span className="mx-2">•</span>
                    <span>{pub.citations} citations</span>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">{pub.description}</p>

                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Read Publication
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`group bg-surface p-8 rounded-2xl shadow-sm border border-border-light hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: `${(publications.length * 200) + (index * 200)}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent-50 group-hover:scale-110 transition-transform duration-200">
                      <achievement.icon className="w-6 h-6 text-accent-600" />
                    </div>
                    <span className="text-sm text-accent-600 font-medium bg-accent-50 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-600 transition-colors duration-200">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-primary-600 font-medium mb-3">{achievement.issuer}</p>
                  <p className="text-text-secondary mb-6 leading-relaxed">{achievement.description}</p>

                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;