import React, { useState } from 'react';

const content = {
  title: "Innovative & Integrative Medicine",



  // Neuropharmacology and Integrative Approaches content
  neuropharmacology: {
    title: "Neuropharmacology: Traditional Approaches",
    description: "Pharmacological interventions provide targeted relief for neurological conditions and chronic pain through evidence-based medications.",
    analgesics: {
      title: "Analgesics for Neuropathic Pain",
      description: "",
      medications: [
        {
          name: "Acetaminophen",
          description: "A common over-the-counter analgesic that can help manage mild to moderate pain associated with neurological conditions, often used as a first-line option for pain relief."
        },
        {
          name: "Gabapentinoids",
          description: "Medications like gabapentin that modulate calcium channels in nerves, reducing abnormal pain signaling. Particularly effective for diabetic neuropathy and post-herpetic neuralgia."
        },
        {
          name: "Antidepressants",
          description: "Tricyclic antidepressants (amitriptyline, nortriptyline) and SNRIs (duloxetine, venlafaxine) that increase neurotransmitters like serotonin and norepinephrine, helping to dampen pain perception."
        },
        {
          name: "Lamotrigine",
          description: "An anticonvulsant medication that can help stabilize nerve membranes and reduce neuropathic pain, particularly useful for conditions involving nerve irritation or damage."
        },
        {
          name: "Topical Agents",
          description: "Lidocaine patches and capsaicin cream that provide localized pain relief by blocking nerve conduction or desensitizing pain receptors."
        }
      ]
    },
    sedatives: {
      title: "Sedatives and Anxiolytics for Neurological Symptoms",
      description: "",
      medications: [
        {
          name: "Benzodiazepines",
          description: "Short-term use medications for acute anxiety, muscle spasms, or sleep disturbances in conditions like Parkinson's disease or multiple sclerosis."
        },
        {
          name: "Buspirone",
          description: "A non-benzodiazepine anxiolytic medication that helps manage anxiety symptoms in neurological conditions without the sedative effects or dependency risks of benzodiazepines."
        },
        {
          name: "Muscle Relaxants",
          description: "Medications like baclofen or tizanidine that reduce muscle spasticity and tension, particularly beneficial for conditions involving spinal cord injury or cerebral palsy."
        }
      ]
    }
  },

  integrativeApproaches: {
    title: "Integrative & Alternative Approaches",
    description: "Complementary therapies that work alongside traditional medicine to enhance neurological wellness, pain management, and overall quality of life.",

    supplements: [
      {
        name: "Fish Oil",
        benefits: "Omega-3 fatty acids (EPA and DHA) that support cardiovascular health, reduce systemic inflammation, and may ease joint discomfort as well as support cognitive function.",
        evidence: "Clinical studies demonstrate that fish-oil supplementation lowers triglycerides, benefits heart health, and can lessen rheumatoid-arthritis joint pain; evidence for cognitive support is emerging."
      },
      {
        name: "Vitamin B12",
        benefits: "Crucial for red-blood-cell production, nerve integrity, and energy metabolism. Deficiency can lead to anemia, fatigue, and neuropathy.",
        evidence: "Supplementation corrects megaloblastic anemia and can reverse deficiency-related neuropathy; population studies link adequate B12 with better energy levels and cognitive maintenance."
      },
      {
        name: "Vitamin D",
        benefits: "Supports bone density, calcium absorption, immune function, and mood regulation. Low levels are linked to osteoporosis and chronic musculoskeletal pain.",
        evidence: "Randomized trials show vitamin D reduces fracture risk and improves bone-mineral density; some studies report reduced chronic back or widespread pain in deficient individuals after repletion."
      },
      {
        name: "Zinc",
        benefits: "Essential for immune defense, wound healing, taste and smell, and DNA synthesis. Deficiency can impair recovery and increase infection risk.",
        evidence: "Supplementation has been shown to shorten the common-cold duration and improve wound healing; adequate zinc is associated with healthier immune responses."
      },
      {
        name: "Magnesium",
        benefits: "Involved in muscle relaxation, nerve conduction, blood-pressure regulation, and energy production. Low magnesium is linked to cramps, migraines, and hypertension.",
        evidence: "Trials show magnesium can reduce migraine frequency, improve sleep quality, and modestly lower blood pressure in hypertensive individuals."
      }
    ],

    therapies: [
      {
        name: "Acupuncture",
        description: "Traditional Chinese medicine technique involving insertion of fine needles at specific points to stimulate nerve pathways and promote healing.",
        neurologicalBenefits: "Can alleviate chronic neck, back, and osteoarthritic pain, reduce headache frequency, improve circulation, and promote relaxation.",
        evidence: "Clinical trials demonstrate acupuncture's effectiveness in reducing chronic pain intensity and improving quality of life in both neurological and pain management conditions."
      },
      {
        name: "Physical Therapy",
        description: "Specialized exercise and rehabilitation programs designed to improve movement, strength, balance, and functional abilities for patients with neurological conditions and chronic pain.",
        neurologicalBenefits: "Restores mobility and strength, reduces musculoskeletal pain, improves posture and balance, and supports recovery after injury or surgery.",
        evidence: "Research demonstrates physical therapy improves gait, strength, and functional outcomes in both neurological and pain management conditions, with benefits lasting beyond treatment periods."
      },
      {
        name: "Chiropractic Therapy",
        description: "Manual therapy focusing on the relationship between the spine and nervous system, using spinal adjustments and manipulations to improve function and reduce pain.",
        neurologicalBenefits: "Relieves back and neck pain by improving spinal alignment and joint mobility; may also lessen tension-type headaches.",
        evidence: "Studies show chiropractic care can improve pain management and functional outcomes in both neurological and pain management conditions, particularly when combined with other therapies."
      },
      {
        name: "Music Intervention",
        description: "Therapeutic use of music listening, playing, or creation to improve function and emotional well-being.",
        neurologicalBenefits: "Reduces anxiety, elevates mood, distracts from pain, and can aid gait training in neurological disorders.",
        evidence: "Research shows music therapy improves gait in Parkinson's patients, enhances memory in dementia, reduces agitation in neurological disorders, and helps with pain management."
      },
      {
        name: "Meditation & Mindfulness",
        description: "Practice of focused attention and awareness to promote health and stress reduction.",
        neurologicalBenefits: "Helps patients cope with chronic pain, lowers stress hormones, improves focus, and supports emotional well-being.",
        evidence: "Studies demonstrate mindfulness meditation can improve cognitive function, reduce stress hormones, enhance quality of life, and help with pain management in patients with neurological and chronic pain conditions."
      }
    ]
  },

  innovativeMedicine: {
    title: "Innovative Medicine: The Future of Brain-Computer Interfaces (BCIs)",
    paragraphs: [
      "Brain-Computer Interface (BCI) technology is revolutionizing how we treat neurological conditions by creating a direct communication link between the brain and external devices. A BCI decodes brain signals into commands to control computers or prosthetics, allowing people with neurological injuries to regain lost functions and interact with the world in new ways.",
      "BCI technologies come in various forms. Invasive BCIs, like neural implants, are surgically placed to record and stimulate neural activity with high precision for treating conditions like Parkinson’s. Non-invasive BCIs use external sensors like EEG for safer applications in stroke rehabilitation and ADHD treatment. Brain-Machine Interfaces (BMIs), a key BCI application, help individuals with spinal cord injuries or ALS control robotic limbs or communicate via thought.",
      "For those affected by traumatic brain injury (TBI), stroke, or neurodegenerative diseases, BCI technology offers groundbreaking potential. It can help restore lost motor and communication functions, promote neuroplasticity, and reduce reliance on surgery or medication. As research advances, BCIs are transitioning from experimental tools to mainstream medical therapies, transforming the future of neurological care."
    ],
    articlePlaceholder: {
      title: "First-of-its-kind technology helps man with ALS ‘speak’ in real time",
      image: "/ALSpatient.jpg",
      description: "New brain-computer interface system from UC Davis enables faster, more natural conversation for individuals with speech loss.",
      linkText: "Read More on UC Davis Health",
      link: "https://health.ucdavis.edu/news/headlines/first-of-its-kind-technology-helps-man-with-als-speak-in-real-time/2025/06"
    }
  },

  integratedApproach: {
    title: "The Power of Integration",
    description: "Combining traditional neuropharmacology with integrative approaches creates a comprehensive treatment strategy that addresses both the biological mechanisms of neurological conditions and the whole-person experience of living with them. This integrated approach recognizes that optimal neurological care involves treating the condition while supporting overall wellness, cognitive function, emotional health, and quality of life.",
    benefits: [
      "Enhanced symptom management through multiple therapeutic pathways",
      "Reduced reliance on high-dose medications and their side effects",
      "Improved patient engagement and treatment adherence",
      "Better long-term outcomes and quality of life",
      "Comprehensive support for both physical and emotional aspects of neurological conditions"
    ]
  }
};

