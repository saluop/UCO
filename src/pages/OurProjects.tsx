import React from 'react';
import { Calendar, Heart, BookOpen, Home } from 'lucide-react';

const projects = [
  {
    title: "Healthcare Access Initiative",
    description: "Providing medical care and health education to underserved communities.",
    icon: Heart,
    image: "/images/health.jpeg"
  },
  {
    title: "Education for All",
    description: "Supporting students with resources and mentorship programs.",
    icon: BookOpen,
    image: "/images/school.jpeg"
  },
  {
    title: "Community Housing Project",
    description: "Building and renovating homes for families in need.",
    icon: Home,
    image: "/images/house1.jpeg"
  },
  {
    title: "Anti-child Labour Program",
    description: "Empowering young people through skills training and leadership development.",
    icon: Calendar,
    image: "/images/hm2 (3).jpg"
  }
];

const OurProjects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProjects;