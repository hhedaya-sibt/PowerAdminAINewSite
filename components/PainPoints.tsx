import React from 'react';
import { Clock, DollarSign, XCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              The 9 PM Nightmare: <br/>
              <span className="text-red-600 dark:text-red-400">Where $50k Vanishes.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              It's 9:05 PM. A prospective client has a major emergency. They call your firm.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Your answering service picks up. They are polite, but useless. "I'll take a message," they say. 
              The client hangs up, frustrated.
            </p>
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium mb-8 leading-relaxed border-l-4 border-blue-500 pl-4">
              They call your competitor. Our AI answers instantly, handles the full intake, books the consultation for 8 AM tomorrow, and syncs the calendar. <span className="text-blue-600 dark:text-blue-400">You just lost the case.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
                 <div className="flex items-center gap-3 mb-2 text-red-600 dark:text-red-400">
                   <Clock size={20} />
                   <span className="font-semibold">Slow Response</span>
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Average response time of 4+ hours kills lead conversion rates by 80%.</p>
               </div>
               <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
                 <div className="flex items-center gap-3 mb-2 text-red-600 dark:text-red-400">
                   <XCircle size={20} />
                   <span className="font-semibold">Inconsistency</span>
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Human receptionists have bad days. Scripts get ignored. Details get missed.</p>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-10 dark:opacity-20 blur-xl"></div>
             <div className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Missed Opportunity Calculation</span>
                  <DollarSign className="text-red-500" size={20}/>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Avg. Case Value</span>
                    <span className="text-slate-900 dark:text-white font-mono text-xl">$40,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Missed Calls / Month</span>
                    <span className="text-slate-900 dark:text-white font-mono text-xl">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Conversion Rate (Competitor)</span>
                    <span className="text-slate-900 dark:text-white font-mono text-xl">20%</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-red-600 dark:text-red-400 font-bold">Annual Revenue Lost</span>
                    <span className="text-red-600 dark:text-red-500 font-bold font-mono text-2xl">-$480,000</span>
                  </div>
                </div>
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/50 text-center">
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Our AI costs less than <span className="font-bold text-blue-900 dark:text-white">4%</span> of one recovered case.
                  </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;