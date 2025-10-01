'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const partners = [
  { name: 'Mul-T-Lock', logo: '/partners/mul-t-lock-new.webp' },
  { name: 'Schlage', logo: '/partners/schlage-new.webp' },
  { name: 'Medeco', logo: '/partners/medeco-new.webp' },
  { name: 'Guardian', logo: '/partners/guardian-new.webp' },
  { name: 'Yale', logo: '/partners/yale-new.webp' },
  { name: 'Kwikset', logo: '/partners/kwikset-new.webp' },
  { name: 'Baldwin', logo: '/partners/baldwin-new.webp' },
];

const faqs = [
  {
    question: 'Do you unlock homes, businesses, and cars?',
    answer:
      'Yes. We provide lockout help for properties and vehicles using non-destructive methods whenever possible.',
  },
  {
    question: 'Can you install or service exit devices and door closers at my business?',
    answer:
      'Yes. Our commercial team installs and services panic bars, exit hardware, and door closers to keep doors safe and code-compliant.',
  },
  {
    question: 'Do you work with smart locks and keypads?',
    answer:
      'We install and service popular residential and commercial smart locks and keypads, including resets and replacements.',
  },
  {
    question: 'What proof do I need for unlocks or new keys?',
    answer: 'A photo ID and proof of ownership or authorization keep everyone protected.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Call or schedule service online with your location and a quick description of the issue.',
  },
];

export default function BirminghamLocationPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/location/introduction.jpg')", // Updated to show Birmingham facility with service van
          }}>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Trusted Locksmith Services in Birmingham, AL
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Sure Lock & Key is your local locksmith Birmingham team is on the way—homes,
                businesses, and vehicles. From fast lockouts to rekeys, smart locks, and car keys
                on-site, we've got you covered.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Need an emergency locksmith or an automotive locksmith for ignition issues?
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="tel:(205) 952-0215">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (205) 952-0215
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Combined Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-foreground mb-6 md:text-3xl">
                  Emergency Locksmith Birmingham
                </h2>
                <div className="grid lg:grid-cols-2 gap-2">
                  <p className="text-lg text-muted-foreground mb-6">
                    Key or lock trouble rarely happens at a convenient time. Our emergency locksmith
                    Birmingham team responds quickly to get you back on track. We handle lockouts,
                    urgent rekeying, damaged hardware, and on-the-spot key work for homes,
                    storefronts, offices, and vehicles.
                  </p>
                  <img src="/location/1.jpg" />
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Emergency services include:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Home, business, and car lockout services</li>
                    <li>• Rekeying after lost or stolen keys</li>
                    <li>• Lock repair or replacement for doors, deadbolts, and cylinders</li>
                    <li>• Mailbox openings (proof of ownership required)</li>
                  </ul>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-2">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 md:text-3xl">
                    Birmingham Residential Locksmith
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Keep your place secure and easy to access for the people who need it. As a
                    Birmingham residential locksmith, we work with single-family homes, apartments,
                    condos, and townhomes.
                  </p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Home services:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lock repair, replacement, and installation</li>
                      <li>• Door rekeying and master key setups</li>
                      <li>• Deadbolt and hardware upgrades</li>
                      <li>• Smart lock and keypad installation</li>
                      <li>• Garage entry, patio, and sliding door locks</li>
                      <li>• Door alignment and strike plate adjustments</li>
                    </ul>
                  </div>
                </div>
                <img src="/location/2.jpg" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 md:text-3xl">
                  Commercial Locksmith Services in Birmingham, AL
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  From offices to warehouses and retail, you need doors that open for your team and
                  lock correctly after hours. Sure Lock & Key Birmingham commercial team keeps
                  operations moving safely.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Business services:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lock repair, replacement, and new installations</li>
                    <li>• Rekeying suites and storage areas</li>
                    <li>• Master key systems for managers</li>
                    <li>• Keypad and keyless entry setup</li>
                    <li>• Panic bar and exit device installation and service</li>
                    <li>• High-security hardware upgrades</li>
                    <li>• Access control support for multi-user access</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 md:text-3xl">
                  Automotive Locksmith Birmingham
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  When your car won't open or start, our automotive locksmith Birmingham team comes
                  to you. We unlock vehicles carefully, cut and program keys, and fix ignition
                  problems on-site.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Auto services:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Car lockout service (doors, trunk, glove box)</li>
                    <li>
                      • Car key services: cutting standard, transponder, high-security, and
                      laser-cut keys
                    </li>
                    <li>• Programming fobs and smart keys, resyncs after a battery change</li>
                    <li>• Broken key extraction</li>
                    <li>• Ignition repair and replacement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Partners</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-20">
                  <img
                    src={partner.logo || '/placeholder.svg'}
                    alt={`${partner.name} logo`}
                    className="max-h-12 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Our Birmingham Location & Contact
              </h2>

              {/* Contact Information */}
              <div className="text-center mb-12 space-y-2">
                <p className="text-lg text-muted-foreground">
                  <strong>Address:</strong> 404 Black Creek Rd #122, Birmingham, AL 35217
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong>Phone:</strong> (205) 952-0215
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong>Email:</strong> albirmingham@surelockkey.com
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Google Maps */}
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8234567890123!2d-86.7234567!3d33.5234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s404%20Black%20Creek%20Rd%20%23122%2C%20Birmingham%2C%20AL%2035217!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sure Lock & Key Birmingham Location"></iframe>
                </div>

                {/* Hours */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Hours:</h3>
                  <div className="space-y-4">
                    {[
                      'Monday: 9 AM – 5 PM',
                      'Tuesday: 9 AM – 5 PM',
                      'Wednesday: 9 AM – 5 PM',
                      'Thursday: 9 AM – 5 PM',
                      'Friday: 9 AM – 5 PM',
                      'Saturday: 9 AM – 5 PM',
                      'Sunday: 9 AM – 5 PM',
                    ].map((hours, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 transform rotate-45"></div>
                        <p className="text-lg text-muted-foreground">{hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call-to-action Section */}
              <div className="text-center bg-card border border-border rounded-lg p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Need help now? Request a technician to your address.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg hover:shadow-sm transition-shadow">
                    <div
                      className="flex items-center justify-between p-6 cursor-pointer"
                      onClick={() => toggleFAQ(index)}>
                      <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                      <span className="text-primary text-xl flex-shrink-0">
                        {expandedFAQ === index ? '−' : '+'}
                      </span>
                    </div>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
