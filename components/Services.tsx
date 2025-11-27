import React from 'react';
import { Mic, Brain, Network, FileText, Check } from 'lucide-react';
import { TierProps } from '../types';

const TierCard: React.FC<TierProps> = ({ title, priceLevel, description, features, isPopular }) => (
  <div className={`relative flex flex-col p-8 bg-white dark:bg-slate-800/50 border rounded-2xl transition-colors duration-300 ${isPopular ? 'border-blue-500 shadow-2xl shadow-blue-900/20 scale-105 z-10' : 'border-slate-200 dark:border-slate-700'}`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
        Most Common
      </div>
    )}
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <div className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">{priceLevel}</div>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 h-12">{description}</p>
    
    <div className="space-y-4 flex-grow">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <Check size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
          <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Boring Systems Beat <br/> Shiny Objects.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We don't sell "digital transformation." We sell employees that never sleep, never get sick, and follow your playbook perfectly every single time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <TierCard 
            title="Tier 1: Receptionist"
            priceLevel="Entry Level"
            description="Perfect for handling overflow and after-hours coverage without missing a beat."
            features={[
              "24/7 Availability",
              "Answers calls & takes messages",
              "Intelligent call routing",
              "Basic FAQ handling"
            ]}
          />
          <TierCard 
            title="Tier 2: Specialist"
            priceLevel="Professional"
            description="Industry-specific training for complex intake and scheduling tasks."
            isPopular={true}
            features={[
              "Everything in Tier 1",
              "Custom Knowledge Base",
              "Legal/Medical Intake Scripts",
              "Calendar Qualification"
            ]}
          />
          <TierCard 
            title="Tier 3: Integrated"
            priceLevel="Enterprise"
            description="Deep integration with your tech stack to read/write data in real-time."
            features={[
              "Everything in Tier 1 & 2",
              "CRM API Read/Write",
              "Real-time Record Updates",
              "Complex Logic Handling"
            ]}
          />
        </div>

        <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
                <FileText size={14} />
                <span>Beyond Voice</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Complete Workflow Automation</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We don't just answer the phone. We ingest documents from email, scanned mail, and web portals. Our AI reads, categorizes, and triggers actions automatically.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                   <span>Email & Document Ingestion</span>
                 </li>
                 <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                   <span>Automatic Categorization</span>
                 </li>
                 <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                   <span>Trigger Downstream Workflows</span>
                 </li>
              </ul>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm relative overflow-hidden shadow-xl">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
               <div className="space-y-3 opacity-90">
                 <div className="flex gap-3">
                   <span className="text-slate-500">09:14:21</span>
                   <span className="text-blue-400">[INBOUND]</span>
                   <span className="text-slate-300">PDF received: "Medical_Records.pdf"</span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-slate-500">09:14:23</span>
                   <span className="text-purple-400">[AI_READ]</span>
                   <span className="text-slate-300">Analyzing content... Type identified: Lab Results</span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-slate-500">09:14:25</span>
                   <span className="text-emerald-400">[ACTION]</span>
                   <span className="text-slate-300">Updating CRM Case #49221. Notifying Attorney.</span>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-slate-500">09:14:26</span>
                   <span className="text-emerald-400">[COMPLETE]</span>
                   <span className="text-slate-300">Workflow finished successfully.</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;