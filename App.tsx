import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import OutboundDiff from './components/OutboundDiff';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Services />
        <Differentiators />
        <OutboundDiff />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;