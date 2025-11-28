import React from 'react';
import { Rocket, Layers, ShieldCheck, Target } from 'lucide-react';

const DifferentiatorCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col gap-4 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-300 dark:hover:border-blue-700">
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Differentiators: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span>Why Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">AI Voice Agent Software</span> Built for Operators, Not IT Departments.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <DifferentiatorCard
            icon={Rocket}
            title="Done-for-you setup in 48 hours"
            description="Not 6 weeks of DIY configuration and integration hell. We build your voice agent, train it on your business, and connect it to your systems. You review, approve, go live."
          />
          <DifferentiatorCard
            icon={Layers}
            title="One platform, not four subscriptions"
            description="Phone + SMS + Email + CRM in one system. No Zapier duct tape. No API gymnastics. No monthly bill from five different SaaS companies."
          />
          <DifferentiatorCard
            icon={ShieldCheck}
            title="Built-in deliverability and e-sign"
            description="Powered by Send It By Text, so your messages actually reach customers. E-signature capability included. No add-ons, no third-party integrations, no deliverability headaches."
          />
          <DifferentiatorCard
            icon={Target}
            title="Small business focus with enterprise features"
            description="We built this for practices and service businesses doing $500K to $5M in revenue. You get the sophisticated automation of enterprise tools without the enterprise complexity or price tag."
          />
        </div>
      </div>
    </section>
  );
};

export default Differentiators;