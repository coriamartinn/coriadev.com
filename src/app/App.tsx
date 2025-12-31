import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <Contact />
    </div>
  );
}