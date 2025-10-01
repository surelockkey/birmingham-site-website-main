'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Diamond, Shield, Star, Tag, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Quick & Reliable Service',
    description: "Same-day response & 24/7 support—because lock issues can't wait.",
  },
  {
    icon: Shield,
    title: 'Skilled, Certified Technicians',
    description: 'Fully trained locksmiths with years of real-world experience.',
  },
  {
    icon: Tag,
    title: 'Honest, Upfront Pricing',
    description: 'Clear quotes before we start—no surprises, no hidden fees.',
  },
  {
    icon: Star,
    title: 'Trusted by Locals',
    description: 'Known for friendly service and reliable results across Birmingham.',
  },
];

const partners = [
  { name: 'Mul-T-Lock', logo: '/partners/mul-t-lock-new.webp' },
  { name: 'Schlage', logo: '/partners/schlage-new.webp' },
  { name: 'Medeco', logo: '/partners/medeco-new.webp' },
  { name: 'Guardian', logo: '/partners/guardian-new.webp' },
  { name: 'Yale', logo: '/partners/yale-new.webp' },
  { name: 'Kwikset', logo: '/partners/kwikset-new.webp' },
  { name: 'Baldwin', logo: '/partners/baldwin-new.webp' },
];

export function WhyChooseSection() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with text on left, image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Sure Lock & Key Birmingham?
              </h2>
              <div className="text-lg text-muted-foreground max-w-2xl text-pretty space-y-4">
                <p>
                  When something goes wrong with your locks, car ignition, or key fob, it's not just
                  frustrating—it can throw off your whole day. That's where Sure Lock & Key
                  Birmingham comes in. We're a family-owned business with decades of hands-on
                  experience, offering everything from lockout services to car key programming,
                  repairs, and replacements.
                </p>
                <p>
                  Whether you need an emergency locksmith, help from a skilled automotive locksmith,
                  or fast, accurate car key replacement, you can count on us to show up, solve the
                  issue, and do the job right. We're proud to be the local team Birmingham trusts
                  for dependable locksmith services.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/main-page/2.jpg"
                alt="The Sure Lock & Key Birmingham service van, fully equipped and ready for dispatch."
                className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Bottom section with image on left, cards on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <img
                src="/main-page/1.webp"
                alt="A Sure Lock & Key technician professionally installing a new lock on a residential door."
                className="w-full h-auto rounded-xl shadow-2xl object-cover aspect-square"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground mb-6">
                Here's why so many homeowners and businesses in Birmingham choose us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-primary text-white border-0 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-white/90 text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
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

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Working Hours</h2>
            <Link href="/locations" className="text-accent hover:text-accent/80 font-medium">
              View all locations →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Service vehicle image */}

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
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Contact form */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Trusted Locksmith Service in Birmingham
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Need help fast? Call (205) 952-0215 or fill out the form below. Our team is
                available 7 days a week to answer your questions and schedule service at a time that
                works for you.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 bg-card"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(469) 430-2074"
                    className="w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 bg-card"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 bg-card"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 bg-card"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="zipcode" className="block text-sm font-medium mb-2">
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    placeholder="73759"
                    className="w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 bg-card"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter message"
                    className="w-full px-4 py-3 rounded-md border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 resize-none bg-card"
                    required></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
                    Request A Quote
                  </button>
                </div>
              </form>
            </div>

            {/* Right column - FAQ */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Got Questions? We've Got Answers!
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Not sure how our services work or what we can help with? Browse the answers below
                for quick info, or reach out to speak with a team member directly.
              </p>

              <div className="space-y-4">
                {[
                  {
                    question: 'What types of locksmith services do you offer?',
                    answer:
                      'We handle residential, commercial, and automotive locksmith needs—from lockouts and rekeying to new lock installation and car key services.',
                  },
                  {
                    question: 'I just moved—should I replace my locks or rekey them?',
                    answer:
                      'If the locks are in good shape, rekeying is a smart and cost-effective way to make sure old keys no longer work.',
                  },
                  {
                    question: "Can you help if I'm locked out of my house or car?",
                    answer:
                      'Yes—we use safe, non-destructive methods to get you back inside quickly without damaging your locks.',
                  },
                  {
                    question: "Do you make car keys if I've lost mine?",
                    answer:
                      'We provide on-site car key replacement for most makes and models, including smart keys and key fobs—even without the original.',
                  },
                  {
                    question: 'Can you rekey locks instead of replacing them?',
                    answer:
                      'Absolutely. Rekeying lets you keep your existing locks while changing the keys that operate them.',
                  },
                  {
                    question: 'Do you work with keyless entry systems and smart locks?',
                    answer:
                      'Yes—we install and service a wide range of smart locks, keypads, and electronic systems for homes and businesses.',
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
                    <div
                      className="flex items-center justify-between p-4 cursor-pointer"
                      onClick={() => toggleFAQ(index)}>
                      <h3 className="font-medium text-white pr-4">{faq.question}</h3>
                      <span className="text-accent text-xl flex-shrink-0">
                        {expandedFAQ === index ? '−' : '+'}
                      </span>
                    </div>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4">
                        <p className="text-white/80 text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
