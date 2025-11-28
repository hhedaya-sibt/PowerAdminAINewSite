import React from 'react';
import { Clock, DollarSign, UserX, Quote } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Every missed call is a customer choosing your competitor. <span className="text-blue-600 dark:text-blue-400">AI Phone Answering Service</span> solves this.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              You already know the problem. Calls come in during lunch, after hours, when you're with a client. Your team is busy. Voicemail piles up. By the time someone calls back, the lead has moved on.
            </p>
            
            {/* The Real Cost Stats */}
            <div className="grid grid-cols-1 gap-4 mb-8">
               <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4">
                 <div className="mt-1 bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-600 dark:text-red-400">
                    <Clock size={20} aria-label="Time clock icon" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">78% less likely to connect</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">If you wait more than 10 minutes to respond, your chance of reaching that lead drops by three-quarters.</p>
                 </div>
               </div>

               <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4">
                 <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full text-orange-600 dark:text-orange-400">
                    <UserX size={20} aria-label="Missed user icon" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">62% hang up on voicemail</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Most callers won't leave a message. They'll try the next name on Google.</p>
                 </div>
               </div>

               <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex items-start gap-4">
                 <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400">
                    <DollarSign size={20} aria-label="Dollar sign icon" />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">$52,000 per year</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">That's what one receptionist costs. And they can only handle one call at a time.</p>
                 </div>
               </div>
            </div>

            {/* Founder Note */}
            <div className="relative pl-6 border-l-4 border-blue-500 italic">
               <Quote className="absolute -top-3 -left-3 text-blue-200 dark:text-slate-700 bg-slate-50 dark:bg-slate-900" size={24} aria-hidden="true" />
               <p className="text-slate-700 dark:text-slate-300 font-medium">
                 "We built Piper after watching a client's law practice lose qualified leads to voicemail every single week. We had the expertise. They just couldn't answer the phone everytime it rang."
               </p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-10 dark:opacity-20 blur-xl"></div>
             <div className="relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Missed Opportunity Calculation</span>
                  <DollarSign className="text-red-500" size={20} aria-hidden="true" />
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