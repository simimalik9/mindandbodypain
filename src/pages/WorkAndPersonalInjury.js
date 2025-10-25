import React from 'react';

const WorkAndPersonalInjury = ({ t }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/PIbackground.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t?.workInjuryPage?.heroTitle || 'Work and Personal Injury'}
          </h1>
          <p className="text-xl sm:text-2xl">
            {t?.workInjuryPage?.heroSubtitle || 'Specialized medical care for work and personal injury cases.'}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.servicesTitle || 'Our Services'}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t?.workInjuryPage?.servicesIntro || 'We provide comprehensive medical evaluation, diagnosis, and treatment services for work-related injuries and personal injury cases.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Evaluation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.cards?.evalTitle || 'Comprehensive Medical Evaluation'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t?.workInjuryPage?.cards?.evalDesc || "Thorough assessment of injuries sustained in accidents or work-related incidents, including physical examinations, referrals for diagnostic imaging, and detailed medical documentation for personal injury and workers' compensation cases."}
              </p>
            </div>

            {/* Pain Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.cards?.painTitle || 'Pain Management Treatment'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t?.workInjuryPage?.cards?.painDesc || 'Specialized pain management protocols for accident-related injuries, including medication management, interventional procedures, and multimodal pain relief strategies.'}
              </p>
            </div>

            {/* Neurological Treatment */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.cards?.neuroTitle || 'Neurological Treatment'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t?.workInjuryPage?.cards?.neuroDesc || 'Specialized treatment for neurological conditions resulting from personal injuries, such as concussions, nerve damage, and traumatic brain injuries.'}
              </p>
            </div>

            {/* Rehabilitation Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.cards?.rehabTitle || 'Rehabilitation Services'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t?.workInjuryPage?.cards?.rehabDesc || 'Coordinated referral to rehabilitation programs including physical therapy and specialized treatment to maximize recovery from accident-related injuries.'}
              </p>
            </div>

            {/* Legal Documentation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.cards?.legalDocsTitle || 'Legal Documentation Support'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t?.workInjuryPage?.cards?.legalDocsDesc || "Detailed medical reports, progress notes, and expert testimony support for personal injury and workers' compensation cases. We provide comprehensive documentation supporting patients, plaintiffs, and defense in legal proceedings."}
              </p>
            </div>

            {/* Coordination with Legal Team */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.cards?.legalCoordTitle || 'Legal Team Coordination'}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t?.workInjuryPage?.cards?.legalCoordDesc || "Seamless coordination with attorneys and legal professionals to provide timely medical updates, expert opinions, and comprehensive documentation for personal injury and workers' compensation case resolution. We work with patients, plaintiffs, and defense attorneys."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Forms Section */}
      <section className="relative bg-cover bg-center py-16" style={{ backgroundImage: "url('/tealbackground.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{t?.workInjuryPage?.downloadsTitle || 'Downloadable Forms'}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t?.workInjuryPage?.downloadsIntro || 'Download the forms you need before your appointment.'}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Reg 2025.pdf"
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.registration || 'Registration Form'}
              </a>
              <a
                href="/Referral MBPC.docx.pdf"
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.referral || 'Physician Referral Form'}
              </a>
              <a
                href="/Records Release To MBPC.docx.pdf"
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.releaseTo || 'Release Records TO Mind and Body Pain Clinic'}
              </a>
              <a
                href="/Records Release from MBPC.pdf"
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.releaseFrom || 'Release Records FROM Mind and Body Pain Clinic'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkAndPersonalInjury;
