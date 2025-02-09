import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>contact@universalcare.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>+92 327 8834129</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>Al-Hafeez Centre 89-A, Gulberg III, Lahore, Pakistan</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;