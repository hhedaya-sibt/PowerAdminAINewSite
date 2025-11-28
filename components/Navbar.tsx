import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

// Light mode logo (Color)
const LOGO_LIGHT = "https://storage.googleapis.com/msgsndr/hwdKuq76jEKM0LWlIx8A/media/68e9019f55c3ad41fd2868b5.png";
// Dark mode logo (White)
const LOGO_DARK = "https://storage.googleapis.com/msgsndr/hwdKuq76jEKM0LWlIx8A/media/684710e947cd63dc41b5374b.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage on mount. Default to light if not set or set to light.
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" onClick={handleLogoClick} className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
            {/* Light Mode Logo (Color) - Hidden in Dark Mode */}
            <img src={LOGO_LIGHT} alt="PowerAdminAI - AI Receptionist for Small Business" className="h-10 w-auto block dark:hidden" />
            
            {/* Dark Mode Logo (White) - Hidden in Light Mode */}
            <img src={LOGO_DARK} alt="PowerAdminAI - AI Receptionist for Small Business" className="h-10 w-auto hidden dark:block" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium">The Problem</a>
            <a href="#solutions" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium">Solutions</a>
            <a href="#outbound" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium">Outbound</a>
            <a href="#process" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium">Free Trial</a>
            <a href="https://app.poweradminai.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium">Login</a>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href="tel:+18137377025" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20"
            >
              <Phone size={16} />
              Demo: (813) 737-7025
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="text-slate-500 dark:text-slate-400"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#problem" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">The Problem</a>
            <a href="#solutions" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Solutions</a>
            <a href="#outbound" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Outbound</a>
            <a href="#process" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Free Trial</a>
            <a href="https://app.poweradminai.com" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Login</a>
            <a href="tel:+18137377025" onClick={handleLinkClick} className="block w-full text-center mt-4 bg-blue-600 text-white px-4 py-3 rounded-md font-semibold shadow-lg shadow-blue-500/20">
              Call Demo: (813) 737-7025
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;