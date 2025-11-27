import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    painPoint: 'Missed Calls'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the data to a backend here.
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-slate-400 mb-8">
              We prefer you call the demo number to experience the tech, but if you want to discuss a specific enterprise use case, let's talk.
            </p>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h4 className="text-white font-bold mb-2">Ideal For:</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Personal Injury Law Firms</li>
                <li>• Medical Practices & Clinics</li>
                <li>• High-Volume Call Centers</li>
                <li>• Professional Services</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
             {isSubmitted ? (
               <div className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
                  <p className="text-slate-400 mb-6">
                    Thank you, {formData.name}. We'll be in touch shortly to discuss how we can automate your workflow.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', painPoint: 'Missed Calls' });
                    }}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Send another request
                  </button>
               </div>
             ) : (
              <form onSubmit={handleSubmit} className="p-8">
                 <div className="space-y-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                     <input 
                       type="text" 
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                       placeholder="John Doe"
                       required
                     />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                       <input 
                         type="email" 
                         id="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                         placeholder="john@company.com"
                         required
                       />
                     </div>
                     <div>
                       <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                       <input 
                         type="tel" 
                         id="phone"
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                         placeholder="(555) 000-0000"
                       />
                     </div>
                   </div>

                   <div>
                     <label htmlFor="painPoint" className="block text-sm font-medium text-slate-400 mb-2">Primary Pain Point</label>
                     <select 
                       id="painPoint"
                       name="painPoint"
                       value={formData.painPoint}
                       onChange={handleChange}
                       className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                     >
                       <option>Missed After-Hours Calls</option>
                       <option>Outbound Lead Reactivation</option>
                       <option>Appointment Scheduling</option>
                       <option>Document Signing/Workflow</option>
                     </select>
                   </div>

                   <button 
                     type="submit" 
                     className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all"
                   >
                     Request Consultation <Send size={18} />
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