function InnovativeIntegrativeMedicine({ t }) {
  const [expandedTherapy, setExpandedTherapy] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/innovativemedicine.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t?.innovativePage?.heroTitle || content.title}
          </h1>
        </div>
      </section>


      {/* Neuropharmacology & Integrative Approaches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Full-Width Introduction */}
          <div className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">{t?.innovativePage?.integrativeTitle || 'Integrative Medicine'}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t?.innovativePage?.integrativeIntro || 'At Mind and Body Pain Clinic, we take a comprehensive, patient-centered approach to neurological care and pain management by integrating the latest advancements in conventional medicine with evidence-based complementary therapies. Our philosophy is rooted in the belief that effective treatment must address not only physical symptoms, but also the emotional, cognitive, and lifestyle factors that contribute to chronic pain and neurological dysfunction. In addition to neurologic evaluations, pharmacologic treatments, and interventional procedures, we encourage a range of integrative therapies such as mindfulness-based stress reduction and yoga — all grounded in scientific research and tailored to individual needs. This multidisciplinary model allows us to treat complex conditions such as traumatic brain injury, neuropathic pain, and post-concussion syndrome with a more holistic lens, helping patients reduce reliance on medications, improve function, and restore quality of of life.'}
                </p>

                <div className="grid lg:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-teal-700 mb-3">{t?.innovativePage?.traditionalTitle || 'Traditional Medicine'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {t?.innovativePage?.traditionalIntro || 'Our traditional approach utilizes proven pharmacological interventions including targeted medications for neuropathic pain, specialized treatments for neurological symptoms, and evidence-based protocols that address both acute and chronic conditions affecting the nervous system.'}
                    </p>

                    <button
                      onClick={() => setExpandedTherapy(expandedTherapy === 'traditional' ? null : 'traditional')}
                      className="text-teal-600 hover:text-teal-800 text-sm font-medium underline"
                    >
                      {expandedTherapy === 'traditional' ? (t?.common?.readLess || 'Show Less') : (t?.common?.readMore || 'Learn More')}
                    </button>

                    {expandedTherapy === 'traditional' && (
                      <div className="mt-8 -mx-6 px-6">
                        <div className="max-w-7xl mx-auto space-y-8">
                          {/* Analgesics */}
                          <div>
                            <h5 className="text-xl font-bold text-teal-700 mb-4">{t?.innovativePage?.analgesicsTitle || content.neuropharmacology.analgesics.title}</h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {(t?.innovativePage?.analgesics?.medications || content.neuropharmacology.analgesics.medications).map((medication, index) => {
                                const m = t?.innovativePage?.analgesics?.medications?.[index] || medication;
                                return (
                                  <div key={index} className="border-l-4 border-teal-500 pl-4 bg-white rounded-r-lg p-4 shadow-sm">
                                    <h6 className="font-semibold text-gray-800 text-sm mb-2">{m.name}</h6>
                                    <p className="text-gray-600 text-xs leading-relaxed">{m.description}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Sedatives */}
                          <div>
                            <h5 className="text-xl font-bold text-teal-700 mb-4">{t?.innovativePage?.sedativesTitle || content.neuropharmacology.sedatives.title}</h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {(t?.innovativePage?.sedatives?.medications || content.neuropharmacology.sedatives.medications).map((medication, index) => {
                                const m = t?.innovativePage?.sedatives?.medications?.[index] || medication;
                                return (
                                  <div key={index} className="border-l-4 border-teal-500 pl-4 bg-white rounded-r-lg p-4 shadow-sm">
                                    <h6 className="font-semibold text-gray-800 text-sm mb-2">{m.name}</h6>
                                    <p className="text-gray-600 text-xs leading-relaxed">{m.description}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-teal-700 mb-3">{t?.innovativePage?.alternativeTitle || 'Alternative Approaches'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {t?.innovativePage?.alternativeIntro || 'We complement traditional treatments with carefully selected nutritional supplements, physical therapy modalities, chiropractic care, and mindfulness practices that work synergistically to enhance overall neurological wellness and support long-term healing.'}
                    </p>

                    <button
                      onClick={() => setExpandedTherapy(expandedTherapy === 'alternative' ? null : 'alternative')}
                      className="text-teal-600 hover:text-teal-800 text-sm font-medium underline"
                    >
                      {expandedTherapy === 'alternative' ? (t?.common?.readLess || 'Show Less') : (t?.common?.readMore || 'Learn More')}
                    </button>

                    {expandedTherapy === 'alternative' && (
                      <div className="mt-8 -mx-6 px-6">
                        <div className="max-w-7xl mx-auto space-y-8">
                          {/* Nutritional Supplements */}
                          <div>
                            <h5 className="text-xl font-bold text-green-700 mb-4">{t?.innovativePage?.supplementsTitle || 'Nutritional Supplements'}</h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {(t?.innovativePage?.supplements || content.integrativeApproaches.supplements).map((supplement, index) => {
                                const s = t?.innovativePage?.supplements?.[index] || supplement;
                                const benefitsLabel = t?.innovativePage?.benefitsLabel || 'Benefits:';
                                const evidenceLabel = t?.innovativePage?.evidenceLabel || 'Evidence:';
                                return (
                                <div key={index} className="border-l-4 border-green-500 pl-4 bg-white rounded-r-lg p-4 shadow-sm">
                                  <h6 className="font-semibold text-gray-800 text-sm mb-2">{s.name}</h6>
                                  <p className="text-gray-600 text-xs mb-2"><strong className="text-green-600">{benefitsLabel}</strong> {s.benefits}</p>
                                  <p className="text-gray-600 text-xs mb-2"><strong className="text-green-600">{evidenceLabel}</strong> {s.evidence}</p>
                                </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Complementary Therapies */}
                          <div>
                            <h5 className="text-xl font-bold text-amber-700 mb-4">{t?.innovativePage?.complementaryTitle || 'Complementary Therapies'}</h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {(t?.innovativePage?.therapies || content.integrativeApproaches.therapies).map((therapy, index) => {
                                const th = t?.innovativePage?.therapies?.[index] || therapy;
                                const benefitsLabel = t?.innovativePage?.benefitsLabel || 'Benefits:';
                                const evidenceLabel = t?.innovativePage?.evidenceLabel || 'Evidence:';
                                return (
                                <div key={index} className="border-l-4 border-amber-300 pl-4 bg-white rounded-r-lg p-4 shadow-sm">
                                  <h6 className="font-semibold text-gray-800 text-sm mb-2">{th.name}</h6>
                                  <p className="text-gray-600 text-xs mb-2">{th.description}</p>
                                  <p className="text-gray-600 text-xs mb-2"><strong className="text-amber-600">{benefitsLabel}</strong> {th.neurologicalBenefits}</p>
                                  <p className="text-gray-600 text-xs"><strong className="text-amber-600">{evidenceLabel}</strong> {th.evidence}</p>
                                </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 mb-6">
                  <div className="grid grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
                    <img
                      src={process.env.PUBLIC_URL + '/pills-package.jpg'}
                      alt="Traditional Medicine"
                      className="w-48 h-48 object-cover rounded-lg border-2 border-teal-300 shadow-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/supplements.jpg'}
                      alt="Nutritional Supplements"
                      className="w-48 h-48 object-cover rounded-lg border-2 border-teal-300 shadow-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/physicaltherapy.jpg'}
                      alt="Physical Therapy"
                      className="w-48 h-48 object-cover rounded-lg border-2 border-teal-300 shadow-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <img
                      src={process.env.PUBLIC_URL + '/meditation.jpg'}
                      alt="Meditation"
                      className="w-48 h-48 object-cover rounded-lg border-2 border-teal-300 shadow-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                </div>
              </div>
            </div>
              </div>


          {/* Innovative Medicine Section */}
          <div className="relative mt-16 py-16 bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/tealbackground.jpg'})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-3 text-white">{t?.innovativePage?.bciTitle || content.innovativeMedicine.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* BCI Content */}
                <div className="md:col-span-2 space-y-4">
                  {(t?.innovativePage?.bciParagraphs || content.innovativeMedicine.paragraphs).map((paragraph, index) => (
                    <p key={index} className="text-sm text-gray-200 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                {/* Article Placeholder */}
                <div className="md:col-span-1">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={content.innovativeMedicine.articlePlaceholder.image} alt="Featured Article" className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-teal-700">{t?.innovativePage?.bciArticle?.title || content.innovativeMedicine.articlePlaceholder.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{t?.innovativePage?.bciArticle?.description || content.innovativeMedicine.articlePlaceholder.description}</p>
                      <a href={content.innovativeMedicine.articlePlaceholder.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold text-sm">{t?.innovativePage?.bciArticle?.linkText || content.innovativeMedicine.articlePlaceholder.linkText}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InnovativeIntegrativeMedicine;
