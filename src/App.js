import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import PainManagement from './pages/PainManagement';
import BrainTMS from './pages/BrainTMS';
import TraumaticBrainInjury from './pages/TraumaticBrainInjury';
import WorkAndPersonalInjury from './pages/WorkAndPersonalInjury';
import AdditionalTreatments from './pages/AdditionalTreatments';
import Contact from './pages/Contact';
import PreOperativeInstructions from './pages/PreOperativeInstructions';
import PatientRightsAndPolicies from './pages/PatientRightsAndPolicies';
import Blog from './pages/Blog';
import JobOpenings from './pages/JobOpenings';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AllTreatments from './pages/AllTreatments';
import Neuroanatomy from './pages/Neuroanatomy';
import InnovativeIntegrativeMedicine from './pages/InnovativeIntegrativeMedicine';
import LongTermEffectsTBI from './pages/LongTermEffectsTBI';

function RouteChangeCloser({ onChange }) {
  const location = useLocation();
  React.useEffect(() => {
    if (typeof onChange === 'function') {
      // Defer to next frame to ensure new page has rendered, then close menus
      const raf = requestAnimationFrame(() => {
        onChange();
      });
      return () => cancelAnimationFrame(raf);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return null;
}

const AppLayout = ({
  t,
  language,
  handleLanguageChange,
  showLanguageDropdown,
  setShowLanguageDropdown,
  accessibilitySettings,
  toggleAccessibilityPanel,
  handleAccessibilityChange,
  mobileMenuOpen,
  setMobileMenuOpen,
  servicesOpen,
  setServicesOpen,
  patientPortalOpen,
  setPatientPortalOpen,
  educationOpen,
  setEducationOpen
}) => (
  <div className="min-h-screen bg-white">
    {/* Close nav dropdowns on route change */}
    <RouteChangeCloser
      onChange={() => {
        setShowLanguageDropdown(false);
        setMobileMenuOpen(false);
        setServicesOpen(false);
        setPatientPortalOpen(false);
        setEducationOpen(false);
      }}
    />
    {/* Navigation */}
    <nav className="bg-white border-b border-gray-100/50 sticky top-0 z-[1000] relative">
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
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setServicesOpen(!servicesOpen); }}
                className="flex items-center text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap"
              >
                {t.nav.services}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div onMouseDown={(e) => e.stopPropagation()} className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-[1100] pointer-events-auto">
                  <Link to="/traumatic-brain-injury" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors rounded-t-lg">
                    {t.nav.traumaticBrainInjury}
                  </Link>
                  <Link to="/pain-management" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors">
                    {t.nav.silverCreekSurgery}
                  </Link>
                  <Link to="/brain-tms" className="block w/full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors">
                    {t.nav.tms}
                  </Link>
                  <Link to="/all-treatments" className="block w/full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors rounded-b-lg">
                    {t.nav.allTreatments}
                    </Link>
                  </div>
              )}
            </div>
          {/* Patient Portal Dropdown */}
          <div className="relative patient-portal-dropdown">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); setPatientPortalOpen(!patientPortalOpen); }}
              className="flex items-center text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap"
            >
              {t.nav.patientPortal}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {patientPortalOpen && (
              <div onMouseDown={(e) => e.stopPropagation()} className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-[1100] pointer-events-auto">
                <Link to="/pre-operative-instructions" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors rounded-t-lg">
                  {t.nav.preOperativeInstructions}
                </Link>
                <Link to="/patient-rights-and-policies" className="block w/full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors rounded-b-lg">
                  {t.nav.patientRightsAndPolicies}
                </Link>
                </div>
              )}
            </div>

            {/* Education Dropdown */}
            <div className="relative education-dropdown">
              <button
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setEducationOpen(!educationOpen); }}
                className="flex items-center text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap"
              >
                {t.nav.education}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {educationOpen && (
                <div onMouseDown={(e) => e.stopPropagation()} className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-[1100] pointer-events-auto">
                  <Link to="/neuroanatomy" className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors rounded-t-lg">
                    {t.nav.neuroanatomy}
                  </Link>
                  <Link to="/innovative-integrative-medicine" className="block w/full text-left px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 transition-colors rounded-b-lg">
                    {t.nav.innovativeIntegrativeMedicine}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/work-and-personal-injury" onClick={() => { setServicesOpen(false); setPatientPortalOpen(false); setEducationOpen(false); setShowLanguageDropdown(false); }} className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.workAndPersonalInjury}</Link>
            <Link to="/blog" onClick={() => { setServicesOpen(false); setPatientPortalOpen(false); setEducationOpen(false); setShowLanguageDropdown(false); }} className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.blog}</Link>
            <Link to="/contact" onClick={() => { setServicesOpen(false); setPatientPortalOpen(false); setEducationOpen(false); setShowLanguageDropdown(false); }} className="text-gray-700 hover:text-teal-600 px-2 py-2 text-sm font-medium transition-all duration-300 hover:bg-teal-50/80 whitespace-nowrap">{t.nav.contact}</Link>
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

    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="lg:hidden fixed inset-0 z-[80] bg-white border-t border-gray-200/50 shadow-xl overflow-auto mobile-menu">
        <div className="sticky top-0 z-[90] bg-white/95 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-gray-100" aria-label="Close menu">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6 space-y-4 relative z-[85]">
          {/* Mobile Services Dropdown */}
          <div className="services-dropdown">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center text-gray-700 hover:text-teal-600 px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-teal-50/80"
            >
              <span>{t.nav.services}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-8 pt-2 pb-2 space-y-2">
                <Link to="/traumatic-brain-injury" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.traumaticBrainInjury}
                </Link>
                <Link to="/pain-management" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.silverCreekSurgery}
                </Link>
                <Link to="/brain-tms" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.tms}
                </Link>
              </div>
            )}
          </div>
          {/* Mobile Patient Portal Dropdown */}
          <div className="patient-portal-dropdown">
            <button
              onClick={() => setPatientPortalOpen(!patientPortalOpen)}
              className="w-full flex justify-between items-center text-gray-700 hover:text-teal-600 px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-teal-50/80"
            >
              <span>{t.nav.patientPortal}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${patientPortalOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {patientPortalOpen && (
              <div className="pl-8 pt-2 pb-2 space-y-2">
                <Link to="/pre-operative-instructions" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.preOperativeInstructions}
                </Link>
                <Link to="/patient-rights-and-policies" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.patientRightsAndPolicies}
                </Link>
              </div>
            )}
          </div>
          {/* Mobile Education Dropdown */}
          <div className="education-dropdown">
            <button
              onClick={() => setEducationOpen(!educationOpen)}
              className="w-full flex justify-between items-center text-gray-700 hover:text-teal-600 px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-teal-50/80"
            >
              <span>{t.nav.education}</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${educationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {educationOpen && (
              <div className="pl-8 pt-2 pb-2 space-y-2">
                <Link to="/neuroanatomy" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.neuroanatomy}
                </Link>
                <Link to="/innovative-integrative-medicine" className="block text-gray-600 hover:text-teal-600 px-4 py-2 text-base font-medium transition-all duration-300 hover:bg-teal-50/80" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.innovativeIntegrativeMedicine}
                </Link>
              </div>
            )}
          </div>
                <Link
            to="/work-and-personal-injury"
            className="block text-gray-700 hover:text-teal-600 px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-teal-50/80"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.workAndPersonalInjury}
          </Link>
                <Link
            to="/blog"
            className="block text-gray-700 hover:text-teal-600 px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-teal-50/80"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.blog}
          </Link>
                <Link
            to="/contact" 
            className="block text-gray-700 hover:text-teal-600 px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-teal-50/80"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    )}

    {/* Accessibility Panel */}
    {accessibilitySettings.showAccessibilityPanel && (
      <div className="fixed top-20 right-4 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 z-50 accessibility-panel">
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{t.accessibility.title}</h3>
            <button
              onClick={toggleAccessibilityPanel}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label={t.accessibility.close}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Text Size Controls */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleAccessibilityChange('fontSize', Math.max(80, accessibilitySettings.fontSize - 10))}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
                  aria-label={t.accessibility.decreaseText}
                >
                  A-
                </button>
                <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                  {accessibilitySettings.fontSize}%
                </span>
                <button
                  onClick={() => handleAccessibilityChange('fontSize', Math.min(200, accessibilitySettings.fontSize + 10))}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
                  aria-label={t.accessibility.increaseText}
                >
                  A+
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">{t.accessibility.highContrast}</label>
              <button
                onClick={() => handleAccessibilityChange('highContrast', !accessibilitySettings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  accessibilitySettings.highContrast ? 'bg-teal-600' : 'bg-gray-200'
                }`}
                aria-label={`${t.accessibility.highContrast} ${accessibilitySettings.highContrast ? 'on' : 'off'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    accessibilitySettings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduce Motion Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">{t.accessibility.reduceMotion}</label>
              <button
                onClick={() => handleAccessibilityChange('reduceMotion', !accessibilitySettings.reduceMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  accessibilitySettings.reduceMotion ? 'bg-teal-600' : 'bg-gray-200'
                }`}
                aria-label={`${t.accessibility.reduceMotion} ${accessibilitySettings.reduceMotion ? 'on' : 'off'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    accessibilitySettings.reduceMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                handleAccessibilityChange('fontSize', 100);
                handleAccessibilityChange('highContrast', false);
                handleAccessibilityChange('reduceMotion', false);
              }}
              className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              {t.accessibility.reset}
            </button>
          </div>
        </div>
      </div>
    )}
    
    <main>
      <Outlet />
    </main>

    <Footer t={t} />
  </div>
);

