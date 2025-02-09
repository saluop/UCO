import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">About Us</h1>
      <div className="prose max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          Universal Care Organization is a non-profit organization dedicated to making a positive impact
          in communities worldwide. Since our establishment, we have been working tirelessly to provide
          support and resources to those in need.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our organization brings together passionate individuals who believe in the power of
          collective action to create meaningful change. Through various initiatives and programs,
          we strive to address critical social issues and improve lives.
        </p>
        <p className="text-lg text-gray-700">
          We believe that everyone deserves access to essential resources and support. Our work
          spans across multiple areas including healthcare, education, and community development,
          all aimed at creating a more equitable and caring world.
        </p>
      </div>
    </div>
  );
};

export default About;