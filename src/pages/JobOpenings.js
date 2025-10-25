import React from 'react';

function JobOpenings() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/officehero.png')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Job Openings
          </h1>
          <p className="text-xl sm:text-2xl">
            Join our team and help us make a difference.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">Current Openings</h2>
            <p className="text-gray-600">We do not have any job openings at the moment. Please check back later.</p>
        </div>
      </main>
 
    </>
  );
}

export default JobOpenings;


