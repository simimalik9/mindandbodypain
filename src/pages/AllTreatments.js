import React, { useState } from 'react';

const treatments = {
  "Injections": [
    { name: "Botulinum Toxin Injections", description: "Injections of botulinum toxin, a neurotoxic protein, are used to block nerve signals in muscles. This targeted muscle relaxation helps alleviate chronic migraines, severe muscle spasms (dystonia), and excessive stiffness by preventing the involuntary contractions that cause pain and discomfort." },
    { name: "Cervical, Thoracic and Lumbar Epidural Steroid Injections", description: "This procedure involves injecting a powerful anti-inflammatory steroid into the epidural space surrounding the spinal nerves. It is used to treat radiating pain in the neck, shoulders, arms (cervical), mid-back (thoracic), or lower back and legs (lumbar) caused by conditions like herniated discs or spinal stenosis." },
    { name: "Epidural Steroid Injections", description: "A widely used non-surgical treatment that delivers corticosteroids directly to the source of nerve inflammation in the spine. It effectively reduces swelling and pressure on nerves, providing significant relief from conditions like sciatica and radiculopathy." },
    { name: "Facet Joint Injections", description: "This injection delivers a local anesthetic and a corticosteroid into the facet joints, which are small joints at each segment of the spine that provide stability. The procedure can both diagnose the source of pain and provide relief from inflammation caused by arthritis or injury." },
    { name: "Facet Joint Block", description: "Primarily a diagnostic tool, this procedure involves injecting a numbing agent into the facet joint. If the patient experiences immediate pain relief, it confirms that the specific facet joint is the pain generator, guiding further treatment decisions." },
    { name: "Intercostal Nerve Block", description: "This injection targets the intercostal nerves located between the ribs. It is used to manage acute or chronic pain in the chest wall resulting from rib fractures, post-surgical incisions, or the lingering effects of a shingles infection (postherpetic neuralgia)." },
    { name: "Large Joint and Bursa Injections", description: "Corticosteroid injections are administered directly into large joints (like the knee or shoulder) or the surrounding bursae to treat pain and inflammation from conditions such as osteoarthritis, rheumatoid arthritis, or bursitis." },
    { name: "Medial Branch Nerve Block", description: "This is a precise diagnostic injection that numbs the medial branch nerves, the small nerves that carry pain signals from the facet joints. Successful pain relief after the block confirms the facet joints as the source of pain and indicates the patient may be a candidate for radiofrequency ablation." },
    { name: "Occipital Nerve Block", description: "An injection of a steroid and numbing agent is administered around the greater and lesser occipital nerves, located at the back of the head. It provides relief from chronic migraines, cluster headaches, and other types of head pain originating from these nerves." },
    { name: "Sacroiliac Joint Injection", description: "This injection delivers medication into the sacroiliac (SI) joint, a common source of lower back and buttock pain. It can serve as both a diagnostic test and a therapeutic treatment for sacroiliitis or SI joint dysfunction." },
    { name: "Synvisc/Hylagan Injections", description: "Also known as viscosupplementation, this therapy involves injecting a gel-like substance called hyaluronic acid into the knee joint. It acts as a lubricant and shock absorber, improving mobility and reducing pain caused by osteoarthritis." },
    { name: "Transforaminal Selective Nerve Block", description: "A highly specific injection that delivers medication to the point where a nerve root exits the spinal canal. It is used to identify the exact source of nerve pain (sciatica, radiculopathy) and provide targeted relief by reducing inflammation around that specific nerve." },
    { name: "Trigger Point Injections", description: "This procedure involves injecting a local anesthetic and sometimes a corticosteroid into painful, knotted muscles (trigger points). It helps to relax the muscle, relieve pain, and break the cycle of spasms, commonly used for myofascial pain syndrome." },
  ],
  "Nerve Blocks": [
    { name: "Cranial and Facial Nerve Blocks", description: "These specialized injections target nerves in the head and face to diagnose and treat severe pain conditions such as trigeminal neuralgia and atypical facial pain. By blocking pain signals, they can provide significant relief and help pinpoint the source of discomfort." },
    { name: "Peripheral Nerve Blocks", description: "This technique involves injecting an anesthetic near a specific peripheral nerve or a bundle of nerves to block pain signals. It is effective for treating pain in the extremities caused by injury, surgery, or chronic conditions like neuropathy." },
    { name: "Sympathetic Blocks", description: "This type of block targets the sympathetic nervous system, which can sometimes transmit pain signals after an injury. It is a key treatment for conditions like Complex Regional Pain Syndrome (CRPS) and can help reduce swelling, discoloration, and burning pain." },
    { name: "Sympathetic Ganglion Blocks", description: "These injections target specific clusters of sympathetic nerves called ganglia, such as the stellate ganglion in the neck or the lumbar sympathetic chain in the lower back. They are used to treat pain in the head, neck, arms, and legs that is maintained by the sympathetic nervous system." },
    { name: "Stellate Ganglion Block (PTSD)", description: "This injection targets the stellate ganglion in the neck to block sympathetic nerve signals. It is particularly effective for treating post-traumatic stress disorder (PTSD) symptoms by modulating the autonomic nervous system response and reducing anxiety and hyperarousal." },
    { name: "Pudendal Nerve Block", description: "This injection targets the pudendal nerve, which supplies sensation to the genital and anal regions. It is used to treat chronic pelvic pain, vulvodynia, and pain associated with pudendal neuralgia, providing both diagnostic and therapeutic benefits." },
    { name: "Hypogastric Block", description: "This injection targets the hypogastric plexus, a network of nerves in the pelvic region. It is effective for treating chronic pelvic pain, endometriosis-related pain, and other visceral pain conditions in the lower abdomen and pelvis." },
    { name: "Ilioinguinal Block", description: "This injection targets the ilioinguinal nerve, which provides sensation to the groin and inner thigh area. It is used to treat chronic groin pain, post-surgical pain following hernia repair or other abdominal surgeries, and ilioinguinal neuralgia." },
    { name: "Caudal Ganglion Impar Block", description: "This injection targets the ganglion impar, a sympathetic ganglion located at the base of the spine. It is used to treat chronic coccydynia (tailbone pain), perineal pain, and other conditions affecting the lower pelvic region." },
  ],
  "Ablation / Denervation": [
    { name: "Cryoablation of Peripheral Nerves", description: "This procedure uses a probe to deliver extremely cold temperatures to targeted peripheral nerves. The intense cold freezes and destroys the nerve, interrupting pain signals for an extended period and providing long-term relief from chronic pain." },
    { name: "Medial Branch Denervation", description: "Following successful medial branch blocks, this procedure (also known as radiofrequency ablation) uses heat to create a lesion on the nerve, preventing it from sending pain signals from the facet joints. This can provide pain relief that lasts for several months to over a year." },
    { name: "Radiofrequency Ablation", description: "A minimally invasive procedure that uses an electrical current produced by a radio wave to heat up a small area of nerve tissue. This process destroys the nerve's ability to transmit pain signals, offering long-lasting relief for various chronic pain conditions." },
    { name: "Radiofrequency of Peripheral Nerves", description: "This technique applies the principles of radiofrequency ablation to specific peripheral nerves that have been identified as sources of chronic pain. It is used to treat conditions such as peripheral neuropathy and nerve entrapment syndromes." },
  ],
  "Regenerative / Biologic Therapies": [
    { name: "Prolotherapy", description: "Also known as proliferation therapy, this treatment involves injecting a mild irritant solution (often a dextrose solution) into damaged ligaments or tendons. This triggers a localized inflammatory response that stimulates the body’s natural healing and tissue repair mechanisms." },
    { name: "Stem Cell Treatment", description: "A cutting-edge regenerative therapy where stem cells are harvested (often from the patient's own body) and injected into injured areas. These cells have the ability to develop into various types of tissue, promoting the healing and regeneration of damaged cartilage, tendons, or ligaments." },
    { name: "Bone Marrow Aspirate", description: "This procedure involves harvesting bone marrow from the iliac crest, which contains stem cells and growth factors. The aspirate can be used for regenerative purposes or as part of other therapeutic interventions to promote healing and tissue repair." },
  ],
  "Diagnostic Treatments": [
    { name: "qEEG (Quantitative EEG / Brain Mapping)", description: "A non-invasive neurological diagnostic that measures electrical activity in the brain to identify patterns associated with injury or dysfunction. qEEG provides a detailed, data-driven map of brainwave activity that can help clarify areas impacted by concussion/TBI, mood or cognitive disorders, and guide individualized treatment planning." },
    { name: "VNG (Videonystagmography)", description: "A vestibular test that evaluates involuntary eye movements (nystagmus) using infrared video goggles. VNG helps diagnose inner ear and balance disorders contributing to dizziness, vertigo, and imbalance by assessing ocular tracking, positional responses, and caloric responses of the vestibular system." }
  ],
  "Implantable / Device-Based Therapies": [
    { name: "Spinal Cord Stimulator Implant", description: "A small, implantable device, similar to a pacemaker, that delivers low-level electrical signals to the spinal cord. These signals interfere with and mask pain signals before they can reach the brain, providing significant relief for patients with chronic back, leg, or arm pain." },
  ],
  "Minimally Invasive Spine Procedures": [
    { name: "Discography", description: "Also known as a discogram, this diagnostic test involves injecting contrast dye into one or more spinal discs under X-ray guidance. It is used to identify the exact disc that is causing a patient's back pain by pressurizing the disc to see if it reproduces their typical symptoms." },
  ],
};

