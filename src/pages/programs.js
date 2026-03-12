import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Programs from '../components/Programs/Programs';
import CallToAction from '../components/shared/CallToAction';

export default function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Programs | Samburu Elderly Support Initiative</title>
        <meta name="description" content="Our programs include medical care, food distribution, water access, social inclusion, livelihood support, and spiritual care for the elderly." />
      </Head>

      <Header />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-sep">›</span>
              <span>Programs</span>
            </div>
            <h1>Our Programs</h1>
            <p>Comprehensive programs addressing every dimension of elderly wellbeing in Samburu County.</p>
          </div>
        </div>
      </div>

      <main>
        <Programs />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
