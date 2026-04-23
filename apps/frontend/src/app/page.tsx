import { Navbar } from '@/components/la-tuki/Navbar';
import { Hero } from '@/components/la-tuki/Hero';
import { EventSection } from '@/components/la-tuki/EventSection';
import { Testimonials } from '@/components/la-tuki/Testimonials';
import { Manifiesto } from '@/components/la-tuki/Manifiesto';
import { Marquee } from '@/components/la-tuki/Marquee';
import { Playlist } from '@/components/la-tuki/Playlist';
import { Team } from '@/components/la-tuki/Team';
import { FAQ } from '@/components/la-tuki/FAQ';
import { Contact } from '@/components/la-tuki/Contact';
import { Footer } from '@/components/la-tuki/Footer';

export default function Home() {
  return (
    <div className="bg-background-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <EventSection />
        {/* <Testimonials /> */}
        <Manifiesto />
        <Marquee />
        <Playlist />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
