import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ t }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaContainerRef = useRef(null);
  const recaptchaWidgetIdRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert(t.contact.captchaAlert);
      return;
    }
    
    setIsSubmitting(true);

    try {
      const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_e11vehk';
      const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_9zirbdq';
      const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'X3iCXdyaiMyGy4qdv';
      const TO_EMAIL = process.env.REACT_APP_EMAILJS_TO; // optional; if absent, template handles recipient

      if (!TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('Missing EmailJS env: REACT_APP_EMAILJS_TEMPLATE_ID or REACT_APP_EMAILJS_PUBLIC_KEY');
        alert(t.contact.errorMessage);
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
      };
      if (TO_EMAIL) templateParams.to_email = TO_EMAIL;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      alert(t.contact.successMessage);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setCaptchaVerified(false);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('EmailJS submission error:', error);
      const details = (error && (error.text || error.message)) ? `\n\nDetails: ${error.text || error.message}` : '';
      alert(`${t.contact.errorMessage}${details}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Expose function to global scope for reCAPTCHA callback and render reCAPTCHA explicitly
  React.useEffect(() => {
    // Initialize EmailJS with public key so send() succeeds reliably
    try {
      const pk = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'X3iCXdyaiMyGy4qdv';
      if (pk) {
        emailjs.init(pk);
      }
    } catch (_) {}

    window.ReactApp = {
      handleCaptchaChange: handleCaptchaChange
    };

    const tryRenderRecaptcha = () => {
      if (!recaptchaContainerRef.current) return false;
      if (recaptchaWidgetIdRef.current !== null) return true;
      if (window.grecaptcha && window.grecaptcha.render) {
        const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        const siteKey = isLocalhost
          ? (process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI') // Google's v2 test key for localhost
          : (process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LfeG_crAAAAAJtxF5AJIlJdjxB6uFHBwaRuiiD1');
        recaptchaWidgetIdRef.current = window.grecaptcha.render(recaptchaContainerRef.current, {
          sitekey: siteKey,
          callback: (token) => window.ReactApp && window.ReactApp.handleCaptchaChange && window.ReactApp.handleCaptchaChange(token),
        });
        return true;
      }
      return false;
    };

    if (!tryRenderRecaptcha()) {
      const id = setInterval(() => {
        if (tryRenderRecaptcha()) {
          clearInterval(id);
        }
      }, 400);
      return () => clearInterval(id);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/officehero.png'})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t.contact.heroTitle}
          </h1>
          <p className="text-xl sm:text-2xl">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">{t.contact.sendMessageTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.firstName} *
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.lastName} *
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.email} *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.phone}
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.contact.message} *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.placeholderText}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>
                
                {/* CAPTCHA */}
                <div className="flex justify-center">
                  <div 
                    ref={recaptchaContainerRef}
                    className="g-recaptcha"
                  ></div>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      !isSubmitting
                        ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-xl transform hover:-translate-y-1'
                        : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? t.contact.sending : t.contact.sendMessage}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">{t.contact.getInTouch}</h2>
              
              <div className="space-y-8">
                {/* Office Information */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.contact.officeInformation}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Mind and Body Pain Clinic</h4>
                        <p className="text-gray-600">6010 Hellyer Ave Ste 150</p>
                        <p className="text-gray-600">San Jose, CA 95138</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Silver Creek Surgery Center</h4>
                        <p className="text-gray-600">6010 Hellyer Ave Ste 100</p>
                        <p className="text-gray-600">San Jose, CA 95138</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{t.contact.phone}</h4>
                        <p className="text-gray-600">(408) 356-5900</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{t.contact.email}</h4>
                        <p className="text-gray-600">mindandbodypain@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.contact.officeHours}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.contact.mondayFriday}</span>
                      <span className="font-semibold text-gray-900">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.contact.saturday}</span>
                      <span className="font-semibold text-gray-900">{t.contact.closed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.contact.sunday}</span>
                      <span className="font-semibold text-gray-900">{t.contact.closed}</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Information */}
                <div className="bg-red-50 p-8 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">{t.contact.emergencyInformation}</h3>
                  <p className="text-red-800 mb-4">
                    {t.contact.emergencyText1}
                  </p>
                  <p className="text-red-800">
                    {t.contact.emergencyText2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
 
    </>
  );
}

export default Contact;
