import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Inbox Transaction Viewer | See Stripe Customers in Gmail',
  description: 'Inbox Transaction Viewer is a Chrome extension that helps you identify emails from paying Stripe customers in your Gmail inbox, improving customer service and productivity.',
  metadataBase: new URL('https://inboxtransactionviewer.com'),
  keywords: ['gmail extension', 'stripe integration', 'customer service', 'email productivity', 'transaction viewer'],
  authors: [{ name: 'Inbox Transaction Viewer Team' }],
  creator: 'Inbox Transaction Viewer',
  publisher: 'Inbox Transaction Viewer',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://inboxtransactionviewer.com',
    title: 'Inbox Transaction Viewer | See Stripe Customers in Gmail',
    description: 'Identify your paying Stripe customers directly in Gmail. Improve customer service and prioritize important emails.',
    siteName: 'Inbox Transaction Viewer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inbox Transaction Viewer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbox Transaction Viewer | See Stripe Customers in Gmail',
    description: 'Identify your paying Stripe customers directly in Gmail. Improve customer service and prioritize important emails.',
    images: ['/og-image.png'],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://inboxtransactionviewer.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/mail-icon.svg" />
        <link rel="apple-touch-icon" href="/mail-icon-large.svg" />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "m9cvuprzdq");
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8CDC4BNWDF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8CDC4BNWDF');
          `}
        </Script>
        <Script id="fix-styles" strategy="beforeInteractive">
          {`
            (function() {
              // Add preconnect for Google Fonts
              var link = document.createElement('link');
              link.rel = 'preconnect';
              link.href = 'https://fonts.googleapis.com';
              document.head.appendChild(link);
              
              var link2 = document.createElement('link');
              link2.rel = 'preconnect';
              link2.href = 'https://fonts.gstatic.com';
              link2.crossOrigin = 'anonymous';
              document.head.appendChild(link2);
              
              // Add critical CSS inline
              var style = document.createElement('style');
              style.innerHTML = \`
                body {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #111;
                  background-color: #fff;
                  font-size: 1.05rem;
                  line-height: 1.6;
                }
                
                .transparent-container {
                  background-color: rgba(255, 255, 255, 0.8);
                  backdrop-filter: blur(10px);
                  -webkit-backdrop-filter: blur(10px);
                  border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .transparent-image {
                  max-width: 100%;
                  height: auto;
                  display: block;
                }
                
                [class*="rounded-xl"], [class*="rounded-lg"] {
                  overflow: hidden;
                }
                
                img {
                  max-width: 100%;
                  height: auto;
                }
                
                .container {
                  width: 100%;
                  max-width: 1400px;
                  margin: 0 auto;
                  padding: 0 2rem;
                }
                
                header {
                  position: sticky;
                  top: 0;
                  z-index: 50;
                  width: 100%;
                  border-bottom: 1px solid #eee;
                  background-color: rgba(255, 255, 255, 0.95);
                  backdrop-filter: blur(10px);
                  -webkit-backdrop-filter: blur(10px);
                }
                
                .flex { display: flex; }
                .items-center { align-items: center; }
                .justify-between { justify-content: space-between; }
                .justify-center { justify-content: center; }
                .gap-2 { gap: 0.5rem; }
                .gap-4 { gap: 1rem; }
                .gap-6 { gap: 1.5rem; }
                .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
                .font-bold { font-weight: 700; }
                .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
                .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
                .grid { display: grid; }
                .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                .rounded-lg { border-radius: 0.5rem; }
                .border { border: 1px solid #eee; }
                .p-6 { padding: 1.5rem; }
                .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                .bg-background { background-color: #fff; }
                .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
                .font-semibold { font-weight: 600; }
                .text-primary { color: #0070f3; }
                .text-muted-foreground { color: #6b7280; }
                
                @media (max-width: 768px) {
                  .grid-cols-2, .grid-cols-3 {
                    grid-template-columns: 1fr;
                  }
                }
              \`;
              document.head.appendChild(style);
              
              // Force reload CSS if it's not applied correctly
              setTimeout(function() {
                var links = document.querySelectorAll('link[rel="stylesheet"]');
                links.forEach(function(link) {
                  var href = link.getAttribute('href');
                  if (href) {
                    link.setAttribute('href', href + '?t=' + new Date().getTime());
                  }
                });
              }, 500);
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

