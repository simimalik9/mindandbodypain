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
        <div className="pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t.footer.contact}</h3>
            <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-12 md:grid-cols-2">
              <ul className="space-y-2 leading-relaxed max-w-xs">
                <li className="text-base text-gray-800 font-semibold">
                  San Jose
                </li>
                <li className="text-sm text-gray-600">
                  Phone: (408) 356-5900
                </li>
                <li className="text-sm text-gray-600">
                  Email: mindandbodypain@gmail.com
                </li>
                <li className="text-sm text-gray-600">
                  {t.footer.address}
                </li>
              </ul>
              <ul className="space-y-2 leading-relaxed max-w-xs">
                <li className="text-base text-gray-800 font-semibold">
                  Las Vegas
                </li>
                <li className="text-sm text-gray-600">
                  Phone: (725) 316-5970
                </li>
                <li className="text-sm text-gray-600">
                  Email: neurotbiexpert@gmail.com
                </li>
                <li className="text-sm text-gray-600">
                  4488 South Pecos Rd, Suite 101
                  <br />
                  Las Vegas, NV 89121
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
