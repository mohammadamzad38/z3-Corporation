import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://z3corporation.com"),
  title: "Fire Safety Company in Bangladesh",
  description:
    "Z3 Corporation is the leading Fire Safety, Electrical Safety, Building Safety & Structural Safety consultancy & contractor (supply, installation",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://z3corporation.com",
  },
  openGraph: {
    title: "Z3 Corporation",
    description:
      "Z3 Corporation is the leading Fire Safety, Electrical Safety, Building Safety & Structural Safety consultancy & contractor (supply, installation",
    url: "https://z3corporation.com",
    siteName: "Z3 Corporation",
    images: [
      {
        url: "https://z3corporation.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Z3 Corporation Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@z3corporation",
    title: "Z3 Corporation",
    description:
      "Z3 Corporation is the leading Fire Safety, Electrical Safety, Building Safety & Structural Safety consultancy & contractor (supply, installation",
    images: ["https://z3corporation.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "Z3 Corporation",
      alternateName: "Z3 Corporation",
      url: "https://z3corporation.com/",
      logo: "",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801991198322",
        contactType: "customer service",
        areaServed: "BD",
        availableLanguage: ["en", "Bengali"],
      },
      sameAs: [
        "https://www.facebook.com/Z3CorporationBD/",
        "https://www.linkedin.com/in/z3-corporation-291803b7/",
        "https://x.com/Z3Corporation",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Z3 Corporation",
      url: "https://z3corporation.com/",
      logo: "",
      description:
        "Z3 Corporation is the leading Fire Safety, Electrical Safety, Building Safety & Structural Safety consultancy & contractor (supply, installation",
      sameAs: [
        "https://www.facebook.com/Z3CorporationBD/",
        "https://www.linkedin.com/in/z3-corporation-291803b7/",
        "https://x.com/Z3Corporation",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "11/41, Gulshan-02, Dhaka, Bangladesh",
        addressLocality: "Dhaka",
        postalCode: "1212",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801991198322",
        contactType: "Customer Support",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://z3corporation.com/",
      name: "Z3 Corporation",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://z3corporation.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
