import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-bold text-lg text-slate-300">PowerAdminAI</span>
        </a>
        <div className="text-slate-500 text-sm flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} PowerAdminAI. Systems over tactics.</p>
          <p className="text-slate-600">Located in Tampa, Florida</p>
        </div>
        <div className="flex gap-6">
          <a href="/" onClick={(e) => e.preventDefault()} className="text-slate-500 hover:text-white text-sm">Privacy Policy</a>
          <a href="/" onClick={(e) => e.preventDefault()} className="text-slate-500 hover:text-white text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;