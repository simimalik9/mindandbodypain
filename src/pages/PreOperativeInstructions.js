import React, { useState } from 'react';

function PreOperativeInstructions({ t }) {
  const [isListExpanded, setListExpanded] = useState(false);

  const handlePrint = () => {
    const detailsElement = document.querySelector('.printable-details');
    const wasOpen = detailsElement ? detailsElement.open : true;

    if (detailsElement && !wasOpen) {
      detailsElement.open = true;
    }

    const afterPrint = () => {
      if (detailsElement && !wasOpen) {
        detailsElement.open = false;
      }
      window.removeEventListener('afterprint', afterPrint);
    };
    window.addEventListener('afterprint', afterPrint);

    window.print();
  };
  
  return (
    <>
      {/* Page Container */}
      <div className="relative bg-cover bg-center pre-op-wrapper" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/tealbackground.jpg'})` }}>
      <div aria-hidden="true" className="absolute inset-0 bg-teal-800/80 print-hidden" />
        {/* Hero Section */}
        <section className="relative pt-24 pb-8 print-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              {t?.preOp?.heroTitle || 'Pre-Operative Instructions'}
            </h1>
            <p className="text-lg text-gray-200">
              {t?.preOp?.heroSubtitle || 'Please review the following instructions carefully to prepare for your procedure.'}
            </p>
            <button
              onClick={handlePrint}
              className="mt-6 bg-white text-teal-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors print:hidden"
            >
              {t?.preOp?.print || 'Print Instructions'}
            </button>
          </div>
        </section>

        {/* Main Content */}
        <main className="relative py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 lg:p-12 printable-area">
              <div className="space-y-6">

                {/* Instruction 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{t?.preOp?.instruction1Title || 'Arrange for a Driver'}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {t?.preOp?.instruction1Text || 'Please arrange for a driver to pick you up from your appointment.'}
                    </p>
                  </div>
                </div>

                {/* Instruction 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{t?.preOp?.instruction2Title || 'Eating Before Your Appointment'}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {t?.preOp?.instruction2Text || 'Stop eating 4 hours prior to the appointment.'}
                    </p>
                  </div>
                </div>

                {/* Instruction 3 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{t?.preOp?.instruction3Title || 'Staying Hydrated'}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {t?.preOp?.instruction3Text || 'Stop consuming liquids 1 hour before the appointment. Make sure to stay hydrated and drink plenty of water before, especially if the patient is receiving a PRP injection.'}
                    </p>
                  </div>
                </div>

                {/* Instruction 4 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{t?.preOp?.instruction4Title || 'Blood Thinning Medications'}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {t?.preOp?.instruction4Text || 'Do not take blood thinning medications including, but not limited to, aspirin, advil, motrin, ibuprofen, naproxen, and aleve 7 days prior.'}
                    </p>
                    <details className="mt-2 printable-details" onToggle={() => setListExpanded(!isListExpanded)}>
                      <summary className="text-sm font-medium text-teal-600 cursor-pointer hover:underline">
                        {isListExpanded ? (t?.preOp?.hideComprehensive || 'Hide comprehensive list') : (t?.preOp?.seeComprehensive || 'See comprehensive list of blood-thinning medications')}
                      </summary>
                      <div className="mt-2 text-sm text-gray-700 pl-4 border-l-2 border-teal-200">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Warfarin (Coumadin, Jantoven)</li>
                          <li>Apixaban (Eliquis)</li>
                          <li>Rivaroxaban (Xarelto)</li>
                          <li>Dabigatran (Pradaxa)</li>
                          <li>Edoxaban (Savaysa)</li>
                          <li>Heparin (Hep-Lock)</li>
                          <li>Enoxaparin (Lovenox)</li>
                          <li>Dalteparin (Fragmin)</li>
                          <li>Tinzaparin (Innohep)</li>
                          <li>Fondaparinux (Arixtra)</li>
                          <li>Aspirin (Bayer, Ecotrin, Excedrin)</li>
                          <li>Clopidogrel (Plavix)</li>
                          <li>Prasugrel (Effient)</li>
                          <li>Ticagrelor (Brilinta)</li>
                          <li>Dipyridamole (Persantine)</li>
                          <li>Dipyridamole + ASA (Aggrenox)</li>
                          <li>Ibuprofen (Advil, Motrin)</li>
                          <li>Naproxen (Aleve)</li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{t?.preOp?.importantNoteTitle || 'Important Note on Medications'}</h3>
                    <p className="text-sm text-amber-700 leading-relaxed mb-4">
                      {t?.preOp?.importantNoteText || 'If you are on any prescribed blood thinning medications (Plavix, Coumadin, Aggrenox, Lovenox, Xarelto, Aspirin) please notify our office so that we may give you specific instructions. '}<strong>{t?.preOp?.importantNoteStrong || 'These changes must be approved by your prescribing doctor (PCP, cardiologist, neurologist, etc.).'}</strong>
                    </p>
                    
                    <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-3">{t?.preOp?.generalGuidelines || 'General Medication Guidelines:'}</h4>
                      <div className="space-y-2 text-sm text-amber-700">
                        <div><strong>Plavix</strong> - {t?.preOp?.guidelines?.plavix || 'Stop for 7 days prior to appointment. You will need clearance from your cardiologist if you have cardiac stents in place.'}</div>
                        <div><strong>Coumadin</strong> - {t?.preOp?.guidelines?.coumadin || 'Stop 5 days prior to appointment with an INR drawn the day before your appointment.'}</div>
                        <div><strong>Aggrenox</strong> - {t?.preOp?.guidelines?.aggrenox || 'Stop 7 days prior to appointment.'}</div>
                        <div><strong>Lovenox</strong> - {t?.preOp?.guidelines?.lovenox || 'Stop 24 hours prior to appointment.'}</div>
                        <div><strong>Xarelto</strong> - {t?.preOp?.guidelines?.xarelto || 'Stop 3 days prior to appointment.'}</div>
                        <div><strong>Aspirin</strong> - {t?.preOp?.guidelines?.aspirin || 'For cervical injections, stop 7 days prior. No need to stop before lumbar procedures.'}</div>
                        <div><strong>Anti-inflammatory (Motrin, ibuprofen, Advil, Alleve, etc.)</strong> - {t?.preOp?.guidelines?.antiInflammatory || 'For cervical injections, stop 7 days prior.'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t?.preOp?.questionsTitle || 'Questions or Concerns?'}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {t?.preOp?.questionsText || 'If you have any questions about these instructions or need to discuss your medications, please contact our office.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-800 font-medium">(408) 356-5900</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-800 font-medium">mindandbodypain@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default PreOperativeInstructions;