function App() {
  const [language, setLanguage] = useState('en');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    fontSize: 100, // percentage
    highContrast: false,
    reduceMotion: false,
    showAccessibilityPanel: false
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [patientPortalOpen, setPatientPortalOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const handleAccessibilityChange = (setting, value) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const toggleAccessibilityPanel = () => {
    setAccessibilitySettings(prev => ({
      ...prev,
      showAccessibilityPanel: !prev.showAccessibilityPanel
    }));
  };

  // Close language dropdowns/menus when clicking outside (use 'click' to avoid pre-click interference)
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageDropdown && !event.target.closest('.language-dropdown')) {
        setShowLanguageDropdown(false);
      }
      if (accessibilitySettings.showAccessibilityPanel && !event.target.closest('.accessibility-panel')) {
        setAccessibilitySettings(prev => ({ ...prev, showAccessibilityPanel: false }));
      }
      if (mobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
      if (servicesOpen && !event.target.closest('.services-dropdown')) {
        setServicesOpen(false);
      }
      if (patientPortalOpen && !event.target.closest('.patient-portal-dropdown')) {
        setPatientPortalOpen(false);
      }
      if (educationOpen && !event.target.closest('.education-dropdown')) {
        setEducationOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [showLanguageDropdown, accessibilitySettings.showAccessibilityPanel, mobileMenuOpen, servicesOpen, patientPortalOpen, educationOpen]);

  // Apply accessibility settings to document
  React.useEffect(() => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${accessibilitySettings.fontSize}%`;
    
    // Apply high contrast
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (accessibilitySettings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
  }, [accessibilitySettings]);

  // Language content
  const content = {
    en: {
      common: {
        readMore: 'Read more',
        readLess: 'Show less'
      },
      allTreatments: {
        heroTitle: 'Comprehensive Treatment List',
        heroSubtitle: 'A detailed overview of the procedures and therapies available.',
        categories: {
          'Injections': 'Injections',
          'Nerve Blocks': 'Nerve Blocks',
          'Ablation / Denervation': 'Ablation / Denervation',
          'Regenerative / Biologic Therapies': 'Regenerative / Biologic Therapies',
          'Minimally Invasive Spine Procedures': 'Minimally Invasive Spine Procedures',
          'Implantable / Device-Based Therapies': 'Implantable / Device-Based Therapies'
        },
        items: {}
      },
      longTermTbi: {
        heroTitle: 'Chronic Consequences of TBI',
        heroSubtitle: 'Understanding the persistent effects that can impact life for years after the initial injury.',
        importanceTitle: 'Importance of Long-Term Management',
        importanceText: 'Understanding and managing long-term effects of TBI requires ongoing medical care, rehabilitation, and support services. Regular follow-up with healthcare providers, participation in support groups, and lifestyle modifications can significantly improve outcomes and quality of life for TBI survivors. Early intervention and comprehensive care planning are essential for addressing these chronic consequences effectively.',
        groups: {
          cognitive: {
            title: 'Cognitive & Neurological Effects',
            items: {
              cognitive_decline: {
                name: 'Cognitive Decline and Slowed Processing',
                description: 'Ongoing memory, attention, and executive function difficulties represent some of the most persistent long-term effects of TBI. Patients may experience chronic problems with working memory, sustained attention, information processing speed, and higher-level cognitive functions like planning, organization, and problem-solving. These deficits can significantly impact daily functioning and may require ongoing cognitive rehabilitation and compensatory strategies.'
              },
              white_matter: {
                name: 'White Matter Injury',
                description: 'Chronic axonal damage to white matter tracts is a common long-term consequence of TBI, particularly in moderate to severe cases. This white matter injury can lead to cognitive decline, chronic traumatic encephalopathy (CTE), and increased risk of developing dementia later in life. The diffuse nature of this damage affects neural connectivity throughout the brain, contributing to persistent cognitive and functional impairments.'
              },
              chronic_fatigue: {
                name: 'Chronic Fatigue and Sleep Issues',
                description: 'Persistent fatigue and sleep disturbances often continue well beyond the initial recovery period from TBI. These chronic issues can stem from ongoing brain dysfunction, hormonal imbalances, mood disorders, or medication side effects. Chronic fatigue syndrome-like symptoms may develop, significantly impacting energy levels, motivation, and overall quality of life for many TBI survivors.'
              }
            }
          },
          emotional: {
            title: 'Emotional, Behavioral & Psychological Effects',
            items: {
              mood_behavioral: {
                name: 'Chronic Mood and Behavioral Disorders',
                description: 'Persistent depression, anxiety, irritability, or personality changes are common long-term complications of TBI. These mood and behavioral disorders can become chronic conditions that significantly affect quality of life, relationships, and social functioning. The neurobiological changes from TBI can alter emotional regulation, impulse control, and behavioral responses, often requiring long-term psychological support and medication management.'
              },
              substance_abuse: {
                name: 'Substance Abuse',
                description: 'Individuals with TBI have significantly higher rates of alcoholism and drug use compared to the general population. These substance use disorders often develop as maladaptive coping mechanisms for dealing with chronic pain, mood changes, cognitive difficulties, and impulse control problems resulting from the brain injury. Substance abuse can further complicate recovery and increase the risk of additional health problems.'
              },
              sexual_dysfunction: {
                name: 'Sexual Dysfunction',
                description: 'Decreased libido, arousal difficulties, and sexual dysfunction are common long-term effects of TBI, particularly when the injury affects the pituitary gland or hypothalamic regions. Hormonal imbalances from pituitary injury can disrupt the endocrine system, leading to reduced sexual interest, performance issues, and relationship difficulties. These problems may require endocrine evaluation and hormone replacement therapy.'
              }
            }
          },
          physical: {
            title: 'Physical & Sensory Impairments',
            items: {
              motor_sensory: {
                name: 'Motor and Sensory Impairments',
                description: 'Long-term weakness, numbness, coordination issues, and other motor or sensory impairments can persist following TBI. These neurological deficits may result from damage to motor pathways, sensory processing areas, or peripheral nerves affected during the injury. Chronic motor and sensory problems can impact mobility, fine motor skills, and overall functional independence.'
              },
              dual_diagnosis: {
                name: 'Dual Diagnosis with Spinal Cord Injury',
                description: 'When TBI coexists with spinal cord injury (SCI), recovery becomes significantly more complex. The combination of brain and spinal cord damage creates unique challenges in rehabilitation, mobility, and functional outcomes. These dual diagnoses require specialized multidisciplinary care addressing both central nervous system injuries simultaneously.'
              }
            }
          },
          aging: {
            title: 'Aging & Long-Term Progression',
            items: {
              geriatric: {
                name: 'Geriatric Complications',
                description: 'As TBI survivors age, they may experience accelerated cognitive decline, increased risk of hydrocephalus, and worsening visual or behavioral changes. The aging process can exacerbate pre-existing TBI-related brain changes, leading to earlier onset of age-related neurological conditions and more rapid functional decline compared to individuals without TBI history.'
              }
            }
          }
        }
      },
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        traumaticBrainInjury: 'Traumatic Brain Injury',
        silverCreekSurgery: 'Interventional Pain Management',
        tms: 'TMS',
        contact: 'Contact Us',
        patientPortal: 'Patient Portal',
        preOperativeInstructions: 'Pre-Operative Instructions',
        patientRightsAndPolicies: 'Patient Rights and Policies',
        workAndPersonalInjury: 'Insights',
        blog: 'Blog',
        education: 'Education',
        neuroanatomy: 'Neuroanatomy and Neurodegeneration',
        innovativeIntegrativeMedicine: 'Innovative & Integrative Medicine',
        allTreatments: 'All Treatments'
      },
      hero: {
        welcome: 'Welcome to',
        subtitle: 'Comprehensive pain management and wellness solutions.',
        getStarted: 'Get Started',
        learnMore: 'Learn More'
      },
      about: {
        title: 'Our Mission',
        description: "At Mind and Body Pain Clinic, we are dedicated to the comprehensive evaluation and multimodal management of pain and neurological conditions. We specialize in treating headaches, neck pain, and a wide range of other painful disorders.\n\nOur mission is to support patients through education, medication management, and advanced interventional procedures. We believe in combining modern medical technologies with complementary approaches such as physical therapy and yoga to deliver truly holistic care.\n\nWe work closely with your healthcare providers to ensure individualized treatment tailored to your needs. While we use medications when appropriate, we typically avoid high-dose opioid regimens, as research shows they carry significant risks with limited long-term benefit compared to safer, lower-dose strategies."
      },
             services: {
         title: 'Our Services',
         traumaticBrainInjury: {
           title: 'Traumatic Brain Injury Services',
           description: 'Holistic treatment plans for neurological conditions.',
           learnMore: 'Learn more →',
           features: [
             'Personalized treatment plans',
             'Multidisciplinary approach',
             'Evidence-based therapies'
           ]
         },
         silverCreekSurgery: {
           title: 'Interventional Pain Management Services',
           description: 'State-of-the-art treatments for acute and chronic pain.',
           learnMore: 'Learn more →',
           features: [
             'Minimally invasive procedures',
             'Advanced surgical techniques',
             'Comprehensive post-operative care'
           ]
         },
         brainTMS: {
           title: 'Brain TMS Services',
           description: 'TMS therapy for neurological and psychiatric conditions.',
           learnMore: 'Learn more →',
           features: [
             'Non-invasive treatment',
             'No medication side effects',
             'FDA-approved therapy'
           ]
         }
       },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to start your journey to pain relief? Contact us today for a free consultation.',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone Number',
        message: 'Message',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        sendMessageTitle: 'Send Us a Message',
        getInTouch: 'Get In Touch',
        officeInformation: 'Office Information',
        address: 'Address',
        officeHours: 'Office Hours',
        mondayFriday: 'Monday - Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        closed: 'Closed',
        emergencyInformation: 'Emergency Information',
        emergencyText1: 'If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room immediately.',
        emergencyText2: 'This contact form is for non-emergency inquiries only.',
        placeholderText: 'Please describe your pain condition, questions, or how we can help you...',
        captchaAlert: 'Please complete the CAPTCHA verification.',
        successMessage: 'Thank you for your message! We will get back to you soon.',
        errorMessage: 'There was a problem submitting your form. Please try again.',
        heroTitle: 'Contact Us',
        heroSubtitle: "We're here to help. Reach out to us with any questions or to schedule an appointment."
      },
      footer: {
        tagline: 'Comprehensive care for chronic pain and neurological conditions.',
        description: 'Professional pain management and wellness solutions.',
        contact: 'Contact',
        address: '6010 Hellyer Ave Ste 150, San Jose, CA 95138',
        copyright: '© Mind and Body Pain Clinic. All rights reserved.',
        company: 'Company',
        externalResources: 'External Resources',
        blog: 'Blog',
        jobOpenings: 'Job Openings',
        militaryHealthSystem: 'Military Health System',
        suicideCrisisLifeline: 'Suicide and Crisis Lifeline',
        imageCredit: 'Some images used on this site are from Freepik.com',
        footerTitle: 'Footer'
      },
      jobOpeningsPage: {
        heroTitle: 'Job Openings',
        heroSubtitle: 'Join our team and help us make a difference.',
        currentOpeningsTitle: 'Current Openings',
        spanishMedAssistantTitle: 'Spanish Medical Assistant / Front Desk',
        spanishMedAssistantDescription:
          'We are seeking a bilingual Spanish Medical Assistant / Front Desk team member to join our clinic.',
        viewOnIndeedCta: 'View full job posting & apply on Indeed'
      },
       accessibility: {
         title: 'Accessibility',
         increaseText: 'Increase Text',
         decreaseText: 'Decrease Text',
         highContrast: 'High Contrast',
         reduceMotion: 'Reduce Motion',
         reset: 'Reset',
         close: 'Close'
       },
      
      home: {
        understandingYourHealth: 'Understanding Your Health',
        testimonialsTitle: 'Patient Testimonials',
        tbiTitle: 'Traumatic Brain Injury',
        tbiDesc: 'Understand the causes, symptoms, and cutting-edge treatments for traumatic brain injuries.',
        tbiCta: 'Discover Treatments →',
        neuroTitle: 'Neuroanatomy and Neurodegeneration',
        neuroDesc: "Explore brain structure, function, and progressive neurological conditions like Alzheimer's and Parkinson's.",
        neuroCta: 'Read More →',
        painTitle: 'Chronic Pain and Spine Disorders',
        painDesc: 'Explore our advanced, multidisciplinary approach to treating chronic pain and complex spine-related conditions.',
        painCta: 'Improve Wellness →',
        disclaimerTitle: 'Medical Disclaimer',
        disclaimerText: 'The information provided on this website is for informational and educational purposes only and is not intended as medical advice. It should not be used as a substitute for professional diagnosis or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or treatment. Do not disregard professional medical advice or delay seeking it because of something you have read on this website.',
        meet: {
          heading: 'Meet Dr. Harpreet Singh',
          credentials: 'MD, Quadruple-Board Certified in Neurology, Internal Medicine, Interventional Pain Management, Brain Injury Medicine',
          paragraph1: 'Dr. Harpreet Singh is a highly specialized, quadruple board-certified physician with over 25 years of clinical experience. A recognized TBI (Traumatic Brain Injury) expert, he combines advanced medical technologies with holistic approaches to deliver compassionate, patient-centered treatment.',
          paragraph2: "Dr. Singh's background spans primary care, palliative care, and academic medicine, including his role as Associate Clinical Professor at UC Davis Medical Center. Designated as a Qualified Medical Examiner (QME) by the California Division of Workers' Compensation, he also serves as an expert witness, evaluating disability and preparing medical-legal reports. With a focus on helping patients manage pain, recover from complex injuries, and restore quality of life, Dr. Singh integrates modern medical innovations with whole-person care."
        }
      },
      brainTMS: {
        heroTitle: 'Brain TMS',
        heroSubtitle: 'Advanced Transcranial Magnetic Stimulation therapy for depression and neurological conditions.'
      },
      painManagementPage: {
        heroTitle: 'Pain Management',
        heroSubtitle: 'Specialized procedures for targeted pain relief.'
      },
      tbiPage: {
        heroTitle: 'Traumatic Brain Injury',
        heroSubtitle: 'Learn how traumatic brain injury affects the brain, what symptoms to watch for, and the diagnostic and treatment services we offer.'
      },
      brainTMSBody: {
        whatIsTitle: 'What is Transcranial Magnetic Stimulation (TMS)?',
        whatIsDesc: "Transcranial Magnetic Stimulation (TMS) is a non-invasive FDA approved revolutionary treatment resulting in brain stimulation to reduce depression symptoms. TMS is FDA-approved for Major Depressive Disorder (MDD), Anxious Depression, Obsessive-Compulsive Disorder (OCD), smoking cessation/nicotine addiction, Post-Traumatic Stress Disorder (PTSD), and migraine with aura. Additionally, research has shown benefits for various non-FDA approved conditions including Generalized Anxiety Disorder, bipolar depression, chronic pain, fibromyalgia, post-stroke recovery, tinnitus, Traumatic Brain Injury, Autism Spectrum Disorder, Alzheimer's disease, Parkinson's disease, addictions, and sleep disorders.",
        benefits: [
          { title: 'FDA Approved', desc: 'In 2008 the FDA approved TMS as a treatment to alleviate symptoms of medication resistant depression.' },
          { title: 'Drug Free', desc: 'No medications are given during the procedure. There is no surgery and no injections.' },
          { title: 'Noninvasive', desc: 'TMS is a technology that allows doctors to non-invasively stimulate the brain and reset it back into health.' },
          { title: 'Safe Procedure', desc: 'The most common side effects are mild to moderate scalp discomfort and headaches.' }
        ],
        howTitle: 'How It Works',
        howDesc: 'Transcranial Magnetic Stimulation (TMS) Therapy uses an electromagnetic coil to deliver pulses that stimulate underactive regions of the brain in patients with depression. These pulses penetrate about 2–3 centimeters beneath the coil, producing small electrical currents that activate neurons. This activity triggers the release of neurotransmitters and gradually helps reset brain connections, reducing depressive symptoms and supporting overall healing.',
        approachTitle: 'Our Approach to TMS Therapy',
        approachDesc: 'Our clinic specializes in the Accelerated, Intermittent Theta-Burst Protocol. Theta Burst Stimulation (TBS) is a subtype of TMS which uses short and high frequences of theta wave stimulation pulses. Theta Burst offers similar or greater effectiveness compared to rTMS with significantly shorter treatment times, requiring only a few minutes per session. Our clinic offers a series of 10 Theta-Burst sessions a day over the course of 5 days.',
        researchTitle: 'Pioneering Research',
        studyJournal: 'Brain Stimulation | March-April 2023',
        studyTitle: 'The Role of Transcranial Magnetic Stimulation in Treating Depression After Traumatic Brain Injury',
        studyDesc: 'Our own Dr. Harpreet Singh co-authored this retrospective study on using excitatory repetitive TMS (rTMS) to treat depression in 59 adults with Traumatic Brain Injury (TBI) or Post-Concussion Syndrome. The study targeted the left dorsolateral prefrontal cortex, a key area for mood regulation. Using standard depression scales (PHQ-9, HAM-D, and BDI-II), the research demonstrated that FDA-approved TMS protocols led to significant reductions in depression severity with large effect sizes. The positive outcomes were consistent across different ages, sexes, and treatment durations. These findings strongly suggest that rTMS is a safe and effective treatment for managing post-concussion depression, reinforcing our commitment to providing evidence-based, innovative care.',
        readFullArticle: 'Read the Full Article'
      },
      brainTMSProtocols: {
        intro: 'Understand the differences between traditional TMS, accelerated TMS, and Thetaburst protocols.',
        labels: {
          duration: 'Treatment Duration',
          sessions: 'Total Sessions',
          details: 'Protocol Details',
          bestFor: 'Best For',
          fdaApproved: 'FDA Approved',
          since: 'Since 2008',
          ourRecommended: 'Our Recommended',
          protocolOfChoice: 'Protocol of choice',
          researchSupported: 'Research Supported',
          multipleTrials: 'Multiple clinical trials'
        },
        cards: {
          traditional: {
            title: 'Traditional TMS',
            duration: 'Typically 30-60 minutes per session, 5 days per week for 4-6 weeks',
            sessions: '20-36 sessions over 4-6 weeks',
            details: 'Standard repetitive TMS (rTMS) using 10 Hz stimulation targeting the dorsolateral prefrontal cortex',
            bestFor: 'Patients who prefer a gradual treatment approach with proven long-term outcomes'
          },
          thetaburst: {
            title: 'Thetaburst (Stanford Protocol)',
            duration: 'Only 3-5 minutes per session, multiple sessions per day',
            sessions: '50 sessions over 5 days (10 sessions per day)',
            details: 'Intermittent Theta-Burst Stimulation (iTBS) using short, high-frequency theta wave pulses',
            bestFor: 'Patients seeking the fastest treatment option with minimal time commitment per session'
          },
          accelerated: {
            title: 'Accelerated TMS',
            duration: 'Multiple sessions per day, each lasting 3-5 minutes',
            sessions: '50 sessions compressed into 5-10 days',
            details: 'High-frequency stimulation with multiple daily sessions and shorter inter-session intervals',
            bestFor: 'Patients seeking faster treatment completion with intensive daily protocols'
          }
        }
      },
      painManagementBody: {
        acuteTitle: 'Acute Pain',
        acuteDesc: 'Acute pain typically develops suddenly after an injury, surgery, or flare-up of a condition such as a herniated disc or joint inflammation. It is often sharp, intense, and directly linked to tissue damage or irritation. In many cases, acute pain improves as the underlying issue heals. At our clinic, we use targeted treatments such as epidural steroid injections, nerve blocks, and joint injections to reduce inflammation and provide rapid relief, helping patients regain mobility and function while their body recovers.',
        chronicTitle: 'Chronic Pain',
        chronicDesc: 'Chronic pain is pain that lasts longer than three months and may continue even after the original injury has healed. It often arises from ongoing spine and joint problems like arthritis, degenerative disc disease, or nerve irritation. Unlike acute pain, chronic pain can interfere with daily activities, sleep, and overall quality of life. Our clinic offers advanced options such as medial branch blocks, radiofrequency ablation (denervation), and regenerative therapies to help break the cycle of persistent pain. By addressing the nerves and structures that generate pain, we aim to restore function and improve long-term comfort.',
        treatmentsProcedures: 'Treatments & Procedures',
        spineProcedures: 'Spine Procedures',
        jointsMuscles: 'Joints & Muscles',
        jointIntro1: 'There are many possible causes of joint pain, and any joint in the body can be affected. Some joint issues are minor and respond well to simple treatments, while others may indicate more serious underlying conditions. Arthritis is one of the most common causes of joint pain, though active individuals may also experience discomfort related to muscle or ligament strain.',
        jointIntro2: 'Our clinic specializes in joint injections, a targeted treatment in which medication is injected directly into the affected joint to reduce inflammation and relieve pain.',
        weCommonlyTreat: 'We commonly treat:',
        shoulderInjections: 'Shoulder injections',
        hipInjections: 'Hip injections',
        kneeInjections: 'Knee injections',
        elbowInjections: 'Elbow injections',
        variousOtherJointInjections: 'Various other joint injections',
        helpRelieve: 'to help relieve pain and restore mobility.',
        readMore: 'Read More',
        readLess: 'Read Less',
        otherJointMuscle: 'Other Common Joint & Muscle Injections',
        extensiveListPrefix: 'For an extensive list of treatments performed at the clinic,',
        extensiveListCta: 'click here',
        treatmentOptions: 'Treatment Options',
        treatmentOptionsIntro: 'Many of our procedures can be performed using either steroid injections or PRP (Platelet-Rich Plasma) therapy, depending on your specific condition and treatment goals.',
        steroidTitle: 'Steroid Injections',
        steroidDesc1: 'Corticosteroid injections are a common treatment used to provide fast and effective relief from pain caused by inflammation in the spine or joints. Inflammation is often the source of pain when nerves, discs, or joint spaces become irritated and swollen. By delivering medication directly to the affected area, corticosteroid injections help reduce this irritation, allowing the surrounding tissues to calm down and function more normally.',
        steroidDesc2: 'These injections are particularly helpful for conditions such as herniated discs or inflammation in the facet or sacroiliac joints. They can significantly improve quality of life by breaking the cycle of pain and inflammation. For patients who respond well, corticosteroid injections can be repeated on a limited basis as part of a broader pain management plan tailored to their needs.',
        prpTitle: 'PRP Therapy',
        prpDesc1: "Platelet-Rich Plasma (PRP) therapy is a regenerative treatment that uses your body's own natural healing abilities to repair damaged tissues and reduce pain. The process begins with a small sample of your blood, which is placed in a centrifuge and spun to concentrate the platelets. These platelets are rich in growth factors — powerful proteins that stimulate tissue repair, reduce inflammation, and support healing in joints, ligaments, tendons, and discs. By injecting this concentrated solution directly into the injured or painful area, PRP helps the body accelerate its natural recovery process.",
        prpDesc2: "PRP is designed to promote true healing at the cellular level. This makes it especially helpful for patients with chronic conditions. Because the treatment relies on your body's biology, results are not immediate. Most patients begin to notice gradual improvements in pain and function within 2–6 weeks, with continued benefits developing over several months.",
        readyTitle: 'Ready for Your Procedure?',
        readyDesc: 'Please review our pre-operative instructions to ensure you are fully prepared for your appointment.',
        viewPreOp: 'View Pre-Operative Instructions'
      },
      painManagementProcedures: {
        'cervical-epidural': {
          name: 'Cervical Epidural Injection',
          summary: 'Anesthetic and steroid medication is injected into the epidural space in the neck to treat pain caused by irritated spinal nerves, often radiating to the shoulders and arms.'
        },
        'cervical-facet': {
          name: 'Cervical Facet Injection',
          summary: 'Medication is injected into the small facet joints in the neck to diagnose the source of pain and provide relief from inflammation and discomfort.'
        },
        'thoracic-epidural': {
          name: 'Thoracic Epidural Injection',
          summary: 'Medication is injected into the epidural space of the mid-back to treat pain from conditions like herniated discs, spinal stenosis, or shingles.'
        },
        'intercostal-nerve': {
          name: 'Intercostal Nerve Block',
          summary: 'Targets the nerves between the ribs to treat chest wall, rib cage, or upper abdomen pain, often from injury or shingles.'
        },
        'medial-branch-block': {
          name: 'Medial Branch Block with Radiofrequency Ablation',
          summary: 'A diagnostic block followed by a radiofrequency procedure to interrupt facet joint pain signals.'
        },
        'lumbar-epidural': {
          name: 'Lumbar Epidural Injection',
          summary: 'Medication delivered into the epidural space of the lower back to relieve pain from sciatica, herniated discs, or nerve-related conditions.'
        },
        'lumbar-facet': {
          name: 'Lumbar Facet Injection',
          summary: 'Targets small facet joints in the lower back to reduce inflammation and pain.'
        },
        'si-joint': {
          name: 'SI Joint Injection',
          summary: 'Targets the sacroiliac joint to diagnose and treat inflammation and dysfunction causing low back/buttock pain.'
        },
        'botox-dystonia': {
          name: 'Botox for Cervical Dystonia',
          summary: 'Botox is injected into neck muscles to block nerve signals, reducing contractions and pain.'
        },
        'trigger-point': {
          name: 'Trigger Point Injections',
          summary: 'Medication injected into painful muscle knots to relax tissue and break the spasm cycle.'
        },
        'tmj-injection': {
          name: 'Temporomandibular Joint Injection',
          summary: 'Anti-inflammatory medication injected into the jaw joint to reduce inflammation and alleviate pain.'
        },
        'joint-injection': {
          name: 'Joint Injections (Shoulder, Knee, Hip)',
          summary: 'Medication injected directly into a painful joint to reduce inflammation (e.g., arthritis in shoulder, knee, or hip).'
        }
      },
      tbiBody: {
        whatIsTitle: 'What is a TBI?',
        whatIsDesc: 'A traumatic brain injury (TBI) is a disruption in normal brain function caused by an external force. The effects can vary widely—from brief changes in mental status to serious, long-term complications that impact memory, movement, mood, and overall quality of life. TBIs are classified as mild, moderate, or severe, depending on the nature of the injury and its impact on brain function.',
        commonCauses: 'Common Causes',
        readMore: 'Read more',
        showLess: 'Show less',
        commonSymptoms: 'Common Symptoms of TBI',
        severityTitle: 'Severity of Traumatic Brain Injury',
        criteria: 'Criteria',
        mild: 'Mild',
        moderate: 'Moderate',
        severe: 'Severe',
        structuralImaging: 'Structural Imaging',
        lossOfConsciousness: 'Loss of Consciousness (LOC)',
        alterationOfConsciousness: 'Alteration of Consciousness (AOC)',
        postTraumaticAmnesia: 'Post-Traumatic Amnesia (PTA)',
        ourDiagnosticApproach: 'Our Diagnostic Approach',
        upTo24: 'Up to 24 hours',
        normal: 'Normal',
        normalOrAbnormal: 'Normal or Abnormal',
        zeroTo30Min: '0-30 minutes',
        gt30lt24: '>30 min <24 hours',
        gt24Hours: '>24 hours',
        zeroTo1Day: '0-1 day',
        gt1lt7Days: '>1 day <7 days',
        gt7Days: '>7 days'
      },
      
      preOp: {
        heroTitle: 'Pre-Operative Instructions',
        heroSubtitle: 'Please review the following instructions carefully to prepare for your procedure.',
        print: 'Print Instructions',
        instruction1Title: 'Arrange for a Driver',
        instruction1Text: 'Please arrange for a driver to pick you up from your appointment.',
        instruction2Title: 'Eating Before Your Appointment',
        instruction2Text: 'Stop eating 4 hours prior to the appointment.',
        instruction3Title: 'Staying Hydrated',
        instruction3Text: 'Stop consuming liquids 1 hour before the appointment. Make sure to stay hydrated and drink plenty of water before, especially if the patient is receiving a PRP injection.',
        instruction4Title: 'Blood Thinning Medications',
        instruction4Text: 'Do not take blood thinning medications including, but not limited to, aspirin, advil, motrin, ibuprofen, naproxen, and aleve 7 days prior.',
        seeComprehensive: 'See comprehensive list of blood-thinning medications',
        hideComprehensive: 'Hide comprehensive list',
        importantNoteTitle: 'Important Note on Medications',
        importantNoteText: 'If you are on any prescribed blood thinning medications (Plavix, Coumadin, Aggrenox, Lovenox, Xarelto, Aspirin) please notify our office so that we may give you specific instructions.',
        importantNoteStrong: 'These changes must be approved by your prescribing doctor (PCP, cardiologist, neurologist, etc.).',
        generalGuidelines: 'General Medication Guidelines:',
        guidelines: {
          plavix: 'Plavix - Stop for 7 days prior to appointment. You will need clearance from your cardiologist if you have cardiac stents in place.',
          coumadin: 'Coumadin - Stop 5 days prior to appointment with an INR drawn the day before your appointment.',
          aggrenox: 'Aggrenox - Stop 7 days prior to appointment.',
          lovenox: 'Lovenox - Stop 24 hours prior to appointment.',
          xarelto: 'Xarelto - Stop 3 days prior to appointment.',
          aspirin: 'Aspirin - For cervical injections, stop 7 days prior. No need to stop before lumbar procedures.',
          antiInflammatory: 'Anti-inflammatory (Motrin, ibuprofen, Advil, Aleve, etc.) - For cervical injections, stop 7 days prior.'
        },
        questionsTitle: 'Questions or Concerns?',
        questionsText: 'If you have any questions about these instructions or need to discuss your medications, please contact our office.'
      },
      workInjuryPage: {
        heroTitle: 'Insights',
        heroSubtitle: 'Specialized medical insights and guidance after injury.',
        servicesTitle: 'Our Services',
        servicesIntro: 'We provide comprehensive medical evaluation, diagnosis, and treatment services for injuries.',
        cards: {
          evalTitle: 'Comprehensive Medical Evaluation',
          evalDesc:
            'Thorough assessment of injuries, including physical examinations, referrals for diagnostic imaging, and detailed medical documentation to support your recovery and continuity of care.',
          painTitle: 'Pain Management Treatment',
          painDesc: 'Specialized pain management protocols for accident-related injuries, including medication management, interventional procedures, and multimodal pain relief strategies.',
          neuroTitle: 'Neurological Treatment',
          neuroDesc: 'Specialized treatment for neurological conditions such as concussions, nerve damage, and traumatic brain injuries.',
          rehabTitle: 'Rehabilitation Services',
          rehabDesc: 'Coordinated referral to rehabilitation programs including physical therapy and specialized treatment to maximize recovery from accident-related injuries.',
          careCoordTitle: 'Care Coordination & Documentation',
          careCoordDesc: 'Clear, organized medical documentation and coordination to keep you, your family, and your care team aligned throughout your recovery.'
        },
        downloadsTitle: 'Downloadable Forms',
        downloadsIntro: 'Download the forms you need before your appointment.',
        forms: {
          registration: 'Registration Form',
          referral: 'Physician Referral Form',
          releaseTo: 'Release Records TO Mind and Body Pain Clinic',
          releaseFrom: 'Release Records FROM Mind and Body Pain Clinic'
        }
      },
      blogPage: {
        heroTitle: 'Latest in Neurology and Pain Management',
        articles: [
          {
            title: 'Pain Is Personal. Brain Stimulation Could Make Treatment That Way, Too.',
            author: 'Gina Kolata, The New York Times',
            date: 'August 14, 2025',
            summary: 'Researchers are exploring personalized brain-stimulation protocols to tailor pain therapy to individual neural signatures.',
            url: 'https://www.nytimes.com/2025/08/14/health/pain-personalized-brain-stimulation.html'
          },
          {
            title: 'Scientists move closer to precisely measuring — and treating — chronic pain',
            author: 'Ben Guarino, The Washington Post',
            date: 'March 23, 2025',
            summary: 'New precision-medicine tools aim to quantify pain signals in the brain and develop targeted interventions.',
            url: 'https://www.washingtonpost.com/science/2025/03/23/pain-measure-precision-research'
          },
          {
            title: 'Unlocking the Science of Touch and Chronic Pain',
            author: 'Scripps Research Magazine',
            date: 'January 2025',
            summary: 'Scripps scientists delve into how tactile signals are processed and how discoveries could lead to novel chronic-pain therapies.',
            url: 'https://magazine.scripps.edu/features/2025/catalyst/unlocking-the-science-of-touch-and-chronic-pain/'
          }
        ]
      },
      neuroPage: {
        heroTitle: 'Neuroanatomy & Neurodegeneration',
        whatIsNeuroTitle: 'What is Neuroanatomy?',
        whatIsIt: null,
        majorRegionsTitle: 'Major Brain Regions',
        keyFunctionsTitle: 'Key Functions:',
        keyStructuresTitle: 'Key Brain Structures',
        keyStructuresIntro: null,
        cellularComponentsTitle: 'Cellular Components',
        neurodegTitle: 'Understanding Neurodegenerative Diseases',
        neurodegIntro: null,
        commonConditionsTitle: 'Common Conditions',
        whatAreNeurodegTitle: 'What Are Neurodegenerative Diseases?',
        whatIsNeurodegenerative: null,
        commonSymptomsTitle: 'Common Symptoms',
        pathFeaturesTitle: 'Key Pathological Features',
        neuronLossTitle: 'Neuron Loss and How It Causes Symptoms',
        whiteMatterTitle: 'White Matter and Communication Disruption',
        proteinAggTitle: 'Protein Aggregates / Hallmark Disease Features'
      },
      innovativePage: {
        heroTitle: 'Innovative & Integrative Medicine',
        integrativeTitle: 'Integrative Medicine',
        integrativeIntro: 'At Mind and Body Pain Clinic, we take a comprehensive, patient-centered approach to neurological care and pain management by integrating the latest advancements in conventional medicine with evidence-based complementary therapies. Our philosophy is rooted in the belief that effective treatment must address not only physical symptoms, but also the emotional, cognitive, and lifestyle factors that contribute to chronic pain and neurological dysfunction. In addition to neurologic evaluations, pharmacologic treatments, and interventional procedures, we encourage a range of integrative therapies such as mindfulness-based stress reduction and yoga — all grounded in scientific research and tailored to individual needs. This multidisciplinary model allows us to treat complex conditions such as traumatic brain injury, neuropathic pain, and post-concussion syndrome with a more holistic lens, helping patients reduce reliance on medications, improve function, and restore quality of of life.',
        traditionalTitle: 'Traditional Medicine',
        traditionalIntro: 'Our traditional approach utilizes proven pharmacological interventions including targeted medications for neuropathic pain, specialized treatments for neurological symptoms, and evidence-based protocols that address both acute and chronic conditions affecting the nervous system.',
        alternativeTitle: 'Alternative Approaches',
        alternativeIntro: 'We complement traditional treatments with carefully selected nutritional supplements, physical therapy modalities, chiropractic care, and mindfulness practices that work synergistically to enhance overall neurological wellness and support long-term healing.',
        supplementsTitle: 'Nutritional Supplements',
        complementaryTitle: 'Complementary Therapies'
      },
      patientRights: {
        heroTitle: 'Patient Rights and Policies',
        heroSubtitle: 'We are committed to providing quality care and ensuring you are informed of your rights and our policies.',
        rightsTitle: 'Patient Rights & Responsibilities',
        rightsIntro: 'We are committed to ensuring you receive the highest quality of care. As a patient, you have rights, and we also ask that you adhere to certain responsibilities to ensure the best possible care for everyone.',
        qualityCareLabel: 'Quality Care:',
        qualityCare: 'Receive high-quality, professional medical care in a safe environment.',
        informationLabel: 'Information:',
        information: 'Receive clear information about your diagnosis, treatment, and options.',
        privacyLabel: 'Privacy:',
        privacy: 'Have your medical information kept confidential and private.',
        respectLabel: 'Respect:',
        respect: 'Be treated with dignity and respect at all times.',
        consentLabel: 'Consent:',
        consent: 'Give informed consent for any treatment and refuse treatment if you choose.',
        voiceConcernsLabel: 'Voice Concerns:',
        voiceConcerns: 'Voice any complaints and have them addressed respectfully.',
        provideInfoLabel: 'Provide Accurate Information:',
        provideInfo: 'Share a complete and accurate medical history.',
        financialLabel: 'Fulfill Financial Obligations:',
        financial: 'Fulfill all financial obligations for services received.',
        policiesTitle: 'Our Policies',
        policiesIntro: 'We maintain clear policies to ensure consistent, high-quality care and a positive experience for all patients.',
        apptTitle: 'Appointment Necessities',
        apptIntro: 'Please bring the following items to your appointment to ensure we can provide you with the best possible care:',
        apptItem1: "All Insurance/Workers' Compensation Information",
        apptItem2: 'Insurance Authorization (if you have HMO insurance)',
        apptItem3: 'All relevant progress notes from your referring health care provider',
        apptItem4: 'Any imaging studies (MRIs, x-rays, etc.) labs and other studies (EMG, etc.)',
        apptItem5: 'Any copay in cash or check',
        apptItem6: 'We do not accept debit cards',
        insTitle: 'Insurance Information',
        insIntro: "We accept Medicare, Workers' Compensation, QME patients, and most insurance plans. Currently we are contracted with the following insurances:",
        insInProcess: 'Contracting application is in process',
        insNote: 'Any person may see Dr. Singh on an individually paid basis and receive an appropriate form to submit to his/her insurance plan for reimbursement for covered benefits.',
        insNoHmo: 'We DO NOT accept HMO insurance or Medi-Cal.',
        privacyTitle: 'Privacy and Confidentiality',
        privacyIntro: 'We are committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with HIPAA regulations.',
        privacyItem1: 'Your medical information is kept strictly confidential',
        privacyItem2: 'We will not share your information without your written consent',
        privacyItem3: 'You have the right to access and request copies of your medical records',
        emergencyTitle: 'Emergency Procedures',
        emergencyIntro: 'In case of a medical emergency, please call 911 or go to the nearest emergency room. For urgent medical concerns during business hours, please call our office.',
        emergencyItem1: 'Emergency situations require immediate medical attention',
        emergencyItem2: 'We provide emergency contact information for after-hours care',
        emergencyItem3: 'Follow-up appointments are scheduled as needed after emergency care',
        openTitle: 'NOTICE TO PATIENTS - OPEN PAYMENTS DATABASE',
        openP1: 'For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services (CMS) Open Payments web page is provided here.',
        openP2: 'The federal Physician Payments Sunshine Act requires that detailed information about payment and other payments of value worth over ten dollars ($10) from manufacturers of drugs, medical devices, and biologics to physicians and teaching hospital be made available to the public.',
        openP3: 'You may search this federal database for payments made to physicians and teaching hospitals by visiting this website:'
       }
    },
    es: {
      common: {
        readMore: 'Leer más',
        readLess: 'Mostrar menos'
      },
      allTreatments: {
        heroTitle: 'Lista Integral de Tratamientos',
        heroSubtitle: 'Resumen detallado de los procedimientos y terapias disponibles.',
        categories: {
          'Injections': 'Inyecciones',
          'Nerve Blocks': 'Bloqueos Nerviosos',
          'Ablation / Denervation': 'Ablación / Desnervación',
          'Regenerative / Biologic Therapies': 'Terapias Regenerativas / Biológicas',
          'Minimally Invasive Spine Procedures': 'Procedimientos de Columna Mínimamente Invasivos',
          'Implantable / Device-Based Therapies': 'Terapias con Dispositivos Implantables'
        },
        items: {
          'Botulinum Toxin Injections': {
            name: 'Inyecciones de toxina botulínica',
            description: 'Las inyecciones de toxina botulínica, una proteína neurotóxica, bloquean las señales nerviosas en los músculos. Esta relajación dirigida ayuda a aliviar migrañas crónicas, espasmos musculares severos (distonía) y rigidez excesiva al prevenir las contracciones involuntarias que causan dolor y molestias.'
          },
          'Cervical, Thoracic and Lumbar Epidural Steroid Injections': {
            name: 'Inyecciones epidurales de esteroides cervicales, torácicas y lumbares',
            description: 'Consisten en inyectar un potente esteroide antiinflamatorio en el espacio epidural que rodea los nervios espinales. Se utilizan para tratar dolor irradiado del cuello, hombros y brazos (cervical), la parte media de la espalda (torácica) o la zona lumbar y piernas (lumbar) por hernias de disco, estenosis u otras causas.'
          },
          'Epidural Steroid Injections': {
            name: 'Inyecciones epidurales de esteroides',
            description: 'Tratamiento no quirúrgico ampliamente utilizado que entrega corticosteroides directamente a la fuente de inflamación nerviosa en la columna. Reduce eficazmente la hinchazón y la presión sobre los nervios, aliviando condiciones como ciática y radiculopatía.'
          },
          'Facet Joint Injections': {
            name: 'Inyecciones en articulaciones facetarias',
            description: 'Inyección de anestésico local y corticosteroide en las articulaciones facetarias, pequeñas articulaciones de cada segmento de la columna que brindan estabilidad. Puede ayudar a diagnosticar el origen del dolor y reducir la inflamación por artritis o lesión.'
          },
          'Facet Joint Block': {
            name: 'Bloqueo de articulación facetaria',
            description: 'Procedimiento principalmente diagnóstico que inyecta un anestésico en la articulación facetaria. Si el dolor mejora de inmediato, confirma que esa articulación es la fuente de dolor y orienta decisiones de tratamiento posteriores.'
          },
          'Intercostal Nerve Block': {
            name: 'Bloqueo de nervio intercostal',
            description: 'Bloqueo dirigido a los nervios intercostales entre las costillas. Útil para manejar dolor agudo o crónico de la pared torácica por fracturas costales, incisiones postquirúrgicas o neuralgia postherpética.'
          },
          'Large Joint and Bursa Injections': {
            name: 'Inyecciones en articulaciones grandes y bursas',
            description: 'Se administran corticosteroides directamente en articulaciones grandes (como rodilla u hombro) o en las bursas circundantes para tratar dolor e inflamación por artrosis, artritis reumatoide o bursitis.'
          },
          'Medial Branch Nerve Block': {
            name: 'Bloqueo de ramas mediales',
            description: 'Inyección diagnóstica precisa que anestesia los nervios de las ramas mediales, encargados de transmitir el dolor de las articulaciones facetarias. El alivio tras el bloqueo confirma el origen facetario y puede indicar candidaturía a ablación por radiofrecuencia.'
          },
          'Occipital Nerve Block': {
            name: 'Bloqueo de nervios occipitales',
            description: 'Inyección de esteroide y anestésico alrededor de los nervios occipitales mayor y menor en la parte posterior de la cabeza. Proporciona alivio en migrañas crónicas, cefaleas en racimos y otros dolores de origen occipital.'
          },
          'Sacroiliac Joint Injection': {
            name: 'Inyección de articulación sacroilíaca',
            description: 'Inyección de medicación en la articulación sacroilíaca, fuente común de dolor lumbar y glúteo. Puede usarse como prueba diagnóstica y tratamiento de sacroileítis o disfunción de la articulación SI.'
          },
          'Synvisc/Hylagan Injections': {
            name: 'Inyecciones de Synvisc/Hylagan',
            description: 'También llamada viscosuplementación, consiste en inyectar ácido hialurónico en la articulación de la rodilla. Actúa como lubricante y amortiguador, mejorando la movilidad y reduciendo el dolor por artrosis.'
          },
          'Transforaminal Selective Nerve Block': {
            name: 'Bloqueo selectivo transforaminal de raíces nerviosas',
            description: 'Inyección específica en el punto donde la raíz nerviosa sale del canal espinal. Ayuda a identificar la fuente exacta de dolor nervioso (ciática, radiculopatía) y proporciona alivio al reducir la inflamación alrededor del nervio.'
          },
          'Trigger Point Injections': {
            name: 'Inyecciones en puntos gatillo',
            description: 'Inyección de anestésico local, a veces con corticosteroide, en nudos musculares dolorosos (puntos gatillo). Relaja el músculo, alivia el dolor y rompe el ciclo de espasmo; se usa en el síndrome de dolor miofascial.'
          },
          'Cranial and Facial Nerve Blocks': {
            name: 'Bloqueos de nervios craneales y faciales',
            description: 'Inyecciones dirigidas a nervios de la cabeza y la cara para diagnosticar y tratar dolor severo como neuralgia del trigémino y dolor facial atípico, bloqueando las señales de dolor.'
          },
          'Peripheral Nerve Blocks': {
            name: 'Bloqueos de nervios periféricos',
            description: 'Inyección de anestésico cerca de un nervio periférico o plexo para bloquear señales de dolor; útil en extremidades por lesión, cirugía o neuropatía.'
          },
          'Sympathetic Blocks': {
            name: 'Bloqueos simpáticos',
            description: 'Bloquean el sistema nervioso simpático para tratar dolor mantenido por simpatía, como el síndrome de dolor regional complejo (CRPS), reduciendo hinchazón, cambios de color y dolor urente.'
          },
          'Sympathetic Ganglion Blocks': {
            name: 'Bloqueos de ganglios simpáticos',
            description: 'Inyecciones sobre ganglios específicos (p. ej., ganglio estrellado o cadena simpática lumbar) para dolor en cabeza, cuello, brazos o piernas mantenido por el sistema simpático.'
          },
          'Stellate Ganglion Block (PTSD)': {
            name: 'Bloqueo del ganglio estrellado (TEPT)',
            description: 'Bloquea señales simpáticas en el cuello y puede mejorar síntomas del trastorno de estrés postraumático al modular la respuesta autonómica y reducir ansiedad e hiperalerta.'
          },
          'Pudendal Nerve Block': {
            name: 'Bloqueo del nervio pudendo',
            description: 'Dirigido al nervio pudendo para tratar dolor pélvico crónico, vulvodinia y neuralgia pudenda; útil con fines diagnósticos y terapéuticos.'
          },
          'Hypogastric Block': {
            name: 'Bloqueo del plexo hipogástrico',
            description: 'Inyección sobre el plexo hipogástrico para dolor visceral pélvico (p. ej., endometriosis) y otras afecciones del abdomen bajo y pelvis.'
          },
          'Ilioinguinal Block': {
            name: 'Bloqueo del nervio ilioinguinal',
            description: 'Anestésico cerca del nervio ilioinguinal para tratar dolor inguinal crónico, dolor posquirúrgico (hernia) o neuralgia ilioinguinal.'
          },
          'Caudal Ganglion Impar Block': {
            name: 'Bloqueo caudal del ganglio impar',
            description: 'Bloqueo del ganglio impar en la base de la columna para coccigodinia crónica (dolor de cóccix), dolor perineal y otras afecciones pélvicas inferiores.'
          },
          'Cryoablation of Peripheral Nerves': {
            name: 'Crioablación de nervios periféricos',
            description: 'Uso de una sonda que aplica frío extremo para congelar y destruir nervios periféricos dolorosos e interrumpir señales de dolor por períodos prolongados.'
          },
          'Medial Branch Denervation': {
            name: 'Desnervación de ramas mediales',
            description: 'Tras bloqueos positivos, ablación por radiofrecuencia de las ramas mediales para impedir la transmisión del dolor facetario y lograr alivio de meses a más de un año.'
          },
          'Radiofrequency Ablation': {
            name: 'Ablación por radiofrecuencia',
            description: 'Procedimiento mínimamente invasivo que calienta tejido nervioso con corriente de radiofrecuencia para impedir la transmisión del dolor y ofrecer alivio duradero.'
          },
          'Radiofrequency of Peripheral Nerves': {
            name: 'Radiofrecuencia de nervios periféricos',
            description: 'Aplicación de radiofrecuencia sobre nervios periféricos identificados como origen del dolor, útil en neuropatías y síndromes de atrapamiento.'
          },
          'Prolotherapy': {
            name: 'Proloterapia',
            description: 'Inyección de solución irritante (p. ej., dextrosa) en ligamentos o tendones lesionados para inducir respuesta inflamatoria controlada y estimular reparación tisular.'
          },
          'Stem Cell Treatment': {
            name: 'Tratamiento con células madre',
            description: 'Terapia regenerativa con células madre (a menudo autólogas) inyectadas en zonas lesionadas para favorecer la regeneración de cartílago, tendones o ligamentos.'
          },
          'Bone Marrow Aspirate': {
            name: 'Aspirado de médula ósea',
            description: 'Obtención de médula ósea de la cresta ilíaca rica en células y factores de crecimiento para usos regenerativos o como apoyo a otras intervenciones.'
          },
          'Spinal Cord Stimulator Implant': {
            name: 'Implante de estimulador medular',
            description: 'Dispositivo implantable que envía señales eléctricas de baja intensidad a la médula espinal para modular y enmascarar señales de dolor crónico en espalda, piernas o brazos.'
          },
          'Discography': {
            name: 'Discografía',
            description: 'Prueba diagnóstica que inyecta contraste en discos espinales bajo guía radiológica para identificar el disco responsable del dolor al reproducir los síntomas.'
          }
        }
      },
      longTermTbi: {
        heroTitle: 'Consecuencias crónicas de la LCT',
        heroSubtitle: 'Comprender los efectos persistentes que pueden impactar la vida durante años tras la lesión inicial.',
        importanceTitle: 'Importancia del manejo a largo plazo',
        importanceText: 'Comprender y manejar los efectos a largo plazo de la LCT requiere atención médica continua, rehabilitación y servicios de apoyo. El seguimiento regular con los profesionales de la salud, la participación en grupos de apoyo y las modificaciones del estilo de vida pueden mejorar significativamente los resultados y la calidad de vida. La intervención temprana y una planificación integral son esenciales para abordar eficazmente estas consecuencias crónicas.',
        groups: {
          cognitive: {
            title: 'Efectos cognitivos y neurológicos',
            items: {
              cognitive_decline: {
                name: 'Declive cognitivo y lentitud en el procesamiento',
                description: 'Las dificultades persistentes de memoria, atención y funciones ejecutivas son algunos de los efectos a largo plazo más frecuentes de la LCT. Puede haber problemas crónicos con la memoria de trabajo, la atención sostenida, la velocidad de procesamiento y funciones de alto nivel como planificación, organización y resolución de problemas.'
              },
              white_matter: {
                name: 'Lesión de sustancia blanca',
                description: 'El daño axonal crónico en los tractos de sustancia blanca es una consecuencia común, especialmente en LCT moderada o grave. Puede conducir a deterioro cognitivo, encefalopatía traumática crónica (ETC) y mayor riesgo de demencia. Esta lesión difusa afecta la conectividad neural y contribuye a déficits cognitivos y funcionales persistentes.'
              },
              chronic_fatigue: {
                name: 'Fatiga crónica y problemas de sueño',
                description: 'La fatiga persistente y los trastornos del sueño suelen continuar más allá del periodo inicial de recuperación. Pueden deberse a disfunción cerebral continua, desequilibrios hormonales, trastornos del ánimo o efectos de medicamentos, afectando la energía, la motivación y la calidad de vida.'
              }
            }
          },
          emotional: {
            title: 'Efectos emocionales, conductuales y psicológicos',
            items: {
              mood_behavioral: {
                name: 'Trastornos crónicos del estado de ánimo y la conducta',
                description: 'Depresión, ansiedad, irritabilidad o cambios de personalidad persistentes son complicaciones frecuentes. Pueden volverse crónicos y afectar la calidad de vida, las relaciones y el funcionamiento social, requiriendo apoyo psicológico prolongado y, a veces, medicación.'
              },
              substance_abuse: {
                name: 'Abuso de sustancias',
                description: 'Las personas con LCT presentan tasas más altas de alcoholismo y consumo de drogas. Estos trastornos pueden surgir como mecanismos de afrontamiento desadaptativos ante dolor crónico, cambios del ánimo, dificultades cognitivas y problemas de control de impulsos.'
              },
              sexual_dysfunction: {
                name: 'Disfunción sexual',
                description: 'Disminución de la libido, dificultades de excitación y disfunciones sexuales son comunes, especialmente cuando hay afectación de hipófisis o hipotálamo. Los desequilibrios hormonales pueden requerir evaluación endocrina y terapia sustitutiva.'
              }
            }
          },
          physical: {
            title: 'Déficits físicos y sensoriales',
            items: {
              motor_sensory: {
                name: 'Alteraciones motoras y sensoriales',
                description: 'Debilidad, entumecimiento, problemas de coordinación y otros déficits motores o sensoriales pueden persistir tras una LCT, afectando movilidad, motricidad fina e independencia funcional.'
              },
              dual_diagnosis: {
                name: 'Diagnóstico dual con lesión medular',
                description: 'Cuando la LCT coexiste con una lesión medular, la recuperación se complica notablemente y requiere atención multidisciplinaria especializada que aborde simultáneamente ambas lesiones del sistema nervioso.'
              }
            }
          },
          aging: {
            title: 'Envejecimiento y progresión a largo plazo',
            items: {
              geriatric: {
                name: 'Complicaciones geriátricas',
                description: 'Con el envejecimiento, los sobrevivientes de LCT pueden experimentar deterioro cognitivo acelerado, mayor riesgo de hidrocefalia y empeoramiento de cambios visuales o conductuales, con declive funcional más rápido que en personas sin antecedente de LCT.'
              }
            }
          }
        }
      },
      nav: {
        home: 'Inicio',
        about: 'Sobre Nosotros',
        services: 'Servicios',
        traumaticBrainInjury: 'Lesión Cerebral Traumática',
        silverCreekSurgery: 'Manejo del Dolor',
        tms: 'TMS',
        contact: 'Contáctenos',
        patientPortal: 'Portal del Paciente',
        preOperativeInstructions: 'Instrucciones Preoperatorias',
        patientRightsAndPolicies: 'Derechos y Políticas del Paciente',
        workAndPersonalInjury: 'Perspectivas',
        blog: 'Blog',
        education: 'Educación',
        neuroanatomy: 'Neuroanatomía',
        innovativeIntegrativeMedicine: 'Medicina Innovadora e Integrativa',
        allTreatments: 'Todos los Tratamientos'
      },
      hero: {
        welcome: 'Bienvenido a',
        subtitle: 'Soluciones integrales de manejo del dolor y bienestar.',
        getStarted: 'Comenzar',
        learnMore: 'Saber Más'
      },
      about: {
        title: 'Nuestra Misión',
        description: "En Mind and Body Pain Clinic, nos dedicamos a la evaluación integral y al manejo multimodal del dolor y las condiciones neurológicas. Nos especializamos en el tratamiento de dolores de cabeza, dolor de cuello y una amplia gama de otros trastornos dolorosos.\n\nNuestra misión es apoyar a los pacientes a través de la educación, el manejo de medicamentos y procedimientos intervencionistas avanzados. Creemos en la combinación de tecnologías médicas modernas con enfoques complementarios como la fisioterapia y el yoga para brindar una atención verdaderamente holística.\n\nTrabajamos en estrecha colaboración con sus proveedores de atención médica para garantizar un tratamiento individualizado y adaptado a sus necesidades. Si bien usamos medicamentos cuando es apropiado, generalmente evitamos los regímenes de opioides en dosis altas, ya que la investigación muestra que conllevan riesgos significativos con un beneficio limitado a largo plazo en comparación con estrategias más seguras y de dosis más bajas."
      },
             services: {
         title: 'Nuestros Servicios',
         traumaticBrainInjury: {
           title: 'Servicios de Lesiones Cerebrales Traumáticas',
           description: 'Planes de tratamiento holísticos para condiciones neurológicas.',
           learnMore: 'Saber más →',
           features: [
             'Planes de tratamiento personalizados',
             'Enfoque multidisciplinario',
             'Terapias basadas en evidencia'
           ]
         },
         silverCreekSurgery: {
           title: 'Servicios de Manejo del Dolor',
           description: 'Tratamientos de vanguardia para el dolor agudo y crónico.',
           learnMore: 'Saber más →',
           features: [
             'Procedimientos mínimamente invasivos',
             'Técnicas quirúrgicas avanzadas',
             'Atención postoperatoria integral'
           ]
         },
         brainTMS: {
           title: 'Servicios de TMS Cerebral',
           description: 'Terapia TMS para condiciones neurológicas y psiquiátricas.',
           learnMore: 'Saber más →',
           features: [
             'Tratamiento no invasivo',
             'Sin efectos secundarios de medicamentos',
             'Terapia aprobada por la FDA'
           ]
         }
       },
      contact: {
        title: 'Ponte en Contacto',
        subtitle: '¿Listo para comenzar tu viaje hacia el alivio del dolor? Contáctanos hoy para una consulta gratuita.',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        message: 'Mensaje',
        sendMessage: 'Enviar Mensaje',
        sending: 'Enviando...',
        sendMessageTitle: 'Envíanos un Mensaje',
        getInTouch: 'Ponte en Contacto',
        officeInformation: 'Información de la Oficina',
        address: 'Dirección',
        officeHours: 'Horarios de Oficina',
        mondayFriday: 'Lunes - Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
        closed: 'Cerrado',
        emergencyInformation: 'Información de Emergencia',
        emergencyText1: 'Si estás experimentando una emergencia médica, por favor llama al 911 o ve a la sala de emergencias más cercana inmediatamente.',
        emergencyText2: 'Este formulario de contacto es solo para consultas no urgentes.',
        placeholderText: 'Por favor describe tu condición de dolor, preguntas, o cómo podemos ayudarte...',
        captchaAlert: 'Por favor completa la verificación CAPTCHA.',
        successMessage: '¡Gracias por tu mensaje! Te responderemos pronto.',
        errorMessage: 'Hubo un problema al enviar tu formulario. Por favor intenta de nuevo.',
        heroTitle: 'Contáctanos',
        heroSubtitle: 'Estamos aquí para ayudar. Ponte en contacto con nosotros para cualquier pregunta o para programar una cita.'
      },
      footer: {
        tagline: 'Atención integral para el dolor crónico y condiciones neurológicas.',
        description: 'Soluciones profesionales de manejo del dolor y bienestar.',
        contact: 'Contacto',
        address: '6010 Hellyer Ave Ste 150, San Jose, CA 95138',
        copyright: '© 2024 Mind and Body Pain Clinic. Todos los derechos reservados.',
        company: 'Empresa',
        externalResources: 'Recursos Externos',
        blog: 'Blog',
        jobOpenings: 'Oportunidades de Empleo',
        militaryHealthSystem: 'Sistema de Salud Militar',
        suicideCrisisLifeline: 'Línea de Prevención del Suicidio y Crisis',
        imageCredit: 'Algunas imágenes utilizadas en este sitio son de Freepik.com',
        footerTitle: 'Pie de página'
      },
      jobOpeningsPage: {
        heroTitle: 'Oportunidades de Empleo',
        heroSubtitle: 'Únase a nuestro equipo y ayúdenos a marcar la diferencia.',
        currentOpeningsTitle: 'Vacantes Disponibles',
        spanishMedAssistantTitle: 'Asistente Médico(a) / Recepción (Bilingüe Español)',
        spanishMedAssistantDescription:
          'Estamos buscando un(a) Asistente Médico(a) / Recepcionista bilingüe en español para unirse a nuestra clínica.',
        viewOnIndeedCta: 'Ver oferta completa y postular en Indeed'
      },
       accessibility: {
         title: 'Accesibilidad',
         increaseText: 'Aumentar Texto',
         decreaseText: 'Disminuir Texto',
         highContrast: 'Alto Contraste',
         reduceMotion: 'Reducir Movimiento',
         reset: 'Restablecer',
         close: 'Cerrar'
       },
      
      home: {
        understandingYourHealth: 'Entendiendo su Salud',
        testimonialsTitle: 'Testimonios de Pacientes',
        tbiTitle: 'Lesión Cerebral Traumática',
        tbiDesc: 'Entienda las causas, los síntomas y los tratamientos de vanguardia para las lesiones cerebrales traumáticas.',
        tbiCta: 'Descubrir Tratamientos →',
        neuroTitle: 'Neuroanatomía y Neurodegeneración',
        neuroDesc: 'Explore la estructura y función del cerebro y condiciones neurológicas progresivas como el Alzheimer y el Parkinson.',
        neuroCta: 'Leer Más →',
        painTitle: 'Dolor Crónico y Trastornos de la Columna',
        painDesc: 'Explore nuestro enfoque avanzado y multidisciplinario para tratar el dolor crónico y condiciones complejas de la columna.',
        painCta: 'Mejorar el Bienestar →',
        disclaimerTitle: 'Descargo de Responsabilidad Médica',
        disclaimerText: 'La información proporcionada en este sitio web es solo con fines informativos y educativos y no pretende ser asesoramiento médico. No debe utilizarse como sustituto del diagnóstico o tratamiento profesional. Siempre busque el consejo de su médico u otro proveedor de atención médica calificado con cualquier pregunta que pueda tener sobre una afección médica o tratamiento. No ignore el consejo médico profesional ni retrase su búsqueda debido a algo que haya leído en este sitio web.',
        meet: {
          heading: 'Conozca al Dr. Harpreet Singh',
          credentials: 'MD, Cuádruple Certificación en Neurología, Medicina Interna, Manejo Intervencionista del Dolor y Medicina de Lesión Cerebral',
          paragraph1: 'El Dr. Harpreet Singh es un médico altamente especializado, con cuádruple certificación y más de 25 años de experiencia clínica. Reconocido experto en LCT (Lesión Cerebral Traumática), combina tecnologías médicas avanzadas con enfoques holísticos para brindar un tratamiento compasivo y centrado en el paciente.',
          paragraph2: 'La trayectoria del Dr. Singh abarca la atención primaria, cuidados paliativos y la medicina académica, incluyendo su función como Profesor Clínico Asociado en el UC Davis Medical Center. Designado como Examinador Médico Calificado (QME) por la División de Compensación para Trabajadores de California, también actúa como perito, evaluando discapacidad y elaborando informes médico-legales. Enfocado en ayudar a los pacientes a manejar el dolor, recuperarse de lesiones complejas y restaurar su calidad de vida, el Dr. Singh integra innovaciones médicas modernas con una atención integral de la persona.'
        }
      },
      brainTMS: {
        heroTitle: 'TMS Cerebral',
        heroSubtitle: 'Terapia avanzada de Estimulación Magnética Transcraneal para depresión y condiciones neurológicas.'
      },
      painManagementPage: {
        heroTitle: 'Manejo del Dolor',
        heroSubtitle: 'Procedimientos especializados para un alivio del dolor dirigido.'
      },
      tbiPage: {
        heroTitle: 'Lesión Cerebral Traumática',
        heroSubtitle: 'Conozca cómo la lesión cerebral traumática afecta el cerebro, qué síntomas vigilar y los servicios diagnósticos y de tratamiento que ofrecemos.'
      },
      brainTMSBody: {
        whatIsTitle: '¿Qué es la Estimulación Magnética Transcraneal (TMS)?',
        whatIsDesc: 'La TMS es un tratamiento no invasivo aprobado por la FDA que estimula el cerebro para reducir los síntomas de depresión resistente a medicamentos. También hay evidencia para otras afecciones como ansiedad, dolor crónico, fibromialgia, recuperación post-ictus, tinnitus, TBI, TEA, Alzheimer, Parkinson, adicciones y trastornos del sueño.',
        benefits: [
          { title: 'Aprobado por la FDA', desc: 'En 2008 la FDA aprobó la TMS como tratamiento para aliviar los síntomas de la depresión resistente a medicamentos.' },
          { title: 'Libre de fármacos', desc: 'No se administran medicamentos durante el procedimiento. No hay cirugía ni inyecciones.' },
          { title: 'No invasivo', desc: 'Tecnología que permite estimular el cerebro de forma no invasiva para favorecer su restablecimiento.' },
          { title: 'Procedimiento Seguro', desc: 'Los efectos secundarios más comunes son molestias leves del cuero cabelludo y dolores de cabeza.' }
        ],
        howTitle: 'Cómo Funciona',
        howDesc: 'La TMS utiliza una bobina electromagnética para enviar pulsos que estimulan regiones cerebrales hipoactivas. Estos pulsos generan corrientes eléctricas pequeñas que activan neuronas y liberan neurotransmisores, ayudando a restablecer conexiones y reducir síntomas depresivos.',
        approachTitle: 'Nuestro Enfoque en TMS',
        approachDesc: 'Nos especializamos en el Protocolo Acelerado de Theta-Burst Intermitente (iTBS). Ofrece eficacia similar o mayor que la rTMS con sesiones de pocos minutos; realizamos 10 sesiones al día durante 5 días.',
        researchTitle: 'Investigación Pionera',
        studyJournal: 'Brain Stimulation | Marzo-abril 2023',
        studyTitle: 'El papel de la TMS en la depresión tras lesión cerebral traumática',
        studyDesc: 'El Dr. Singh coautoró un estudio retrospectivo que utilizó rTMS excitatoria para tratar depresión en 59 adultos con LCT o síndrome post-concusión. Se observaron reducciones significativas en escalas estandarizadas, respaldando la seguridad y eficacia de rTMS.',
        readFullArticle: 'Leer el artículo completo'
      },
      brainTMSProtocols: {
        intro: 'Conozca las diferencias entre TMS tradicional, TMS acelerado y Thetaburst.',
        labels: {
          duration: 'Duración del tratamiento',
          sessions: 'Número total de sesiones',
          details: 'Detalles del protocolo',
          bestFor: 'Best For',
          fdaApproved: 'FDA Approved',
          since: 'Desde 2008',
          ourRecommended: 'Nuestra recomendación',
          protocolOfChoice: 'Protocolo preferido',
          researchSupported: 'Con respaldo de investigación',
          multipleTrials: 'Múltiples ensayos clínicos'
        },
        cards: {
          traditional: {
            title: 'TMS tradicional',
            duration: '30–60 minutos por sesión, 5 días por semana durante 4–6 semanas',
            sessions: '20–36 sesiones en 4–6 semanas',
            details: 'rTMS estándar a 10 Hz dirigido a la corteza prefrontal dorsolateral',
            bestFor: 'Pacientes que prefieren un enfoque gradual con resultados a largo plazo probados'
          },
          thetaburst: {
            title: 'Theta-Burst (Protocolo de Stanford)',
            duration: 'Solo 3–5 minutos por sesión, múltiples sesiones por día',
            sessions: '50 sesiones en 5 días (10 sesiones por día)',
            details: 'Estimulación Theta-Burst intermitente (iTBS) con pulsos cortos y de alta frecuencia',
            bestFor: 'Pacientes que buscan la opción más rápida con mínimo tiempo por sesión'
          },
          accelerated: {
            title: 'TMS acelerado',
            duration: 'Múltiples sesiones por día de 3–5 minutos cada una',
            sessions: '50 sesiones concentradas en 5–10 días',
            details: 'Estimulación de alta frecuencia con múltiples sesiones diarias e intervalos cortos',
            bestFor: 'Pacientes que desean completar el tratamiento más rápido con protocolos intensivos'
          }
        }
      },
      painManagementBody: {
        acuteTitle: 'Dolor Agudo',
        acuteDesc: 'El dolor agudo suele desarrollarse repentinamente después de una lesión, cirugía o reagudización de una afección como una hernia discal o inflamación articular. Suele ser intenso, punzante y está directamente relacionado con el daño o la irritación de los tejidos. En muchos casos, mejora a medida que sana la causa subyacente. En nuestra clínica utilizamos tratamientos dirigidos como inyecciones epidurales de esteroides, bloqueos nerviosos e inyecciones articulares para reducir la inflamación y proporcionar alivio rápido, ayudando a los pacientes a recuperar la movilidad y la función mientras el cuerpo se recupera.',
        chronicTitle: 'Dolor Crónico',
        chronicDesc: 'El dolor crónico dura más de tres meses y puede continuar incluso después de que la lesión original haya sanado. A menudo se debe a problemas en la columna y las articulaciones, como artritis, enfermedad degenerativa del disco o irritación nerviosa. A diferencia del dolor agudo, el dolor crónico puede interferir con las actividades diarias, el sueño y la calidad de vida. Ofrecemos opciones avanzadas como bloqueos de ramas mediales, ablación por radiofrecuencia (desnervación) y terapias regenerativas para ayudar a romper el ciclo del dolor persistente.',
        treatmentsProcedures: 'Tratamientos y Procedimientos',
        spineProcedures: 'Procedimientos de Columna',
        jointsMuscles: 'Articulaciones y Músculos',
        jointIntro1: 'Hay muchas posibles causas del dolor articular y cualquier articulación del cuerpo puede verse afectada. Algunos problemas articulares son leves y responden bien a tratamientos sencillos, mientras que otros pueden indicar afecciones subyacentes más serias. La artritis es una de las causas más comunes de dolor articular, aunque las personas activas también pueden presentar molestias relacionadas con tensión de músculos o ligamentos.',
        jointIntro2: 'Nuestra clínica se especializa en las inyecciones articulares, un tratamiento dirigido en el que se inyecta medicación directamente en la articulación afectada para reducir la inflamación y aliviar el dolor.',
        weCommonlyTreat: 'Tratamos comúnmente:',
        shoulderInjections: 'Inyecciones de hombro',
        hipInjections: 'Inyecciones de cadera',
        kneeInjections: 'Inyecciones de rodilla',
        elbowInjections: 'Inyecciones de codo',
        variousOtherJointInjections: 'Otras inyecciones articulares',
        helpRelieve: 'para ayudar a aliviar el dolor y restaurar la movilidad.',
        readMore: 'Leer más',
        readLess: 'Mostrar menos',
        otherJointMuscle: 'Otras Inyecciones Comunes',
        extensiveListPrefix: 'Para una lista extensa de tratamientos realizados en la clínica,',
        extensiveListCta: 'haz clic aquí',
        treatmentOptions: 'Opciones de Tratamiento',
        treatmentOptionsIntro: 'Muchos de nuestros procedimientos pueden realizarse con inyecciones de esteroides o con terapia PRP (Plasma Rico en Plaquetas), según su condición específica y sus objetivos de tratamiento.',
        steroidTitle: 'Inyecciones de Esteroides',
        steroidDesc1: 'Las inyecciones de corticosteroides proporcionan alivio rápido y eficaz del dolor causado por la inflamación en la columna o articulaciones. Al administrar el medicamento directamente en el área afectada, reducen la irritación y permiten que los tejidos funcionen con normalidad.',
        steroidDesc2: 'Son especialmente útiles para hernias discales o inflamación en las articulaciones facetarias o sacroilíacas. En pacientes que responden bien, pueden repetirse de forma limitada como parte de un plan integral.',
        prpTitle: 'Terapia PRP',
        prpDesc1: 'La terapia de Plasma Rico en Plaquetas (PRP) utiliza la capacidad de curación natural del cuerpo para reparar tejidos dañados y reducir el dolor. Se concentra un pequeño volumen de sangre para obtener factores de crecimiento que estimulan la reparación y reducen la inflamación.',
        prpDesc2: 'El PRP promueve la curación a nivel celular; los resultados son graduales y suelen notarse entre 2 y 6 semanas, con beneficios que continúan desarrollándose durante meses.',
        readyTitle: '¿Listo para su procedimiento?',
        readyDesc: 'Revise nuestras instrucciones preoperatorias para asegurarse de estar completamente preparado para su cita.',
        viewPreOp: 'Ver Instrucciones Preoperatorias'
      },
      painManagementProcedures: {
        'cervical-epidural': {
          name: 'Inyección epidural cervical',
          summary: 'Anesthetic and steroid medication is injected into the epidural space in the neck to treat pain caused by irritated spinal nerves, often radiating to the shoulders and arms.'
        },
        'cervical-facet-epidural-desc': {
          name: 'Inyección epidural cervical (Descripción)',
          summary: 'Descripción general del procedimiento epidural cervical.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es una inyección epidural de esteroides?</h4>
        <p style="color: #374151; margin-bottom: 16px;">La inyección epidural de esteroides consiste en aplicar un anestésico y un antiinflamatorio (esteroide) en el espacio epidural para tratar el dolor causado por la irritación de los nervios espinales. Este espacio rodea el saco dural que contiene el líquido cefalorraquídeo y por donde pasan las raíces nerviosas.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento</h4>
        <p style="color: #374151; margin-bottom: 16px;">Es un procedimiento ambulatorio. Se limpia la piel con antiséptico y se inyecta anestesia local que puede arder unos segundos. Luego, con guía de fluoroscopia (rayos X en vivo), se coloca la aguja en el espacio epidural y se inyecta contraste para confirmar la posición, seguido del anestésico y el esteroide. Tras una breve observación, el paciente puede retirarse.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Riesgos del procedimiento</h4>
        <p style="color: #374151; margin-bottom: 12px;">Aunque infrecuentes, los riesgos incluyen:</p>
        <ul style="color: #374151; margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 4px;">Reacción alérgica a los medicamentos</li>
          <li style="margin-bottom: 4px;">Lesión nerviosa</li>
          <li style="margin-bottom: 4px;">Hematoma o infección en el sitio de inyección</li>
          <li style="margin-bottom: 4px;">Punción de la duramadre con cefalea</li>
        </ul>
      `
        },
        'cervical-facet': {
          name: 'Inyección facetaria cervical',
          summary: 'Medicamento en articulaciones facetarias del cuello para diagnosticar y aliviar inflamación y dolor.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es una inyección en la articulación facetaria cervical?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se utiliza para bloquear o reducir el dolor originado en las articulaciones facetarias del cuello. Estas pequeñas articulaciones dan estabilidad y guían el movimiento cervical; cuando se inflaman, pueden causar dolor de cuello que irradia a hombros, parte alta de la espalda o brazos.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento</h4>
        <p style="color: #374151; margin-bottom: 16px;">Procedimiento ambulatorio con monitoreo básico. Se limpia la piel, se aplica anestesia local y, con fluoroscopia, se guía una aguja hasta la articulación. Se puede usar contraste para confirmar posición. Luego se inyecta una mezcla de anestésico y esteroide. Se evalúa la mejoría del dolor y se observa brevemente antes del alta.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Riesgos del procedimiento</h4>
        <p style="color: #374151; margin-bottom: 12px;">Infrecuentes, pueden incluir reacción alérgica, irritación o lesión nerviosa, aumento temporal del dolor, hematoma o infección.</p>
      `
        },
        'thoracic-epidural': {
          name: 'Inyección epidural torácica',
          summary: 'Medicamentos en el espacio epidural de la columna media para hernia de disco, estenosis o neuralgia postherpética.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">Acerca de la inyección epidural torácica</h4>
        <p style="color: #374151; margin-bottom: 16px;">Consiste en inyectar anestésico y esteroide en el espacio epidural torácico para aliviar dolor por irritación de raíces nerviosas en la parte media de la espalda (p. ej., hernia de disco, estenosis espinal o dolor por herpes zóster).</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se realiza con el paciente boca abajo. Tras anestesia local, se guía la aguja con fluoroscopia, se inyecta contraste para confirmar la posición y luego el medicamento. Dura 15–30 minutos y suele requerir observación breve posterior.</p>
      `
        },
        'intercostal-nerve': {
          name: 'Bloqueo de nervio intercostal',
          summary: 'Bloqueo de nervios entre las costillas para dolor de pared torácica, costillas o abdomen superior.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es un bloqueo del nervio intercostal?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Es la inyección de anestésico local (a veces con esteroide) alrededor del nervio ubicado entre costillas para tratar dolor neuropático o somático del tórax, flanco o espalda alta. Puede beneficiar dolor por herpes zóster, cirugías previas o lesiones.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento y riesgos</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se limpia la piel y se coloca la aguja en el espacio intercostal para inyectar el medicamento. Riesgos poco frecuentes incluyen neumotórax, sangrado, infección o reacciones tóxicas sistémicas.</p>
      `
        },
        'medial-branch-block': {
          name: 'Bloqueo de ramas mediales con ablación por radiofrecuencia',
          summary: 'Bloqueo diagnóstico seguido de radiofrecuencia para interrumpir señales de dolor de articulaciones facetarias.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es un bloqueo de ramas mediales?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Las ramas mediales son pequeños nervios que transmiten el dolor de las articulaciones facetarias. El bloqueo con anestésico sirve para determinar si esas articulaciones son la fuente de dolor. Si el bloqueo es positivo, se puede considerar un tratamiento más duradero.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento</h4>
        <p style="color: #374151; margin-bottom: 16px;">Con guía de rayos X, se introduce una aguja cerca del nervio, se confirma la posición con contraste y se inyecta anestésico. Es ambulatorio y generalmente bien tolerado.</p>
      `,
          radiofrequencyDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es la ablación por radiofrecuencia?</h4>
        <p style="color: #374151; margin-bottom: 16px;">La radiofrecuencia utiliza calor generado por ondas de radio a través de una aguja para lesionar selectivamente las terminaciones nerviosas sensoriales y así interrumpir la señal de dolor. Puede brindar alivio prolongado (meses a años) y repetirse si es necesario.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento y riesgos</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se realiza de forma ambulatoria con monitoreo. Se confirma la posición de la aguja con fluoroscopia y estimulación eléctrica, y luego se aplica calor por 90–120 segundos. Riesgos infrecuentes incluyen reacción a medicamentos, infección, hematoma o lesión de estructuras vecinas.</p>
      `
        },
        'lumbar-epidural': {
          name: 'Inyección epidural lumbar',
          summary: 'Medicamentos en el espacio epidural lumbar para ciática, hernia de disco u otras afecciones nerviosas.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es una inyección epidural de esteroides?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Es similar a la cervical/torácica pero aplicada en la zona lumbar para aliviar dolor radicular, ciática o irritación nerviosa. Se inyecta anestésico y esteroide en el espacio epidural.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción y riesgos</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se guía la aguja con fluoroscopia, se confirma con contraste y se aplica el medicamento. Riesgos: reacción alérgica, lesión nerviosa, infección, hematoma o cefalea por punción dural.</p>
      `
        },
        'lumbar-facet': {
          name: 'Inyección facetaria lumbar',
          summary: 'Inyección en articulaciones facetarias lumbares para aliviar inflamación y dolor en espalda baja.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es una inyección facetaria lumbar?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Bloquea o reduce el dolor originado en articulaciones facetarias de la zona lumbar. Útil cuando hay dolor lumbar con irradiación a abdomen, glúteos o piernas por inflamación articular.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción del procedimiento y riesgos</h4>
        <p style="color: #374151; margin-bottom: 16px;">Procedimiento ambulatorio con guía fluoroscópica y posible uso de contraste. Riesgos: reacción a medicamentos, lesión nerviosa, infección o hematoma.</p>
      `
        },
        'si-joint': {
          name: 'Inyección de articulación sacroilíaca',
          summary: 'Inyección diagnóstica y terapéutica en la articulación sacroilíaca para dolor lumbar y glúteo.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es un bloqueo de la articulación sacroilíaca?</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se usa para diagnosticar y tratar dolor asociado a la articulación sacroilíaca (unión pelvis-columna). Reduce la inflamación intraarticular con mezcla de anestésico y esteroide.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Descripción y riesgos</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se realiza con guía fluoroscópica tras anestesia local. Riesgos poco frecuentes: neumotórax (muy raro en esta zona), debilidad transitoria, reacción alérgica, infección o inyección intravascular.</p>
      `
        },
        'botox-dystonia': {
          name: 'Botox para distonía cervical',
          summary: 'Inyección de Botox en músculos del cuello para reducir contracciones involuntarias y dolor.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">Acerca del Botox para distonía cervical</h4>
        <p style="color: #374151; margin-bottom: 16px;">La distonía cervical causa espasmos involuntarios de músculos del cuello. El Botox bloquea señales nerviosas para relajar los músculos y disminuir el dolor.</p>
      `
        },
        'trigger-point': {
          name: 'Inyecciones de puntos gatillo',
          summary: 'Anestésico (a veces con esteroide) en nudos musculares para romper el ciclo de espasmo y dolor.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">Acerca de las inyecciones en puntos gatillo</h4>
        <p style="color: #374151; margin-bottom: 16px;">Se inyecta anestésico local, a veces con esteroide, directamente en nudos musculares dolorosos para reducir la inflamación, relajar el músculo y aliviar el dolor. Eficaces en síndrome de dolor miofascial y dolor muscular en cuello, hombros y espalda.</p>
      `
        },
        'tmj-injection': {
          name: 'Inyección en articulación temporomandibular (ATM)',
          summary: 'Inyección antiinflamatoria en la ATM para reducir inflamación y dolor por trastornos temporomandibulares.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">¿Qué es la ATM?</h4>
        <p style="color: #374151; margin-bottom: 16px;">La articulación temporomandibular conecta la mandíbula con el cráneo. Los trastornos de la ATM afectan músculos y articulaciones de la masticación y pueden causar dolor, chasquidos y limitación de apertura.</p>
        <h4 style="color: #374151; font-weight: 600; margin-top: 24px; margin-bottom: 12px;">Causas y tratamiento</h4>
        <p style="color: #374151; margin-bottom: 16px;">El estrés muscular, la mala postura, artritis o traumatismos pueden contribuir. El manejo incluye medidas conservadoras y, en algunos casos, inyecciones intraarticulares con antiinflamatorios o Botox para puntos gatillo.</p>
      `
        },
        'joint-injection': {
          name: 'Inyecciones articulares (hombro, rodilla, cadera)',
          summary: 'Medicamento directamente en la articulación dolorosa para reducir inflamación en artritis y otras causas.',
          detailedDescription: `
        <h4 style="color: #374151; font-weight: 600; margin-top: 16px; margin-bottom: 12px;">Panorama del dolor articular</h4>
        <p style="color: #374151; margin-bottom: 16px;">El dolor articular puede afectar hombros, rodillas, caderas y tobillos por múltiples causas (artritis, bursitis, lesiones de ligamentos/meniscos o sobreuso). La evaluación incluye exploración física e, idealmente, estudios de imagen según el caso.</p>
        <p style="color: #374151; margin-bottom: 16px;">Las <strong>inyecciones articulares</strong> aplican medicación directamente dentro de la articulación para reducir inflamación y aliviar el dolor, favoreciendo la movilidad y la función. Pueden usarse anestésicos, esteroides o lubricantes (p. ej., ácido hialurónico).</p>
      `
        }
      },
      tbiBody: {
        whatIsTitle: '¿Qué es una LCT?',
        whatIsDesc: 'Una lesión cerebral traumática (LCT) es una interrupción del funcionamiento normal del cerebro causada por una fuerza externa. Sus efectos pueden variar ampliamente: desde cambios breves en el estado mental hasta complicaciones graves y duraderas que afectan la memoria, el movimiento, el estado de ánimo y la calidad de vida en general. Las LCT se clasifican como leves, moderadas o graves según la naturaleza de la lesión y su impacto en la función cerebral.',
        commonCauses: 'Causas Comunes',
        readMore: 'Leer más',
        showLess: 'Mostrar menos',
        commonSymptoms: 'Síntomas Comunes de LCT',
        severityTitle: 'Gravedad de la Lesión Cerebral Traumática',
        criteria: 'Criterios',
        mild: 'Leve',
        moderate: 'Moderada',
        severe: 'Grave',
        structuralImaging: 'Imagen Estructural',
        lossOfConsciousness: 'Pérdida de Conciencia (LOC)',
        alterationOfConsciousness: 'Alteración de Conciencia (AOC)',
        postTraumaticAmnesia: 'Amnesia Postraumática (APT)',
        ourDiagnosticApproach: 'Nuestro Enfoque Diagnóstico',
        upTo24: 'Hasta 24 horas',
        normal: 'Normal',
        normalOrAbnormal: 'Normal o Anormal',
        zeroTo30Min: '0-30 minutos',
        gt30lt24: '>30 min <24 horas',
        gt24Hours: '>24 horas',
        zeroTo1Day: '0-1 día',
        gt1lt7Days: '>1 día <7 días',
        gt7Days: '>7 días',
        longTermEffectsParagraph: 'Aunque muchos pacientes se recuperan de los efectos inmediatos de una lesión en la cabeza, algunos presentan cambios neurológicos y cognitivos persistentes que se desarrollan con el tiempo. Estos efectos a largo plazo pueden incluir problemas de memoria, concentración y regulación del estado de ánimo, así como cambios hormonales o sensoriales. En ciertos casos, la LCT puede contribuir a fatiga continua, depresión o mayor riesgo de enfermedades neurodegenerativas. Reconocer y abordar estas complicaciones crónicas es fundamental para una atención integral de la lesión cerebral.',
        learnMore: 'Más información',
        causes: {
          falls: {
            name: 'Caídas',
            short: 'especialmente en niños y adultos mayores',
            desc: 'Especialmente frecuentes en niños y adultos mayores. Las caídas pueden causar LCT cuando la cabeza golpea una superficie dura o cuando el cerebro se desplaza rápidamente dentro del cráneo por una desaceleración súbita.'
          },
          motor_vehicle: {
            name: 'Accidentes de tráfico',
            short: 'choques de autos, motos o bicicletas',
            desc: 'Las colisiones que involucran autos, motocicletas o bicicletas suelen producir LCT debido a fuerzas rápidas de aceleración‑desaceleración que hacen que el cerebro golpee el cráneo. Esto puede ocasionar lesiones por golpe (coup) en el sitio del impacto y por contragolpe (contrecoup) en el lado opuesto cuando el cerebro rebota contra el cráneo. Estas fuerzas son especialmente comunes en accidentes de tránsito y pueden causar traumatismo cerebral significativo incluso sin un impacto directo en la cabeza.'
          },
          sports_recreational: {
            name: 'Lesiones deportivas y recreativas',
            short: 'incluidas las conmociones',
            desc: 'Los deportes de contacto (fútbol americano, fútbol, hockey, boxeo) y actividades recreativas (ciclismo, patineta, esquí) con frecuencia causan LCT. Las conmociones cerebrales son el tipo más común de LCT relacionada con el deporte y suelen resultar de golpes directos a la cabeza o movimientos tipo latigazo. Estas lesiones van de leves a graves y pueden tener efectos acumulativos cuando se presentan múltiples conmociones con el tiempo.'
          },
          workplace_military: {
            name: 'Incidentes laborales o militares',
            short: 'incluyen exposiciones a explosiones',
            desc: 'Incluye exposiciones a explosiones en entornos militares y accidentes en construcción, manufactura u otras ocupaciones de alto riesgo donde pueden ocurrir caídas o impactos.'
          },
          violence: {
            name: 'Violencia',
            short: 'como agresiones o heridas de bala',
            desc: 'Como agresiones o heridas de bala que impactan directamente la cabeza y el tejido cerebral, a menudo causando formas más graves de LCT.'
          }
        },
        symptomsText: {
          headaches: { name: 'Dolores de cabeza', desc: 'Síntoma persistente tras LCT; puede adoptar múltiples formas.' },
          blurred_vision: { name: 'Visión borrosa', desc: 'Frecuente por alteración de vías neurales de la visión.' },
          dizziness: { name: 'Mareos', desc: 'Sensación de inestabilidad por procesamiento vestibular alterado.' },
          vertigo: { name: 'Vértigo', desc: 'Sensación de giro por daño vestibular; la VRT ayuda a compensar.' },
          tinnitus: { name: 'Tinnitus', desc: 'Zumbido persistente debido a lesión auditiva central o periférica.' },
          sensitivity: { name: 'Sensibilidad a luz/ruido', desc: 'Fotofobia y fonofobia por dificultad para filtrar estímulos.' },
          mood_changes: { name: 'Cambios del estado de ánimo', desc: 'Irritabilidad, ansiedad o depresión por lesión de redes emocionales.' },
          memory_impairment: { name: 'Alteración de la memoria', desc: 'Problemas de memoria reciente y para formar nuevos recuerdos.' },
          loss_of_consciousness: { name: 'Pérdida de conciencia', desc: 'Cualquier pérdida de conciencia es significativa y requiere evaluación.' },
          sleep_dysfunction: { name: 'Alteración del sueño y fatiga', desc: 'Dificultad para dormir y somnolencia diurna frecuente.' },
          ptsd: { name: 'Trastorno de Estrés Postraumático (TEPT)', desc: 'Recuerdos intrusivos, hiperalerta y evitación complican la recuperación.' },
          thalamus_pituitary: { name: 'Efectos en Tálamo e Hipófisis', desc: 'Alteraciones hormonales y de activación con fatiga y cambios de ánimo.' }
        }
      },
      tbiDiagnostics: {
        brainMRI: { title: 'Resonancia Magnética Cerebral (RM)', desc: 'Una RM (Resonancia Magnética) es una herramienta diagnóstica muy precisa que utiliza un campo magnético y ondas de radio para crear imágenes detalladas del cerebro. Es especialmente eficaz para ver tejidos blandos y detectar cambios sutiles por LCT (contusiones, edema, lesión axonal difusa) que pueden no ser visibles en otros estudios. Técnicas avanzadas como DTI (Imagen por Tensor de Difusión) revelan daño en tractos de sustancia blanca y vías neurales que podrían no observarse en una RM convencional. Este nivel de detalle permite un diagnóstico y plan de tratamiento precisos.' },
        qEEG: { title: 'qEEG (Mapeo Cerebral)', desc: 'Un qEEG (Electroencefalograma Cuantitativo) ofrece un análisis detallado de los patrones de ondas cerebrales, ayudando a identificar la ubicación y gravedad de la disfunción. Es una prueba no invasiva que mide la actividad eléctrica del cerebro mediante un gorro con electrodos. Este estudio dura alrededor de 40 minutos, es indoloro y proporciona información valiosa para guiar decisiones terapéuticas en diversas condiciones neurológicas.' },
        vng: { title: 'VNG', desc: 'La VNG es una prueba diagnóstica que evalúa el movimiento ocular involuntario llamado nistagmo. El nistagmo puede indicar un trastorno vestibular del oído interno. Los síntomas asociados incluyen problemas de equilibrio, mareos, sensación de inestabilidad, tinnitus y/o vértigo.', ocular: '1. Pruebas oculares: el paciente observa puntos en un monitor con la cabeza quieta.', positional: '2. Pruebas posicionales: el paciente mueve la cabeza o el cuerpo a distintas posiciones.', caloric: '3. Pruebas calóricas: se introduce agua tibia, fría y muy fría en cada oído para provocar nistagmo.' }
      },
      tbiTreatments: {
        vrt: { name: 'VRT (Terapia de Rehabilitación Vestibular)', desc: 'La rehabilitación vestibular tradicional es una forma de fisioterapia basada en ejercicios para manejar mareos y problemas de equilibrio. En nuestra clínica se realiza con Realidad Virtual (RV) mediante módulos diseñados específicamente para reducir vértigo e inestabilidad.' },
        'botox-headaches': { name: 'Botox para cefaleas postraumáticas', desc: 'Inyecciones de toxina botulínica en músculos de cabeza y cuello para reducir contracciones que transmiten señales de dolor. Aprobado por la FDA para el tratamiento de cefaleas.' },
        'occipital-nerve': { name: 'Bloqueo de nervios occipitales', desc: 'Inyección anestésica dirigida a los nervios occipitales mayor y menor para aliviar dolor de cabeza y cuello al reducir la inflamación y bloquear señales de dolor.' }
      },
      tbiTreatmentOptions: {
        heading: 'Opciones de Tratamiento',
        steroidTitle: 'Inyecciones de Esteroides',
        steroidDesc1: 'Las inyecciones de corticosteroides son un tratamiento común para brindar alivio rápido y eficaz del dolor causado por la inflamación en la columna o las articulaciones. Al aplicar el medicamento directamente en el área afectada, reducen la irritación y permiten que los tejidos se calmen y funcionen con mayor normalidad.',
        prpTitle: 'Terapia PRP',
        prpDesc1: 'La terapia de Plasma Rico en Plaquetas (PRP) es un tratamiento regenerativo que aprovecha la capacidad natural de curación del cuerpo para reparar tejidos dañados y reducir el dolor. Se concentra una pequeña muestra de sangre para obtener plaquetas ricas en factores de crecimiento que estimulan la reparación tisular, reducen la inflamación y favorecen la curación en articulaciones, ligamentos, tendones y discos.'
      },
      tbiBrain: {
        hint: 'Pase el cursor sobre las secciones del cerebro para conocer su función y el posible impacto de una lesión cerebral traumática',
        functionsLabel: 'Funciones:',
        symptomsLabel: 'Síntomas por LCT:',
        regions: {
          frontal: {
            name: 'Lóbulo frontal',
            functions: 'Concentración, resolución de problemas, lenguaje, planificación, control de impulsos.',
            tbiSymptoms: 'Dificultad para concentrarse, pobre control de impulsos, problemas de lenguaje, irritabilidad.'
          },
          parietal: {
            name: 'Lóbulo parietal',
            functions: 'Tacto, dolor, temperatura, conciencia espacial y orientación corporal.',
            tbiSymptoms: 'Problemas para percibir tacto/dolor, dificultades de lectura, desorientación espacial.'
          },
          temporal: {
            name: 'Lóbulo temporal',
            functions: 'Memoria, audición, comprensión del lenguaje, organización.',
            tbiSymptoms: 'Pérdida de memoria, dificultad para entender el habla, problemas de organización.'
          },
          occipital: {
            name: 'Lóbulo occipital',
            functions: 'Visión y procesamiento visual.',
            tbiSymptoms: 'Visión borrosa, puntos ciegos, dificultad para reconocer objetos.'
          },
          cerebellum: {
            name: 'Cerebelo',
            functions: 'Equilibrio, coordinación, postura y control motor fino.',
            tbiSymptoms: 'Mal equilibrio, marcha inestable, habla pastosa, falta de coordinación.'
          },
          brainstem: {
            name: 'Tronco encefálico',
            functions: 'Respiración, ritmo cardíaco, deglución y ciclos de sueño-vigilia.',
            tbiSymptoms: 'Respiración irregular, cambios en la frecuencia cardíaca, dificultad para tragar, sueño alterado.'
          }
        }
      },
      preOp: {
        heroTitle: 'Instrucciones Preoperatorias',
        heroSubtitle: 'Revise cuidadosamente las siguientes instrucciones para prepararse para su procedimiento.',
        print: 'Imprimir Instrucciones',
        instruction1Title: 'Organice un Conductor',
        instruction1Text: 'Organice que alguien le recoja después de su cita.',
        instruction2Title: 'Comida antes de su Cita',
        instruction2Text: 'Deje de comer 4 horas antes de la cita.',
        instruction3Title: 'Hidratación',
        instruction3Text: 'Deje de beber líquidos 1 hora antes de la cita. Hidrátese bien antes, especialmente si recibirá PRP.',
        instruction4Title: 'Medicamentos Anticoagulantes',
        instruction4Text: 'No tome anticoagulantes (aspirina, ibuprofeno, naproxeno, etc.) 7 días antes.',
        seeComprehensive: 'Ver lista completa de medicamentos anticoagulantes',
        hideComprehensive: 'Ocultar lista completa',
        importantNoteTitle: 'Nota Importante sobre Medicamentos',
        importantNoteText: 'Si usa anticoagulantes recetados (Plavix, Coumadin, Aggrenox, Lovenox, Xarelto, Aspirina) avísenos para indicaciones específicas.',
        importantNoteStrong: 'Estos cambios deben ser aprobados por su médico tratante (PCP, cardiólogo, neurólogo, etc.).',
        generalGuidelines: 'Pautas Generales de Medicación:',
        guidelines: {
          plavix: 'Plavix - Suspenda 7 días antes de la cita. Si tiene stents coronarios, necesita autorización de su cardiólogo.',
          coumadin: 'Coumadin - Suspenda 5 días antes; realícese INR el día previo a la cita.',
          aggrenox: 'Aggrenox - Suspenda 7 días antes de la cita.',
          lovenox: 'Lovenox - Suspenda 24 horas antes de la cita.',
          xarelto: 'Xarelto - Suspenda 3 días antes de la cita.',
          aspirin: 'Aspirina - Para inyecciones cervicales, suspenda 7 días antes. No es necesario suspender antes de procedimientos lumbares.',
          antiInflammatory: 'Antiinflamatorios (Motrin, ibuprofeno, Advil, Aleve, etc.) - Para inyecciones cervicales, suspenda 7 días antes.'
        },
        questionsTitle: '¿Preguntas o Dudas?',
        questionsText: 'Si tiene preguntas o necesita hablar sobre sus medicamentos, comuníquese con nuestra oficina.'
      },
      workInjuryPage: {
        heroTitle: 'Perspectivas',
        heroSubtitle: 'Información médica especializada y orientación después de una lesión.',
        servicesTitle: 'Nuestros servicios',
        servicesIntro:
          'Ofrecemos evaluación médica integral, diagnóstico y tratamiento para lesiones.',
        cards: {
          evalTitle: 'Evaluación médica integral',
          evalDesc:
            'Evaluación detallada de las lesiones, que incluye exámenes físicos, derivaciones para estudios de imagen y documentación médica detallada para apoyar su recuperación y la continuidad de la atención.',
          painTitle: 'Tratamiento para el manejo del dolor',
          painDesc:
            'Protocolos especializados de manejo del dolor para lesiones relacionadas con accidentes, incluyendo manejo de medicamentos, procedimientos intervencionistas y estrategias multimodales de alivio del dolor.',
          neuroTitle: 'Tratamiento neurológico',
          neuroDesc:
            'Tratamiento especializado para condiciones neurológicas como conmociones cerebrales, daño de nervios y lesiones cerebrales traumáticas.',
          rehabTitle: 'Servicios de rehabilitación',
          rehabDesc:
            'Derivación coordinada a programas de rehabilitación, incluyendo fisioterapia y tratamientos especializados, para maximizar la recuperación tras lesiones relacionadas con accidentes.',
          careCoordTitle: 'Coordinación de la atención y documentación',
          careCoordDesc:
            'Documentación médica clara y organizada, y coordinación para mantenerle a usted, a su familia y a su equipo de atención alineados durante todo el proceso de recuperación.'
        },
        downloadsTitle: 'Formularios descargables',
        downloadsIntro: 'Descargue los formularios que necesita antes de su cita.',
        forms: {
          registration: 'Formulario de registro',
          referral: 'Formulario de remisión médica',
          releaseTo: 'Autorización para enviar registros A Mind and Body Pain Clinic',
          releaseFrom: 'Autorización para enviar registros DE Mind and Body Pain Clinic'
        }
      },
      blogPage: {
        heroTitle: 'Lo Último en Neurología y Manejo del Dolor',
        articles: [
          {
            title: 'Estas son las startups que fusionan tu cerebro con la IA',
            author: 'Rob Toews, Forbes',
            date: '5 de octubre de 2025',
            summary: 'Un vistazo a empresas emergentes que desarrollan interfaces cerebro-computadora y neurotecnología para integrar la cognición humana con la inteligencia artificial.',
            url: 'https://www.forbes.com/sites/robtoews/2025/10/05/these-are-the-startups-merging-your-brain-with-ai/?utm_source=chatgpt.com'
          },
          {
            title: 'El dolor es personal. La estimulación cerebral podría personalizar el tratamiento también.',
            author: 'Gina Kolata, The New York Times',
            date: '14 de agosto de 2025',
            summary: 'Investigadores exploran protocolos de estimulación cerebral personalizados para adaptar la terapia del dolor a firmas neuronales individuales.',
            url: 'https://www.nytimes.com/2025/08/14/health/pain-personalized-brain-stimulation.html'
          },
          {
            title: 'La ciencia avanza hacia medir y tratar con precisión el dolor crónico',
            author: 'Ben Guarino, The Washington Post',
            date: '23 de marzo de 2025',
            summary: 'Nuevas herramientas de medicina de precisión buscan cuantificar señales de dolor en el cerebro y desarrollar intervenciones dirigidas.',
            url: 'https://www.washingtonpost.com/science/2025/03/23/pain-measure-precision-research'
          },
          {
            title: 'Descifrando la ciencia del tacto y el dolor crónico',
            author: 'Scripps Research Magazine',
            date: 'enero de 2025',
            summary: 'Científicos de Scripps analizan cómo se procesan las señales táctiles y cómo estos hallazgos podrían conducir a nuevas terapias contra el dolor crónico.',
            url: 'https://magazine.scripps.edu/features/2025/catalyst/unlocking-the-science-of-touch-and-chronic-pain/'
          }
        ]
      },
      neuroPage: {
        heroTitle: 'Neuroanatomía y Neurodegeneración',
        whatIsNeuroTitle: '¿Qué es la Neuroanatomía?',
        whatIsIt: 'La neuroanatomía estudia la estructura y organización del sistema nervioso, especialmente el cerebro y la médula espinal. Comprenderla ayuda a entender cómo distintas regiones trabajan juntas para controlar pensamientos, emociones, movimientos y funciones corporales.\n\nEl cerebro se divide en regiones con funciones específicas que operan en redes coordinadas para procesar información y mantener la homeostasis. Su organización refleja millones de años de evolución.',
        majorRegionsTitle: 'Principales Regiones del Cerebro',
        keyFunctionsTitle: 'Funciones Clave:',
        keyStructuresTitle: 'Estructuras Cerebrales Clave',
        keyStructuresIntro: 'Estas estructuras son esenciales para el procesamiento sensorial, la regulación hormonal, el control motor y las emociones. Varias forman parte del sistema límbico, clave en emoción, motivación y memoria.',
        cellularComponentsTitle: 'Componentes Celulares',
        neurodegTitle: 'Comprendiendo las Enfermedades Neurodegenerativas',
        neurodegIntro: 'Estos trastornos progresivos afectan el cerebro y el sistema nervioso con el tiempo. Nuestro papel es evaluar de forma integral, ayudar a aclarar diagnósticos y conectar a los pacientes con especialistas y recursos adecuados.',
        commonConditionsTitle: 'Condiciones Comunes',
        whatAreNeurodegTitle: '¿Qué son las Enfermedades Neurodegenerativas?',
        whatIsNeurodegenerative: 'Las enfermedades neurodegenerativas implican la pérdida progresiva de función de las neuronas del cerebro o médula espinal, afectando la comunicación con el cuerpo y causando problemas de movimiento, memoria, habla o conducta.\n\nEjemplos incluyen Alzheimer y otras demencias, Parkinson, Huntington y ELA. Aunque cada una tiene rasgos propios, comparten una progresión gradual e impacto a largo plazo en la calidad de vida. El reconocimiento temprano y el diagnóstico preciso son fundamentales para planificar cuidados y manejo de síntomas.',
        commonSymptomsTitle: 'Síntomas Comunes',
        pathFeaturesTitle: 'Características Patológicas Clave',
        neuronLossTitle: 'Pérdida de Neuronas y Cómo Causa Síntomas',
        whiteMatterTitle: 'Sustancia Blanca y Disrupción de la Comunicación',
        proteinAggTitle: 'Agregados de Proteínas / Rasgos Característicos',
        regions: {
          cerebrum: { name: 'Cerebro', description: 'La parte más grande, responsable de funciones superiores como pensamiento, acción y procesamiento sensorial.', functions: ['Pensamiento consciente', 'Movimiento voluntario', 'Lenguaje', 'Percepción sensorial', 'Aprendizaje y memoria'] },
          cerebellum: { name: 'Cerebelo', description: 'Coordina movimientos voluntarios y mantiene el equilibrio y la postura.', functions: ['Coordinación motora', 'Equilibrio', 'Aprendizaje motor', 'Timing y precisión'] },
          brainstem: { name: 'Tronco encefálico', description: 'Conecta el cerebro con la médula espinal y controla funciones vitales.', functions: ['Frecuencia cardiaca y respiración', 'Presión arterial', 'Ciclos sueño-vigilia', 'Estado de alerta'] }
        },
        structures: {
          thalamus: { name: 'Tálamo', description: 'Estación de relevo sensorial hacia la corteza.', functions: ['Relevo sensorial', 'Control motor', 'Conciencia', 'Sueño-vigilia'] },
          hypothalamus: { name: 'Hipotálamo', description: 'Controla hormonas, temperatura, hambre, sed y ritmos circadianos.', functions: ['Regulación hormonal', 'Temperatura', 'Hambre y sed', 'Sueño', 'Respuestas emocionales'] },
          pituitary: { name: 'Hipófisis', description: 'Glándula maestra del sistema endocrino.', functions: ['Hormona del crecimiento', 'Estimulación tiroidea', 'Activación suprarrenal', 'Hormonas reproductivas'] },
          'basal-ganglia': { name: 'Ganglios basales', description: 'Control motor, aprendizaje procedimental y hábitos.', functions: ['Control motor', 'Aprendizaje procedimental', 'Hábitos', 'Recompensa'] },
          hippocampus: { name: 'Hipocampo', description: 'Memoria espacial y conversión a largo plazo.', functions: ['Memoria espacial', 'Formación de memoria', 'Aprendizaje', 'Navegación'] },
          amygdala: { name: 'Amígdala', description: 'Procesa emociones (miedo/placer).', functions: ['Miedo', 'Memoria emocional', 'Conducta social', 'Detección de amenazas'] }
        },
        cellular: {
          neurons: { name: 'Neuronas', description: 'Células que procesan información y controlan lo que pensamos y hacemos.', details: 'Dendritas reciben señales, el axón las conduce y terminales liberan neurotransmisores.' },
          'glial-cells': { name: 'Células gliales', description: 'Protegen y soportan neuronas y mielina.', details: 'Astrocitos, oligodendrocitos, microglía y células de Schwann cumplen funciones clave.' },
          synapses: { name: 'Sinapsis', description: 'Puntos de conexión entre neuronas.', details: 'Base de actividad cerebral, aprendizaje y memoria.' },
          myelin: { name: 'Vaina de mielina', description: 'Aislamiento que acelera la conducción nerviosa.', details: 'Permite señales hasta 100× más rápidas.' }
        },
        conditions: {
          alzheimer: { name: 'Enfermedad de Alzheimer y otras demencias', description: 'Deterioro cognitivo progresivo con impacto en la vida diaria.' },
          parkinson: { name: 'Enfermedad de Parkinson', description: 'Trastorno del movimiento con temblor, rigidez y bradicinesia.' },
          als: { name: 'Esclerosis lateral amiotrófica (ELA)', description: 'Enfermedad de motoneuronas con debilidad progresiva.' },
          'multiple-sclerosis': { name: 'Esclerosis múltiple', description: 'Enfermedad autoinmune que daña la mielina y la comunicación.' },
          'prion-disease': { name: 'Enfermedades priónicas', description: 'Trastornos raros por proteínas mal plegadas en el cerebro.' },
          'huntingtons-disease': { name: 'Enfermedad de Huntington', description: 'Trastorno genético con deterioro motor y cognitivo.' }
        },
        symptoms: {
          memory_loss: { name: 'Pérdida de memoria y confusión', description: 'Problemas significativos de memoria y planificación, típicos de demencias.' },
          movement_issues: { name: 'Temblor, rigidez o lentitud', description: 'Síntomas motores clásicos de Parkinson.' },
          balance_problems: { name: 'Problemas de equilibrio o caídas', description: 'Dificultad de marcha y equilibrio en varios trastornos.' },
          speech_swallowing: { name: 'Dificultad para hablar o tragar', description: 'Disartria y disfagia por debilidad muscular (ELA, Parkinson).' },
          mood_changes: { name: 'Cambios de ánimo o personalidad', description: 'Depresión, ansiedad o apatía pueden ser tempranos.' },
          muscle_weakness: { name: 'Debilidad muscular progresiva o fasciculaciones', description: 'Típico de enfermedades de motoneurona como ELA.' }
        },
        pathological: {
          neuronLoss: 'Las neuronas son los trabajadores esenciales del cerebro: células especializadas que procesan información, envían señales y controlan todo lo que pensamos, sentimos y hacemos. En las enfermedades neurodegenerativas, estas células vitales comienzan a perder su función y a morir con el tiempo. No es un daño aleatorio; afecta de manera preferente áreas responsables de la memoria, el movimiento o el pensamiento. A medida que mueren más neuronas, fallan las funciones que controlaban, originando síntomas como la pérdida de memoria en el Alzheimer o los problemas de movimiento en el Parkinson.',
          whiteMatterDisruption: 'La sustancia blanca es como la gran autopista del cerebro: una red de fibras nerviosas que transporta mensajes entre distintas regiones, igual que las carreteras conectan ciudades. Piense en ella como los cables de comunicación que permiten que las áreas del cerebro trabajen de forma coordinada. En muchos trastornos neurodegenerativos, esta red se daña: la vaina de mielina que protege las fibras puede deteriorarse o las fibras perderse. Esto interrumpe la comunicación de alta velocidad entre regiones, contribuyendo a ralentización del pensamiento, problemas de coordinación y otros síntomas cognitivos y motores.',
          proteinAggregates: 'Las proteínas son como pequeñas máquinas que mantienen a las células funcionando correctamente. En las enfermedades neurodegenerativas, a veces se pliegan de manera incorrecta y se agrupan en depósitos tóxicos, como si la basura se acumulara y bloqueara una carretera. Por ejemplo, en la enfermedad de Alzheimer aparecen placas de beta-amiloide y ovillos de tau; en el Parkinson se forman cuerpos de Lewy compuestos por alfa-sinucleína. Estos acúmulos interfieren con la función normal de las neuronas y contribuyen a su muerte, y los médicos pueden utilizarlos como pistas importantes para diagnosticar enfermedades específicas.'
        }
      },
      innovativePage: {
        heroTitle: 'Medicina Innovadora e Integrativa',
        integrativeTitle: 'Medicina Integrativa',
        integrativeIntro: 'En Mind and Body Pain Clinic integramos la medicina convencional con terapias complementarias basadas en evidencia para una atención neurológica y del dolor centrada en el paciente. Creemos que el tratamiento eficaz debe abordar no solo los síntomas físicos, sino también los factores emocionales, cognitivos y de estilo de vida que contribuyen al dolor crónico y la disfunción neurológica. Además de las evaluaciones neurológicas, tratamientos farmacológicos y procedimientos intervencionistas, fomentamos terapias como mindfulness y yoga, con base científica y adaptadas a cada persona, para reducir la dependencia de fármacos, mejorar la función y recuperar la calidad de vida.',
        traditionalTitle: 'Medicina Tradicional',
        traditionalIntro: 'Nuestro enfoque tradicional utiliza intervenciones farmacológicas probadas: fármacos dirigidos para dolor neuropático, tratamientos para síntomas neurológicos y protocolos basados en evidencia que abordan condiciones agudas y crónicas del sistema nervioso.',
        alternativeTitle: 'Enfoques Alternativos',
        alternativeIntro: 'Complementamos los tratamientos tradicionales con suplementos nutricionales seleccionados, fisioterapia, atención quiropráctica y prácticas de mindfulness que actúan en sinergia para favorecer el bienestar neurológico y la curación a largo plazo.',
        supplementsTitle: 'Suplementos Nutricionales',
        complementaryTitle: 'Terapias Complementarias',
        benefitsLabel: 'Beneficios:',
        evidenceLabel: 'Evidencia:',
        analgesicsTitle: 'Analgésicos para dolor neuropático',
        analgesics: {
          medications: [
            { name: 'Paracetamol (acetaminofén)', description: 'Analgésico de venta libre para dolor leve a moderado; opción de primera línea en muchas condiciones.' },
            { name: 'Gabapentinoides', description: 'Como gabapentina; modulan canales de calcio y reducen señales anómalas de dolor; eficaces en neuropatía diabética y neuralgia posherpética.' },
            { name: 'Antidepresivos', description: 'Tricíclicos (amitriptilina, nortriptilina) y SNRI (duloxetina, venlafaxina) que aumentan serotonina y noradrenalina, atenuando la percepción del dolor.' },
            { name: 'Lamotrigina', description: 'Anticonvulsivante que estabiliza membranas nerviosas y reduce dolor neuropático.' },
            { name: 'Agentes tópicos', description: 'Parches de lidocaína y crema de capsaicina que brindan alivio local bloqueando la conducción nerviosa o desensibilizando receptores.' }
          ]
        },
        sedativesTitle: 'Sedantes y ansiolíticos',
        sedatives: {
          medications: [
            { name: 'Benzodiacepinas', description: 'Uso a corto plazo para ansiedad aguda, espasmos musculares o insomnio en ciertos trastornos neurológicos.' },
            { name: 'Buspirona', description: 'Ansiolítico no benzodiacepínico sin efectos sedantes importantes ni riesgo de dependencia.' },
            { name: 'Relajantes musculares', description: 'Baclofeno o tizanidina para reducir espasticidad; útiles en lesión medular o parálisis cerebral.' }
          ]
        },
        supplements: [
          { name: 'Aceite de pescado', benefits: 'Ácidos grasos omega-3 (EPA y DHA) que favorecen la salud cardiovascular, reducen la inflamación y pueden aliviar molestias articulares y apoyar la función cognitiva.', evidence: 'Estudios clínicos muestran reducción de triglicéridos, beneficio cardiaco y alivio del dolor articular por artritis reumatoide; la evidencia sobre soporte cognitivo es emergente.' },
          { name: 'Vitamina B12', benefits: 'Crucial para los glóbulos rojos, integridad nerviosa y metabolismo energético. Su déficit causa anemia, fatiga y neuropatía.', evidence: 'La suplementación corrige la anemia megaloblástica y puede revertir neuropatía por déficit; estudios poblacionales relacionan niveles adecuados con mejor energía y mantenimiento cognitivo.' },
          { name: 'Vitamina D', benefits: 'Apoya la densidad ósea, absorción de calcio, función inmune y regulación del estado de ánimo.', evidence: 'Ensayos aleatorizados muestran reducción del riesgo de fracturas y mejora de densidad ósea; algunos estudios reportan menos dolor crónico tras corregir deficiencia.' },
          { name: 'Zinc', benefits: 'Esencial para defensa inmune, cicatrización y síntesis de ADN.', evidence: 'La suplementación puede acortar la duración del resfriado común y mejorar la cicatrización; niveles adecuados se asocian con mejor respuesta inmune.' },
          { name: 'Magnesio', benefits: 'Interviene en relajación muscular, conducción nerviosa y producción de energía.', evidence: 'Los ensayos muestran reducción de migrañas, mejoría del sueño y ligera disminución de la presión arterial en hipertensos.' }
        ],
        therapies: [
          { name: 'Acupuntura', description: 'Técnica de la medicina china que estimula puntos específicos para modular vías nerviosas y promover la curación.', neurologicalBenefits: 'Alivia dolor crónico cervical, lumbar y de artrosis; reduce cefaleas y promueve relajación.', evidence: 'Ensayos clínicos demuestran eficacia en reducción del dolor y mejora de calidad de vida.' },
          { name: 'Fisioterapia', description: 'Programas de ejercicio y rehabilitación para mejorar movilidad, fuerza y equilibrio.', neurologicalBenefits: 'Restaura movilidad y fuerza, reduce dolor musculoesquelético y favorece la recuperación tras lesión o cirugía.', evidence: 'La investigación muestra mejoras en marcha, fuerza y resultados funcionales más allá del periodo de tratamiento.' },
          { name: 'Terapia quiropráctica', description: 'Ajustes y manipulaciones para mejorar la alineación y la movilidad articular.', neurologicalBenefits: 'Alivia dolor cervical y lumbar, puede reducir cefaleas tensionales.', evidence: 'Los estudios muestran mejor manejo del dolor y funcionalidad, especialmente combinada con otras terapias.' },
          { name: 'Intervención musical', description: 'Uso terapéutico de la música para mejorar la función y el bienestar emocional.', neurologicalBenefits: 'Reduce ansiedad, eleva el ánimo, distrae del dolor y ayuda en el entrenamiento de la marcha.', evidence: 'Evidencia de mejoría de la marcha en Parkinson, memoria en demencia y reducción de agitación.' },
          { name: 'Meditación y mindfulness', description: 'Práctica de atención enfocada y conciencia plena.', neurologicalBenefits: 'Ayuda a afrontar el dolor crónico, reduce el estrés y mejora el enfoque.', evidence: 'Estudios demuestran mejoría cognitiva, disminución del estrés y apoyo en el manejo del dolor.' }
        ],
        benefitsLabelEs: 'Beneficios:',
        evidenceLabelEs: 'Evidencia:',
        bciTitle: 'Medicina Innovadora: El futuro de las Interfaces Cerebro-Computador (BCI)',
        bciParagraphs: [
          'La tecnología BCI está revolucionando el tratamiento neurológico al crear un enlace directo entre el cerebro y dispositivos externos, permitiendo recuperar funciones y nuevas formas de interacción.',
          'Existen BCI invasivas y no invasivas. Las invasivas (implantes) registran/estimulan con alta precisión; las no invasivas (EEG) se usan en rehabilitación post-ictus o TDAH. Las BMI ayudan a controlar prótesis o comunicarse mediante el pensamiento.',
          'En TBI, ictus y enfermedades neurodegenerativas, la BCI puede restaurar funciones motoras y de comunicación, promover neuroplasticidad y reducir la dependencia de cirugías o fármacos.'
        ],
        bciArticle: {
          title: 'Tecnología pionera ayuda a un paciente con ELA a "hablar" en tiempo real',
          description: 'Un sistema BCI de UC Davis permite conversaciones más rápidas y naturales en personas con pérdida del habla.',
          linkText: 'Leer más en UC Davis Health'
        }
      },
      patientRights: {
        heroTitle: 'Derechos del Paciente y Políticas',
        heroSubtitle: 'Nos comprometemos a brindar atención de calidad y a informarle sobre sus derechos y nuestras políticas.',
        rightsTitle: 'Derechos y Responsabilidades del Paciente',
        rightsIntro: 'Nos esforzamos por garantizar que reciba atención de la más alta calidad. Como paciente, usted tiene derechos, y también le pedimos que cumpla ciertas responsabilidades para asegurar la mejor atención para todos.',
        qualityCareLabel: 'Atención de calidad:',
        qualityCare: 'Recibir atención médica profesional y de alta calidad en un entorno seguro.',
        informationLabel: 'Información:',
        information: 'Recibir información clara sobre su diagnóstico, tratamiento y opciones.',
        privacyLabel: 'Privacidad:',
        privacy: 'Mantener su información médica confidencial y privada.',
        respectLabel: 'Respeto:',
        respect: 'Ser tratado con dignidad y respeto en todo momento.',
        consentLabel: 'Consentimiento:',
        consent: 'Otorgar consentimiento informado para cualquier tratamiento y rechazarlo si así lo decide.',
        voiceConcernsLabel: 'Presentar inquietudes:',
        voiceConcerns: 'Expresar cualquier queja y recibir una respuesta respetuosa.',
        provideInfoLabel: 'Proporcionar información exacta:',
        provideInfo: 'Compartir un historial médico completo y preciso.',
        financialLabel: 'Cumplir obligaciones financieras:',
        financial: 'Cumplir todas las obligaciones financieras por los servicios recibidos.',
        policiesTitle: 'Nuestras Políticas',
        policiesIntro: 'Mantenemos políticas claras para asegurar atención consistente y de alta calidad y una experiencia positiva para todos los pacientes.',
        apptTitle: 'Requisitos para la Cita',
        apptIntro: 'Traiga los siguientes elementos a su cita para garantizar la mejor atención posible:',
        apptItem1: 'Toda la información de su seguro/compensación laboral',
        apptItem2: 'Autorización del seguro (si tiene seguro HMO)',
        apptItem3: 'Notas de progreso relevantes de su proveedor remitente',
        apptItem4: 'Cualquier estudio de imagen (RM, rayos X, etc.), análisis y otros estudios (EMG, etc.)',
        apptItem5: 'Cualquier copago en efectivo o cheque',
        apptItem6: 'No aceptamos tarjetas de débito',
        insTitle: 'Información de Seguros',
        insIntro: 'Aceptamos Medicare, Compensación Laboral, pacientes QME y la mayoría de los planes. Actualmente estamos contratados con los siguientes seguros:',
        insInProcess: 'Solicitud de contratación en proceso',
        insNote: 'Cualquier persona puede ver al Dr. Singh de forma privada y recibir un formulario para presentar a su plan de seguro para reembolso de beneficios cubiertos.',
        insNoHmo: 'NO aceptamos seguros HMO ni Medi-Cal.',
        privacyTitle: 'Privacidad y Confidencialidad',
        privacyIntro: 'Nos comprometemos a proteger su privacidad y mantener la confidencialidad de su información de salud conforme a HIPAA.',
        privacyItem1: 'Su información médica se mantiene estrictamente confidencial',
        privacyItem2: 'No compartiremos su información sin su consentimiento escrito',
        privacyItem3: 'Tiene derecho a acceder y solicitar copias de su historial médico',
        emergencyTitle: 'Procedimientos de Emergencia',
        emergencyIntro: 'En caso de emergencia médica, llame al 911 o acuda a la sala de emergencias más cercana. Para urgencias durante el horario laboral, llame a nuestra oficina.',
        emergencyItem1: 'Las situaciones de emergencia requieren atención médica inmediata',
        emergencyItem2: 'Proveemos información de contacto para atención fuera de horario',
        emergencyItem3: 'Las citas de seguimiento se programan según sea necesario tras la atención de emergencia',
        openTitle: 'AVISO A LOS PACIENTES - BASE DE DATOS OPEN PAYMENTS',
        openP1: 'Solo con fines informativos, aquí se proporciona un enlace a la página Open Payments de los Centros de Servicios de Medicare y Medicaid (CMS).',
        openP2: 'La ley federal Physician Payments Sunshine Act exige que la información detallada sobre pagos u otros valores superiores a diez dólares (US$10) de fabricantes de medicamentos, dispositivos médicos y biológicos a médicos y hospitales universitarios esté disponible al público.',
        openP3: 'Puede buscar en esta base de datos federal los pagos realizados a médicos y hospitales universitarios visitando este sitio web:'
      }
    },
    /* hi and vi languages removed */
    hi: {
      common: {
        readMore: 'और पढ़ें',
        readLess: 'कम दिखाएँ'
      },
      nav: {
        home: 'होम',
        about: 'हमारे बारे में',
        services: 'सेवाएं',
        traumaticBrainInjury: 'दर्दनाक मस्तिष्क की चोट',
        silverCreekSurgery: 'दर्द प्रबंधन',
        tms: 'টিএমএস',
        contact: 'संपर्क करें',
        patientPortal: 'रोगी पोर्टल',
        preOperativeInstructions: 'प्री-ऑपरेटिव निर्देश',
        patientRightsAndPolicies: 'रोगी के अधिकार और नीतियां',
        workAndPersonalInjury: 'कार्य और व्यक्तिगत चोट',
        blog: 'ब्लॉग',
        education: 'शिक्षा',
        neuroanatomy: 'न्यूरोएनाटॉमी',
        innovativeIntegrativeMedicine: 'नवोन्मेषी और एकीकृत चिकित्सा',
        allTreatments: 'सभी उपचार'
      },
      hero: {
        welcome: 'स्वागत है',
        subtitle: 'व्यापक दर्द प्रबंधन और कल्याण समाधान।',
        getStarted: 'शुरू करें',
        learnMore: 'और जानें'
      },
      about: {
        title: 'हमारा मिशन',
        description: "माइंड एंड बॉडी पेन क्लिनिक में, हम दर्द और न्यूरोलॉजिकल स्थितियों के व्यापक मूल्यांकन और मल्टीमॉडल प्रबंधन के लिए समर्पित हैं। हम सिरदर्द, गर्दन के दर्द और कई अन्य दर्दनाक विकारों के इलाज में विशेषज्ञ हैं।\n\nहमारा मिशन शिक्षा, दवा प्रबंधन और उन्नत अंतःक्षेप प्रक्रियाओं के माध्यम से रोगियों का समर्थन करना है। हम वास्तव में समग्र देखभाल प्रदान करने के लिए आधुनिक चिकित्सा प्रौद्योगिकियों को फिजिकल थेरेपी और योग जैसे पूरक दृष्टिकोणों के साथ जोड़ने में विश्वास करते हैं।\n\nहम आपकी आवश्यकताओं के अनुरूप व्यक्तिगत उपचार सुनिश्चित करने के लिए आपके स्वास्थ्य सेवा प्रदाताओं के साथ मिलकर काम करते हैं। जबकि हम उचित होने पर दवाओं का उपयोग करते हैं, हम आम तौर पर उच्च-खुराक ओपिओइड आहार से बचते हैं, क्योंकि शोध से पता चलता है कि वे सुरक्षित, कम-खुराक रणनीतियों की तुलना में सीमित दीर्घकालिक लाभ के साथ महत्वपूर्ण जोखिम उठाते हैं।"
      },
      services: {
        traumaticBrainInjury: {
          title: 'दर्दनाक मस्तिष्क चोट सेवाएं',
          description: 'न्यूरोलॉजिकल स्थितियों के लिए समग्र उपचार योजनाएँ।',
          learnMore: 'और जानें →',
          features: [
            'व्यक्तिगत उपचार योजनाएं',
            'बहु-विषयक दृष्टिकोण',
            'साक्ष्य-आधारित उपचार'
          ]
        },
        interventionalPainManagement: {
          title: 'इंटरवेंशनल पेन मैनेजमेंट',
          description: 'पुराने दर्द का निदान और उपचार करने के लिए न्यूनतम इनवेंसिव प्रक्रियाएं।'
        },
        silverCreekSurgery: {
          title: 'दर्द प्रबंधन सेवाएं',
          description: 'तीव्र और पुराने दर्द के लिए अत्याधुनिक उपचार।',
        },
        brainTMS: {
          title: 'ब्रेन टीएमएस सेवाएं',
          description: 'न्यूरोलॉजिकल और मनोरोग स्थितियों के लिए टीएमएस थेरेपी।',
          learnMore: 'और जानें →',
          features: [
            'गैर-आक्रामक उपचार',
            'दवा के कोई दुष्प्रभाव नहीं',
            'एफडीए-अनुमोदित थेरेपी'
          ]
        }
      },
      contact: {
        title: 'संपर्क करें',
        subtitle: 'दर्द से राहत के अपने सफर को शुरू करने के लिए तैयार हैं? आज ही निःशुल्क परामर्श के लिए हमसे संपर्क करें।',
        firstName: 'पहला नाम',
        lastName: 'अंतिम नाम',
        email: 'ईमेल',
        phone: 'फोन नंबर',
        message: 'संदेश',
        sendMessage: 'संदेश भेजें',
        sending: 'भेज रहे हैं...',
        sendMessageTitle: 'हमें एक संदेश भेजें',
        getInTouch: 'संपर्क में रहें',
        officeInformation: 'कार्यालय की जानकारी',
        address: 'पता',
        officeHours: 'कार्यालय समय',
        mondayFriday: 'सोमवार - शुक्रवार',
        saturday: 'शनिवार',
        sunday: 'रविवार',
        closed: 'बंद',
        emergencyInformation: 'आपातकालीन जानकारी',
        emergencyText1: 'यदि आप कोई चिकित्सा आपातकाल का अनुभव कर रहे हैं, तो कृपया तुरंत 911 पर कॉल करें या निकटतम आपातकालीन कक्ष में जाएं।',
        emergencyText2: 'यह संपर्क फॉर्म केवल गैर-आपातकालीन पूछताछ के लिए है।',
        placeholderText: 'कृपया अपनी दर्द की स्थिति, प्रश्न, या हम आपकी कैसे मदद कर सकते हैं इसका वर्णन करें...',
        captchaAlert: 'कृपया CAPTCHA सत्यापन पूरा करें।',
        successMessage: 'आपके संदेश के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
        errorMessage: 'आपका फॉर्म जमा करने में समस्या थी। कृपया पुनः प्रयास करें।',
        heroTitle: 'संपर्क करें',
        heroSubtitle: 'हम मदद करने के लिए यहां हैं। किसी भी प्रश्न के लिए या अपॉइंटमेंट बुक करने के लिए हमसे संपर्क करें।'
      },
      footer: {
        tagline: 'पुराने दर्द और न्यूरोलॉजिकल स्थितियों के लिए व्यापक देखभाल।',
        description: 'पेशेवर दर्द प्रबंधन और कल्याण समाधान।',
        contact: 'संपर्क',
        address: '6010 हेलियर एवेन्यू सुइट 150, सैन जोस, सीए 95138',
        copyright: '© 2024 माइंड एंड बॉडी पेन क्लिनिक। सर्वाधिकार सुरक्षित।',
        company: 'कंपनी',
        externalResources: 'बाहरी संसाधन',
        blog: 'ब्लॉग',
        jobOpenings: 'नौकरी के अवसर',
        militaryHealthSystem: 'सैन्य स्वास्थ्य प्रणाली',
        suicideCrisisLifeline: 'आत्महत्या और संकट सहायता लाइन',
        imageCredit: 'इस साइट पर उपयोग की गई कुछ छवियां Freepik.com से हैं',
        footerTitle: 'फूटर'
      },
      accessibility: {
        title: 'सुलभता',
        increaseText: 'टेक्स्ट बढ़ाएं',
        decreaseText: 'टेक्स्ट कम करें',
        highContrast: 'उच्च कंट्रास्ट',
        reduceMotion: 'गति कम करें',
        reset: 'रीसेट करें',
                 close: 'बंद करें'
       },
      
      home: {
        understandingYourHealth: 'अपने स्वास्थ्य को समझना',
        tbiTitle: 'दर्दनाक मस्तिष्क की चोट',
        tbiDesc: 'दर्दनाक मस्तिष्क की चोटों के कारण, लक्षण और उन्नत उपचारों को समझें।',
        tbiCta: 'उपचार खोजें →',
        neuroTitle: 'न्यूरोएनाटॉमी और न्यूरोडीजेनेरेशन',
        neuroDesc: 'मस्तिष्क की संरचना, कार्य और अल्ज़ाइमर व पार्किंसन जैसी प्रगतिशील स्थितियों का अन्वेषण करें।',
        neuroCta: 'और पढ़ें →',
        painTitle: 'पुराना दर्द और रीढ़ की विकृतियाँ',
        painDesc: 'पुराने दर्द और जटिल रीढ़-संबंधी स्थितियों के उपचार के लिए हमारा उन्नत, बहु-विषयक दृष्टिकोण।',
        painCta: 'स्वास्थ्य में सुधार करें →',
        disclaimerTitle: 'चिकित्सीय अस्वीकरण',
        disclaimerText: 'यह वेबसाइट केवल सूचना और शैक्षिक उद्देश्यों के लिए है और यह चिकित्सा सलाह नहीं है। इसे पेशेवर निदान या उपचार के विकल्प के रूप में उपयोग न करें। किसी भी चिकित्सा प्रश्न के लिए हमेशा अपने चिकित्सक या योग्य प्रदाता से सलाह लें।',
        meet: {
          heading: 'डॉ. हरप्रीत सिंह से मिलें',
          credentials: 'एमडी, न्यूरोलॉजी, इंटरनल मेडिसिन, इंटरवेंशनल पेन मैनेजमेंट, ब्रेन इंजरी मेडिसिन में चार बोर्ड प्रमाणन',
          paragraph1: 'डॉ. हरप्रीत सिंह 25+ वर्षों के अनुभव वाले चार बार बोर्ड-प्रमाणित विशेषज्ञ चिकित्सक हैं। TBI (ट्रॉमैटिक ब्रेन इंजरी) के मान्यता प्राप्त विशेषज्ञ, वे उन्नत चिकित्सा तकनीकों को समग्र दृष्टिकोण के साथ जोड़कर करुणामय, रोगी-केंद्रित उपचार प्रदान करते हैं।',
          paragraph2: "डॉ. सिंह की पृष्ठभूमि में प्राइमरी केयर, पैलिएटिव केयर और अकादमिक चिकित्सा शामिल है, जिसमें UC डेविस मेडिकल सेंटर में एसोसिएट क्लिनिकल प्रोफेसर की भूमिका भी है। कैलिफ़ोर्निया वर्कर्स' कम्पेनसेशन डिवीजन द्वारा क्वालिफाइड मेडिकल एग्ज़ामिनर (QME) नामित, वे विकलांगता का मूल्यांकन और मेडिको-लीगल रिपोर्ट तैयार करने वाले विशेषज्ञ गवाह के रूप में भी सेवा देते हैं। दर्द प्रबंधन, जटिल चोटों से उबरने और जीवन की गुणवत्ता बहाल करने पर केंद्रित, वे आधुनिक चिकित्सा नवाचारों को सम्पूर्ण-व्यक्ति देखभाल के साथ जोड़ते हैं।"
        }
      },
      brainTMS: {
        heroTitle: 'ब्रेन TMS',
        heroSubtitle: 'अवसाद और न्यूरोलॉजिकल स्थितियों के लिए उन्नत ट्रांसक्रेनियल मैग्नेटिक स्टिम्युलेशन थेरपी।'
      },
      painManagementPage: {
        heroTitle: 'दर्द प्रबंधन',
        heroSubtitle: 'लक्षित दर्द राहत के लिए विशेषीकृत प्रक्रियाएँ।'
      },
      tbiPage: {
        heroTitle: 'दर्दनाक मस्तिष्क की चोट',
        heroSubtitle: 'जानें कि TBI मस्तिष्क को कैसे प्रभावित करता है, किन लक्षणों पर ध्यान दें, और हम कौन-सी डायग्नोस्टिक व उपचार सेवाएँ प्रदान करते हैं।'
      },
      workInjuryPage: {
        heroTitle: 'कार्य और व्यक्तिगत चोट',
        heroSubtitle: 'कार्यस्थल और व्यक्तिगत चोट मामलों के लिए विशेष चिकित्सा देखभाल।',
        servicesTitle: 'हमारी सेवाएँ',
        servicesIntro: 'हम कार्य-संबंधी चोटों और व्यक्तिगत चोट के मामलों के लिए व्यापक मूल्यांकन, निदान और उपचार प्रदान करते हैं।',
        cards: {
          evalTitle: 'व्यापक चिकित्सा मूल्यांकन',
          evalDesc: 'दुर्घटनाओं या कार्य-संबंधी घटनाओं से हुई चोटों का विस्तृत आकलन, परीक्षाएँ, इमेजिंग रेफरल और विस्तृत चिकित्सा दस्तावेज़।',
          painTitle: 'दर्द प्रबंधन उपचार',
          painDesc: 'दवा प्रबंधन, इंटरवेंशनल प्रक्रियाएँ और बहु-मोडल दर्द-राहत रणनीतियाँ।',
          neuroTitle: 'न्यूरोलॉजिकल उपचार',
          neuroDesc: 'कंकशन, नसों की क्षति और TBI जैसी चोट-जनित न्यूरोलॉजिकल स्थितियों के लिए विशेष देखभाल।',
          rehabTitle: 'पुनर्वास सेवाएँ',
          rehabDesc: 'फिजिकल थेरेपी सहित पुनर्वास कार्यक्रमों के लिए समन्वित रेफरल ताकि रिकवरी अधिकतम हो।',
          legalDocsTitle: 'कानूनी दस्तावेज़ समर्थन',
          legalDocsDesc: "व्यक्तिगत चोट और वर्कर्स' कम्पेनसेशन मामलों के लिए विस्तृत रिपोर्ट, प्रगति नोट्स और विशेषज्ञ समर्थन।",
          legalCoordTitle: 'कानूनी टीम समन्वय',
          legalCoordDesc: 'वकीलों के साथ समन्वय कर समय पर अपडेट, विशेषज्ञ राय और व्यापक दस्तावेज़ प्रदान करना।'
        },
        downloadsTitle: 'डाउनलोड करने योग्य फ़ॉर्म',
        downloadsIntro: 'अपनी नियुक्ति से पहले आवश्यक फ़ॉर्म डाउनलोड करें।',
        forms: {
          registration: 'पंजीकरण फ़ॉर्म',
          referral: 'चिकित्सक रेफ़रल फ़ॉर्म',
          releaseTo: 'रिकॉर्ड जारी करें: MBPC को',
          releaseFrom: 'रिकॉर्ड जारी करें: MBPC से'
        }
      },
      blogPage: {
        heroTitle: 'न्यूरोलॉजी और दर्द प्रबंधन में नवीनतम'
      },
      neuroPage: {
        heroTitle: 'न्यूरोएनाटॉमी और न्यूरोडीजेनेरेशन',
        whatIsNeuroTitle: 'न्यूरोएनाटॉमी क्या है?',
        majorRegionsTitle: 'मुख्य मस्तिष्क क्षेत्र',
        keyFunctionsTitle: 'मुख्य कार्य:',
        keyStructuresTitle: 'मुख्य मस्तिष्क संरचनाएँ',
        cellularComponentsTitle: 'कोशिकीय घटक',
        neurodegTitle: 'न्यूरोडीजेनेरेटिव रोगों को समझना',
        commonConditionsTitle: 'सामान्य स्थितियाँ',
        whatAreNeurodegTitle: 'न्यूरोडीजेनेरेटिव रोग क्या हैं?',
        commonSymptomsTitle: 'सामान्य लक्षण',
        pathFeaturesTitle: 'रोगजन्य प्रमुख विशेषताएँ',
        neuronLossTitle: 'न्यूरॉन हानि और यह लक्षण कैसे पैदा करती है',
        whiteMatterTitle: 'वाइट मैटर और संचार में व्यवधान',
        proteinAggTitle: 'प्रोटीन एग्रीगेट / पहचान विशेषताएँ'
      },
      innovativePage: {
        heroTitle: 'नवोन्मेषी और एकीकृत चिकित्सा',
        integrativeTitle: 'इंटीग्रेटिव मेडिसिन',
        traditionalTitle: 'पारंपरिक चिकित्सा',
        alternativeTitle: 'वैकल्पिक दृष्टिकोण',
        supplementsTitle: 'पोषक सप्लीमेंट्स',
        complementaryTitle: 'पूरक उपचार'
       }
    },
    vi: {
      common: {
        readMore: 'Đọc thêm',
        readLess: 'Thu gọn'
      },
      nav: {
        home: 'Trang chủ',
        about: 'Về chúng tôi',
        services: 'Dịch vụ',
        traumaticBrainInjury: 'Chấn thương sọ não',
        silverCreekSurgery: 'Quản lý đau',
        tms: 'TMS',
        contact: 'Liên hệ',
        patientPortal: 'Cổng bệnh nhân',
        preOperativeInstructions: 'Hướng dẫn trước phẫu thuật',
        patientRightsAndPolicies: 'Quyền và chính sách bệnh nhân',
        workAndPersonalInjury: 'Chấn thương công việc & cá nhân',
        blog: 'Blog',
        education: 'Giáo dục',
        neuroanatomy: 'Giải phẫu thần kinh và thoái hóa thần kinh',
        innovativeIntegrativeMedicine: 'Y học đổi mới & tích hợp',
        allTreatments: 'Tất cả phương pháp điều trị'
      },
      hero: {
        welcome: 'Chào mừng đến với',
        subtitle: 'Giải pháp toàn diện về quản lý đau và sức khỏe.',
        getStarted: 'Bắt đầu',
        learnMore: 'Tìm hiểu thêm'
      },
      about: {
        title: 'Sứ mệnh của chúng tôi',
        description: "Tại Mind and Body Pain Clinic, chúng tôi cam kết đánh giá toàn diện và quản lý đa mô thức về đau và các tình trạng thần kinh. Chúng tôi chuyên điều trị đau đầu, đau cổ và nhiều rối loạn đau khác.\n\nSứ mệnh của chúng tôi là hỗ trợ bệnh nhân thông qua giáo dục, quản lý thuốc và các thủ thuật can thiệp tiên tiến. Chúng tôi tin vào việc kết hợp công nghệ y tế hiện đại với các phương pháp bổ sung như vật lý trị liệu và yoga để cung cấp dịch vụ chăm sóc thực sự toàn diện.\n\nChúng tôi làm việc chặt chẽ với các nhà cung cấp dịch vụ chăm sóc sức khỏe của bạn để đảm bảo điều trị cá nhân hóa phù hợp với nhu cầu của bạn. Mặc dù chúng tôi sử dụng thuốc khi thích hợp, chúng tôi thường tránh các phác đồ opioid liều cao, vì nghiên cứu cho thấy chúng mang rủi ro đáng kể với lợi ích dài hạn hạn chế so với các chiến lược an toàn hơn, liều thấp hơn."
      },
      services: {
        title: 'Dịch vụ của chúng tôi',
        traumaticBrainInjury: {
          title: 'Dịch vụ chấn thương sọ não',
          description: 'Kế hoạch điều trị toàn diện cho các tình trạng thần kinh.',
          learnMore: 'Tìm hiểu thêm →',
          features: [
            'Kế hoạch điều trị cá nhân hóa',
            'Phương pháp đa ngành',
            'Liệu pháp dựa trên bằng chứng'
          ]
        },
        silverCreekSurgery: {
          title: 'Dịch vụ quản lý đau',
          description: 'Các phương pháp điều trị hiện đại cho đau cấp tính và mãn tính.',
          learnMore: 'Tìm hiểu thêm →',
          features: [
            'Thủ thuật xâm lấn tối thiểu',
            'Kỹ thuật phẫu thuật tiên tiến',
            'Chăm sóc sau phẫu thuật toàn diện'
          ]
        },
        brainTMS: {
          title: 'Dịch vụ TMS não',
          description: 'Liệu pháp TMS cho các tình trạng thần kinh và tâm thần.',
          learnMore: 'Tìm hiểu thêm →',
          features: [
            'Điều trị không xâm lấn',
            'Không có tác dụng phụ của thuốc',
            'Liệu pháp được FDA phê duyệt'
          ]
        }
      },
      contact: {
        title: 'Liên hệ với chúng tôi',
        subtitle: 'Sẵn sàng bắt đầu hành trình giảm đau của bạn? Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.',
        firstName: 'Tên',
        lastName: 'Họ',
        email: 'Email',
        phone: 'Số điện thoại',
        message: 'Tin nhắn',
        sendMessage: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        sendMessageTitle: 'Gửi tin nhắn cho chúng tôi',
        getInTouch: 'Liên hệ',
        officeInformation: 'Thông tin văn phòng',
        address: 'Địa chỉ',
        officeHours: 'Giờ làm việc',
        mondayFriday: 'Thứ Hai - Thứ Sáu',
        saturday: 'Thứ Bảy',
        sunday: 'Chủ Nhật',
        closed: 'Đóng cửa',
        emergencyInformation: 'Thông tin khẩn cấp',
        emergencyText1: 'Nếu bạn đang gặp phải trường hợp khẩn cấp y tế, vui lòng gọi 911 hoặc đến phòng cấp cứu gần nhất ngay lập tức.',
        emergencyText2: 'Biểu mẫu liên hệ này chỉ dành cho các câu hỏi không khẩn cấp.',
        placeholderText: 'Vui lòng mô tả tình trạng đau của bạn, câu hỏi, hoặc chúng tôi có thể giúp bạn như thế nào...',
        captchaAlert: 'Vui lòng hoàn thành xác minh CAPTCHA.',
        successMessage: 'Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại với bạn sớm.',
        errorMessage: 'Có vấn đề khi gửi biểu mẫu của bạn. Vui lòng thử lại.',
        heroTitle: 'Liên hệ với chúng tôi',
        heroSubtitle: 'Chúng tôi ở đây để giúp đỡ. Hãy liên hệ với chúng tôi nếu có câu hỏi hoặc để đặt lịch hẹn.'
      },
      footer: {
        tagline: 'Chăm sóc toàn diện cho đau mãn tính và các tình trạng thần kinh.',
        description: 'Giải pháp chuyên nghiệp về quản lý đau và sức khỏe.',
        contact: 'Liên hệ',
        address: '6010 Hellyer Ave Ste 150, San Jose, CA 95138',
        copyright: '© 2024 Mind and Body Pain Clinic. Tất cả các quyền được bảo lưu.',
        company: 'Công ty',
        externalResources: 'Tài nguyên bên ngoài',
        blog: 'Blog',
        jobOpenings: 'Cơ hội việc làm',
        militaryHealthSystem: 'Hệ thống y tế quân đội',
        suicideCrisisLifeline: 'Đường dây nóng tự tử và khủng hoảng',
        imageCredit: 'Một số hình ảnh được sử dụng trên trang web này từ Freepik.com',
        footerTitle: 'Chân trang'
      },
      accessibility: {
        title: 'Khả năng truy cập',
        increaseText: 'Tăng chữ',
        decreaseText: 'Giảm chữ',
        highContrast: 'Tương phản cao',
        reduceMotion: 'Giảm chuyển động',
        reset: 'Đặt lại',
        close: 'Đóng'
      },
      home: {
        understandingYourHealth: 'Hiểu về sức khỏe của bạn',
        tbiTitle: 'Chấn thương sọ não',
        tbiDesc: 'Tìm hiểu nguyên nhân, triệu chứng và các phương pháp điều trị tiên tiến cho chấn thương sọ não.',
        tbiCta: 'Khám phá phương pháp điều trị →',
        neuroTitle: 'Giải phẫu thần kinh và thoái hóa thần kinh',
        neuroDesc: 'Khám phá cấu trúc, chức năng của não và các bệnh tiến triển như Alzheimer và Parkinson.',
        neuroCta: 'Đọc thêm →',
        painTitle: 'Đau mãn tính và rối loạn cột sống',
        painDesc: 'Khám phá cách tiếp cận đa chuyên khoa tiên tiến của chúng tôi trong điều trị đau mãn tính và các tình trạng cột sống phức tạp.',
        painCta: 'Cải thiện sức khỏe →',
        disclaimerTitle: 'Tuyên bố miễn trừ trách nhiệm y tế',
        disclaimerText: 'Thông tin trên trang web này chỉ nhằm mục đích cung cấp thông tin và giáo dục, không thay thế cho lời khuyên y tế. Luôn hỏi ý kiến bác sĩ hoặc nhà cung cấp y tế đủ điều kiện cho bất kỳ câu hỏi nào.',
        meet: {
          heading: 'Gặp gỡ Bác sĩ Harpreet Singh',
          credentials: 'MD, Chứng nhận bốn chuyên khoa: Thần kinh, Nội khoa, Quản lý đau can thiệp, Y học chấn thương não',
          paragraph1: 'Bác sĩ Harpreet Singh là bác sĩ chuyên khoa cao với hơn 15 năm kinh nghiệm lâm sàng, được chứng nhận bởi bốn hội đồng. Là chuyên gia TBI (chấn thương sọ não) được công nhận, ông kết hợp công nghệ y tế tiên tiến với phương pháp chăm sóc toàn diện, tập trung vào bệnh nhân.',
          paragraph2: 'Kinh nghiệm của bác sĩ Singh bao gồm chăm sóc ban đầu, chăm sóc giảm nhẹ và y học học thuật, trong đó có vai trò Phó Giáo sư Lâm sàng tại Trung tâm Y tế UC Davis. Được chỉ định là Giám định viên Y khoa (QME) của bang California, ông cũng là nhân chứng chuyên môn, đánh giá mức độ khuyết tật và chuẩn bị báo cáo y khoa pháp lý. Với mục tiêu giúp bệnh nhân kiểm soát đau, hồi phục sau chấn thương phức tạp và cải thiện chất lượng cuộc sống, bác sĩ Singh kết hợp đổi mới y học hiện đại với chăm sóc toàn diện.'
        }
      },
      brainTMS: {
        heroTitle: 'TMS Não',
        heroSubtitle: 'Liệu pháp Kích thích Từ xuyên sọ tiên tiến cho trầm cảm và các bệnh thần kinh.'
      },
      painManagementPage: {
        heroTitle: 'Quản lý đau',
        heroSubtitle: 'Thủ thuật chuyên sâu giúp giảm đau có mục tiêu.'
      },
      tbiPage: {
        heroTitle: 'Chấn thương sọ não',
        heroSubtitle: 'Tìm hiểu ảnh hưởng của chấn thương sọ não, các triệu chứng cần lưu ý và dịch vụ chẩn đoán, điều trị của chúng tôi.'
      },
      workInjuryPage: {
        heroTitle: 'Chấn thương công việc và cá nhân',
        heroSubtitle: 'Chăm sóc y tế chuyên sâu cho các trường hợp chấn thương lao động và cá nhân.',
        servicesTitle: 'Dịch vụ của chúng tôi',
        servicesIntro: 'Chúng tôi cung cấp đánh giá y khoa toàn diện, chẩn đoán và điều trị cho chấn thương liên quan đến công việc và chấn thương cá nhân.',
        cards: {
          evalTitle: 'Đánh giá Y khoa Toàn diện',
          evalDesc: 'Đánh giá chi tiết chấn thương từ tai nạn hoặc sự cố lao động, gồm khám, chỉ định hình ảnh và hồ sơ y tế cho các trường hợp bồi thường và pháp lý.',
          painTitle: 'Điều trị Quản lý đau',
          painDesc: 'Phác đồ quản lý đau chuyên sâu gồm quản lý thuốc, thủ thuật can thiệp và chiến lược đa mô thức.',
          neuroTitle: 'Điều trị Thần kinh',
          neuroDesc: 'Chăm sóc chuyên sâu cho bệnh lý thần kinh do chấn thương như chấn động, tổn thương thần kinh và TBI.',
          rehabTitle: 'Dịch vụ Phục hồi chức năng',
          rehabDesc: 'Giới thiệu phối hợp tới các chương trình phục hồi (vật lý trị liệu) để tối đa hóa hồi phục.',
          legalDocsTitle: 'Hỗ trợ Hồ sơ Pháp lý',
          legalDocsDesc: 'Báo cáo y khoa chi tiết, ghi chú tiến trình và hỗ trợ chuyên gia cho các vụ thương tích cá nhân và bồi thường lao động.',
          legalCoordTitle: 'Phối hợp với Nhóm Pháp lý',
          legalCoordDesc: 'Phối hợp với luật sư để cung cấp cập nhật kịp thời, ý kiến chuyên gia và hồ sơ đầy đủ.'
        },
        downloadsTitle: 'Biểu mẫu tải xuống',
        downloadsIntro: 'Tải các biểu mẫu cần thiết trước cuộc hẹn.',
        forms: {
          registration: 'Biểu mẫu đăng ký',
          referral: 'Biểu mẫu giới thiệu bác sĩ',
          releaseTo: 'Ủy quyền phát hành hồ sơ ĐẾN MBPC',
          releaseFrom: 'Ủy quyền phát hành hồ sơ TỪ MBPC'
        }
      },
      blogPage: {
        heroTitle: 'Tin mới về Thần kinh và Quản lý đau'
      },
      neuroPage: {
        heroTitle: 'Giải phẫu thần kinh & Thoái hóa thần kinh',
        whatIsNeuroTitle: 'Giải phẫu thần kinh là gì?',
        majorRegionsTitle: 'Các vùng não chính',
        keyFunctionsTitle: 'Chức năng chính:',
        keyStructuresTitle: 'Cấu trúc não quan trọng',
        cellularComponentsTitle: 'Thành phần tế bào',
        neurodegTitle: 'Tìm hiểu về bệnh thoái hóa thần kinh',
        commonConditionsTitle: 'Tình trạng thường gặp',
        whatAreNeurodegTitle: 'Bệnh thoái hóa thần kinh là gì?',
        commonSymptomsTitle: 'Triệu chứng thường gặp',
        pathFeaturesTitle: 'Đặc điểm bệnh lý then chốt',
        neuronLossTitle: 'Mất tế bào thần kinh và triệu chứng',
        whiteMatterTitle: 'Chất trắng và gián đoạn dẫn truyền',
        proteinAggTitle: 'Kết tụ protein / Dấu ấn điển hình'
      },
      innovativePage: {
        heroTitle: 'Y học đổi mới & tích hợp',
        integrativeTitle: 'Y học tích hợp',
        traditionalTitle: 'Y học truyền thống',
        alternativeTitle: 'Phương pháp thay thế',
        supplementsTitle: 'Thực phẩm bổ sung',
        complementaryTitle: 'Liệu pháp bổ trợ'
      }
    }
  };

  const t = content[language];

  const HomePage = () => {
    
    const testimonialVideoRefs = [React.useRef(null), React.useRef(null), React.useRef(null)];
    const [testimonialPlaying, setTestimonialPlaying] = useState([false, false, false]);
    const toggleTestimonial = (index) => {
      const video = testimonialVideoRefs[index]?.current;
      if (!video) return;
      if (video.paused) {
        video.play();
        setTestimonialPlaying((prev) => prev.map((v, i) => (i === index ? true : v)));
      } else {
        video.pause();
        setTestimonialPlaying((prev) => prev.map((v, i) => (i === index ? false : v)));
      }
    };

   return (
      <>
                           {/* Hero Section */}
        <section id="home" className="relative min-h-[55svh] sm:min-h-[100vh] flex items-center justify-center bg-black">
          <div className="w-full">
            <div className="relative bg-black overflow-hidden h-full">
              {/* Background Video */}
              <div className="absolute inset-0 z-0 h-full">
            {/* Local Video Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
              <video
                    id="hero-video"
                    src={process.env.PUBLIC_URL + '/landinghero.mp4'}
                className="w-full h-full object-cover pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ 
                      backgroundColor: 'transparent'
                    }}
              />
            </div>
                {/* Enhanced overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40 pointer-events-none"></div>
          </div>
         
         {/* Content */}
               <div className="relative z-10 min-h-[55svh] sm:min-h-[100vh] flex items-center justify-center px-8">
           <div className="text-center">
                   <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
                     Mind and Body Pain Clinic
               </h1>
                   <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light drop-shadow-lg">
                 {t.hero.subtitle}
               </p>
                 </div>
               </div>
           </div>
         </div>
       </section>

      {/* Meet Dr. Singh Section */}
      <section id="meet-dr-singh" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center">
            <img src={process.env.PUBLIC_URL + '/harpreet-singh.jpg'} alt="Dr. Harpreet Singh" className="w-full max-w-md h-auto object-cover"/>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 tracking-tight">{t.home?.meet?.heading || 'Meet Dr. Harpreet Singh'}</h2>
            <p className="text-md font-bold text-teal-600 mb-6">
              {t.home?.meet?.credentials || 'MD, Quadruple-Board Certified in Neurology, Internal Medicine, Interventional Pain Management, Brain Injury Medicine'}
            </p>

            {/* Medical Board Certifications */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
                <img
                  src={process.env.PUBLIC_URL + '/ABPMRlogo.png'}
                  alt="ABPMR Board Certified"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + '/ABIMlogo.jpg'}
                  alt="ABIM Board Certified"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + '/ABPNlogo.png'}
                  alt="ABPN Board Certified"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <img
                  src={process.env.PUBLIC_URL + '/ABAlogo.webp'}
                  alt="ABA Board Certified"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p
              className="text-sm text-gray-700 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{
                __html: (t.home?.meet?.paragraph1 || 'Dr. Harpreet Singh is a highly specialized, quadruple board-certified physician with over 25 years of clinical experience. A recognized TBI (Traumatic Brain Injury) expert, he combines advanced medical technologies with holistic approaches to deliver compassionate, patient-centered treatment.')
                  .replace('highly specialized, quadruple board-certified physician', '<strong>highly specialized, quadruple board-certified physician</strong>')
                  .replace('recognized TBI (Traumatic Brain Injury) expert', '<strong>recognized TBI (Traumatic Brain Injury) expert</strong>')
              }}
            />
            <p
              className="text-sm text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: (t.home?.meet?.paragraph2 || "Dr. Singh's background spans primary care, palliative care, and academic medicine, including his role as Associate Clinical Professor at UC Davis Medical Center. Designated as a Qualified Medical Examiner (QME) by the California Division of Workers' Compensation, he also serves as an expert witness, evaluating disability and preparing medical-legal reports. With a focus on helping patients manage pain, recover from complex injuries, and restore quality of life, Dr. Singh integrates modern medical innovations with whole-person care.")
                  .replace('Qualified Medical Examiner (QME)', '<strong>Qualified Medical Examiner (QME)</strong>')
                  .replace('expert witness', '<strong>expert witness</strong>')
              }}
            />
          </div>
        </div>
      </section>

      {/* About and Services Section */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/tealbackground.jpg'})` }}>
        <div aria-hidden="true" className="absolute inset-0 bg-teal-800/70" />
        <section id="about-services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Our Mission */}
            <div className="lg:pr-8">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white">
                {t.about.title}
              </h2>
              <div className="w-20 h-1 bg-white/50 mb-6 rounded-full"></div>
              <p className="text-sm text-teal-100 leading-relaxed font-light">
                {t.about.description}
              </p>
            </div>
            {/* Our Services */}
            <div className="lg:mt-0">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white">
                {t.services.title}
              </h2>
              <div className="w-20 h-1 bg-white/50 mb-6 rounded-full"></div>
              <div className="space-y-6">
                {/* Service Card 1 */}
                <Link to="/traumatic-brain-injury" className="block bg-teal-600/50 p-4 rounded-lg shadow-lg hover:bg-teal-600/70 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">{t.services.traumaticBrainInjury.title}</h3>
                  <p className="text-sm text-teal-100 font-light mb-4">{t.services.traumaticBrainInjury.description}</p>
                  <span className="font-semibold text-white">
                    {t.services.traumaticBrainInjury.learnMore}
                  </span>
                </Link>
                {/* Service Card 2 */}
                <Link to="/pain-management" className="block bg-teal-600/50 p-4 rounded-lg shadow-lg hover:bg-teal-600/70 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">{t.services.silverCreekSurgery.title || t.nav.silverCreekSurgery}</h3>
                  <p className="text-sm text-teal-100 font-light mb-4">{t.services.silverCreekSurgery.description}</p>
                  <span className="font-semibold text-white">
                    {t.services.silverCreekSurgery.learnMore || t.hero.learnMore}
                  </span>
                </Link>
                {/* Service Card 3 */}
                <Link to="/brain-tms" className="block bg-teal-600/50 p-4 rounded-lg shadow-lg hover:bg-teal-600/70 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">{t.services.brainTMS.title}</h3>
                  <p className="text-sm text-teal-100 font-light mb-4">{t.services.brainTMS.description}</p>
                  <span className="font-semibold text-white">
                    {t.services.brainTMS.learnMore}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Understanding Your Health Section */}
      <section id="health-info" className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 tracking-tight">
              {t.home?.understandingYourHealth || 'Understanding Your Health'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/traumatic-brain-injury" className="block bg-gray-700 rounded-lg shadow-lg border border-gray-600 hover:shadow-xl hover:border-teal-500 transition-all duration-300 overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/brain.png'} alt="Traumatic Brain Injury" className="w-full h-48 object-contain"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{t.home?.tbiTitle || 'Traumatic Brain Injury'}</h3>
                <p className="text-sm text-gray-300 mb-6 font-light">{t.home?.tbiDesc || 'Understand the causes, symptoms, and cutting-edge treatments for traumatic brain injuries.'}</p>
                <span className="font-semibold text-teal-400 hover:text-teal-300 transition-colors">{t.home?.tbiCta || 'Discover Treatments →'}</span>
              </div>
            </Link>
            {/* Card 2 */}
            <Link to="/neuroanatomy" className="block bg-gray-700 rounded-lg shadow-lg border border-gray-600 hover:shadow-xl hover:border-teal-500 transition-all duration-300 overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/neurodeg.png'} alt="Neuroanatomy and Neurodegeneration" className="w-full h-48 object-contain"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{t.home?.neuroTitle || 'Neuroanatomy and Neurodegeneration'}</h3>
            <p className="text-sm text-gray-300 mb-6 font-light">{t.home?.neuroDesc || "Explore brain structure, function, and progressive neurological conditions like Alzheimer's and Parkinson's."}</p>
                <span className="font-semibold text-teal-400 hover:text-teal-300 transition-colors">{t.home?.neuroCta || 'Read More →'}</span>
              </div>
            </Link>
            {/* Card 3 */}
            <Link to="/pain-management" className="block bg-gray-700 rounded-lg shadow-lg border border-gray-600 hover:shadow-xl hover:border-teal-500 transition-all duration-300 overflow-hidden">
              <img src={process.env.PUBLIC_URL + '/chronicpain.png'} alt="Chronic Pain and Spine Disorders" className="w-full h-48 object-contain"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{t.home?.painTitle || 'Chronic Pain and Spine Disorders'}</h3>
                <p className="text-sm text-gray-300 mb-6 font-light">{t.home?.painDesc || 'Explore our advanced, multidisciplinary approach to treating chronic pain and complex spine-related conditions.'}</p>
                <span className="font-semibold text-teal-400 hover:text-teal-300 transition-colors">{t.home?.painCta || 'Improve Wellness →'}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Patient Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
              {t.home?.testimonialsTitle || 'Patient Testimonials'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg shadow overflow-hidden bg-white">
              <video
                ref={testimonialVideoRefs[0]}
                className="w-full h-64 object-cover"
                src={process.env.PUBLIC_URL + '/testimony1.mp4'}
                preload="metadata"
                playsInline
              />
              <button
                type="button"
                onClick={() => toggleTestimonial(0)}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play video"
              >
                {!testimonialPlaying[0] && (
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 text-white shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
            <div className="relative rounded-lg shadow overflow-hidden bg-white">
              <video
                ref={testimonialVideoRefs[1]}
                className="w-full h-64 object-cover"
                src={process.env.PUBLIC_URL + '/testimony2.mp4'}
                preload="metadata"
                playsInline
              />
              <button
                type="button"
                onClick={() => toggleTestimonial(1)}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play video"
              >
                {!testimonialPlaying[1] && (
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 text-white shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
            <div className="relative rounded-lg shadow overflow-hidden bg-white">
              <video
                ref={testimonialVideoRefs[2]}
                className="w-full h-64 object-cover"
                src={process.env.PUBLIC_URL + '/testimony3.mp4'}
                preload="metadata"
                playsInline
              />
              <button
                type="button"
                onClick={() => toggleTestimonial(2)}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play video"
              >
                {!testimonialPlaying[2] && (
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 text-white shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-teal-600">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.home?.disclaimerTitle || 'Medical Disclaimer'}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t.home?.disclaimerText || 'The information provided on this website is for informational and educational purposes only and is not intended as medical advice. It should not be used as a substitute for professional diagnosis or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or treatment. Do not disregard professional medical advice or delay seeking it because of something you have read on this website.'}
            </p>
          </div>
        </div>
      </section>
      </>
   );
   };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout
            t={t}
            language={language}
            handleLanguageChange={handleLanguageChange}
            showLanguageDropdown={showLanguageDropdown}
            setShowLanguageDropdown={setShowLanguageDropdown}
            accessibilitySettings={accessibilitySettings}
            toggleAccessibilityPanel={toggleAccessibilityPanel}
            handleAccessibilityChange={handleAccessibilityChange}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            servicesOpen={servicesOpen}
            setServicesOpen={setServicesOpen}
            patientPortalOpen={patientPortalOpen}
            setPatientPortalOpen={setPatientPortalOpen}
            educationOpen={educationOpen}
            setEducationOpen={setEducationOpen}
          />}>
          <Route index element={<HomePage />} />
          <Route path="traumatic-brain-injury" element={<TraumaticBrainInjury t={t} />} />
          <Route path="long-term-effects-tbi" element={<LongTermEffectsTBI t={t} />} />
          <Route path="pain-management" element={<PainManagement t={t} />} />
          <Route path="brain-tms" element={<BrainTMS t={t} />} />
          <Route path="additional-treatments" element={<AdditionalTreatments />} />
          <Route path="work-and-personal-injury" element={<WorkAndPersonalInjury t={t} />} />
          <Route path="contact" element={<Contact t={t} />} />
          <Route path="pre-operative-instructions" element={<PreOperativeInstructions t={t} />} />
          <Route path="patient-rights-and-policies" element={<PatientRightsAndPolicies t={t} />} />
          <Route path="blog" element={<Blog t={t} />} />
          <Route path="job-openings" element={<JobOpenings t={t} />} />
          <Route path="all-treatments" element={<AllTreatments t={t} />} />
          <Route path="neuroanatomy" element={<Neuroanatomy t={t} />} />
          <Route path="innovative-integrative-medicine" element={<InnovativeIntegrativeMedicine t={t} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



