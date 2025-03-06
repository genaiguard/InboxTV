import Link from "next/link"
import { ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Inbox Transaction Viewer',
  description: 'Privacy policy for the Inbox Transaction Viewer Chrome extension, detailing how we handle your data and privacy.',
  openGraph: {
    title: 'Privacy Policy | Inbox Transaction Viewer',
    description: 'Privacy policy for the Inbox Transaction Viewer Chrome extension, detailing how we handle your data and privacy.',
    url: 'https://inboxtransactionviewer.com/privacy',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Privacy Policy | Inbox Transaction Viewer',
    description: 'Privacy policy for the Inbox Transaction Viewer Chrome extension, detailing how we handle your data and privacy.',
    images: ['/og-image.png'],
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 font-semibold">
            <Mail className="h-5 w-5 text-primary" />
            <span>Inbox Transaction Viewer</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/#download" className="text-sm font-medium hover:text-primary">
              Download
            </Link>
            <Link href="/#instructions" className="text-sm font-medium hover:text-primary">
              Instructions
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-primary">
              Privacy
            </Link>
          </nav>
          <Button asChild>
            <Link href="https://chromewebstore.google.com/detail/inboxtransactionviewer/mailfnnagpmjbhpajaccjnhecaccceak?hl=en&authuser=0">
              Add to Chrome
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none">
              <p className="mb-6">
                Thank you for using Inbox Transaction Viewer ("the Extension"). Your privacy is crucial to us, 
                and this Privacy Policy details how we handle your data when you use our Chrome extension.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                The Extension collects and processes the following types of information locally on your device:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Stripe Financial Data:</strong> Transaction data, customer lifetime value, subscription details, 
                  and related financial information from Stripe to provide insights directly within your Gmail interface.
                </li>
                <li>
                  <strong>Email Information:</strong> Information related to customer emails to provide transaction 
                  overlays and customer insights.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Information</h2>
              <p className="mb-4">
                The Extension securely processes data locally on your machine to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Offer seamless integration of Stripe financial data within Gmail.</li>
                <li>Help users quickly access their Stripe dashboard directly from within Gmail.</li>
                <li>Enhance productivity with immediate financial insights.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-6">
                The Extension leverages direct API calls to Stripe, ensuring that all data remains between you and Stripe. 
                Data is not transmitted externally, and we do not share any collected information with third parties.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
              <p className="mb-4">
                Security is integral to the Extension's design, as it uses robust encryption and follows stringent 
                data protection standards:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All financial data remains local, ensuring your information is not exposed to intermediary servers.</li>
                <li>The extension is built to minimize data exposure risks and uphold privacy.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Control and Data Retention</h2>
              <p className="mb-4">
                Users have full control over the Extension:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You can disable the Extension or revoke its permissions at any time.</li>
                <li>All data processed by the Extension remains on your device and can be removed by uninstalling the Extension.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to the Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy occasionally to reflect changes in our practices. If we make significant changes, 
                we will notify you by updating the "Last Updated" date or through other means as appropriate.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or the Extension, please contact us at:{" "}
                <a href="mailto:info@inboxtransactionviewer.com" className="text-primary hover:underline">
                  info@inboxtransactionviewer.com
                </a>
              </p>
              
              <hr className="my-10 border-gray-200" />
              
              <p className="mb-6">
                We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website 
                through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website 
                usage data is captured using first and third-party cookies and other tracking technologies to determine the 
                popularity of products/services and online activity. Additionally, we use this information for site optimization, 
                fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, 
                visit the Microsoft Privacy Statement.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-12 md:py-16 bg-gray-100 w-full">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>Inbox Transaction Viewer</span>
              </div>
              <p className="text-sm text-muted-foreground">© 2024 inboxtransactionviewer. All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="text-sm text-muted-foreground hover:text-primary">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/#instructions" className="text-sm text-muted-foreground hover:text-primary">
                    Instructions
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-xs text-muted-foreground mb-3" style={{ fontSize: '0.75rem' }}>
              Inbox Transaction Viewer is an independent extension and is not endorsed, certified. Google LLC, Stripe, Inc., or any of their affiliates. "Chrome", "Gmail", and "Stripe" are registered trademarks of their respective owners. Use of these names, trademarks, and brands does not imply endorsement by their respective holders.
            </p>
            <p className="text-xs text-muted-foreground" style={{ fontSize: '0.75rem' }}>
              We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data. Our privacy statement has more details.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 