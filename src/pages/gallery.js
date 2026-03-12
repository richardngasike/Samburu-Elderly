import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import CallToAction from '../components/shared/CallToAction';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Samburu Elderly Support Initiative</title>
        <meta name="description" content="Photos from our community activities, food distributions, water projects, and social events serving elderly persons in Samburu County." />
      </Head>

      <Header />

      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-sep">›</span>
              <span>Gallery</span>
            </div>
            <h1>Photo Gallery</h1>
            <p>Moments of impact — a visual journey through our work with Samburu's elderly community.</p>
          </div>
        </div>
      </div>

      <main>
        <Gallery />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
