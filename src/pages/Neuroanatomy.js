import React, { useState } from 'react';

const content = {
  title: "Neuroanatomy and Neurodegeneration",
  intro: `Understanding the structure and function of the brain is fundamental to comprehending neurological conditions and how they affect the body. This comprehensive overview explores both the key anatomical features of the central nervous system and the progressive disorders that can affect it over time.`,
  whatIsIt: `Neuroanatomy is the study of the structure and organization of the nervous system, particularly the brain and spinal cord. The human brain contains approximately 86 billion neurons and hundreds of trillions of connections between them. Understanding neuroanatomy helps us comprehend how different brain regions work together to control thoughts, emotions, movements, and bodily functions.

The brain can be divided into several major regions, each with specific functions and connections. These regions work in coordinated networks to process information, generate responses, and maintain homeostasis. The intricate organization of the brain reflects millions of years of evolutionary development, resulting in a highly sophisticated organ that is still not fully understood.`,

  brainRegions: [
    {
      id: "cerebrum",
      name: "Cerebrum",
      description: "The largest part of the brain, responsible for higher brain functions including thought, action, and sensory processing.",
      image: "/brain.png",
      imageAlt: "Illustration of the cerebrum showing cortical regions",
      functions: ["Conscious thought", "Voluntary movement", "Language processing", "Sensory perception", "Learning and memory"]
    },
    {
      id: "cerebellum",
      name: "Cerebellum",
      description: "Located at the back of the brain, this region coordinates voluntary movements and maintains balance and posture.",
      image: "/partsofbrain.png",
      imageAlt: "Illustration of the cerebellum and brainstem",
      functions: ["Motor coordination", "Balance and equilibrium", "Motor learning", "Timing and precision of movements"]
    },
    {
      id: "brainstem",
      name: "Brainstem",
      description: "Connects the cerebrum and cerebellum to the spinal cord and controls many basic life-sustaining functions.",
      image: "/spine.jpg",
      imageAlt: "Illustration of brainstem and cranial nerves",
      functions: ["Heart rate and breathing", "Blood pressure regulation", "Sleep-wake cycles", "Consciousness and alertness"]
    }
  ],

  keyStructures: [
    {
      id: "thalamus",
      name: "Thalamus",
      description: "A central relay station that processes and transmits sensory information to the cerebral cortex.",
      functions: ["Sensory relay", "Motor control", "Consciousness regulation", "Sleep-wake cycles"]
    },
    {
      id: "hypothalamus",
      name: "Hypothalamus",
      description: "Controls hormone release, body temperature, hunger, thirst, and circadian rhythms.",
      functions: ["Hormone regulation", "Body temperature control", "Hunger and thirst", "Sleep cycles", "Emotional responses"]
    },
    {
      id: "pituitary",
      name: "Pituitary Gland",
      description: "The master endocrine gland that controls hormone production throughout the body.",
      functions: ["Growth hormone", "Thyroid stimulation", "Adrenal activation", "Reproductive hormones"]
    },
    {
      id: "basal-ganglia",
      name: "Basal Ganglia",
      description: "A group of structures involved in motor control, procedural learning, and habit formation.",
      functions: ["Motor control", "Procedural learning", "Habit formation", "Reward processing"]
    },
    {
      id: "hippocampus",
      name: "Hippocampus",
      description: "Essential for spatial navigation, memory formation, and converting short-term to long-term memory. A key component of the limbic system.",
      functions: ["Spatial memory", "Memory formation", "Learning", "Navigation"]
    },
    {
      id: "amygdala",
      name: "Amygdala",
      description: "Processes emotions, particularly fear and pleasure, and plays a role in emotional memory.",
      functions: ["Fear processing", "Emotional memory", "Social behavior", "Threat detection"]
    }
  ],

  cellularComponents: [
    {
      id: 'neurons',
      name: 'Neurons',
      description: 'The basic building blocks of your brain and nervous system - these are the cells that process information, send messages, and control everything you think, feel, and do.',
      details: 'Each neuron has three main parts: dendrites that receive signals, an axon that carries signals, and terminals that release chemical messengers to communicate with other neurons.'
    },
    {
      id: 'glial-cells',
      name: 'Glial Cells',
      description: 'Helper cells that support and protect neurons, maintain brain health, and help form the insulation around nerve fibers.',
      details: 'Different types include astrocytes (maintain brain environment), oligodendrocytes (create myelin insulation), microglia (immune defense), and Schwann cells (support peripheral nerves).'
    },
    {
      id: 'synapses',
      name: 'Synapses',
      description: 'The connection points where neurons communicate with each other using chemical messengers called neurotransmitters.',
      details: 'This communication system is the foundation of all brain activity, learning, and memory formation - it allows neurons to share information and adapt over time.'
    },
    {
      id: 'myelin',
      name: 'Myelin Sheath',
      description: 'A fatty coating that wraps around nerve fibers like insulation on electrical wires, helping signals travel quickly and efficiently.',
      details: 'Created by oligodendrocytes in the brain and spinal cord, myelin acts like a speed booster, allowing nerve impulses to travel up to 100 times faster than unmyelinated fibers.'
    }
  ],
  // Neurodegenerative diseases content
  whatIsNeurodegenerative: `Neurodegenerative diseases are a group of conditions in which nerve cells in the brain or spinal cord progressively lose their ability to function and may eventually die. This process can interfere with communication between the brain and the rest of the body, leading to difficulties with movement, memory, speech, behavior, or other essential functions. Over time, these changes tend to worsen, often creating significant challenges for patients and their families.

Examples of neurodegenerative conditions include Alzheimer's disease and related dementias, Parkinson's disease, Huntington's disease, and amyotrophic lateral sclerosis (ALS). Although each condition has distinct features, they share the hallmark of gradual progression and long-term impact on quality of life. Early recognition and accurate diagnosis are important for planning care, managing symptoms, and connecting individuals with appropriate specialists, support services, and resources.`,

  conditions: [
    {
      id: "alzheimer",
      name: "Alzheimer's Disease & Other Dementias",
      description: "Progressive cognitive decline affecting memory, thinking, and daily function. We offer assessment, cognitive care planning, and caregiver support.",
      image: "/brainmri.png",
      imageAlt: "Brain MRI showing signs of Alzheimer's Disease"
    },
    {
      id: "parkinson",
      name: "Parkinson's Disease",
      description: "A movement disorder characterized by tremor, rigidity, and slowed movement. We provide medication optimization, DBS referral, and rehabilitative therapies.",
      image: "/partsofbraintwo.png",
      imageAlt: "Illustration of brain areas affected by Parkinson's Disease"
    },
    {
      id: "als",
      name: "Amyotrophic Lateral Sclerosis (ALS)",
      description: "A progressive motor neuron disease causing weakness and respiratory difficulties. Our multidisciplinary ALS program supports symptom management and advanced care planning.",
      image: "/spine.jpg",
      imageAlt: "Illustration of motor neurons"
    },
    {
      id: "multiple-sclerosis",
      name: "Multiple Sclerosis",
      description: "A chronic disease of the central nervous system where the immune system attacks the myelin sheath, disrupting communication between the brain and the body.",
      image: "",
      imageAlt: ""
    },
    {
      id: "prion-disease",
      name: "Prion Diseases",
      description: "A family of rare progressive neurodegenerative disorders that affect both humans and animals, caused by abnormally folded proteins in the brain.",
      image: "",
      imageAlt: ""
    },
    {
      id: "huntingtons-disease",
      name: "Huntington's Disease",
      description: "A genetic disorder that causes the progressive breakdown of nerve cells in the brain, deteriorating a person's physical and mental abilities.",
      image: "",
      imageAlt: ""
    }
  ],

  symptoms: [
    {
      id: 'memory_loss',
      name: 'Memory Loss & Confusion',
      description: 'Significant memory problems, confusion, and difficulty with planning or problem-solving that interfere with daily life are hallmark symptoms of dementias like Alzheimer\'s disease.'
    },
    {
      id: 'movement_issues',
      name: 'Tremor, Stiffness, or Slowed Movement',
      description: 'These are classic motor symptoms of Parkinson\'s disease, often starting subtly and progressing over time, affecting balance and coordination.'
    },
    {
      id: 'balance_problems',
      name: 'Balance Problems or Frequent Falls',
      description: 'Difficulty with gait and balance can be a symptom of several neurodegenerative conditions, increasing the risk of falls.'
    },
    {
      id: 'speech_swallowing',
      name: 'Difficulty Speaking or Swallowing',
      description: 'Known as dysarthria and dysphagia, these symptoms can arise in conditions like ALS and Parkinson\'s as the muscles controlling these functions weaken.'
    },
    {
      id: 'mood_changes',
      name: 'Mood or Personality Changes',
      description: 'Depression, anxiety, apathy, and irritability can be early signs of neurodegenerative diseases, sometimes appearing before motor or major cognitive symptoms.'
    },
    {
      id: 'muscle_weakness',
      name: 'Progressive Muscle Weakness or Twitching',
      description: 'A primary symptom of motor neuron diseases like ALS, where the gradual loss of nerve cells leads to muscle atrophy and weakness.'
    },
  ],

  pathologicalFeatures: {
    neuronLoss: "Neurons are the brain's essential workers - they're specialized cells that process information, send signals, and control everything we think, feel, and do. In neurodegenerative diseases, these vital brain cells begin to die off over time. This isn't random damage; it specifically affects areas responsible for memory, movement, or thinking. As more neurons die, the brain functions they control start to fail, causing the symptoms we see in conditions like memory loss in Alzheimer's or movement problems in Parkinson's.",

    proteinAggregates: "Proteins are like tiny machines that keep our cells working properly. In neurodegenerative diseases, these proteins can sometimes fold incorrectly and clump together into toxic buildup, almost like how garbage can pile up and block a roadway. For example, Alzheimer's disease creates amyloid plaques and tau tangles, while Parkinson's develops Lewy bodies made of a protein called alpha-synuclein. These protein clumps interfere with normal brain cell function and contribute to neuron death, and doctors can use them as important clues to diagnose specific diseases.",

    whiteMatterDisruption: "White matter is like the brain's superhighway system - it's the network of nerve fibers that carries messages between different parts of the brain, much like how roads connect different cities. Think of it as the brain's communication cables that allow different regions to work together smoothly. In many neurodegenerative disorders, this communication network gets damaged. The protective myelin sheath around nerve fibers can break down, or the fibers themselves can be lost. This disrupts the high-speed communication between brain areas, contributing to slowed thinking, coordination problems, and other cognitive and motor symptoms."
  },

};

