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
        {/* Primary SEO */}
        <title>
          Samburu Elderly Support Initiative | Supporting Elderly in Samburu
          County Kenya
        </title>

        <meta
          name="description"
          content="Samburu Elderly Support Initiative is a registered community-based organization in Maralal, Samburu County, Kenya supporting vulnerable nomadic elderly persons with food distribution, healthcare, water access, and community support programs."
        />

        <meta
          name="keywords"
          content="Samburu Elderly Support Initiative, Samburu elderly initiative, NGO Samburu Kenya, elderly support Kenya, Maralal elderly support, Samburu County elderly help, charity for elderly Kenya, community based organization Samburu, helping elderly in Samburu"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Samburu Elderly Support Initiative" />

        {/* Geo SEO */}
        <meta name="geo.region" content="KE-41" />
        <meta name="geo.placename" content="Maralal, Samburu County, Kenya" />
        <meta name="geo.position" content="1.0968;36.6980" />
        <meta name="ICBM" content="1.0968, 36.6980" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://samburuelderlysupport.org"
        />

        {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Samburu Elderly Support Initiative | Maralal Kenya"
        />
        <meta
          property="og:description"
          content="Supporting vulnerable elderly persons in Samburu County through food distribution, healthcare support, water access, and community inclusion."
        />
        <meta
          property="og:url"
          content="https://samburuelderlysupport.org"
        />
        <meta
          property="og:image"
          content="https://samburuelderlysupport.org/images/elderly-banner.jpg"
        />
        <meta property="og:site_name" content="Samburu Elderly Support Initiative" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Samburu Elderly Support Initiative"
        />
        <meta
          name="twitter:description"
          content="A community-based organization supporting vulnerable elderly persons across Samburu County, Kenya."
        />
        <meta
          name="twitter:image"
          content="https://samburuelderlysupport.org/images/elderly-banner.jpg"
        />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Samburu Elderly Support Initiative",
              "url": "https://samburuelderlysupport.org",
              "logo": "https://samburuelderlysupport.org/images/logo.png",
              "description":
                "A community-based organization serving vulnerable elderly persons across Samburu County since 2023.",
              "foundingDate": "2023",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "P.O Box 60-20600",
                "addressLocality": "Maralal",
                "addressRegion": "Samburu County",
                "addressCountry": "Kenya"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254719775166",
                "contactType": "customer support"
              },
              "sameAs": [
                "https://facebook.com",
                "https://twitter.com",
                "https://instagram.com"
              ]
            })
          }}
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