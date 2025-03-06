import Link from "next/link"
import { ChevronRight, Mail, Calendar, User, Tag, ArrowRight, DollarSign, FileText, CreditCard, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inbox Transaction Viewer Blog | Tips & Insights',
  description: 'Tips, insights, and updates about using Inbox Transaction Viewer to maximize your productivity and customer service with Stripe and Gmail integration.',
  openGraph: {
    title: 'Inbox Transaction Viewer Blog | Tips & Insights',
    description: 'Tips, insights, and updates about using Inbox Transaction Viewer to maximize your productivity and customer service with Stripe and Gmail integration.',
    url: 'https://inboxtransactionviewer.com/blog',
    images: [
      {
        url: '/og-blog-image.png',
        width: 1200,
        height: 630,
        alt: 'Inbox Transaction Viewer Blog',
      },
    ],
  },
  twitter: {
    title: 'Inbox Transaction Viewer Blog | Tips & Insights',
    description: 'Tips, insights, and updates about using Inbox Transaction Viewer to maximize your productivity and customer service with Stripe and Gmail integration.',
    images: ['/og-blog-image.png'],
  },
}

export default function BlogPage() {
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
            <Link href="/blog" className="text-sm font-medium text-primary">
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

      <main className="flex-1 py-12 md:py-16">
        <section id="blog-posts" className="py-12 md:py-16 lg:py-20 bg-gray-50 w-full scroll-mt-20">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Inbox Transaction Viewer Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tips, insights, and updates about using Inbox Transaction Viewer to maximize your productivity and customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content - blog posts */}
              <div className="lg:col-span-2 space-y-12">
                {/* Blog Post 1 */}
                <article className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <DollarSign className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold">Identify Paying Customers</h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">May 10, 2024</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>Admin</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Productivity
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Customer Service
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Quickly Identify Emails from Paying Customers with Inbox Transaction Viewer</h2>
                    <p className="text-gray-600 mb-4">
                      For businesses using Stripe, providing excellent customer service is key to retention and growth. However, when you&apos;re getting hundreds of emails per day, it can be difficult to immediately recognize which ones are coming from valuable paying customers or subscribers.
                    </p>
                    <p className="text-gray-600 mb-4">
                      This is where Inbox Transaction Viewer can help. This powerful Chrome extension makes emails from your active Stripe customers unmissable by displaying a clear $ icon right in your Gmail inbox.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">How It Works</h3>
                    <p className="text-gray-600 mb-4">
                      Inbox Transaction Viewer securely fetches a list of your current paying customers based on your connected Stripe account. It then automatically displays a $ icon in the inbox row for any emails received from those customers&apos; email addresses.
                    </p>
                    <p className="text-gray-600 mb-4">
                      At a glance, you can easily pick out emails that should likely take priority since they are from people currently paying for your products or services. No more anxiety about accidentally missing or delaying a response to an important paying customer.
                    </p>
                    <p className="text-gray-600 mb-4">
                      The $ icon is subtle but eye-catching, allowing you to quickly scan your inbox and focus on high-priority conversations without heavy use of labels, filters or complex rules.
                    </p>
                  </div>
                </article>

                {/* Blog Post 2 */}
                <article className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <FileText className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold">Boost Your Email Productivity</h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">May 8, 2024</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>Admin</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Productivity
                      </span>
                      <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Gmail
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Boost Your Email Productivity with Inbox Transaction Viewer</h2>
                    <p className="text-gray-600 mb-4">
                      In the hustle of modern business, time is gold. Merging Stripe and Gmail, Inbox Transaction Viewer emerges as a game-changer for productivity. This Chrome extension ensures that every minute spent in your inbox contributes to your business&apos;s growth, by bringing Stripe&apos;s financial insights into Gmail. 
                    </p>
                    <p className="text-gray-600 mb-4">
                      Imagine replying to a customer and having their transaction history, subscription details, and payment statuses at your fingertips. Inbox Transaction Viewer not only saves clicks and tabs but equips you with the knowledge to make every email interaction more meaningful and productive.
                    </p>
                  </div>
                </article>

                {/* Blog Post 3 */}
                <article className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <CreditCard className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold">Business Efficiency</h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">May 5, 2024</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>Admin</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Business
                      </span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Efficiency
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Maximizing Business Efficiency with Inbox Transaction Viewer</h2>
                    <p className="text-gray-600 mb-4">
                      In today&apos;s fast-paced business environment, efficiency is key. Many businesses leverage Stripe for payment processing and Gmail for communication, but juggling between these platforms can be a hassle. Enter Inbox Transaction Viewer, a Chrome extension that bridges this gap by bringing Stripe&apos;s financial data directly into your Gmail inbox.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Streamlining Your Workflow</h3>
                    <p className="text-gray-600 mb-4">
                      Inbox Transaction Viewer simplifies accessing crucial Stripe information. Imagine having a comprehensive view of a customer&apos;s lifetime value or their recent transactions without leaving your Gmail. This extension makes it possible, enabling you to make informed decisions quickly and communicate more effectively with customers.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Ensuring Security and Privacy</h3>
                    <p className="text-gray-600 mb-4">
                      One might wonder about the security implications of such integrations. Inbox Transaction Viewer pulls data directly through the Stripe API, meaning your information never passes through third-party servers. It&apos;s a direct line of sight into your Stripe account from Gmail, designed with your privacy in mind.
                    </p>
                    
                    <Link href="#" className="inline-flex items-center text-primary hover:underline mt-4">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>

                {/* Blog Post 4 */}
                <article className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <ExternalLink className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold">Security and Efficiency</h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">May 3, 2024</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>Admin</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Security
                      </span>
                      <span className="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Data Privacy
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Security and Efficiency with Inbox Transaction Viewer</h2>
                    <p className="text-gray-600 mb-4">
                      In the digital age, securing sensitive financial data is paramount, especially when integrating payment processing tools like Stripe with everyday applications such as Gmail. Inbox Transaction Viewer, a Chrome extension, is at the forefront of secure financial data integration, ensuring that users can access critical Stripe information directly within their Gmail interface without compromising on security.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Inbox Transaction Viewer leverages direct API calls to Stripe, bypassing the need for intermediary servers. This approach minimizes data exposure risks, ensuring that your financial information remains between you and Stripe. The extension is designed with security-first principles, incorporating robust encryption and following stringent data protection standards to safeguard your information.
                    </p>
                    
                    <Link href="#" className="inline-flex items-center text-primary hover:underline mt-4">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>

                {/* Blog Post 5 */}
                <article className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <User className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold">Customer Support</h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">May 1, 2024</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>Admin</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Customer Support
                      </span>
                      <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                        <Tag className="h-3 w-3 mr-1" /> Service
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Enhancing Customer Support with Inbox Transaction Viewer</h2>
                    <p className="text-gray-600 mb-4">
                      In today&apos;s fast-paced digital environment, providing swift and informed customer support is paramount for businesses leveraging online payment systems like Stripe. Enter Inbox Transaction Viewer, a transformative Chrome extension designed to integrate Stripe&apos;s financial insights directly into Gmail. This seamless fusion allows customer support teams instant access to critical transaction and subscription details right beside customer emails, thereby significantly shortening response times and elevating the accuracy of support provided.
                    </p>
                    <p className="text-gray-600 mb-4">
                      By enabling support personnel to view customer lifetime value, recent transactions, and subscription statuses without ever leaving their Gmail inbox, Inbox Transaction Viewer not only enhances productivity but also ensures personalized and context-rich customer interactions.
                    </p>
                    
                    <Link href="#" className="inline-flex items-center text-primary hover:underline mt-4">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>

                {/* Customer Testimonial */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <blockquote className="italic text-gray-700">
                    &quot;The Inbox Transaction Viewer has been a game-changer for our support team. We can now instantly see which emails are from paying customers and prioritize them accordingly.&quot;
                  </blockquote>
                  <p className="text-right text-gray-600 mt-2">- Sarah T., Customer Success Manager</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* About */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">About the Blog</h3>
                  <p className="text-gray-600 mb-4">
                    Welcome to the Inbox Transaction Viewer blog, where we share insights, tips, and updates about our Chrome extension that brings Stripe data directly into your Gmail inbox.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="https://chromewebstore.google.com/detail/inboxtransactionviewer/mailfnnagpmjbhpajaccjnhecaccceak?hl=en&authuser=0">
                      Get the Extension
                    </Link>
                  </Button>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="flex items-center text-gray-600 hover:text-primary">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        Productivity <span className="ml-auto text-gray-400">(3)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-gray-600 hover:text-primary">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        Business Efficiency <span className="ml-auto text-gray-400">(2)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-gray-600 hover:text-primary">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        Customer Support <span className="ml-auto text-gray-400">(2)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center text-gray-600 hover:text-primary">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        Security <span className="ml-auto text-gray-400">(1)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="#" className="group">
                        <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">Quickly Identify Emails from Paying Customers</h4>
                        <p className="text-xs text-gray-500 mt-1">May 10, 2024</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="group">
                        <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">Boost Your Email Productivity with Inbox Transaction Viewer</h4>
                        <p className="text-xs text-gray-500 mt-1">May 8, 2024</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="group">
                        <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">Maximizing Business Efficiency with Inbox Transaction Viewer</h4>
                        <p className="text-xs text-gray-500 mt-1">May 5, 2024</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="https://chromewebstore.google.com/detail/inboxtransactionviewer/mailfnnagpmjbhpajaccjnhecaccceak?hl=en&authuser=0" className="text-sm text-muted-foreground hover:text-primary">
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