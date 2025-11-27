import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" onClick={handleLogoClick} className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">PowerAdminAI</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">The Problem</a>
            <a href="#solutions" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Solutions</a>
            <a href="#outbound" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Outbound</a>
            <a href="#process" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Free Trial</a>
            <a 
              href="tel:+18137377025" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/20"
            >
              <Phone size={16} />
              Demo: (813) 737-7025
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#problem" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">The Problem</a>
            <a href="#solutions" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Solutions</a>
            <a href="#outbound" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Outbound</a>
            <a href="#process" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Free Trial</a>
            <a href="tel:+18137377025" onClick={handleLinkClick} className="block w-full text-center mt-4 bg-blue-600 text-white px-4 py-3 rounded-md font-semibold">
              Call Demo: (813) 737-7025
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;