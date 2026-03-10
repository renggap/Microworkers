import { Organization, WebSite, Offer } from "schema-dts";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://microworker.my.id/#organization",
      name: "Micro Worker Indonesia",
      url: "https://microworker.my.id",
      logo: {
        "@type": "ImageObject",
        url: "https://microworker.my.id/images/logo.png",
        width: 512,
        height: 512
      },
      sameAs: [
        "https://twitter.com/microworkerid",
        "https://linkedin.com/company/microworker-indonesia",
        "https://facebook.com/microworkerindonesia",
        "https://instagram.com/microworkerid"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-21-XXXXXXXX",
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"]
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
        addressRegion: "Jakarta",
        addressLocality: "Jakarta Pusat"
      },
      foundingDate: "2025",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://microworker.my.id/#website",
      url: "https://microworker.my.id",
      name: "Micro Worker Indonesia",
      description: "Platform micro worker Indonesia yang mempertemukan employer dengan talenta terbaik.",
      publisher: {
        "@id": "https://microworker.my.id/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://microworker.my.id/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      inLanguage: ["id", "en"]
    },
    {
      "@type": "Offer",
      "@id": "https://microworker.my.id/#offer",
      name: "Micro Worker Platform Services",
      description: "Platform yang menghubungkan employer dengan worker untuk berbagai jenis tugas dan campaign. Layanan termasuk pengelolaan proyek, sistem pembayaran, dan rating worker.",
      price: "0",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      businessFunction: "https://schema.org/FindEmployment",
      areaServed: {
        "@type": "Country",
        name: "Indonesia"
      },
      seller: {
        "@id": "https://microworker.my.id/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://microworker.my.id/#service",
      name: "Micro Worker Platform",
      description: "Layanan platform micro worker untuk employer dan worker di Indonesia. Temukan talenta terbaik atau cari pekerjaan fleksibel.",
      provider: {
        "@id": "https://microworker.my.id/#organization"
      },
      areaServed: {
        "@type": "Country",
        name: "Indonesia"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Platform",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Untuk Employer",
              description: "Post campaign, pilih worker, track progress, bayar setelah approve"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Untuk Worker",
              description: "Browse task, apply, kerjakan, dapat pembayaran"
            }
          }
        ]
      }
    }
  ]
} as const;

export type JsonLd = typeof jsonLd;
