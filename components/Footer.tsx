import React from 'react';

// Light mode logo (Black)
const LOGO_LIGHT = "https://storage.googleapis.com/msgsndr/hwdKuq76jEKM0LWlIx8A/media/684710ee8e362128ee0253c7.png";
// Dark mode logo (White)
const LOGO_DARK = "https://storage.googleapis.com/msgsndr/hwdKuq76jEKM0LWlIx8A/media/684710e947cd63dc41b5374b.png";

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            {/* Light Mode Logo (Black) - Hidden in Dark Mode */}
            <img src={LOGO_LIGHT} alt="PowerAdminAI" className="h-8 w-auto block dark:hidden" />
            
            {/* Dark Mode Logo (White) - Hidden in Light Mode */}
            <img src={LOGO_DARK} alt="PowerAdminAI" className="h-8 w-auto hidden dark:block" />

            <span className="font-bold text-lg text-slate-700 dark:text-slate-300">PowerAdminAI</span>
        </a>
        <div className="text-slate-500 dark:text-slate-500 text-sm flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} PowerAdminAI. Systems over tactics.</p>
          <p className="text-slate-600 dark:text-slate-600">Located in Tampa, Florida</p>
        </div>
        <div className="flex gap-6">
          <a href="/" onClick={(e) => e.preventDefault()} className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm">Privacy Policy</a>
          <a href="/" onClick={(e) => e.preventDefault()} className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;