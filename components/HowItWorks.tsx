import React from 'react';
import { PhoneCall, MessageSquare, Mail, CalendarCheck, Database, BarChart3 } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800">
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Your AI employee that works while you sleep
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Piper is a voice agent platform that handles the first conversation with every prospect. It doesn't just answer the phone. It qualifies, books, follows up, and hands you a warm lead ready to close.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureItem
            icon={PhoneCall}
            title="Voice Calls"
            description="Your callers won't know they're talking to AI. Piper handles objections, answers questions, and books appointments like your best employee, every single time. No scripts that sound robotic. No &quot;press 1 for sales.&quot; Just natural conversation that converts."
          />
          <FeatureItem
            icon={MessageSquare}
            title="SMS"
            description="Text back in 60 seconds, not 6 hours. Piper reads incoming messages, responds with your exact tone, and keeps the conversation moving until they book or buy. Works across all major carriers with built-in deliverability through Send It By Text."
          />
          <FeatureItem
            icon={Mail}
            title="Email"
            description="Stop letting qualified leads sit in your inbox for days. Piper reads, categorizes, and responds to inquiries using your knowledge base. Sends follow-ups on your schedule. Manages campaigns without you touching the keyboard."
          />
          <FeatureItem
            icon={CalendarCheck}
            title="Calendar"
            description="No more back-and-forth about availability. Piper checks your calendar in real time, offers open slots, books the appointment, and sends confirmation with reminders. Syncs with Google Calendar, Outlook, and Calendly."
          />
          <FeatureItem
            icon={Database}
            title="CRM Integration"
            description="Every conversation updates your CRM automatically. New lead? Created. Appointment booked? Logged. Follow-up needed? Scheduled. Your database stays clean without manual data entry or expensive integrations."
          />
          <FeatureItem
            icon={BarChart3}
            title="Analytics"
            description="See exactly what's working. Call duration, conversion rates, common objections, peak call times. Track which marketing channels send the best leads. Make decisions based on data, not guesses."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;