function Neuroanatomy({ t }) {
  const [selectedRegionId, setSelectedRegionId] = useState(content.brainRegions[0].id);
  const [expandedStructure, setExpandedStructure] = useState(null);
  const [selectedDiseaseId, setSelectedDiseaseId] = useState(content.conditions[0].id);

  const regions = content.brainRegions.map((r) => {
    const tr = t?.neuroPage?.regions?.[r.id];
    return {
      ...r,
      name: tr?.name || r.name,
      description: tr?.description || r.description,
      functions: tr?.functions || r.functions
    };
  });

  const selectedRegion = regions.find((r) => r.id === selectedRegionId) || regions[0];

  const structures = content.keyStructures.map((s) => {
    const ts = t?.neuroPage?.structures?.[s.id];
    return {
      ...s,
      name: ts?.name || s.name,
      description: ts?.description || s.description,
      functions: ts?.functions || s.functions
    };
  });

  const components = content.cellularComponents.map((c) => {
    const tc = t?.neuroPage?.cellular?.[c.id];
    return {
      ...c,
      name: tc?.name || c.name,
      description: tc?.description || c.description,
      details: tc?.details || c.details
    };
  });

  const conditions = content.conditions.map((d) => {
    const td = t?.neuroPage?.conditions?.[d.id];
    return { ...d, name: td?.name || d.name, description: td?.description || d.description };
  });

  const symptoms = content.symptoms.map((s) => {
    const ts = t?.neuroPage?.symptoms?.[s.id];
    return { ...s, name: ts?.name || s.name, description: ts?.description || s.description };
  });

  return (
    <>
      {/* Hero Section */}
t      <section className="relative bg-cover bg-center text-white py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/neuroanatomybackground.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t?.neuroPage?.heroTitle || 'Neuroanatomy & Neurodegeneration'}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Full-width Neuroanatomy Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t?.neuroPage?.whatIsNeuroTitle || 'What is Neuroanatomy?'}</h2>
            <div className="text-gray-700 leading-relaxed text-sm space-y-3">
              {(t?.neuroPage?.whatIsIt || content.whatIsIt).split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Three Column Layout: Image + Brain Regions + Details */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Column 1: Image */}
            <div className="lg:col-span-1">
              <img src={process.env.PUBLIC_URL + '/cerebrum.png'} alt="Cerebrum" className="w-full h-auto object-cover -ml-4 md:ml-0"/>
            </div>

            {/* Column 2: Brain Regions Selection */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t?.neuroPage?.majorRegionsTitle || 'Major Brain Regions'}</h3>
              <div className="space-y-2">
              {regions.map((region) => (
                <div
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                    className={`block p-2 rounded-lg cursor-pointer transition-all duration-300 no-underline ${
                    selectedRegionId === region.id
                      ? 'bg-teal-500 text-white shadow-lg'
                       : 'bg-[#f5dacf] hover:bg-[#e8c5b8] text-gray-800'
                  }`}
                >
                  <h4 className="font-bold text-sm">{region.name}</h4>
                  <p className="text-xs mt-1 opacity-80">{region.description}</p>
                </div>
                  ))}
                </div>
              </div>

            {/* Column 3: Selected Region Details */}
            <div className="lg:col-span-1">
              <div className="bg-teal-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{selectedRegion.name}</h3>
                <p className="text-gray-700 mb-3 text-sm">{selectedRegion.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">{t?.neuroPage?.keyFunctionsTitle || 'Key Functions:'}</h4>
                <ul className="space-y-1">
                  {selectedRegion.functions.map((func, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                      {func}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Brain Structures Section */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t?.neuroPage?.keyStructuresTitle || 'Key Brain Structures'}</h2>
            <p className="text-gray-600 text-sm">
              {t?.neuroPage?.keyStructuresIntro || 'These essential brain structures play critical roles in sensory processing, hormone regulation, motor control, and emotional processing, with several being key components of the limbic system—a network deeply involved in regulating emotion, motivation, and memory.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Column 1 & 2: Structure List */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-4">
                {structures.map((structure) => {
                  const isExpanded = expandedStructure === structure.id;
                  return (
                    <div
                      key={structure.id}
                      className={`bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 cursor-pointer ${
                        isExpanded ? 'bg-teal-50 border-2 border-teal-200' : ''
                      }`}
                      onClick={() => setExpandedStructure(isExpanded ? null : structure.id)}
                    >
                      <div className="p-4">
                        <h4 className="font-bold text-sm text-gray-800 mb-2">{structure.name}</h4>
                        {isExpanded && (
                          <>
                            <p className="text-xs text-gray-600 mb-2 leading-tight">{structure.description}</p>
                            <h5 className="font-semibold text-gray-800 mb-1 text-xs">Key Functions:</h5>
                            <ul className="space-y-0.5">
                              {structure.functions.map((func, index) => (
                                <li key={index} className="text-xs text-gray-700 flex items-center leading-tight">
                                  <span className="w-1 h-1 bg-teal-500 rounded-full mr-1.5"></span>
                                  {func}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Image */}
            <div className="lg:col-span-1">
              <img src={process.env.PUBLIC_URL + '/brainstructures.png'} alt="Key Brain Structures" className="w-full max-w-md h-auto object-cover mb-8"/>
            </div>
          </div>
        </div>
      </section>

      {/* Cellular Components Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t?.neuroPage?.cellularComponentsTitle || 'Cellular Components'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {components.map((component) => (
              <div key={component.id} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-teal-400">{component.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{component.description}</p>
                <p className="text-gray-400 text-xs">{component.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neurodegenerative Diseases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t?.neuroPage?.neurodegTitle || 'Understanding Neurodegenerative Diseases'}</h2>
            <p className="text-gray-600 text-sm">
              {t?.neuroPage?.neurodegIntro || 'These progressive disorders affect the brain and nervous system over time. Our role is to provide thorough neurological evaluation, help clarify diagnoses, and connect patients with appropriate specialists and resources.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Column 1: Image and Clickable Disease List */}
            <div className="lg:col-span-1 space-y-4">
              <img src={process.env.PUBLIC_URL + '/alzheimers.jpg'} alt="Neurodegenerative Diseases" className="w-full max-w-md h-auto object-cover mb-8"/>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t?.neuroPage?.commonConditionsTitle || 'Common Conditions'}</h3>
              {conditions.map((disease) => {
                const commonClasses = `block p-2 rounded-lg cursor-pointer transition-all duration-300 no-underline ${
                  selectedDiseaseId === disease.id
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`;

                if (disease.id === 'alzheimer') {
                  return (
                    <a
                      key={disease.id}
                      href="https://www.alz.org/alzheimers-dementia/difference-between-dementia-and-alzheimer-s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonClasses}
                      onClick={() => setSelectedDiseaseId(disease.id)}
                    >
                      <h4 className="font-bold">{disease.name}</h4>
                    </a>
                  );
                }

                if (disease.id === 'parkinson') {
                  return (
                    <a
                      key={disease.id}
                      href="https://www.mayoclinic.org/diseases-conditions/parkinsons-disease/symptoms-causes/syc-20376055"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonClasses}
                      onClick={() => setSelectedDiseaseId(disease.id)}
                    >
                      <h4 className="font-bold">{disease.name}</h4>
                    </a>
                  );
                }

                if (disease.id === 'multiple-sclerosis') {
                  return (
                    <a
                      key={disease.id}
                      href="https://www.nationalmssociety.org/understanding-ms/what-is-ms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonClasses}
                      onClick={() => setSelectedDiseaseId(disease.id)}
                    >
                      <h4 className="font-bold">{disease.name}</h4>
                    </a>
                  );
                }

                if (disease.id === 'prion-disease') {
                  return (
                    <a
                      key={disease.id}
                      href="https://www.cdc.gov/prions/about/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonClasses}
                      onClick={() => setSelectedDiseaseId(disease.id)}
                    >
                      <h4 className="font-bold">{disease.name}</h4>
                    </a>
                  );
                }

                if (disease.id === 'als') {
                  return (
                    <a
                      key={disease.id}
                      href="https://www.als.org/understanding-als/what-is-als"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonClasses}
                      onClick={() => setSelectedDiseaseId(disease.id)}
                    >
                      <h4 className="font-bold">{disease.name}</h4>
                    </a>
                  );
                }

                if (disease.id === 'huntingtons-disease') {
                  return (
                    <a
                      key={disease.id}
                      href="https://www.mayoclinic.org/diseases-conditions/huntingtons-disease/symptoms-causes/syc-20356117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonClasses}
                      onClick={() => setSelectedDiseaseId(disease.id)}
                    >
                      <h4 className="font-bold">{disease.name}</h4>
                    </a>
                  );
                }

                return (
                  <div
                    key={disease.id}
                    onClick={() => setSelectedDiseaseId(disease.id)}
                    className={commonClasses}
                  >
                    <h4 className="font-bold">{disease.name}</h4>
                  </div>
                );
              })}
            </div>

            {/* Column 2 & 3: Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t?.neuroPage?.whatAreNeurodegTitle || 'What Are Neurodegenerative Diseases?'}</h3>
                <div className="text-gray-700 leading-relaxed text-sm space-y-4">
                  {(t?.neuroPage?.whatIsNeurodegenerative || content.whatIsNeurodegenerative).split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Common Symptoms */}
            <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">{t?.neuroPage?.commonSymptomsTitle || 'Common Symptoms'}</h3>
                <ul className="space-y-4">
                  {symptoms.map((symptom) => (
                    <li key={symptom.id} className="text-sm">
                      <strong className="font-semibold text-gray-800">{symptom.name}:</strong>
                      <span className="text-gray-700 ml-1">{symptom.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Pathological Features Section */}
      <section className="py-8 sm:py-14 lg:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t?.neuroPage?.pathFeaturesTitle || 'Key Pathological Features'}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Column 1: Video and Neuron Loss */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <video
                    className="block w-full h-auto rounded-lg shadow-lg"
                    src={process.env.PUBLIC_URL + '/mribrainanimation.mp4'}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
            </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{t?.neuroPage?.neuronLossTitle || 'Neuron Loss and How It Causes Symptoms'}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t?.neuroPage?.pathological?.neuronLoss || content.pathologicalFeatures.neuronLoss}
                </p>
              </div>
            </div>
            {/* Column 2: Descriptions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">{t?.neuroPage?.whiteMatterTitle || 'White Matter and Communication Disruption'}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t?.neuroPage?.pathological?.whiteMatterDisruption || content.pathologicalFeatures.whiteMatterDisruption}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{t?.neuroPage?.proteinAggTitle || 'Protein Aggregates / Hallmark Disease Features'}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t?.neuroPage?.pathological?.proteinAggregates || content.pathologicalFeatures.proteinAggregates}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Neuroanatomy;
