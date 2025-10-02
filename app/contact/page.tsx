'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How quickly can a technician get to me in Birmingham?',
      answer:
        "We dispatch the nearest tech right away. Arrival time depends on traffic and distance, and we'll keep you updated until we arrive.",
    },
    {
      question: 'Do you handle emergency calls?',
      answer:
        'Yes. We handle emergency locksmith calls for homes, businesses, and vehicles. Call to check current availability.',
    },
    {
      question: 'Can you make a car key without the original?',
      answer:
        'In most cases, yes. We handle on-site car key replacement and programming for many makes and models.',
    },
    {
      question: 'Will my door or lock be damaged during a lockout?',
      answer:
        "We use non-destructive methods whenever possible. If drilling or replacement is the best option, we'll explain it first and get your approval.",
    },
    {
      question: 'What info should I include when I contact you?',
      answer:
        'Your location, what happened (home lockout, broken key, keypad trouble), the lock or vehicle make if you know it, and your preferred contact method and time.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/contact-hero-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Sure Lock & Key Team in Birmingham, AL
              </h1>
              <p className="text-xl text-white/90">
                Friendly, local techs with quick response. Full-service Birmingham locksmith for
                residential, commercial, and automotive needs. Call, text, or send the form for fast
                help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Short Form. Quick Scheduling
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full bg-card h-12 rounded-lg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(205) 555-0123"
                        required
                        className="w-full bg-card h-12 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-card h-12 rounded-lg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <Input
                      id="service"
                      type="text"
                      placeholder="Emergency lockout, key replacement, etc."
                      className="w-full bg-card h-12 rounded-lg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-foreground mb-2">
                      Location/Address
                    </label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Birmingham, AL address"
                      className="w-full bg-card my-0 py-0 h-12 rounded-lg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your situation..."
                      rows={4}
                      className="w-full bg-card rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base h-11">
                    Request Service
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Get a Live Answer</h2>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-6 bg-primary text-white rounded-lg">
                    <Phone className="h-8 w-8" />
                    <div>
                      <a href="tel:2059520215" className="font-bold text-lg">
                        (205) 952-0215
                      </a>
                      <div className="text-sm opacity-90">Available 24/7 for emergencies</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-muted rounded-lg">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-lg font-semibold text-foreground">
                        albirmingham@surelockkey.com
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Email us for non-urgent requests
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-foreground pr-4">{faq.question}</h3>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </button>

                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
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
