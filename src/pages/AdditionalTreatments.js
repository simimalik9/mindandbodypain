import React, { useState } from 'react';

function AdditionalTreatments() {
  const [expandedTreatment, setExpandedTreatment] = useState(null);

  const treatments = [
    { name: 'Cranial and Facial Nerve Blocks', description: 'Injections that deliver anesthetic and/or anti-inflammatory medication to specific nerves in the head and face to diagnose and treat various types of facial pain and headaches.' },
    { name: 'Cryoablation of Peripheral Nerves', description: 'A minimally invasive procedure that uses extreme cold to freeze and destroy nerve tissue, providing long-term pain relief by interrupting pain signals.' },
    { name: 'Discography', description: 'A diagnostic procedure where contrast dye is injected into spinal discs under X-ray guidance to identify which disc is the source of a patient\'s back pain.' },
    { name: 'EMG / NCS (diagnostic, not therapeutic)', description: 'Electromyography (EMG) and Nerve Conduction Studies (NCS) are diagnostic tests that assess the health of muscles and the nerves that control them, helping to diagnose conditions like carpal tunnel syndrome or neuropathy.' },
    { name: 'Facet Joint Block', description: 'An injection of local anesthetic and steroid into the facet joints of the spine, which helps diagnose and treat pain originating from spinal arthritis or joint inflammation.' },
    { name: 'Intradiscal Therapy (Decompression)', description: 'Minimally invasive techniques aimed at reducing pressure within a spinal disc, which can alleviate pain caused by herniated or bulging discs.' },
    { name: 'Large Joint and Bursa Injections', description: 'Injections of corticosteroid or other medications into large joints (like the hip or shoulder) or bursae to reduce inflammation and relieve pain caused by arthritis or injury.' },
    { name: 'Percutaneous Disc Decompression', description: 'A minimally invasive procedure where a small needle is used to remove a small portion of a herniated disc, relieving pressure on spinal nerves.' },
    { name: 'Peripheral Nerve Blocks', description: 'The injection of an anesthetic near a specific peripheral nerve or group of nerves to block pain signals, used for both diagnosis and treatment of localized pain.' },
    { name: 'Prolotherapy', description: 'An injection-based treatment that involves injecting a natural irritant solution into soft tissues to stimulate the body\'s natural healing process and strengthen ligaments and tendons.' },
    { name: 'Radiofrequency of Peripheral Nerves', description: 'A procedure that uses radio waves to generate heat and create a lesion on a peripheral nerve, interrupting pain signals to provide long-term relief.' },
    { name: 'Spinal Cord Stimulator Implant', description: 'A surgically implanted device that sends low levels of electricity directly to the spinal cord to mask pain signals before they reach the brain.' },
    { name: 'Stem Cell Treatment', description: 'A regenerative medicine therapy that uses the body\'s own stem cells to repair damaged tissues, reduce inflammation, and promote healing for various orthopedic and pain conditions.' },
    { name: 'Sympathetic Blocks', description: 'An injection that numbs a group of sympathetic nerves, which can help diagnose and treat chronic pain conditions like Complex Regional Pain Syndrome (CRPS).' },
    { name: 'Sympathetic Ganglion Blocks', description: 'A specific type of sympathetic block targeting a ganglion (a cluster of nerve cells) to relieve chronic pain and improve circulation in a particular region of the body.' },
    { name: 'Synvisc/Hyalgan Injections (viscosupplementation)', description: 'The injection of a gel-like substance called hyaluronic acid into a joint (commonly the knee) to supplement natural joint fluid, providing lubrication and cushioning.' },
    { name: 'Transforaminal Selective Nerve Block', description: 'An injection that delivers medication into the epidural space precisely at the point where a specific nerve root exits the spine, used to diagnose and treat radiculopathy (pinched nerves).' },
  ];

  const toggleTreatment = (index) => {
    setExpandedTreatment(expandedTreatment === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-wide inline-block relative pb-6">
            Additional Treatments
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-teal-500"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of advanced, minimally invasive procedures to diagnose and treat various pain conditions.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="pt-12 pb-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Additional Procedures</h2>
            <div className="space-y-4">
              {treatments.map((treatment, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleTreatment(index)}
                    className="w-full bg-white p-4 text-left font-semibold rounded-lg shadow-md hover:bg-gray-50 flex justify-between items-center transition-all"
                  >
                    <span className="text-lg text-gray-800">{treatment.name}</span>
                    <svg
                      className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${expandedTreatment === index ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedTreatment === index && (
                    <div className="p-4 mt-2 bg-gray-50 rounded-lg shadow-inner">
                      <p className="text-gray-700">{treatment.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdditionalTreatments;
