import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DonateForm, { DonateImpact } from '../components/Donate/Donate';

export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Donate | Samburu Elderly Support Initiative</title>
        <meta name="description" content="Support the elderly of Samburu County. Donate via M-PESA, bank card, or bank transfer." />
      </Head>

      <Header />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-sep">›</span>
              <span>Donate</span>
            </div>
            <h1>Make a Donation</h1>
            <p>Your generosity directly supports vulnerable elderly persons in Samburu County. Every amount counts.</p>
          </div>
        </div>
      </div>

      <div className="donate-page" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="donate-layout">
            <DonateForm />
            <DonateImpact />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
