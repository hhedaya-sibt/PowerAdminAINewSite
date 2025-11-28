import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-slate-900 dark:text-white pr-8">{question}</span>
        {isOpen ? (
          <Minus className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
        ) : (
          <Plus className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know about our <span className="text-blue-600 dark:text-blue-400">AI receptionist</span> and voice agent services.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
          <FAQItem 
            question="How much does an AI receptionist cost?" 
            answer="PowerAdminAI's packages offer the value of a $52,000/year employee for a fraction of the cost. Our 'Never Miss a Lead' tier handles unlimited calls, qualification, and booking starting at a simple monthly rate with no setup fees." 
          />
          <FAQItem 
            question="Can AI really book appointments automatically?" 
            answer="Yes. Piper acts as an automated appointment booking system that syncs directly with Google Calendar, Outlook, and Calendly. It checks your real-time availability and books slots for clients instantly during the conversation." 
          />
          <FAQItem 
            question="Does the AI voice agent sound robotic?" 
            answer="No. We use advanced voice synthesis technology that includes natural pauses, fillers (like 'um' and 'uh'), and proper intonation. Most callers cannot distinguish our AI phone answering service from a human receptionist." 
          />
          <FAQItem 
            question="What happens if the AI doesn't know the answer?" 
            answer="We train your voice agent on your specific business knowledge base. If a caller asks a complex question outside of its training, the AI can take a message, escalate the call to a human staff member, or promise a follow-up, ensuring no lead is ever mishandled." 
          />
          <FAQItem 
            question="Is this HIPAA compliant for medical practices?" 
            answer="Yes, our AI voice agent software is built with security and compliance in mind. We can configure specific workflows to ensure patient data handling meets HIPAA standards for medical practices and clinics." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;