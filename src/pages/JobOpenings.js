import React from 'react';

function JobOpenings({ t }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/officehero.png')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t?.jobOpeningsPage?.heroTitle || 'Job Openings'}
          </h1>
          <p className="text-xl sm:text-2xl">
            {t?.jobOpeningsPage?.heroSubtitle || 'Join our team and help us make a difference.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">
            {t?.jobOpeningsPage?.currentOpeningsTitle || 'Current Openings'}
          </h2>

          <div className="bg-white shadow rounded-lg p-6 max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {t?.jobOpeningsPage?.spanishMedAssistantTitle || 'Spanish Medical Assistant / Front Desk'}
            </h3>
            <p className="text-gray-700 mb-4">
              {t?.jobOpeningsPage?.spanishMedAssistantDescription ||
                'We are seeking a bilingual Spanish Medical Assistant / Front Desk team member to join our clinic.'}
            </p>
            <a
              href="https://www.indeed.com/viewjob?cmp=Mind-and-body-pain-clinic&t=Front+Desk+Agent&jk=bd32e4529a226d23&xpse=SoCM67I3m8RKo-wUgB0LbzkdCdPP&xfps=53c210fb-b39c-474d-9425-874e17b8d7cf&xkcb=SoD667M3m8ROXAyg4h0LbzkdCdPP&vjs=3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#255064] hover:bg-[#1d3e4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#255064]"
            >
              {t?.jobOpeningsPage?.viewOnIndeedCta || 'View full job posting & apply on Indeed'}
            </a>
          </div>
        </div>
      </main>
 
    </>
  );
}

export default JobOpenings;


