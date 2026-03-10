import Script from "next/script";
import { jsonLd } from "./json-ld";

export default function JsonLdSchema() {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
