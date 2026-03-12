import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Programs from '../components/Programs/Programs';
import Achievements from '../components/About/Achievements';
import Gallery from '../components/Gallery/Gallery';
import CallToAction from '../components/shared/CallToAction';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Samburu Elderly Support Initiative | Maralal, Kenya</title>
        <meta
          name="description"
          content="Samburu Elderly Support Initiative — Supporting vulnerable nomadic elderly persons in Samburu County with food, healthcare, water, and dignity. Donate today."
        />
      </Head>

      <Header />

      <main style={{ paddingTop: '0' }}>
        <Hero />
        <About />
        <Programs />
        <Achievements />
        <Gallery />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
