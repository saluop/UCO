import React from 'react';
import { ArrowRight, Users, Target, Award, BarChart as ChartBar } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { number: '10K+', label: 'Lives Impacted', icon: Users },
  { number: '50+', label: 'Active Projects', icon: Target },
  { number: '9+', label: 'Years of Service', icon: Award },
  { number: '95%', label: 'Funds to Programs', icon: ChartBar },
];

const Home = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <img
          src="/images/hm2 (1).jpg"
          alt="People helping people"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/80 to-primary-dark/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Making a Difference Together</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow">
              Universal Care Organization is dedicated to creating positive change
              through compassion, dedication, and community service.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center px-6 py-3 bg-primary-light text-white rounded-md hover:bg-primary transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Make a Donation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-secondary-light mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide care and support to those in need, creating lasting positive
              impact in communities worldwide.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-secondary-light mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where every individual has access to the care and resources
              they need to thrive.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-secondary-light mb-4">Our Values</h3>
            <p className="text-gray-600">
              Compassion, integrity, and dedication guide everything we do in
              service of others.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through the generous support of our donors and the dedication of our volunteers,
              we've been able to make a significant impact in communities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="h-8 w-8 text-primary-light mx-auto mb-4" />
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
                <p className="text-white/90 mb-6">
                  Your support can help us reach more communities and create lasting change.
                  Together, we can make a difference in the lives of those who need it most.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="/images/hm3.jpeg"
                  alt="Volunteers working together"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;