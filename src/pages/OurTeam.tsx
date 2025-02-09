import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tayyab Farooq",
    role: "President/Founder",
    image: "/images/tayyab.jpeg"
  },
  {
    name: "Muhammad Sahil",
    role: "Vice President",
    image: "/images/sahil.jpeg"
  },
  {
    name: "Salman Mustansar",
    role: "General Secretary",
    image: "/images/salman.jpeg"
  },
  {
    name: "Noor Kashaf",
    role: "Director Media and IT",
    image: "/images/kashaf.jpg"
  },
  {
    name: "Maheen Ahmed Butt",
    role: "Finance Secretary",
    image: "/images/maheen.jpg"
  },
  {
    name: "Ghufran Ahmed",
    role: "Director Research and Development",
    image: "/images/ghufran.jpg"
  },
  {
    name: "Nur Shafaq",
    role: "Activities Coordinator",
    image: "/images/shafaq1.jpg"
  },
  {
    name: "Aun Hashmi",
    role: "Public Relations",
    image: "/images/aun.jpg"
  }
];

const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-primary mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;