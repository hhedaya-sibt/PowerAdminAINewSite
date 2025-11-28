import React from 'react';
import { Check, Info } from 'lucide-react';
import { TierProps } from '../types';

const TierCard: React.FC<TierProps> = ({ tierName, title, description, features, perfectFor, value, isPopular }) => (
  <div className={`flex flex-col h-full p-8 bg-white dark:bg-slate-800/50 border rounded-2xl transition-all duration-300 ${isPopular ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-2xl shadow-blue-900/20 scale-105 z-10' : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'}`}>
    {isPopular && (
      <div className="self-center mb-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <div className="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase mb-1">{tierName}</div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>

    <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
      <div className="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold mb-1">Equivalent Value</div>
      <div className="text-slate-900 dark:text-white font-bold text-lg">{value}</div>
    </div>
    
    <div className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
             <Check size={12} className="text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
        </div>
      ))}
    </div>

    <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
      <div className="flex gap-2 items-start text-xs text-slate-500 dark:text-slate-400">
        <Info size={14} className="mt-0.5 flex-shrink-0 text-slate-400" />
        <span><strong className="text-slate-700 dark:text-slate-300">Perfect for:</strong> {perfectFor}</span>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Start simple. <span className="text-blue-600 dark:text-blue-400">Automated Appointment Booking</span> Packages that Scale.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Each tier includes everything from the previous level. No features held hostage. No surprise fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <TierCard 
            tierName="TIER 1"
            title="Never Miss a Lead"
            description="Your 24/7 receptionist that answers, qualifies, and books."
            value="$52,000/year (cost of one receptionist)"
            perfectFor="Solo practitioners and small teams who need calls answered but handle their own follow-up processes."
            features={[
              "Unlimited inbound calls answered",
              "SMS and email response automation",
              "Calendar booking across all your systems",
              "Basic CRM integration (contact creation, notes)",
              "Call recording and transcripts",
              "Email and chat support"
            ]}
          />
          
          <TierCard 
            tierName="TIER 2"
            title="Smart Automation"
            description="Add custom training for your exact processes."
            value="$78,000/year (receptionist + intake specialist)"
            perfectFor="Growing practices with specific intake requirements and established processes they need Piper to follow exactly."
            isPopular={true}
            features={[
              "Everything in Tier 1",
              "Custom AI training on your business knowledge",
              "Advanced conversation flows for complex scenarios",
              "Multi-step follow-up sequences",
              "Custom integrations with your existing tools",
              "Priority phone support",
              "Monthly performance reviews"
            ]}
          />
          
          <TierCard 
            tierName="TIER 3"
            title="Full Command"
            description="Complete CRM integration and workflow automation."
            value="$156,000/year (two employees + software stack)"
            perfectFor="Established firms ready to automate their entire front office and scale without adding headcount."
            features={[
              "Everything in Tiers 1 & 2",
              "Full CRM read/write access across all fields",
              "Custom workflow automation (trigger emails, tasks, updates)",
              "API access for your developers",
              "Dedicated account manager",
              "White-glove onboarding with strategy session",
              "Quarterly business reviews"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;