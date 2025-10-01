'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, MinusIcon, Phone, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CarKeyProgrammingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    'Key/fob testing and battery check',
    'Transponder key programming with the immobilizer',
    'Smart key and push-to-start setup',
    'Car key fob programming (lock/unlock, panic, remote start where equipped)',
    'Resync after fob or vehicle battery replacement',
    'Spare key cutting and programming',
    'Deleting lost keys from vehicle memory',
  ];

  const carBrands = [
    { name: 'Audi', logo: '/images/brands/audi-logo.png' },
    { name: 'Bentley', logo: '/images/brands/bentley-logo.png' },
    { name: 'BMW', logo: '/images/brands/bmw-logo.png' },
    { name: 'Buick', logo: '/images/brands/buick-logo.png' },
    { name: 'Cadillac', logo: '/images/brands/cadillac-logo.png' },
    { name: 'Chevrolet', logo: '/images/brands/chevrolet-logo.png' },
    { name: 'Chrysler', logo: '/images/brands/chrysler-logo.png' },
    { name: 'Dodge', logo: '/images/brands/dodge-logo.png' },
    { name: 'Fiat', logo: '/images/brands/fiat-logo.png' },
    { name: 'Ford', logo: '/images/brands/ford-logo.png' },
    { name: 'Freightliner', logo: '/images/brands/freightliner-logo.png' },
    { name: 'Genesis', logo: '/images/brands/genesis-logo.png' },
    { name: 'Geo', logo: '/images/brands/geo-logo.png' },
    { name: 'GMC', logo: '/images/brands/gmc-logo.png' },
    { name: 'Hino', logo: '/images/brands/hino-logo.png' },
    { name: 'Honda', logo: '/images/brands/honda-logo.png' },
    { name: 'Hummer', logo: '/images/brands/hummer-logo.png' },
    { name: 'Hyundai', logo: '/images/brands/hyundai-logo.png' },
    { name: 'Infiniti', logo: '/images/brands/infiniti-logo.png' },
    { name: 'Isuzu', logo: '/images/brands/isuzu-logo.png' },
    { name: 'Jaguar', logo: '/images/brands/jaguar-logo.png' },
    { name: 'Jeep', logo: '/images/brands/jeep-logo.png' },
    { name: 'Kia', logo: '/images/brands/kia-logo.png' },
    { name: 'Land Rover', logo: '/images/brands/land-rover-logo.png' },
    { name: 'Lexus', logo: '/images/brands/lexus-logo.png' },
    { name: 'Lincoln', logo: '/images/brands/lincoln-logo.png' },
    { name: 'Maserati', logo: '/images/brands/maserati-logo.png' },
    { name: 'Mazda', logo: '/images/brands/mazda-logo.png' },
    { name: 'Mercedes-Benz', logo: '/images/brands/mercedes-benz-logo.png' },
    { name: 'Mercury', logo: '/images/brands/mercury-logo.png' },
    { name: 'MINI', logo: '/images/brands/mini-logo.png' },
    { name: 'Mitsubishi', logo: '/images/brands/mitsubishi-logo.png' },
    { name: 'Nissan', logo: '/images/brands/nissan-logo.png' },
    { name: 'Oldsmobile', logo: '/images/brands/oldsmobile-logo.png' },
    { name: 'Peterbilt', logo: '/images/brands/peterbilt-logo.png' },
    { name: 'Plymouth', logo: '/images/brands/plymouth-logo.png' },
    { name: 'Pontiac', logo: '/images/brands/pontiac-logo.png' },
    { name: 'Porsche', logo: '/images/brands/porsche-logo.png' },
    { name: 'RAM', logo: '/images/brands/ram-logo.png' },
    { name: 'Rolls-Royce', logo: '/images/brands/rolls-royce-logo.png' },
    { name: 'SAAB', logo: '/images/brands/saab-logo.png' },
    { name: 'Saturn', logo: '/images/brands/saturn-logo.png' },
    { name: 'Scion', logo: '/images/brands/scion-logo.png' },
    { name: 'Smart', logo: '/images/brands/smart-logo.png' },
    { name: 'Subaru', logo: '/images/brands/subaru-logo.png' },
    { name: 'Suzuki', logo: '/images/brands/suzuki-logo.png' },
    { name: 'Toyota', logo: null },
    { name: 'Volkswagen', logo: '/images/brands/volkswagen-logo.png' },
    { name: 'Volvo', logo: '/images/brands/volvo-logo.png' },
    { name: 'Acura', logo: '/images/brands/acura-logo.png' },
  ];

  const faqs = [
    {
      question: 'How long does car key programming take?',
      answer:
        "Most car key programming visits take 30–60 minutes, depending on the vehicle and whether we're creating a new key.",
    },
    {
      question: 'Can you program a key or fob I bought online?',
      answer: "Often yes, if it matches your vehicle specs. We'll verify during the initial call.",
    },
    {
      question: 'Do I need proof of ownership?',
      answer: 'Yes. A photo ID and vehicle documents are required for your security.',
    },
    {
      question: "My fob locks the doors, yet the engine won't start. Can you fix that?",
      answer:
        'Yes. That usually points to a transponder pairing issue. We diagnose and program the chip so the vehicle recognizes the key.',
    },
    {
      question: 'What if I lost every key?',
      answer:
        'We can create and program a new key without the original in many cases. Having your VIN ready speeds things up.',
    },
    {
      question: 'Will programming affect my warranty?',
      answer:
        'Work performed by qualified technicians does not change factory coverage. We take care to keep your settings intact.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/car-programming-diagnostic-hero-background.jpg)',
          }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Professional Car Key Programming Services in Birmingham
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Get expert car key programming from Sure Lock & Key in Birmingham. Our mobile
                technicians handle everything from transponder pairing to smart key setup and spare
                keys on-site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Help Now
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Car Key Programming Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Car Key Programming in Birmingham
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Regular key checks and prompt car key programming help prevent surprise no-start
                  issues and keep your day on track. Our trained technicians provide reliable
                  diagnostics and on-the-spot fixes across Birmingham. From a quick resync after a
                  battery change to pairing a brand-new fob, we make sure your keys work the way
                  they should.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
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
                    src="/services/car-key-programming/1.jpeg"
                    alt="A locksmith technician programming a new car key fob with a diagnostic tool."
                    className="w-full h-full object-cover aspect-video transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/services/car-key-programming/2.jpeg"
                    alt="A close-up of a precision laser key cutting machine creating a new car key."
                    className="w-full h-full object-cover aspect-video transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Car Models Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Car Models We Serve
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                We work with vehicles commonly seen around Birmingham:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                {carBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-4 text-center border hover:shadow-md transition-shadow">
                    {brand.logo ? (
                      <div className="flex flex-col items-center space-y-2">
                        <img
                          src={brand.logo || '/placeholder.svg'}
                          alt={`${brand.name} logo`}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{brand.name}</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground mb-6">
                Not sure where yours fits? Tell us the year and model when you call, and we'll
                confirm car key programming options right away.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Confirm Your Model</Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/bmw-programming-diagnostic-about-background.jpg)',
          }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                About Sure Lock & Key in Birmingham
              </h2>
              <p className="text-lg text-white/90 text-center text-pretty">
                Sure Lock & Key serves customers throughout Birmingham and nearby communities. Our
                focus is simple: quick arrivals, upfront pricing, and practical fixes that fit daily
                life. Whether you're parked at home, at the office, or roadside, we bring the tools
                and experience to complete car key programming on-site—including transponder key
                programming and car key fob programming—and make sure everything works before we
                leave.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left column - FAQ */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 md:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors bg-card"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                          <span className="font-medium text-foreground">{faq.question}</span>
                          {expandedFaq === index ? (
                            <MinusIcon className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <PlusIcon className="h-5 w-5 text-muted-foreground" />
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

                {/* Right column - Contact Form */}
                <div>
                  <Card className="bg-background shadow-none border-none">
                    <CardContent className="p-8 px-2 py-2">
                      <h3 className="font-bold text-foreground mb-6 text-3xl">
                        Get Car Key Programming Quote
                      </h3>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-foreground mb-2">
                              First Name
                            </label>
                            <Input
                              className="bg-card py-5 rounded-lg"
                              id="firstName"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-foreground mb-2">
                              Last Name
                            </label>
                            <Input
                              className="bg-card py-5 rounded-lg"
                              id="lastName"
                              placeholder="Enter your last name"
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
                            className="bg-card py-5 rounded-lg"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            className="bg-card py-5 rounded-lg"
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-foreground mb-2">
                            Location
                          </label>
                          <Input
                            className="bg-card py-5 rounded-lg"
                            id="location"
                            placeholder="Your address or current location"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="year"
                              className="block text-sm font-medium text-foreground mb-2">
                              Year
                            </label>
                            <Input
                              className="bg-card py-5 rounded-lg"
                              id="year"
                              placeholder="e.g., 2020"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="make"
                              className="block text-sm font-medium text-foreground mb-2">
                              Make
                            </label>
                            <Input
                              className="bg-card py-5 rounded-lg"
                              id="make"
                              placeholder="e.g., Toyota"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="model"
                              className="block text-sm font-medium text-foreground mb-2">
                              Model
                            </label>
                            <Input
                              className="bg-card py-5 rounded-lg"
                              id="model"
                              placeholder="e.g., Camry"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-2">
                            Describe Your Programming Needs
                          </label>
                          <Textarea
                            className="bg-card rounded-lg py-2.5"
                            id="message"
                            placeholder="Tell us about your car key programming needs..."
                            rows={4}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full hover:bg-primary/90 h-11 bg-accent text-base">
                          Request Car Key Programming Service
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
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
