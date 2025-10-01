'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LockInstallationPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const residentialServices = [
    'Front door lock installation',
    'Deadbolt lock replacement',
    'Lock upgrades for side and back doors',
    'Smart lock installation',
    'Keypad lock setup for home entry',
    'Garage entry door lock installation',
    'Patio door and sliding door locks',
    'Mailbox or gate lock installation',
  ];

  const commercialServices = [
    'Lock installation for office entry doors',
    'Keyless entry systems and keypads',
    'Master key system setup',
    'Panic bar and exit device installation',
    'Interior door and storage room locks',
    'High-security lock systems',
    'Lock replacement for commercial units',
    'Lock hardware upgrades for storefronts',
  ];

  const faqs = [
    {
      question: 'How do I know if my locks need replacing?',
      answer:
        "If they're old, damaged, or you've just moved into a new place, it's a good idea to replace them.",
    },
    {
      question: 'What types of locks can you install?',
      answer:
        'We handle deadbolts, knob locks, keypad locks, smart locks, and other secure options.',
    },
    {
      question: 'Do I have to replace the whole lock if I lost my keys?',
      answer: 'Not always. In many cases, rekeying is a safe and affordable solution.',
    },
    {
      question: 'Are smart locks safer than traditional ones?',
      answer: 'Smart locks add convenience, but strong deadbolts still provide excellent security.',
    },
    {
      question: 'Can you install locks for both homes and businesses?',
      answer:
        'Yes, we provide lock installation and replacement for houses, apartments, offices, and commercial spaces.',
    },
    {
      question: "What's the difference between rekeying and replacing a lock?",
      answer:
        "Rekeying changes the pins inside your lock so old keys won't work. Replacing gives you brand-new hardware and keys.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/padlock-hero-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Lock Installation & Replacement Services in Birmingham, AL
              </h1>
              <p className="text-lg text-white/90 mb-8 text-pretty">
                Whether you're upgrading old locks or starting fresh, our Birmingham locksmiths
                provide expert lock installation and replacement for homes, businesses, and more.
                Get secure, reliable results with one easy call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-foreground bg-transparent">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Residential & Commercial Lock Installation & Replacement
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  From home entry doors to full commercial access systems, our locksmiths work with
                  a wide range of lock types and setups. We tailor every installation to fit your
                  space, your needs, and your security goals—with attention to detail and dependable
                  results.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Residential Services */}
                <div className="bg-card rounded-lg p-8 border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Residential Services</h3>
                  <ul className="space-y-3">
                    {residentialServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Commercial Services */}
                <div className="bg-card rounded-lg p-8 border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Commercial Services</h3>
                  <ul className="space-y-3">
                    {commercialServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between mt-12 p-6 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <HelpCircle className="h-12 w-12 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      Can't find what you're looking for?
                    </p>
                    <p className="text-muted-foreground">Call us now — we're available 24/7.</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground flex-shrink-0">
                  Call us now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  See Our Technicians at Work
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/services/lock-installation/1.jpeg"
                    alt="A locksmith technician programming a new car key fob with a diagnostic tool."
                    className="w-full h-full object-cover aspect-video transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/services/lock-installation/2.jpg"
                    alt="A close-up of a precision laser key cutting machine creating a new car key."
                    className="w-full h-full object-cover aspect-video transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/garage-door-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                About Sure Lock & Key Birmingham
              </h2>
              <p className="text-lg text-white/90 text-pretty leading-relaxed text-center">
                Sure Lock & Key has been proudly serving Birmingham and nearby communities for
                years, helping neighbors with everything from emergency lockouts to advanced car key
                programming. We're a family-owned company built on simple values: honesty,
                reliability, and respect for your time. That's why our technicians arrive with fully
                stocked vans, ready to handle keys, locks, fobs, and security needs on the spot.
              </p>
              <p className="text-lg text-white/90 text-pretty leading-relaxed mt-4 text-center">
                Our team is licensed, highly trained, and committed to providing solutions that fit
                your situation. When you call Sure Lock & Key in Birmingham, you're not just hiring
                a locksmith — you're choosing a local partner who puts your safety and peace of mind
                first.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left column - FAQ Section */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-card rounded-lg border overflow-hidden">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors">
                          <h3 className="font-medium text-foreground pr-4">{faq.question}</h3>
                          <span className="text-primary text-xl flex-shrink-0">
                            {expandedFaq === index ? '−' : '+'}
                          </span>
                        </button>
                        {expandedFaq === index && (
                          <div className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column - Contact Form */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Get in touch with our experts!
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-11 bg-card rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone number
                      </label>
                      <Input
                        type="tel"
                        placeholder="(469) 430-2094"
                        className="w-full h-11 bg-card rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john.doe@garagetec.com"
                        className="w-full h-11 bg-card rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full h-11 bg-card rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Zip Code *
                      </label>
                      <Input
                        type="text"
                        placeholder="75759"
                        className="w-full h-11 bg-card rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Enter message"
                        className="w-full min-h-[120px] h-11 bg-card rounded-lg"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Request A Quote
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
