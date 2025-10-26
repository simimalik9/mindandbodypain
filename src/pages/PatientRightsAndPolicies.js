import React from 'react';

function PatientRightsAndPolicies({ t }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/patientrightshero.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t?.patientRights?.heroTitle || 'Patient Rights and Policies'}
          </h1>
          <p className="text-xl sm:text-2xl">
            {t?.patientRights?.heroSubtitle || 'We are committed to providing quality care and ensuring you are informed of your rights and our policies.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Patient Rights & Responsibilities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t?.patientRights?.rightsTitle || 'Patient Rights & Responsibilities'}</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t?.patientRights?.rightsIntro || 'We are committed to ensuring you receive the highest quality of care. As a patient, you have rights, and we also ask that you adhere to certain responsibilities to ensure the best possible care for everyone.'}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Rights Card 1 */}
              <div className="bg-gray-50 p-6 border border-gray-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.qualityCareLabel || 'Quality Care:'}</strong> {t?.patientRights?.qualityCare || 'Receive high-quality, professional medical care in a safe environment.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.informationLabel || 'Information:'}</strong> {t?.patientRights?.information || 'Receive clear information about your diagnosis, treatment, and options.'}</span>
                  </li>
                </ul>
              </div>

              {/* Rights Card 2 */}
              <div className="bg-gray-50 p-6 border border-gray-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.privacyLabel || 'Privacy:'}</strong> {t?.patientRights?.privacy || 'Have your medical information kept confidential and private.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.respectLabel || 'Respect:'}</strong> {t?.patientRights?.respect || 'Be treated with dignity and respect at all times.'}</span>
                  </li>
                </ul>
              </div>

              {/* Rights Card 3 */}
              <div className="bg-gray-50 p-6 border border-gray-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.consentLabel || 'Consent:'}</strong> {t?.patientRights?.consent || 'Give informed consent for any treatment and refuse treatment if you choose.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.voiceConcernsLabel || 'Voice Concerns:'}</strong> {t?.patientRights?.voiceConcerns || 'Voice any complaints and have them addressed respectfully.'}</span>
                  </li>
                </ul>
              </div>

              {/* Responsibilities Card 1 */}
              <div className="bg-gray-50 p-6 border border-gray-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.provideInfoLabel || 'Provide Accurate Information:'}</strong> {t?.patientRights?.provideInfo || 'Share a complete and accurate medical history.'}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm leading-relaxed"><strong>{t?.patientRights?.financialLabel || 'Fulfill Financial Obligations:'}</strong> {t?.patientRights?.financial || 'Fulfill all financial obligations for services received.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-20 bg-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{t?.patientRights?.policiesTitle || 'Our Policies'}</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {t?.patientRights?.policiesIntro || 'We maintain clear policies to ensure consistent, high-quality care and a positive experience for all patients.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                               {/* Appointment Necessities */}
                <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{t?.patientRights?.apptTitle || 'Appointment Necessities'}</h3>
                 <p className="text-gray-700 leading-relaxed text-sm mb-4">
                   {t?.patientRights?.apptIntro || 'Please bring the following items to your appointment to ensure we can provide you with the best possible care:'}
                 </p>
                 <ul className="text-gray-700 leading-relaxed text-sm space-y-2">
                   <li>• {t?.patientRights?.apptItem1 || "All Insurance/Worker's Compensation Information"}</li>
                   <li>• {t?.patientRights?.apptItem2 || 'Insurance Authorization (if you have HMO insurance)'}</li>
                   <li>• {t?.patientRights?.apptItem3 || 'All relevant progress notes from your referring health care provider'}</li>
                   <li>• {t?.patientRights?.apptItem4 || 'Any imaging studies (MRIs, x-rays, etc.) labs and other studies (EMG, etc.)'}</li>
                   <li>• {t?.patientRights?.apptItem5 || 'Any copay in cash or check'}</li>
                   <li><strong>• {t?.patientRights?.apptItem6 || 'We do not accept debit cards'}</strong></li>
                 </ul>
               </div>

                               {/* Insurance Information */}
                <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{t?.patientRights?.insTitle || 'Insurance Information'}</h3>
                 <p className="text-gray-700 leading-relaxed text-sm mb-4">
                   {t?.patientRights?.insIntro || "We accept Medicare, Worker's Compensation, QME patients, and most insurance plans. Currently we are contracted with the following insurances:"}
                 </p>
                 <div className="grid md:grid-cols-2 gap-4 mb-4">
                 <ul className="text-gray-700 leading-relaxed text-sm space-y-1">
                   <li>• Aetna</li>
                   <li>• Blue Cross</li>
                   <li>• Blue Shield</li>
                   <li>• Cigna</li>
                   <li>• Medicare</li>
                 </ul>
                 <ul className="text-gray-700 leading-relaxed text-sm space-y-1">
                   <li>• Coventry / 1st Health</li>
                   <li>• Health Net</li>
                   <li>• United Health Care</li>
                   <li>• Genex — {t?.patientRights?.insInProcess || 'Contracting application is in process'}</li>
                   <li>• Tristar — {t?.patientRights?.insInProcess || 'Contracting application is in process'}</li>
                 </ul>
                 </div>
                 <p className="text-gray-700 leading-relaxed text-sm mb-2">
                   {t?.patientRights?.insNote || 'Any person may see Dr. Singh on an individually paid basis and receive an appropriate form to submit to his/her insurance plan for reimbursement for covered benefits.'}
                 </p>
                 <p className="text-gray-700 leading-relaxed text-sm font-semibold">
                   {t?.patientRights?.insNoHmo || 'We DO NOT accept HMO insurance or Medi-Cal.'}
                 </p>
               </div>

                               {/* Privacy and Confidentiality */}
                <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{t?.patientRights?.privacyTitle || 'Privacy and Confidentiality'}</h3>
                 <p className="text-gray-700 leading-relaxed text-sm mb-4">
                   {t?.patientRights?.privacyIntro || 'We are committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with HIPAA regulations.'}
                 </p>
                 <ul className="text-gray-700 leading-relaxed text-sm space-y-2">
                   <li>• {t?.patientRights?.privacyItem1 || 'Your medical information is kept strictly confidential'}</li>
                   <li>• {t?.patientRights?.privacyItem2 || 'We will not share your information without your written consent'}</li>
                   <li>• {t?.patientRights?.privacyItem3 || 'You have the right to access and request copies of your medical records'}</li>
                 </ul>
               </div>

                               {/* Emergency Procedures */}
                <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-lg">
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{t?.patientRights?.emergencyTitle || 'Emergency Procedures'}</h3>
                 <p className="text-gray-700 leading-relaxed text-sm mb-4">
                   {t?.patientRights?.emergencyIntro || 'In case of a medical emergency, please call 911 or go to the nearest emergency room. For urgent medical concerns during business hours, please call our office.'}
                 </p>
                 <ul className="text-gray-700 leading-relaxed text-sm space-y-2">
                   <li>• {t?.patientRights?.emergencyItem1 || 'Emergency situations require immediate medical attention'}</li>
                   <li>• {t?.patientRights?.emergencyItem2 || 'We provide emergency contact information for after-hours care'}</li>
                   <li>• {t?.patientRights?.emergencyItem3 || 'Follow-up appointments are scheduled as needed after emergency care'}</li>
                 </ul>
               </div>
             </div>
          </div>
        </section>

        {/* Downloadable Forms Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t?.workInjuryPage?.downloadsTitle || 'Downloadable Forms'}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t?.workInjuryPage?.downloadsIntro || 'Download the forms you need before your appointment.'}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={process.env.PUBLIC_URL + '/Reg 2025.pdf'} 
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.registration || 'Registration Form'}
              </a>
              <a 
                href={process.env.PUBLIC_URL + '/Referral MBPC.docx.pdf'} 
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.referral || 'Physician Referral Form'}
              </a>
              <a 
                href={process.env.PUBLIC_URL + '/Records Release To MBPC.docx.pdf'} 
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.releaseTo || 'Release Records TO Mind and Body Pain Clinic'}
              </a>
              <a 
                href={process.env.PUBLIC_URL + '/Records Release from MBPC.pdf'} 
                download
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
              >
                {t?.workInjuryPage?.forms?.releaseFrom || 'Release Records FROM Mind and Body Pain Clinic'}
              </a>
             </div>
          </div>
        </section>

        {/* Open Payments Database Notice */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t?.patientRights?.openTitle || 'NOTICE TO PATIENTS - OPEN PAYMENTS DATABASE'}</h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">
                {t?.patientRights?.openP1 || 'For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services (CMS) Open Payments web page is provided here.'}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">
                {t?.patientRights?.openP2 || 'The federal Physician Payments Sunshine Act requires that detailed information about payment and other payments of value worth over ten dollars ($10) from manufacturers of drugs, medical devices, and biologics to physicians and teaching hospital be made available to the public.'}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">
                {t?.patientRights?.openP3 || 'You may search this federal database for payments made to physicians and teaching hospitals by visiting this website:'}
              </p>
              <div className="text-center">
                <a 
                  href="https://openpaymentsdata.cms.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  https://openpaymentsdata.cms.gov/
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PatientRightsAndPolicies;