function AllTreatments({ t }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  const allCategories = Object.entries(treatments);

  const leftCategoryNames = [
    "Injections",
    "Ablation / Denervation",
  ];
  
  const rightCategoryNames = [
    "Nerve Blocks",
    "Regenerative / Biologic Therapies",
    "Diagnostic Treatments",
    "Minimally Invasive Spine Procedures",
    "Implantable / Device-Based Therapies",
  ];

  const leftColumnCategories = allCategories
    .filter(([name]) => leftCategoryNames.includes(name))
    .sort((a, b) => leftCategoryNames.indexOf(a[0]) - leftCategoryNames.indexOf(b[0]));
  
  const rightColumnCategories = allCategories
    .filter(([name]) => rightCategoryNames.includes(name))
    .sort((a, b) => rightCategoryNames.indexOf(a[0]) - rightCategoryNames.indexOf(b[0]));

  const renderCategory = (category, items) => (
    <div key={category}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">{t?.allTreatments?.categories?.[category] || category}</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => toggleItem(item.name)}
              className="w-full flex justify-between items-center text-left py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span className="font-medium text-gray-800 text-sm">{t?.allTreatments?.items?.[item.name]?.name || item.name}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  expandedItem === item.name ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedItem === item.name && (
              <div className="p-4 mt-1 bg-gray-50 rounded-b-lg border-l-2 border-teal-500">
                <p className="text-gray-700 text-sm">{t?.allTreatments?.items?.[item.name]?.description || item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/tealbackground.jpg'})` }}>
        <div className="absolute inset-0 bg-teal-800 opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {t?.allTreatments?.heroTitle || 'Comprehensive Treatment List'}
          </h1>
          <p className="text-lg text-gray-200">
            {t?.allTreatments?.heroSubtitle || 'A detailed overview of the procedures and therapies available.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-x-12">
            <div className="space-y-16">
              {leftColumnCategories.map(([category, items]) => renderCategory(category, items))}
            </div>
            <div className="space-y-16">
              {rightColumnCategories.map(([category, items]) => renderCategory(category, items))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllTreatments;
