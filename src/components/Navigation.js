import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({
  t,
  language,
  setShowLanguageDropdown,
  showLanguageDropdown,
  handleLanguageChange,
  toggleAccessibilityPanel,
  patientResourcesOpen,
  setPatientResourcesOpen,
  educationOpen,
  setEducationOpen,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const location = useLocation();

  React.useEffect(() => {
    setPatientResourcesOpen(false);
    setEducationOpen(false);
    setMobileMenuOpen(false);
    setShowLanguageDropdown(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close dropdowns when clicking outside anywhere in the document (desktop/mobile browsers)
  React.useEffect(() => {
    const handleDocumentClick = (event) => {
      const target = event.target;
      const isInsideDropdown = !!(
        target.closest && (
          target.closest('.patient-resources-dropdown') ||
          target.closest('.education-dropdown') ||
          target.closest('.language-dropdown') ||
          target.closest('.mobile-menu')
        )
      );
      if (!isInsideDropdown) {
        setPatientResourcesOpen(false);
        setEducationOpen(false);
        setShowLanguageDropdown(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [setPatientResourcesOpen, setEducationOpen, setShowLanguageDropdown, setMobileMenuOpen]);
  return (
    <nav className="bg-white/98 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-[70]">
      <div className="w-full px-0 sm:px-2 lg:px-4">
        {/* Top bar for language and accessibility */}
        <div className="flex justify-end items-center h-6 pt-1">
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-1 text-gray-600 hover:text-teal-600 px-2 py-1 rounded text-xs font-medium transition-all duration-300 hover:bg-teal-50"
              >
                                  <span>{language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-teal-50 transition-colors rounded-t-lg ${
                      language === 'en' ? 'text-teal-600 font-semibold bg-teal-50' : 'text-gray-700'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                                         <button
                         onClick={() => handleLanguageChange('es')}
                         className={`w-full text-left px-3 py-2 text-xs hover:bg-teal-50 transition-colors rounded-b-lg ${
                           language === 'es' ? 'text-teal-600 font-semibold bg-teal-50' : 'text-gray-700'
                         }`}
                       >
                         🇪🇸 Español
                       </button>
                </div>
              )}
            </div>

            {/* Accessibility Button */}
            <button
              onClick={toggleAccessibilityPanel}
              className="flex items-center space-x-1 text-gray-600 hover:text-teal-600 px-2 py-1 rounded text-xs font-medium transition-all duration-300 hover:bg-teal-50"
              aria-label={t.accessibility.title}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="hidden sm:inline">{t.accessibility.title}</span>
            </button>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                {/* Original Logo Image */}
                <div className="flex items-center justify-center">
                  <img 
                    src={process.env.PUBLIC_URL + '/logo.png'} 
                    alt="Mind and Body Pain Clinic Logo" 
                    className="h-12 w-auto object-contain object-left"
                    style={{ marginRight: '-10px' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center hidden">
                    <span className="text-teal-600 font-bold text-sm">Logo</span>
                  </div>
                </div>
                {/* Clinic Name */}
                <div className="hidden sm:block ml-4">
                  <div className="text-xl font-bold text-gray-900 leading-tight">
                    <div className="tracking-wide">Mind and Body</div>
                    <div className="text-teal-600 font-semibold">Pain Clinic</div>
                  </div>
                </div>
                <div className="sm:hidden ml-3">
                  <div className="text-base font-bold text-gray-900 leading-tight">
                    <div>Mind and Body</div>
                    <div className="text-teal-600 font-semibold">Pain Clinic</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/" className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.home}</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.about}</Link>
            <Link to="/mind-body-pain-clinic" className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.mindBodyPainClinic}</Link>
            <Link to="/silver-creek-surgery" className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.silverCreekSurgery}</Link>
            <Link to="/brain-tms" className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.brainTMS}</Link>
            
            {/* Patient Resources Dropdown */}
            <div className="relative patient-resources-dropdown">
              <button
                onClick={() => setPatientResourcesOpen(!patientResourcesOpen)}
                className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap flex items-center"
              >
                {t.nav.patientResources}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {patientResourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/pre-operative-instructions"
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      onClick={() => setPatientResourcesOpen(false)}
                    >
                      Pre-Operative Instructions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Education Dropdown */}
            <div className="relative education-dropdown">
              <button
                onClick={() => setEducationOpen(!educationOpen)}
                className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap flex items-center"
              >
                {t.nav.education}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {educationOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/neuroanatomy"
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      onClick={() => setEducationOpen(false)}
                    >
                      {t.nav.neuroanatomy}
                    </Link>
                    <Link
                      to="/innovative-integrative-medicine"
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                      onClick={() => setEducationOpen(false)}
                    >
                      {t.nav.innovativeIntegrativeMedicine}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.contact}</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600 p-2 rounded-lg transition-all duration-300 hover:bg-teal-50 mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
