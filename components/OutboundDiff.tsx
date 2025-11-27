import React from 'react';
import { Smartphone, ShieldCheck, PenTool } from 'lucide-react';

const OutboundDiff: React.FC = () => {
  return (
    <section id="outbound" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-64 h-[500px] bg-white dark:bg-slate-800 rounded-[3rem] border-8 border-slate-200 dark:border-slate-700 shadow-2xl p-4 flex flex-col items-center justify-center transition-colors duration-300">
              {/* Screen Content - Keeping dark UI for phone simulation */}
              <div className="w-full h-full bg-slate-950 rounded-[2rem] overflow-hidden flex flex-col relative">
                
                {/* Status Bar */}
                <div className="h-6 w-full flex justify-between px-4 pt-2 text-[10px] text-white">
                  <span>9:41</span>
                  <div className="flex gap-1">
                     <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                     <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Incoming Call UI */}
                <div className="mt-12 flex flex-col items-center">
                   <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mb-4">
                     <span className="text-3xl">🏛️</span>
                   </div>
                   <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Incoming Call</div>
                   <h3 className="text-xl font-bold text-white mb-8 text-center px-4">Johnson & Partners Law</h3>
                   
                   {/* Verification Badge */}
                   <div className="flex items-center gap-2 bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium mb-12 border border-emerald-800">
                     <ShieldCheck size={12} />
                     <span>Verified Business</span>
                   </div>

                   <div className="w-full px-8 flex justify-between mt-auto pb-12 absolute bottom-0">
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                           <Smartphone className="text-white transform rotate-[135deg]" size={24} />
                         </div>
                         <span className="text-xs text-white">Decline</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                           <Smartphone className="text-white" size={24} />
                         </div>
                         <span className="text-xs text-white">Accept</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-slate-500">
                <span className="text-red-400 line-through mr-2">Spam Likely</span> 
                <span className="text-emerald-500 dark:text-emerald-400 font-bold">Your Brand Name</span>
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              The Only Way Outbound Works: <br/>
              <span className="text-blue-600 dark:text-blue-400">Branded Caller ID.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Most AI outbound campaigns fail because they show up as "Unknown" or "Spam Likely." Nobody answers those.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We fix this. Your name displays on the phone. Trust is established before they say hello.
            </p>

            <div className="bg-white dark:bg-slate-800/30 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8 shadow-sm dark:shadow-none transition-colors duration-300">
              <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                <PenTool size={18} className="text-blue-600 dark:text-blue-400" />
                Live Document Signing
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Powered by our <span className="text-slate-900 dark:text-white font-semibold">Send It By Text</span> integration.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-bold w-12 text-right">Step 1</span>
                  <span className="text-slate-600 dark:text-slate-300">AI calls a group of clients to follow up with unsigned documents.</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-bold w-12 text-right">Step 2</span>
                  <span className="text-slate-600 dark:text-slate-300">Client answers (because they see your name).</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-bold w-12 text-right">Step 3</span>
                  <span className="text-slate-600 dark:text-slate-300">AI confirms details and texts signing link <i>while on the call</i>.</span>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-bold w-12 text-right">Step 4</span>
                  <span className="text-slate-600 dark:text-slate-300">AI waits for signature confirmation before hanging up.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OutboundDiff;