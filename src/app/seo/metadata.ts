import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Micro Worker Indonesia - Connect. Work. Grow.",
    template: "%s | Micro Worker Indonesia"
  },
  description: "Platform micro worker Indonesia yang mempertemukan employer dengan talenta terbaik. Temukan pekerjaan fleksibel atau worker berkualitas untuk campaign Anda.",
  keywords: [
    "micro worker",
    "microworker",
    "platform micro worker",
    "freelancer Indonesia",
    "pekerjaan fleksibel",
    "remote work Indonesia",
    "talent platform",
    "campaign management",
    "digital workforce",
    "sistem pengelolaan pekerjaan"
  ],
  authors: [{ name: "Micro Worker Indonesia" }],
  creator: "Micro Worker Indonesia",
  publisher: "Micro Worker Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://microworker.my.id",
    siteName: "Micro Worker Indonesia",
    title: "Micro Worker Indonesia - Connect. Work. Grow.",
    description: "Platform micro worker Indonesia yang mempertemukan employer dengan talenta terbaik. Temukan pekerjaan fleksibel atau worker berkualitas untuk campaign Anda.",
    images: [
      {
        url: "/images/logo-og.png",
        width: 1200,
        height: 630,
        alt: "Micro Worker Indonesia - Platform micro worker terpercaya"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@microworkerid",
    creator: "@microworkerid",
    title: "Micro Worker Indonesia - Connect. Work. Grow.",
    description: "Platform micro worker Indonesia yang mempertemukan employer dengan talenta terbaik.",
    images: ["/images/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE"
  },
  category: "technology"
};
