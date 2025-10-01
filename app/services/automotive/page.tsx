'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Car, CheckCircle, Key, MinusIcon, Phone, PlusIcon, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AutomotiveLocksmithPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Car,
      title: 'Car Lockout Service',
      description: 'Non-destructive car lockout service for doors, trunks, and glove boxes',
    },
    {
      icon: Key,
      title: 'Car Key Services',
      description: 'Cutting standard, transponder, high-security, and laser-cut keys',
    },
    {
      icon: Shield,
      title: 'Key Fob Programming',
      description: 'Key fob pairing, resyncs, and remote setup for all vehicle types',
    },
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
    { name: 'Toyota', logo: '/images/brands/toyota-logo.png' },
    { name: 'Volkswagen', logo: '/images/brands/volkswagen-logo.png' },
    { name: 'Volvo', logo: '/images/brands/volvo-logo.png' },
    { name: 'Acura', logo: '/images/brands/acura-logo.png' },
  ];

  const faqs = [
    {
      question: 'Which vehicles do you work on?',
      answer:
        "Most sedans, SUVs, pickups, vans, and many hybrids/EVs. Our automotive locksmith services cover a wide range of years and security systems. We'll confirm support for your year, make, and model.",
    },
    {
      question: 'Can you help if my keys are locked in the trunk?',
      answer:
        "Yes. Our car lockout service includes trunk openings. We use careful, non-destructive methods whenever possible, and we explain alternatives if damage-free entry isn't feasible.",
    },
    {
      question: 'Can you create a key from my VIN?',
      answer:
        'Often, yes. As part of our car key services, we can originate a key from manufacturer data when permitted and supported by your vehicle.',
    },
    {
      question: 'Do I need a tow for ignition problems or broken keys?',
      answer:
        'Usually no. Our mobile team performs broken key extraction and ignition repair and replacement at your location to keep you off the hook for towing.',
    },
    {
      question: "Can you disable a lost or stolen key so it won't work anymore?",
      answer:
        "Yes. We can rekey locks or remove missing keys from the vehicle's memory (when supported), then provide new keys as part of our car key services.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/automotive-hero-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Your Trusted Automotive Locksmith Services in Birmingham
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Car trouble doesn't have to steal your day. Our Birmingham team comes to you for
                fast, mobile automotive locksmith services—from car lockout service to smart fob
                programming and ignition repair. We work curbside at home, at the office, or
                anywhere you're parked.
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
                    Schedule Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Full-Service Automotive Locksmith in Birmingham
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  It’s the on-site help you need when your car won’t open or start: car lockout
                  service, all-in car key services. We handle the moments that derail a drive—lost
                  all keys, a fob that unlocks doors but won’t start the engine, a key that won’t
                  turn, a key snapped in the door or ignition, a remote that stopped working after a
                  battery swap, or a new driver who needs a spare. Our technicians run quick
                  diagnostics, explain your options, and finish most jobs in a single visit.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  What This Service Includes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Non-destructive car lockout service for doors, trunks, and glove boxes
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Car key services: cutting standard, transponder, high-security, and laser-cut
                      keys
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Key fob pairing, resyncs, and remote setup
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Broken key extraction from doors and ignitions
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Ignition repair and replacement for worn, stuck, or damaged cylinders
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Rekeying locks so lost or stolen keys no longer work
                    </span>
                  </div>
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
                    src="/services/automotive/1.jpg"
                    alt="A locksmith technician programming a new car key fob with a diagnostic tool."
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
                From daily commuters to luxury brands and work fleets, we support most makes and
                model years with on-site automotive locksmith services—car lockout service, car key
                services, fob programming, broken key extraction, and help with ignition issues.
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
                          className="w-auto object-contain h-24"
                        />
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{brand.name}</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground mb-6">
                If your logo isn't shown, share your year, make, model, and we'll confirm support in
                minutes.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Confirm Your Model</Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/mobile-locksmith-vehicle-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                About Sure Lock & Key Birmingham
              </h2>
              <p className="text-lg text-white/90 text-center text-pretty">
                Family-founded and locally active, Sure Lock & Key provides Birmingham with mobile
                automotive locksmith services done properly on the first visit when possible. Our
                local, licensed technicians arrive in well-stocked vans ready to solve real-world
                problems—lost all keys, a fob that opens doors but won’t start the engine, a key
                that won’t turn, a key blade snapped in the cylinder, or a remote that quits after a
                battery change. We explain what's happening in simple terms, treat your vehicle with
                care, and finish on-site whenever possible. Birmingham drivers count on us for
                respectful service, steady updates, and work that lasts.
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
                        Get Your Free Quote
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
                            htmlFor="vehicle"
                            className="block text-sm font-medium text-foreground mb-2">
                            Vehicle Information
                          </label>
                          <Input
                            className="bg-card py-5 rounded-lg"
                            id="vehicle"
                            placeholder="Year, Make, Model (e.g., 2020 Honda Civic)"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-2">
                            Describe Your Issue
                          </label>
                          <Textarea
                            className="bg-card rounded-lg py-2.5"
                            id="message"
                            placeholder="Tell us about your automotive locksmith needs..."
                            rows={4}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full hover:bg-primary/90 h-11 bg-accent text-base">
                          Request Quote
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
      </main>
      <Footer />
    </div>
  );
}
