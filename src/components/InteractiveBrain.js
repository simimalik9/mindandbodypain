import React, { useState } from 'react';

const baseRegions = [
  {
    id: 'frontal',
    defaultName: 'Frontal Lobe',
    coords: "457,221,49,706,450,1132,1027,178",
    defaultFunctions: 'Concentration, problem solving, speech, planning, impulse control.',
    defaultSymptoms: 'Difficulty focusing, poor impulse control, language problems, irritability.',
  },
  {
    id: 'parietal',
    defaultName: 'Parietal Lobe',
    coords: "1274,168,766,736,1423,645,1658,347",
    defaultFunctions: 'Touch, pain, temperature, spatial awareness, body orientation.',
    defaultSymptoms: 'Trouble sensing touch/pain, problems with reading, spatial misperception.',
  },
  {
    id: 'temporal',
    defaultName: 'Temporal Lobe',
    coords: "465,1089,754,1275,1549,942,1506,633,1113,668",
    defaultFunctions: 'Memory, hearing, language comprehension, organization.',
    defaultSymptoms: 'Memory loss, difficulty understanding speech, trouble organizing.',
  },
  {
    id: 'occipital',
    defaultName: 'Occipital Lobe',
    coords: "1569,578,1567,1005,2008,985,1759,367",
    defaultFunctions: 'Vision, visual processing.',
    defaultSymptoms: 'Blurred vision, blind spots, difficulty recognizing objects.',
  },
  {
    id: 'cerebellum',
    defaultName: 'Cerebellum',
    coords: "1159,1188,1401,1553,1822,1122,1533,1038",
    defaultFunctions: 'Balance, coordination, posture, fine motor control.',
    defaultSymptoms: 'Poor balance, unsteady walking, slurred speech, lack of coordination.',
  },
  {
    id: 'brainstem',
    defaultName: 'Brainstem',
    coords: "911,1250,1305,1590,1404,1558,1081,1164",
    defaultFunctions: 'Breathing, heart rate, swallowing, sleep-wake cycles.',
    defaultSymptoms: 'Irregular breathing, changes in heart rate, difficulty swallowing, disrupted sleep.',
  },
];

const InteractiveBrain = ({ t }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const regions = baseRegions.map((r) => ({
    id: r.id,
    coords: r.coords,
    name: t?.tbiBrain?.regions?.[r.id]?.name || r.defaultName,
    functions: t?.tbiBrain?.regions?.[r.id]?.functions || r.defaultFunctions,
    tbiSymptoms: t?.tbiBrain?.regions?.[r.id]?.tbiSymptoms || r.defaultSymptoms,
  }));

  const hint = t?.tbiBrain?.hint || 'Hover over sections of the brain to understand function and potential impact from traumatic brain injury';
  const functionsLabel = t?.tbiBrain?.functionsLabel || 'Functions:';
  const symptomsLabel = t?.tbiBrain?.symptomsLabel || 'TBI Symptoms:';

  return (
    <div className="relative w-full max-w-lg mx-auto" onMouseMove={handleMouseMove}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 2048 2048"
      >
        <image href={process.env.PUBLIC_URL + '/partsofbrain.png'} x="0" y="0" width="2048" height="2048" />
        {regions.map((region) => (
          <polygon
            key={region.name}
            points={region.coords}
            className="fill-transparent cursor-pointer"
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
        ))}
      </svg>

      <p className="text-center text-gray-600 mt-2 italic text-sm">
        {hint}
      </p>

      {hoveredRegion && (
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg border-2 border-teal-500 text-sm w-72"
          style={{
            left: `${tooltipPosition.x + 15}px`,
            top: `${tooltipPosition.y + 15}px`,
            pointerEvents: 'none',
            transform: 'translate(-50%, -100%)', // Adjusts position relative to cursor
            zIndex: 50,
          }}
        >
          <h4 className="font-bold text-lg text-gray-900 mb-2">{hoveredRegion.name}</h4>
          <div className="mb-2">
            <p className="font-semibold text-gray-700">{functionsLabel}</p>
            <p className="text-gray-600">{hoveredRegion.functions}</p>
          </div>
          <div>
            <p className="font-semibold text-red-700">{symptomsLabel}</p>
            <p className="text-red-600">{hoveredRegion.tbiSymptoms}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveBrain;
