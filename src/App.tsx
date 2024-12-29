import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { About } from './components/home/About';
import { Executives } from './components/home/Executives';
import { Contact } from './components/home/Contact';
import { Donate } from './components/home/Donate';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Executives />
        <Contact />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
export default App;