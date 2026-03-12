import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Achievements from '../components/About/Achievements';
import CallToAction from '../components/shared/CallToAction';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Samburu Elderly Support Initiative</title>
        <meta name="description" content="Learn about the Samburu Elderly Support Initiative — our mission, vision, achievements and board of management." />
      </Head>

      <Header />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-sep">›</span>
              <span>About Us</span>
            </div>
            <h1>About Our Organization</h1>
            <p>A registered community-based organization serving vulnerable elderly persons across Samburu County since 2023.</p>
          </div>
        </div>
      </div>

      <main>
        <About />
        <Achievements />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
