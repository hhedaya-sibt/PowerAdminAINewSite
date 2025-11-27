import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-blue-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live Deployment: Free Trial
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            Your First AI Employee <br />
            <span className="gradient-text">Is On The House.</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop losing $5k - $50k opportunities because someone hit voicemail at 9 PM. 
            We deploy AI agents that answer calls, book appointments, and close deals. 
            <span className="text-white font-semibold"> Prove it works before you pay a dime.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+18137377025"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <Phone size={20} />
              Call (813) 737-7025 to Demo
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-lg font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all bg-slate-900/50"
            >
              Or Book Consultation
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>No human interaction required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Experience the speed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Real conversation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;