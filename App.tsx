import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sprint } from './components/Sprint';
import { Services } from './components/Services';
import { USP } from './components/USP';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="antialiased text-[#1D1D1F] bg-[#FAFAFA] selection:bg-[#007AFF] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Sprint />
        <USP />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;