import React from 'react';

function LongTermEffectsTBI({ t }) {
  const groupKeyMap = {
    'Cognitive & Neurological Effects': 'cognitive',
    'Emotional, Behavioral & Psychological Effects': 'emotional',
    'Physical & Sensory Impairments': 'physical',
    'Aging & Long-Term Progression': 'aging'
  };
  const longTermEffectsGroups = {
    'Cognitive & Neurological Effects': [
      {
        id: 'cognitive_decline',
        name: 'Cognitive Decline and Slowed Processing',
        description: 'Ongoing memory, attention, and executive function difficulties represent some of the most persistent long-term effects of TBI. Patients may experience chronic problems with working memory, sustained attention, information processing speed, and higher-level cognitive functions like planning, organization, and problem-solving. These deficits can significantly impact daily functioning and may require ongoing cognitive rehabilitation and compensatory strategies.',
      },
      {
        id: 'white_matter',
        name: 'White Matter Injury',
        description: 'Chronic axonal damage to white matter tracts is a common long-term consequence of TBI, particularly in moderate to severe cases. This white matter injury can lead to cognitive decline, chronic traumatic encephalopathy (CTE), and increased risk of developing dementia later in life. The diffuse nature of this damage affects neural connectivity throughout the brain, contributing to persistent cognitive and functional impairments.',
      },
      {
        id: 'chronic_fatigue',
        name: 'Chronic Fatigue and Sleep Issues',
        description: 'Persistent fatigue and sleep disturbances often continue well beyond the initial recovery period from TBI. These chronic issues can stem from ongoing brain dysfunction, hormonal imbalances, mood disorders, or medication side effects. Chronic fatigue syndrome-like symptoms may develop, significantly impacting energy levels, motivation, and overall quality of life for many TBI survivors.',
      },
    ],
    'Emotional, Behavioral & Psychological Effects': [
      {
        id: 'mood_behavioral',
        name: 'Chronic Mood and Behavioral Disorders',
        description: 'Persistent depression, anxiety, irritability, or personality changes are common long-term complications of TBI. These mood and behavioral disorders can become chronic conditions that significantly affect quality of life, relationships, and social functioning. The neurobiological changes from TBI can alter emotional regulation, impulse control, and behavioral responses, often requiring long-term psychological support and medication management.',
      },
      {
        id: 'substance_abuse',
        name: 'Substance Abuse',
        description: 'Individuals with TBI have significantly higher rates of alcoholism and drug use compared to the general population. These substance use disorders often develop as maladaptive coping mechanisms for dealing with chronic pain, mood changes, cognitive difficulties, and impulse control problems resulting from the brain injury. Substance abuse can further complicate recovery and increase the risk of additional health problems.',
      },
      {
        id: 'sexual_dysfunction',
        name: 'Sexual Dysfunction',
        description: 'Decreased libido, arousal difficulties, and sexual dysfunction are common long-term effects of TBI, particularly when the injury affects the pituitary gland or hypothalamic regions. Hormonal imbalances from pituitary injury can disrupt the endocrine system, leading to reduced sexual interest, performance issues, and relationship difficulties. These problems may require endocrine evaluation and hormone replacement therapy.',
      },
    ],
    'Physical & Sensory Impairments': [
      {
        id: 'motor_sensory',
        name: 'Motor and Sensory Impairments',
        description: 'Long-term weakness, numbness, coordination issues, and other motor or sensory impairments can persist following TBI. These neurological deficits may result from damage to motor pathways, sensory processing areas, or peripheral nerves affected during the injury. Chronic motor and sensory problems can impact mobility, fine motor skills, and overall functional independence.',
      },
      {
        id: 'dual_diagnosis',
        name: 'Dual Diagnosis with Spinal Cord Injury',
        description: 'When TBI coexists with spinal cord injury (SCI), recovery becomes significantly more complex. The combination of brain and spinal cord damage creates unique challenges in rehabilitation, mobility, and functional outcomes. These dual diagnoses require specialized multidisciplinary care addressing both central nervous system injuries simultaneously.',
      },
    ],
    'Aging & Long-Term Progression': [
      {
        id: 'geriatric',
        name: 'Geriatric Complications',
        description: 'As TBI survivors age, they may experience accelerated cognitive decline, increased risk of hydrocephalus, and worsening visual or behavioral changes. The aging process can exacerbate pre-existing TBI-related brain changes, leading to earlier onset of age-related neurological conditions and more rapid functional decline compared to individuals without TBI history.',
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/tealbackground.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t?.longTermTbi?.heroTitle || 'Chronic Consequences of TBI'}
          </h1>
          <p className="text-xl sm:text-2xl">
            {t?.longTermTbi?.heroSubtitle || 'Understanding the persistent effects that can impact life for years after the initial injury.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 mt-8">
            {Object.entries(longTermEffectsGroups).map(([groupName, effects]) => (
              <div key={groupName}>
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 pb-2 border-gray-200">{t?.longTermTbi?.groups?.[groupKeyMap[groupName]]?.title || groupName}</h3>
                <div className="space-y-8">
                  {effects.map((effect) => (
                    <div key={effect.id}>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{t?.longTermTbi?.groups?.[groupKeyMap[groupName]]?.items?.[effect.id]?.name || effect.name}</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">{t?.longTermTbi?.groups?.[groupKeyMap[groupName]]?.items?.[effect.id]?.description || effect.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t?.longTermTbi?.importanceTitle || 'Importance of Long-Term Management'}</h3>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-sm">{t?.longTermTbi?.importanceText || 'Understanding and managing long-term effects of TBI requires ongoing medical care, rehabilitation, and support services. Regular follow-up with healthcare providers, participation in support groups, and lifestyle modifications can significantly improve outcomes and quality of life for TBI survivors. Early intervention and comprehensive care planning are essential for addressing these chronic consequences effectively.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LongTermEffectsTBI;
