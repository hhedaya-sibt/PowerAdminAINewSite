import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import OutboundDiff from './components/OutboundDiff';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <OutboundDiff />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;