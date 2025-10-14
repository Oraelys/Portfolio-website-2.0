import 
// React, 
{ useEffect, useRef, useState } from 'react';
import { Code,  Brain,
// Users, Trophy, Lightbulb, Database,Server 
} from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Developer',
      description: 'Expertise in React, Node.js and modern web technologies'
    },
    // {
    //   icon: Server,
    //   title: 'CTO & System Architect',
    //   description: 'Promoted to CTO after building secure, scalable systems and leading technical teams'
    // },
    // {
    //   icon: Database,
    //   title: 'Food Delivery Platforms',
    //   description: 'Designed and deployed a multi-restaurant food delivery system with dedicated driver and user applications.'
    // },
    {
      icon: Brain,
      title: 'AI & Research Contributor',
      description: 'Efficient in using AI to generate solutions'
    },
    // {
    //   icon: Users,
    //   title: 'Team & Product Leadership',
    //   description: 'Founder & CEO of BlockchainSDK, leading strategy, operations, and fundraising'
    // },
    // {
    //   icon: Trophy,
    //   title: 'Blockchain & Web3 Developer',
    //   description: 'Built smart contracts and Web3 apps including token mechanics and integrations'
    // },
    // {
    //   icon: Lightbulb,
    //   title: 'Innovator & Problem Solver',
    //   description: 'Consistently delivering impactful technical solutions in startups and research'
    // }
  ];

  const experiences = [
    {
      title: 'Front-end Developer',
      company: 'Notty',
      period: '2023 - Present',
      description: 'Promoted from Core Backend Developer to CTO after building secure, scalable systems. Designed and maintained DRS systems and authentication flows.'
    },
    {
      title: 'Front-end Developer',
      company: 'Ovena (Startup)',
      period: ' 0ct0ber 2025 - Present',
      description: 'Built the backend for a food delivery platform (multi-restaurant, drivers, users) like Chowdeck. Integrated Paystack (payments), Mailchimp (SMS), GCP (OAuth), and Termii (OTP).'
    },
    {
      title: 'Front-end Developer (Freelance)',
      company: 'What??',
      period: '2020',
      description: 'Built “What the Burn”, a Web3 app for token burning mechanics. Designed backend infrastructure, developed smart contracts, and integrated frontend with blockchain.'
    },
    {
      title: 'Front-end Development tutor',
      company: 'Netisens Ict hub',
      period: 'Present',
      description: 'Oversaw development of internal and customer-facing apps. Built NovenaDB, an inventory system that improved visibility and shopping experience.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Passionate Software Engineer & 
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                I'm Alan Amos, a dedicated software engineer with a passion for creating innovative 
                digital solutions. With extensive experience in full-stack development, blockchain technology, 
                and artificial intelligence, I specialize in transforming complex ideas into elegant, 
                scalable applications.
              </p>

              <p className="text-text-secondary leading-relaxed">
                My journey in technology began with a curiosity for how things work and has evolved into 
                a career focused on building meaningful software that makes a difference. I thrive in 
                collaborative environments where I can mentor other developers while continuously learning 
                and adapting to emerging technologies.
              </p>

              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
                projects, or sharing knowledge through technical writing and community engagement. I believe 
                in the power of technology to solve real-world problems and am committed to creating solutions 
                that are both technically excellent and user-centered.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105
                    bg-surface-secondary border-border
                    ${isVisible ? 'animate-fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <highlight.icon className="w-8 h-8 text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <h4 className="font-semibold text-text-primary mb-2">{highlight.title}</h4>
                  <p className="text-sm text-text-secondary">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Professional Journey</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 ${
                    isVisible ? 'animate-slideInLeft' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-primary-600 rounded-full"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-1 top-3 w-0.5 h-16 bg-border"></div>
                  )}
                  <div className="bg-surface p-6 rounded-lg shadow-sm border border-border-light hover:shadow-md transition-shadow duration-200">
                    <h4 className="text-lg font-bold text-text-primary">{exp.title}</h4>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-text-muted mb-2">{exp.period}</p>
                    <p className="text-text-secondary">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;