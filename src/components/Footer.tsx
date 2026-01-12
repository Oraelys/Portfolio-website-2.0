import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Peter Ben Ajuga</h3>
            <p className="text-gray-300 leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              through technology and continuous learning.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/phanstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:ajugapeterben@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 mx-2 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {currentYear} Alan Amos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;