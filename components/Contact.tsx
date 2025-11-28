import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

// INSTRUCTIONS:
// 1. Go to https://formspree.io/ and create a free account.
// 2. Create a new form and copy the endpoint URL they give you.
// 3. Paste it inside the quotes below. e.g. "https://formspree.io/f/xyza..."
const FORM_ENDPOINT = "https://formspree.io/f/xrbwljwo"; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    painPoint: 'Missed Calls'
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // If no endpoint is set, simulate a success after 1 second (for demo purposes)
    if (!FORM_ENDPOINT) {
      console.warn("No FORM_ENDPOINT set in Contact.tsx. Simulating success.");
      setTimeout(() => {
        setStatus('success');
      }, 1000);
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', painPoint: 'Missed Calls' });
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Still have questions about our <span className="text-blue-600 dark:text-blue-400">AI Receptionist</span>?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              We prefer you call the demo number to experience the tech, but if you want to discuss a specific enterprise use case, let's talk.
            </p>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
              <h4 className="text-slate-900 dark:text-white font-bold mb-2">Ideal For:</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                <li>• Personal Injury Law Firms</li>
                <li>• Medical Practices & Clinics</li>
                <li>• High-Volume Call Centers</li>
                <li>• Professional Services</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden transition-colors duration-300">
             {status === 'success' ? (
               <div className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-600 dark:text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Request Received</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Thank you, {formData.name}. We'll be in touch shortly to discuss how we can automate your workflow.
                  </p>
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', phone: '', painPoint: 'Missed Calls' });
                    }}
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Send another request
                  </button>
               </div>
             ) : (
              <form onSubmit={handleSubmit} className="p-8">
                 {status === 'error' && (
                   <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                     <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={18} />
                     <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                   </div>
                 )}

                 <div className="space-y-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Full Name</label>
                     <input 
                       type="text" 
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                       placeholder="John Doe"
                       required
                     />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Email</label>
                       <input 
                         type="email" 
                         id="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                         placeholder="john@company.com"
                         required
                       />
                     </div>
                     <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Phone</label>
                       <input 
                         type="tel" 
                         id="phone"
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                         placeholder="(555) 000-0000"
                       />
                     </div>
                   </div>

                   <div>
                     <label htmlFor="painPoint" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Primary Pain Point</label>
                     <select 
                       id="painPoint"
                       name="painPoint"
                       value={formData.painPoint}
                       onChange={handleChange}
                       className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                     >
                       <option>Missed After-Hours Calls</option>
                       <option>Outbound Lead Reactivation</option>
                       <option>Appointment Scheduling</option>
                       <option>Document Signing/Workflow</option>
                     </select>
                   </div>

                   <button 
                     type="submit" 
                     disabled={status === 'submitting'}
                     className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {status === 'submitting' ? (
                       <>
                         <Loader2 size={18} className="animate-spin" />
                         Sending...
                       </>
                     ) : (
                       <>
                         Request Consultation <Send size={18} />
                       </>
                     )}
                   </button>
                 </div>
              </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;