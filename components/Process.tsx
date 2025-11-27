import React from 'react';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We Deploy First. <br/> You Pay Later.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Most competitors want a $5,000 setup fee just to start. We are confident enough to build it, deploy it, and let you break it for 5 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 z-0"></div>

           {[
             { title: "Discovery", desc: "We identify your biggest leak (missed calls, unsigned docs, booking friction).", step: "01" },
             { title: "Configuration", desc: "We build your custom AI agent and knowledge base. Done for you.", step: "02" },
             { title: "Live Fire Test", desc: "4-5 days running on live traffic. Watch the results in real-time.", step: "03" }
           ].map((item, idx) => (
             <div key={idx} className="relative z-10 bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                <div className="text-5xl font-bold text-slate-800 mb-6 absolute top-4 right-6 select-none">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-4 relative">{item.title}</h3>
                <p className="text-slate-400 relative">{item.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center">
           <a 
              href="tel:+18137377025"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-slate-200 transition-colors"
            >
              Start Your Free Deployment <ArrowRight size={20} />
            </a>
            <p className="mt-4 text-sm text-slate-500">No commitment required.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;