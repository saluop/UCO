import React from 'react';
import { CreditCard, DollarSign, Heart, Building2 } from 'lucide-react';

const Donate = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">Make a Donation</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-12 w-12 text-primary-light" />
          </div>

          <p className="text-center text-lg text-gray-700 mb-8">
            Your donation helps us continue our mission of providing care and support
            to those in need. Every contribution makes a difference.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[25, 50, 100].map((amount) => (
              <button
                key={amount}
                className="flex items-center justify-center px-4 py-3 border-2 border-primary-light text-primary-light rounded-md hover:bg-primary-light hover:text-white transition-all duration-200"
              >
                <DollarSign className="h-4 w-4 mr-1" />
                {amount}
              </button>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Custom Amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  className="focus:ring-primary-light focus:border-primary-light block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
              </div>
            </div>

            <button className="w-full flex items-center justify-center px-6 py-3 bg-primary-light text-white rounded-md hover:bg-primary transition-colors duration-200 shadow-md hover:shadow-lg">
              <CreditCard className="h-5 w-5 mr-2" />
              Donate Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Bank Transfer Details</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-3">
                  <Building2 className="h-5 w-5 text-primary-light mr-2" />
                  <h3 className="font-semibold">Domestic Transfers</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Bank Name:</span> Bank Al-Falah</p>
                  <p><span className="font-medium">Account Name:</span> Muhammad Tayyab</p>
                  <p><span className="font-medium">Account Number:</span> 05920118903523</p>
                  <p><span className="font-medium">Swift Code:</span> ALFHPKKAXXX</p>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-md">
              <p>
                Please include your name and "Donation" in the transfer reference. For tax deduction receipts, 
                email your transfer confirmation to <a href="mailto:donations@universalcare.org" className="text-primary hover:underline">donations@universalcare.org</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
