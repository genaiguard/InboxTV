import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, DollarSign, Mail, CreditCard, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { StaggeredAnimation } from "@/components/ui/staggered-animation"

export const metadata: Metadata = {
  description: 'A Chrome extension that shows $ icons next to emails from customers who have paid you money via Stripe, helping you identify and prioritize important emails from paying customers.',
}

// JSON-LD structured data for enhanced SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Inbox Transaction Viewer",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Chrome",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A Chrome extension that shows $ icons next to emails from customers who have paid you money via Stripe.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "124"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <Mail className="h-5 w-5 text-primary" />
              <span>Inbox Transaction Viewer</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="#download" className="text-sm font-medium hover:text-primary">
                Download
              </Link>
              <Link href="#instructions" className="text-sm font-medium hover:text-primary">
                Instructions
              </Link>
              <Link href="#faq" className="text-sm font-medium hover:text-primary">
                FAQ
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary">
                Blog
              </Link>
              <Link href="/privacy" className="text-sm font-medium hover:text-primary">
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

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white w-full">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <ScrollAnimation direction="left">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Inbox Transaction Viewer
                      </h1>
                      <p className="text-muted-foreground md:text-xl">
                        A Chrome extension that displays your Stripe customer information beside their emails in Gmail.*
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Button size="lg" asChild>
                        <Link href="https://chromewebstore.google.com/detail/inboxtransactionviewer/mailfnnagpmjbhpajaccjnhecaccceak?hl=en&authuser=0">Add to Chrome</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="#welcome">Learn More</Link>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground" style={{ fontSize: '0.75rem' }}>
                      * Independently developed and not affiliated with or endorsed by Stripe©, Inc. Uses official Stripe
                      API&apos;s.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="right">
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-full lg:max-w-[800px] overflow-hidden rounded-xl transparent-container">
                      <img
                        src="/assets/images/image01.png"
                        alt="Inbox Transaction Viewer in Gmail"
                        className="w-full h-auto transparent-image"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <section id="welcome" className="py-12 md:py-16 bg-background w-full">
            <div className="container px-4 md:px-6 text-center max-w-7xl mx-auto">
              <ScrollAnimation direction="up">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Welcome to Inbox Transaction Viewer</h2>
                <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                  Streamline your Gmail with Inbox Transaction Viewer, a Chrome extension that integrates Stripe data for
                  quick visibility to customer lifetime value, subscription details, recent transactions, and direct
                  dashboard navigation—all within your Gmail interface.
                </p>
                <div className="flex justify-center mt-8">
                  <img 
                    src="/assets/images/image05.png" 
                    alt="Stripe API Key Setup" 
                    className="max-w-full h-auto transparent-image" 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 md:py-16 bg-gray-50 w-full">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <ScrollAnimation direction="up">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Key Features</h2>
                  <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
                    Our extension provides powerful features to enhance your Gmail experience with Stripe data.
                  </p>
                  <div className="flex justify-center my-8">
                    <img 
                      src="/assets/images/image06.png" 
                      alt="Inbox Transaction Viewer Features" 
                      className="w-full max-w-full transparent-image" 
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </ScrollAnimation>
              </div>
              <StaggeredAnimation className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Paying Customer Emails Stand Out</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Emails from active Stripe customers displayed with a $ icon for quick recognition in your inbox.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">MRR and Total Spend</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Instantly view the Monthly Recurring Revenue (MRR) and Total Spend of customers as you communicate,
                    enabling informed interactions.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Active Subscriptions</h3>
                  </div>
                  <p className="text-muted-foreground">
                    See what the customer has subscribed to, without leaving your inbox.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">One Time Purchases</h3>
                  </div>
                  <p className="text-muted-foreground">See the purchased the customer has made.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Invoices</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Review the latest invoices for a comprehensive understanding of customer engagement.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ExternalLink className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">"View on Stripe" Button</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Navigate directly to clients stripe account to action on the email.
                  </p>
                </div>
              </StaggeredAnimation>
            </div>
          </section>

          {/* Info Panel Section */}
          <section className="py-12 md:py-16 bg-white w-full">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <ScrollAnimation direction="left">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">Info Panel</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p>
                          <span className="font-medium">MRR and Total Spend:</span> Instantly view the Monthly Recurring
                          Revenue (MRR) and Total Spend of customers as you communicate.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Active Subscriptions:</span> See what the customer has subscribed
                          to, without leaving your inbox.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p>
                          <span className="font-medium">One Time Purchases:</span> See the purchased the customer has made.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p>
                          <span className="font-medium">Invoices:</span> Review the latest invoices for a comprehensive
                          understanding of customer engagement.
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p>
                          <span className="font-medium">"View on Stripe" Button:</span> Navigate directly to clients stripe
                          account to action on the email.
                        </p>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="right">
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-xl overflow-hidden transparent-container">
                      <img
                        src="/assets/images/image04.png"
                        alt="Inbox Transaction Viewer Info Panel"
                        className="w-full h-full transparent-image"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Get Started Section */}
          <section id="download" className="py-12 md:py-16 bg-blue-50 w-full scroll-mt-20">
            <div className="container px-4 md:px-6 text-center max-w-7xl mx-auto">
              <ScrollAnimation direction="up">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Get started</h2>
                <div className="max-w-md mx-auto">
                  <Button size="lg" className="w-full mb-4" asChild>
                    <Link href="https://chromewebstore.google.com/detail/inboxtransactionviewer/mailfnnagpmjbhpajaccjnhecaccceak?hl=en&authuser=0">
                      Install from Chrome Web Store
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Instructions Section */}
          <section id="instructions" className="py-12 md:py-16 bg-gray-100 w-full scroll-mt-20">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <div className="text-center">
                <ScrollAnimation direction="up">
                  <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Instructions</h2>
                </ScrollAnimation>
                <div className="max-w-3xl mx-auto space-y-6">
                  <StaggeredAnimation>
                    <div className="instruction-box" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', marginBottom: '1.5rem' }}>
                      <p className="text-lg">
                        <span className="font-bold">1. Go to:</span>{" "}
                        <a href="https://dashboard.stripe.com/apikeys" className="text-purple-600 hover:underline">
                          https://dashboard.stripe.com/apikeys
                        </a>
                      </p>
                    </div>

                    <div className="instruction-box" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', marginBottom: '1.5rem' }}>
                      <p className="text-lg">
                        <span className="font-bold">2. Click on Create restricted key</span>
                      </p>
                    </div>

                    <div className="instruction-box" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', marginBottom: '1.5rem' }}>
                      <p className="text-lg">
                        <span className="font-bold">3. Check the boxes to provide read access to:</span>
                      </p>
                      <ul className="mt-4 space-y-2 ml-6">
                        <li className="flex items-center">
                          <span className="mr-2 text-lg">•</span>
                          <span>Charges</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-lg">•</span>
                          <span>Customers</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-lg">•</span>
                          <span>Invoices</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-lg">•</span>
                          <span>Subscriptions</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2 text-lg">•</span>
                          <span>Cards</span>
                        </li>
                      </ul>
                    </div>

                    <div className="instruction-box" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', marginBottom: '1.5rem' }}>
                      <p className="text-lg">
                        <span className="font-bold">4. Click on Create key</span>
                      </p>
                    </div>

                    <div className="instruction-box" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', marginBottom: '1.5rem' }}>
                      <p className="text-lg">
                        <span className="font-bold">5. Copy the key and paste it in your chrome extension.</span>
                      </p>
                    </div>
                  </StaggeredAnimation>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-12 md:py-16 bg-gray-50 w-full scroll-mt-20">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <ScrollAnimation direction="up">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Frequently Asked Questions</h2>
              </ScrollAnimation>
              <div className="max-w-3xl mx-auto">
                <ScrollAnimation direction="up" delay={0.2}>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I get started with Inbox Transaction Viewer?</AccordionTrigger>
                      <AccordionContent>
                        Simply download the extension from the Chrome Web Store, generate a restricted API key from your
                        Stripe dashboard, and enter it into the extension.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What information can Inbox Transaction Viewer display?</AccordionTrigger>
                      <AccordionContent>
                        The extension displays customer lifetime value, product/subscription details, recent transactions,
                        and provides direct dashboard access.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is Inbox Transaction Viewer secure?</AccordionTrigger>
                      <AccordionContent>
                        Yes. Inbox Transaction Viewer securely pulls information directly through the Stripe API without
                        passing any data through our servers. We operate without backend servers, ensuring that your Stripe
                        data remains between you and Stripe only, for enhanced security and privacy.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How can I provide feedback or report a bug?</AccordionTrigger>
                      <AccordionContent>Use the contact form to send us your feedback or report issues.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I use Inbox Transaction Viewer with multiple Stripe accounts?</AccordionTrigger>
                      <AccordionContent>
                        Currently, Inbox Transaction Viewer is designed to work with one Stripe account at a time. You'll
                        need to switch API keys in the extension to change accounts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        Will using Inbox Transaction Viewer affect my Gmail or Stripe account's performance?
                      </AccordionTrigger>
                      <AccordionContent>
                        No, Inbox Transaction Viewer operates efficiently without significantly impacting the performance of
                        your Gmail or Stripe account.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-16 bg-white w-full scroll-mt-20">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <ScrollAnimation direction="up">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Contact</h2>
                <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Provide feedback, ask questions, or report bugs.
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="px-8" 
                    asChild
                  >
                    <Link href="mailto:info@inboxtransactionviewer.com?subject=Inbox Transaction Viewer Inquiry">
                      <Mail className="mr-2 h-5 w-5" /> 
                      Contact via Email
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>
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
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#download" className="text-sm text-muted-foreground hover:text-primary">
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link href="#instructions" className="text-sm text-muted-foreground hover:text-primary">
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
    </>
  )
}

