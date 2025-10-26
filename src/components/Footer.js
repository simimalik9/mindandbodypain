import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t.footer.footerTitle}
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              className="h-10"
              src={process.env.PUBLIC_URL + '/logo.png'}
              alt="Mind and Body Pain Clinic Logo"
            />
            <p className="text-gray-500 text-base">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">
                mindandbodypain@gmail.com
              </li>
              <li className="text-base text-gray-500">
                (408) 356-5900
              </li>
              <li className="text-base text-gray-500">
                {t.footer.address}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t.footer.company}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link to="/job-openings" className="text-base text-gray-500 hover:text-gray-900">
                  {t.footer.jobOpenings}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t.footer.externalResources}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://www.health.mil/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  {t.footer.militaryHealthSystem}
                </a>
              </li>
              <li>
                <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                  {t.footer.suicideCrisisLifeline}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">
            {t.footer.copyright.replace('2024', currentYear)}
          </p>
          <p className="mt-1 text-xs text-gray-400">
            {t.footer.imageCredit}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
