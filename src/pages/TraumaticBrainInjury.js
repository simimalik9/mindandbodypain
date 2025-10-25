import React, { useState } from 'react';
import InteractiveBrain from '../components/InteractiveBrain';

function TraumaticBrainInjury({ t }) {
  const [expandedSymptom, setExpandedSymptom] = useState(null);
  const [expandedCause, setExpandedCause] = useState(null);

  const symptoms = [
    {
      id: 'headaches',
      name: 'Headaches',
      description: 'Following a TBI, headaches are one of the most persistent and challenging symptoms. They can manifest in various forms, such as sharp, localized pain, a dull, constant ache, throbbing migraines, or tension headaches characterized by a band-like pressure around the head. These are often referred to as post-traumatic headaches and can be triggered by physical or cognitive effort, stress, or muscle tension. Managing them requires a careful diagnostic approach to understand their specific nature, followed by a personalized treatment plan that may include medication, physical therapy, stress management techniques, and lifestyle adjustments to reduce frequency and severity.',
    },
    {
      id: 'blurred_vision',
      name: 'Blurred Vision',
      description: 'Vision problems are very common after a brain injury because of the complex connection between the eyes and the brain. Patients may experience blurred or double vision, have difficulty focusing on objects, or find it hard to track moving items. This occurs when the injury disrupts the neural pathways that control eye movements and process visual information. A thorough neuro-ophthalmological evaluation is key to identifying the specific issue and developing a rehabilitation plan.',
    },
    {
      id: 'dizziness',
      name: 'Dizziness',
      description: 'Dizziness after a TBI can be a disorienting and unsettling sensation, often described as feeling lightheaded, woozy, or unsteady. Unlike vertigo, it doesn\'t typically involve a spinning sensation. This symptom can result from disruptions to the brain\'s ability to process balance signals from the inner ear and other parts of the body. Treatment focuses on identifying the underlying cause and may include vestibular therapy to help the brain recalibrate its sense of balance.',
    },
    {
      id: 'vertigo',
      name: 'Vertigo',
      description: 'Vertigo is a distinct and often severe sensation that you, or the world around you, is spinning or moving. This is frequently caused by damage to the vestibular system in the inner ear, which is responsible for our sense of balance. An episode of vertigo can be brief or last for hours, and it is often triggered by changes in head position. Vestibular Rehabilitation Therapy (VRT) is a highly effective treatment that uses specific exercises to help the brain adapt and compensate for the conflicting signals.',
    },
    {
      id: 'tinnitus',
      name: 'Tinnitus',
      description: 'Tinnitus is the perception of a persistent ringing, buzzing, or humming sound in the ears that is not present in the environment. After a TBI, this can be caused by damage to the auditory pathways in the brain or the inner ear itself. The sound can be constant or intermittent and can be a significant source of distress and distraction. Management strategies often involve sound therapy, counseling, and techniques to help the brain tune out and pay less attention to the phantom noise.',
    },
    {
      id: 'sensitivity',
      name: 'Sensitivity to Light/Noise',
      description: 'Heightened sensitivity to light (photophobia) and sound (phonophobia) is a hallmark symptom of concussion and TBI. Normal levels of light and everyday sounds can feel overwhelming, painful, or cause disorientation. This occurs because the brain is having difficulty filtering sensory input. Recovery involves gradually reintroducing exposure in a controlled way, using tools like tinted glasses or earplugs, and creating a low-stimulus environment to allow the brain to heal.',
    },
    {
      id: 'mood_changes',
      name: 'Mood Changes',
      description: 'A traumatic brain injury can have a profound impact on emotional regulation. The injury can damage the parts of the brain responsible for controlling emotions, leading to symptoms such as increased irritability, sudden anger, anxiety, or depression. Patients may experience mood swings that feel unpredictable and out of character. Common manifestations include depressed mood, decreased interest or pleasure in activities (anhedonia), feelings of worthlessness or excessive guilt, and significant changes in appetite or sleep patterns. These mood disturbances can be particularly challenging as they may interfere with rehabilitation efforts and social relationships. A comprehensive treatment approach includes counseling, support systems, and sometimes medication to help manage these challenging emotional changes.',
    },
    {
      id: 'memory_impairment',
      name: 'Memory Impairment',
      description: 'Cognitive difficulties, especially with memory, are a common consequence of TBI. This can manifest as trouble remembering recent conversations or events (short-term memory loss) or difficulty forming new memories. Patients may also struggle with concentration, organization, and multitasking. Cognitive rehabilitation therapy plays a crucial role in recovery, providing strategies and exercises to help improve memory and other cognitive functions.',
    },
    {
      id: 'loss_of_consciousness',
      name: 'Loss of Consciousness',
      description: 'Any loss of consciousness, however brief, is a sign of a significant brain injury. This can range from being momentarily dazed or confused to a prolonged state of unresponsiveness. The duration of unconsciousness is often used as an indicator of the severity of the TBI. Any instance of losing consciousness after a head injury requires immediate and thorough medical evaluation to assess the extent of the damage and determine the appropriate course of care.',
    },
    {
      id: 'sleep_dysfunction',
      name: 'Sleep Dysfunction & Fatigue',
      description: 'Sleep dysfunction and post-traumatic fatigue are extremely common after TBI, affecting a majority of patients. This includes trouble falling asleep, staying asleep, or experiencing restful sleep, as well as excessive daytime tiredness that doesn\'t improve with rest. These symptoms can create a vicious cycle where poor sleep exacerbates other TBI symptoms like cognitive problems and mood changes, while fatigue makes it harder to engage in rehabilitation activities.',
    },
    {
      id: 'ptsd',
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      description: 'PTSD can develop following TBI, especially when the injury occurs in traumatic circumstances like accidents or violence. Symptoms include intrusive memories or flashbacks of the traumatic event, hyperarousal (being constantly "on edge"), avoidance of trauma reminders, and emotional detachment or numbness. Early onset PTSD symptoms may appear within days or weeks of the injury and can complicate TBI recovery. Treatment often involves trauma-focused therapy and may require collaboration between TBI specialists and mental health professionals (Chapter 39).',
    },
    {
      id: 'thalamus_pituitary',
      name: 'Thalamus and Pituitary Effects',
      description: 'Damage to the thalamus and pituitary gland can cause significant hormonal and arousal disturbances following TBI. The thalamus acts as a relay station for sensory and motor signals, while the pituitary gland regulates hormone production. Disruption of these structures can lead to fatigue, sleep disruption, emotional instability, and various endocrine disorders. These neuroendocrine changes can manifest as mood swings, temperature regulation problems, and altered stress responses, requiring careful endocrine evaluation and management.',
    },
  ];

  const causes = [
    {
      id: 'falls',
      name: 'Falls',
      shortDescription: 'especially among children and older adults',
      description: 'Especially common among children and older adults, falls can cause TBI when the head strikes a hard surface or when the brain moves rapidly within the skull due to sudden deceleration.',
    },
    {
      id: 'motor_vehicle',
      name: 'Motor vehicle accidents',
      shortDescription: 'collisions involving cars, motorcycles, or bicycles',
      description: 'Collisions involving cars, motorcycles, or bicycles often result in TBI due to the rapid acceleration-deceleration forces that can cause the brain to impact against the skull. This can lead to coup injuries (at the site of impact) and contrecoup injuries (on the opposite side of the brain as it rebounds against the skull). These acceleration-deceleration forces are particularly common in motor vehicle accidents and can cause significant brain trauma even without direct head impact.',
    },
    {
      id: 'sports_recreational',
      name: 'Sports and recreational injuries',
      shortDescription: 'including concussions',
      description: 'Contact sports like football, soccer, hockey, and boxing, as well as recreational activities such as cycling, skateboarding, and skiing, frequently cause TBIs. Concussions are the most common type of sports-related TBI, often resulting from direct blows to the head or whiplash-like movements. These injuries can range from mild to severe and may have cumulative effects if multiple concussions occur over time.',
    },
    {
      id: 'workplace_military',
      name: 'Workplace or military incidents',
      shortDescription: 'including blast exposures',
      description: 'Including blast exposures in military settings or accidents in construction, manufacturing, or other high-risk occupations where falls or impacts can occur.',
    },
    {
      id: 'violence',
      name: 'Violence',
      shortDescription: 'such as assaults or gunshot wounds',
      description: 'Such as assaults or gunshot wounds that directly impact the head and brain tissue, often resulting in more severe forms of TBI.',
    }
  ];

  const treatments = [
    {
      id: 'vrt',
      name: 'VRT (Vestibular Rehabilitation Therapy)',
      shortDescription: 'Balance and dizziness rehabilitation',
      description: 'Traditional vestibular rehabilitation therapy is a type of physical therapy that involves exercises to help manage dizziness and balance issues. VRT is done in our office using Virtual Reality (VR). Our VR modules are a series of computer-generated simulations and games that were specifically designed to help patients reduce symptoms of dizziness, vertigo, and loss of balance.',
      image: '/VRT.png',
      imageAlt: 'Vestibular rehabilitation therapy exercises and balance training equipment',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'botox-headaches',
      name: 'Botox for Posttraumatic Headaches',
      shortDescription: 'Chronic headache treatment with botulinum toxin',
      description: 'Botox injections are done to treat posttraumatic headaches by injecting the botulinum neurotoxin in the head and neck muscles to help them "relax" by reducing the muscle contractions which transmit pain signals to the brain that we interpret as headaches. Botox injections are FDA approved to treat headaches.',
      image: '/botoxforheadaches.jpg',
      imageAlt: 'Botox injection treatment for chronic headaches showing injection sites',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 6.34l-1.41 1.41m11.32-1.41l-1.41-1.41" />
        </svg>
      )
    },
    {
      id: 'occipital-nerve',
      name: 'Greater and Lesser Occipital Nerve Block',
      shortDescription: 'Headache and neck pain treatment',
      description: 'Occipital nerve block injections numb the greater and lesser occipital nerve to help relieve pain. These nerves can become irritated or compressed, leading to chronic headaches, neck pain, and scalp sensitivity. The injection helps reduce inflammation and blocks pain signals from these nerves.',
      image: '/GLONB.png',
      imageAlt: 'Occipital nerve block procedure showing injection sites at base of skull',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/tbiherosection.avif')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t?.tbiPage?.heroTitle || 'Traumatic Brain Injury'}
          </h1>
          <p className="text-xl sm:text-2xl">
            {t?.tbiPage?.heroSubtitle || 'Learn how traumatic brain injury affects the brain, what symptoms to watch for, and the diagnostic and treatment services we offer.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TBI Section - Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: Interactive Brain */}
              <div>
                <InteractiveBrain t={t} />
              </div>

            {/* Column 2: TBI Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t?.tbiBody?.whatIsTitle || 'What is a TBI?'}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t?.tbiBody?.whatIsDesc || 'A traumatic brain injury (TBI) is a disruption in normal brain function caused by an external force. The effects can vary widely—from brief changes in mental status to serious, long-term complications that impact memory, movement, mood, and overall quality of life. TBIs are classified as mild, moderate, or severe, depending on the nature of the injury and its impact on brain function.'}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t?.tbiBody?.commonCauses || 'Common Causes'}</h3>
                <div className="space-y-2">
                  {causes.map((cause) => (
                    <div key={cause.id}>
                      {cause.id === 'sports_recreational' || cause.id === 'motor_vehicle' ? (
                        <>
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div className="flex-1">
                              <span className="text-gray-700 text-sm"><strong>{t?.tbiBody?.causes?.[cause.id]?.name || cause.name}</strong> – {t?.tbiBody?.causes?.[cause.id]?.short || cause.shortDescription}</span>
                              <button
                                onClick={() => setExpandedCause(expandedCause === cause.id ? null : cause.id)}
                                className="text-teal-600 hover:text-teal-800 text-sm ml-2 underline"
                              >
                                {expandedCause === cause.id ? (t?.tbiBody?.showLess || 'Show less') : (t?.tbiBody?.readMore || 'Read more')}
                              </button>
                            </div>
                          </div>
                          {expandedCause === cause.id && (
                            <div className="ml-7 mt-2 text-gray-700 text-sm">
                              <p>{t?.tbiBody?.causes?.[cause.id]?.desc || cause.description}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <span className="text-gray-700 text-sm"><strong>{t?.tbiBody?.causes?.[cause.id]?.name || cause.name}</strong> – {t?.tbiBody?.causes?.[cause.id]?.short || cause.shortDescription}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Symptoms */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {t?.tbiBody?.commonSymptoms || 'Common Symptoms of TBI'}
              </h2>
              <div className="space-y-2">
                {symptoms.map((symptom) => (
                  <div key={symptom.id}>
                    <button
                      onClick={() => setExpandedSymptom(expandedSymptom === symptom.id ? null : symptom.id)}
                      className="w-full bg-gray-700 p-2 text-left font-semibold rounded-lg shadow-md hover:bg-gray-600 flex justify-between items-center transition-all"
                    >
                      <span className="text-white text-sm">{t?.tbiBody?.symptomsText?.[symptom.id]?.name || symptom.name}</span>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedSymptom === symptom.id ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedSymptom === symptom.id && (
                  <div className="p-2 mt-1 bg-gray-800 rounded-lg shadow-inner">
                    <p className="text-gray-300 text-sm">{t?.tbiBody?.symptomsText?.[symptom.id]?.desc || symptom.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Learn More About Chronic Effects - Below All Columns */}
        <div className="mt-8 px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 mb-3 leading-relaxed text-sm">
            {t?.tbiBody?.longTermEffectsParagraph || 'While many patients recover from the immediate effects of a head injury, some individuals experience lasting neurological and cognitive changes that develop gradually over time. These long-term effects may involve difficulties with memory, concentration, and mood regulation, as well as hormonal or sensory changes resulting from deeper brain involvement. In certain cases, TBI can also contribute to ongoing fatigue, depression, or an increased risk of neurodegenerative conditions. Recognizing and addressing these chronic complications is an important part of comprehensive brain injury care and recovery.'} <a href="/long-term-effects-tbi" className="text-teal-600 hover:text-teal-800 font-medium">{t?.tbiBody?.learnMore || 'Learn more'}</a>
          </p>
        </div>
      </section>

      {/* TBI Severity Table Section */}
      <section className="-mt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
              {t?.tbiBody?.severityTitle || 'Severity of Traumatic Brain Injury'}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm max-w-4xl mx-auto text-center">
              Traumatic brain injuries are classified into three main severity levels based on clinical criteria including loss of consciousness, alteration of consciousness, and post-traumatic amnesia duration.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider border-b border-gray-300">
                    {t?.tbiBody?.criteria || 'Criteria'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider border-b border-gray-300">
                    {t?.tbiBody?.mild || 'Mild'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider border-b border-gray-300">
                    {t?.tbiBody?.moderate || 'Moderate'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider border-b border-gray-300">
                    {t?.tbiBody?.severe || 'Severe'}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                    {t?.tbiBody?.structuralImaging || 'Structural Imaging'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.normal || 'Normal'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.normalOrAbnormal || 'Normal or Abnormal'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.normalOrAbnormal || 'Normal or Abnormal'}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                    Loss of Consciousness (LOC)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.zeroTo30Min || '0-30 minutes'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.gt30lt24 || '>30 min <24 hours'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.gt24Hours || '>24 hours'}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                    Alteration of Consciousness (AOC)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    {t?.tbiBody?.upTo24 || 'Up to 24 hours'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    &gt;24 hours
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center border-b border-gray-200">
                    &gt;24 hours
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    Post-Traumatic Amnesia (PTA)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center">
                    {t?.tbiBody?.zeroTo1Day || '0-1 day'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center">
                    {t?.tbiBody?.gt1lt7Days || '>1 day <7 days'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center">
                    {t?.tbiBody?.gt7Days || '>7 days'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <em>Note: These criteria are based on standard TBI classification guidelines and may vary slightly between different medical systems.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Diagnostics Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center tracking-wide">
              {t?.tbiBody?.ourDiagnosticApproach || 'Our Diagnostic Approach'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brain MRI Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src="/brainMRIreal.jpg" alt="Brain MRI scan" className="w-full h-48 object-contain"/>
                <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t?.tbiDiagnostics?.brainMRI?.title || 'Brain MRI'}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                    {t?.tbiDiagnostics?.brainMRI?.desc || 'An MRI (Magnetic Resonance Imaging) is a powerful diagnostic tool that uses a magnetic field and radio waves to create highly detailed images of the brain. It is particularly effective for visualizing soft tissues and can detect subtle changes from a TBI, such as bruising, swelling, and diffuse axonal injury, which might not be visible on other scans. Advanced MRI techniques like DTI (Diffusion Tensor Imaging) can also reveal damage to white matter tracts and neural pathways that may not be visible on conventional MRI scans. This level of detail allows for a precise diagnosis and treatment plan.'}
                </p>
                </div>
              </div>
              {/* EEG Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src="/eegreal.jpg" alt="EEG brain wave monitoring" className="w-full h-48 object-contain"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t?.tbiDiagnostics?.qEEG?.title || 'qEEG (Brain Mapping)'}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                    {t?.tbiDiagnostics?.qEEG?.desc || 'A qEEG (Quantitative Electroencephalogram) provides a detailed analysis of brainwave patterns, helping identify the specific location and severity of brain dysfunction. This is a non-invasive diagnostic test that measures electrical activity in the brain. An electrode cap is placed on the scalp to detect and record brain wave patterns. This procedure helps diagnose various neurological conditions including epilepsy, sleep disorders, brain tumors, and brain damage. The test lasts 40 minutes and is completely painless. EEG results can provide valuable insights into brain function and help guide treatment decisions for neurological conditions.'}
                </p>
                </div>
              </div>
              {/* VNG Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src="/vngreal.png" alt="VNG testing equipment" className="w-full h-48 object-contain"/>
                <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t?.tbiDiagnostics?.vng?.title || 'VNG'}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                    {t?.tbiDiagnostics?.vng?.desc || 'VNG is a type of diagnostic test that evaluates involuntary eye movement called nystagmus. Nystagmus could point to an inner ear (vestibular) disorder. Symptoms associated with a vestibular disorder include: balance problems, dizziness, lightheadedness, tinnitus (ringing in the ears) and/or vertigo.'}
                  </p>
                  <div className="mt-4 text-gray-700 leading-relaxed text-sm">
                    <p className="mb-2"><strong>{t?.tbiDiagnostics?.vng?.ocular?.split(':')[0] || '1. Ocular testing'}</strong>{t?.tbiDiagnostics?.vng?.ocular ? `: ${t.tbiDiagnostics.vng.ocular.split(': ')[1] || ''}` : ': The patient watches different dots on a monitor while keeping their head still.'}</p>
                    <p className="mb-2"><strong>{t?.tbiDiagnostics?.vng?.positional?.split(':')[0] || '2. Positional testing'}</strong>{t?.tbiDiagnostics?.vng?.positional ? `: ${t.tbiDiagnostics.vng.positional.split(': ')[1] || ''}` : ': The patient is instructed to move their head or body to different positions.'}</p>
                    <p><strong>{t?.tbiDiagnostics?.vng?.caloric?.split(':')[0] || '3. Caloric testing'}</strong>{t?.tbiDiagnostics?.vng?.caloric ? `: ${t.tbiDiagnostics.vng.caloric.split(': ')[1] || ''}` : ': A small amount of warm, cool, and ice cold water is introduced into each ear. These different water temperatures should cause nystagmus.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Treatments and Procedures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center tracking-wide">
            {t?.tbiTreatmentOptions?.heading || 'Our Treatments'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="bg-orange-50 rounded-lg shadow-md overflow-hidden flex flex-col border border-orange-200">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  className="w-full h-48 object-contain bg-orange-100"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t?.tbiTreatments?.[treatment.id]?.name || treatment.name}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{t?.tbiTreatments?.[treatment.id]?.desc || treatment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t?.tbiTreatmentOptions?.heading || 'Treatment Options'}</h2>
              <p className="text-sm text-gray-300 max-w-4xl mx-auto">
                {t?.tbiTreatmentOptions?.intro || 'Many of our procedures can be performed using either steroid injections or PRP (Platelet-Rich Plasma) therapy, depending on your specific condition and treatment goals.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Steroid Injection Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t?.tbiTreatmentOptions?.steroidTitle || 'Steroid Injections'}</h3>
                <img src="/steroid.jpg" alt="Steroid Injection Diagram" className="w-48 h-auto rounded-lg object-contain float-right ml-4 mb-4" />
                <div className="text-gray-700 text-sm space-y-4">
                  <p>
                    {t?.tbiTreatmentOptions?.steroidDesc1 || 'Corticosteroid injections are a common treatment used to provide fast and effective relief from pain caused by inflammation in the spine or joints. Inflammation is often the source of pain when nerves, discs, or joint spaces become irritated and swollen. By delivering medication directly to the affected area, corticosteroid injections help reduce this irritation, allowing the surrounding tissues to calm down and function more normally.'}
                  </p>
                </div>
              </div>

              {/* PRP Therapy Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t?.tbiTreatmentOptions?.prpTitle || 'PRP Therapy'}</h3>
                <img src="/PRP.jpg" alt="PRP Therapy Diagram" className="w-48 h-auto rounded-lg object-contain float-right ml-4 mb-4" />
                <div className="text-gray-700 text-sm space-y-4">
                  <p>
                    {t?.tbiTreatmentOptions?.prpDesc1 || "Platelet-Rich Plasma (PRP) therapy is a regenerative treatment that uses your body's own natural healing abilities to repair damaged tissues and reduce pain. The process begins with a small sample of your blood, which is placed in a centrifuge and spun to concentrate the platelets. These platelets are rich in growth factors — powerful proteins that stimulate tissue repair, reduce inflammation, and support healing in joints, ligaments, tendons, and discs. By injecting this concentrated solution directly into the injured or painful area, PRP helps the body accelerate its natural recovery process."}
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default TraumaticBrainInjury;
