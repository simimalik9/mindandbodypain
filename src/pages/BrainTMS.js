import React from 'react';

function BrainTMS({ t }) {
  const benefits = (t?.brainTMSBody?.benefits || [
    { title: 'FDA Approved', desc: 'In 2008 the FDA approved TMS as a treatment to alleviate symptoms of medication resistant depression.' },
    { title: 'Drug Free', desc: 'No medications are given during the procedure. There is no surgery and no injections.' },
    { title: 'Noninvasive', desc: 'TMS is a technology that allows doctors to non-invasively stimulate the brain and reset it back into health.' },
    { title: 'Safe Procedure', desc: 'The most common side effects are mild to moderate scalp discomfort and headaches.' },
  ]).map(b => ({ title: b.title, description: b.desc }));
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-40 bg-black bg-no-repeat bg-center bg-[size:80%_auto]"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/braintmshero.jpg'})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-4">
            {t?.brainTMS?.heroTitle || 'Brain TMS'}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t?.brainTMS?.heroSubtitle || 'Advanced Transcranial Magnetic Stimulation therapy for depression and neurological conditions.'}
          </p>
        </div>
      </section>

            {/* Main Content */}
      <main className="bg-gray-50">
        {/* What is TMS and How it Works Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column: What is TMS + Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t?.brainTMSBody?.whatIsTitle || 'What is Transcranial Magnetic Stimulation (TMS)?'}</h2>
                <p className="text-sm text-gray-700 mb-8">
                  {t?.brainTMSBody?.whatIsDesc || 'Transcranial Magnetic Stimulation (TMS) is a non-invasive FDA approved revolutionary treatment resulting in brain stimulation to reduce depression symptoms. TMS is FDA-approved for Major Depressive Disorder (MDD), Anxious Depression, Obsessive-Compulsive Disorder (OCD), smoking cessation/nicotine addiction, Post-Traumatic Stress Disorder (PTSD), and migraine with aura. Additionally, research has shown benefits for various non-FDA approved conditions including Generalized Anxiety Disorder, bipolar depression, chronic pain, fibromyalgia, post-stroke recovery, tinnitus, Traumatic Brain Injury, Autism Spectrum Disorder, Alzheimer\'s disease, Parkinson\'s disease, addictions, and sleep disorders.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="bg-orange-100 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-700">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: How it Works */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t?.brainTMSBody?.howTitle || 'How It Works'}</h2>
                <p className="text-sm text-gray-700">
                  {t?.brainTMSBody?.howDesc || 'Transcranial Magnetic Stimulation (TMS) Therapy uses an electromagnetic coil to deliver pulses that stimulate underactive regions of the brain in patients with depression. These pulses penetrate about 2–3 centimeters beneath the coil, producing small electrical currents that activate neurons. This activity triggers the release of neurotransmitters and gradually helps reset brain connections, reducing depressive symptoms and supporting overall healing.'}
                </p>
                <div className="mt-6">
                  <img src={process.env.PUBLIC_URL + '/brain-tms-how.png'} alt="How Brain TMS Works" className="w-3/4 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach & Research Section */}
        <section className="bg-gray-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Our Approach */}
              <div className="text-left">
                <img src={process.env.PUBLIC_URL + '/aftertms.jpg'} alt="Brain scan after TMS treatment" className="w-3/4 mx-auto rounded-lg shadow-md mb-8" />
                <h2 className="text-2xl font-bold text-white mb-4">{t?.brainTMSBody?.approachTitle || 'Our Approach to TMS Therapy'}</h2>
                <p className="text-sm text-gray-300">
                  {t?.brainTMSBody?.approachDesc || 'Our clinic specializes in the Accelerated, Intermittent Theta-Burst Protocol. Theta Burst Stimulation (TBS) is a subtype of TMS which uses short and high frequences of theta wave stimulation pulses. Theta Burst offers similar or greater effectiveness compared to rTMS with significantly shorter treatment times, requiring only a few minutes per session. Our clinic offers a series of 10 Theta-Burst sessions a day over the course of 5 days.'}
                </p>
              </div>

              {/* Right Column: Research */}
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white mb-8">{t?.brainTMSBody?.researchTitle || 'Pioneering Research'}</h2>
                <div>
                  <p className="text-sm text-gray-400 mb-2">{t?.brainTMSBody?.studyJournal || 'Brain Stimulation | March-April 2023'}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{t?.brainTMSBody?.studyTitle || 'The Role of Transcranial Magnetic Stimulation in Treating Depression After Traumatic Brain Injury'}</h3>
                  <p className="text-sm text-gray-300 mb-6">
                    {t?.brainTMSBody?.studyDesc || 'Our own Dr. Harpreet Singh co-authored this retrospective study on using excitatory repetitive TMS (rTMS) to treat depression in 59 adults with Traumatic Brain Injury (TBI) or Post-Concussion Syndrome. The study targeted the left dorsolateral prefrontal cortex, a key area for mood regulation. Using standard depression scales (PHQ-9, HAM-D, and BDI-II), the research demonstrated that FDA-approved TMS protocols led to significant reductions in depression severity with large effect sizes. The positive outcomes were consistent across different ages, sexes, and treatment durations. These findings strongly suggest that rTMS is a safe and effective treatment for managing post-concussion depression, reinforcing our commitment to providing evidence-based, innovative care.'}
                  </p>
                  <a 
                    href="https://www.brainstimjrnl.com/article/S1935-861X(23)01687-X/fulltext" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    {t?.brainTMSBody?.readFullArticle || 'Read the Full Article'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TMS Treatment Protocol Comparison Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-12">
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t?.brainTMSProtocols?.intro || 'Understand the differences between traditional TMS, accelerated TMS, and Thetaburst protocols.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Traditional TMS */}
                <div className="text-left">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t?.brainTMSProtocols?.cards?.traditional?.title || 'Traditional TMS'}</h3>
                    <div className="w-16 h-1 bg-teal-500"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.duration || 'Treatment Duration'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.traditional?.duration || 'Typically 30-60 minutes per session, 5 days per week for 4-6 weeks'}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.sessions || 'Total Sessions'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.traditional?.sessions || '20-36 sessions over 4-6 weeks'}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.details || 'Protocol Details'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.traditional?.details || 'Standard repetitive TMS (rTMS) using 10 Hz stimulation targeting the dorsolateral prefrontal cortex'}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.bestFor || 'Best For'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.traditional?.bestFor || 'Patients who prefer a gradual treatment approach with proven long-term outcomes'}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-300">
                    <div>
                      <span className="text-lg font-bold text-gray-900">{t?.brainTMSProtocols?.labels?.fdaApproved || 'FDA Approved'}</span>
                      <p className="text-sm text-gray-600 mt-1">{t?.brainTMSProtocols?.labels?.since || 'Since 2008'}</p>
                    </div>
                  </div>
                </div>

                {/* Thetaburst (Stanford Protocol) */}
                <div className="text-left border-2 border-teal-500 p-6 -m-6">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t?.brainTMSProtocols?.cards?.thetaburst?.title || 'Thetaburst (Stanford Protocol)'}</h3>
                    <div className="w-16 h-1 bg-teal-500"></div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.duration || 'Treatment Duration'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.thetaburst?.duration || 'Only 3-5 minutes per session, multiple sessions per day'}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.sessions || 'Total Sessions'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.thetaburst?.sessions || '50 sessions over 5 days (10 sessions per day)'}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.details || 'Protocol Details'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.thetaburst?.details || 'Intermittent Theta-Burst Stimulation (iTBS) using short, high-frequency theta wave pulses'}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.bestFor || 'Best For'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.thetaburst?.bestFor || 'Patients seeking the fastest treatment option with minimal time commitment per session'}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-300">
                    <div>
                      <span className="text-lg font-bold text-gray-900">{t?.brainTMSProtocols?.labels?.ourRecommended || 'Our Recommended'}</span>
                      <p className="text-sm text-gray-600 mt-1">{t?.brainTMSProtocols?.labels?.protocolOfChoice || 'Protocol of choice'}</p>
                    </div>
                  </div>
                     </div>

                {/* Accelerated TMS */}
                <div className="text-left">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t?.brainTMSProtocols?.cards?.accelerated?.title || 'Accelerated TMS'}</h3>
                    <div className="w-16 h-1 bg-teal-500"></div>
                   </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.duration || 'Treatment Duration'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.accelerated?.duration || 'Multiple sessions per day, each lasting 3-5 minutes'}</p>
                     </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.sessions || 'Total Sessions'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.accelerated?.sessions || '50 sessions compressed into 5-10 days'}</p>
                   </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.details || 'Protocol Details'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.accelerated?.details || 'High-frequency stimulation with multiple daily sessions and shorter inter-session intervals'}</p>
                     </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t?.brainTMSProtocols?.labels?.bestFor || 'Best For'}</h4>
                      <p className="text-sm text-gray-700">{t?.brainTMSProtocols?.cards?.accelerated?.bestFor || 'Patients seeking faster treatment completion with intensive daily protocols'}</p>
                   </div>
                     </div>

                  <div className="mt-8 pt-6 border-t border-gray-300">
                    <div>
                      <span className="text-lg font-bold text-gray-900">{t?.brainTMSProtocols?.labels?.researchSupported || 'Research Supported'}</span>
                      <p className="text-sm text-gray-600 mt-1">{t?.brainTMSProtocols?.labels?.multipleTrials || 'Multiple clinical trials'}</p>
                   </div>
                 </div>
                </div>
              </div>

             </div>
           </div>
        </section>
      </main>
    </>
  );
}

export default BrainTMS;
