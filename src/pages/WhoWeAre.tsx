import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary">Who We Are?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/hm2 (2).jpg"
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
        <p className="text-lg text-gray-700">
  Our organization is powered by passionate university students who bring their energy, creativity, and knowledge to make a positive impact. These young changemakers are at the heart of our mission, contributing fresh perspectives and innovative solutions to tackle community challenges.
</p>
<p className="text-lg text-gray-700">
  Founded with the spirit of compassion and service, Universal Care Organization thrives on the enthusiasm of these student volunteers. From organizing outreach events to leading social initiatives, they play a vital role in driving our projects forward.
</p>
<p className="text-lg text-gray-700">
  Together with our diverse team, we are committed to creating sustainable solutions that address both immediate needs and long-term challenges. With the dedication and energy of university students, we continue to build a brighter, more compassionate future.
</p>

        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;