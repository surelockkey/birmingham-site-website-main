'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Building, Car, CheckCircle, Home, MinusIcon, Phone, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function EmergencyLocksmithPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: 'Residential Emergency',
      description: 'Fast lockout services, rekeying, and urgent repairs for homes and apartments',
    },
    {
      icon: Car,
      title: 'Automotive Emergency',
      description: 'Car lockouts, broken key extraction, and on-site key programming',
    },
    {
      icon: Building,
      title: 'Commercial Emergency',
      description: 'Business lockouts, security repairs, and same-visit rekeying for offices',
    },
  ];

  const emergencyServices = [
    'Fast lockout services for homes, vehicles, and businesses',
    'Rekeying after move-ins, staffing changes, or lost keys',
    'Lock repair or replacement for deadbolts, cylinders, and smart locks',
    'On-site key cutting and programming for many vehicles',
    'Mailbox opening (proof of ownership required)',
    'Door hardware upgrades for better security (by request)',
  ];

  const faqs = [
    {
      question: 'How fast can you arrive?',
      answer:
        "Arrival depends on your location and traffic in Birmingham. When you call, we'll give a precise window before dispatch.",
    },
    {
      question: 'Can you unlock my door without damage?',
      answer:
        "We use non-destructive methods whenever possible. If drilling or replacement is the only safe option, we'll explain why first.",
    },
    {
      question: 'Do you offer lockout services for cars and homes?',
      answer:
        'Yes. Our lockout services cover houses, apartments, condos, offices, shops, and most vehicles.',
    },
    {
      question: 'What if I lost my keys?',
      answer:
        "We can rekey your locks to remove access from old keys and provide new keys on-site. For vehicles, we can often cut and program a new key from your car's information.",
    },
    {
      question: 'Can you work with smart locks?',
      answer:
        'In many cases, yes. We service common residential and light-commercial smart lock models, perform resets, and replace failed hardware.',
    },
    {
      question: 'How do I request an emergency locksmith?',
      answer:
        "Call or request a quote online with your address, the type of lock or door, and a brief description of the issue. We'll confirm options and pricing and send a mobile locksmith to your location.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/emergency-car-unlock-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Fast & Reliable Emergency Locksmith Services in Birmingham
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Entry problem at home, in your car, or at your business? Our Birmingham emergency
                locksmith delivers fast lockout services, rekeying, urgent repairs, and on-site key
                work to get you back in quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Emergency Help
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent">
                    Book a Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Emergency Locksmith Services in Birmingham
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  When time matters, you need a clear plan and a technician who knows what to do. We
                  arrive with the right tools, confirm the issue, and fix it on-site. Whether it's a
                  home lockout, a storefront door that won't lock securely, or a late-night car key
                  problem, our emergency locksmith can restore access and safety quickly.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  What Emergency Locksmith Services We Provide
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencyServices.map((service, index) => (
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

        {/* Service Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Residential Emergency */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <Home className="text-primary mr-3 size-11" />
                    <h3 className="font-bold text-foreground text-3xl">Residential Emergency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    A door that won't open—or worse, won't lock—needs quick attention. We help
                    Birmingham homeowners and renters with rapid entry, on-the-spot rekeying, and
                    same-visit repairs to secure the door. If keys are missing, we can rekey your
                    locks so old keys no longer work and provide new keys on the spot.
                  </p>
                </div>

                {/* Automotive Emergency */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <Car className="text-primary mr-3 size-12" />
                    <h3 className="font-bold text-foreground text-3xl">Automotive Emergency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Keys locked in the car, a broken key in the ignition, or a fob that stopped
                    responding? Our mobile locksmith can unlock your vehicle carefully, extract
                    broken keys, cut a replacement, and program many fobs and transponders right at
                    your location. If you've been searching for emergency locksmith services for
                    your vehicle, we'll get you moving again with tested, working keys.
                  </p>
                </div>

                {/* Commercial Emergency */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <div className="flex items-center mb-6">
                    <Building className="text-primary mr-3 size-11" />
                    <h3 className="font-bold text-foreground text-3xl">Commercial Emergency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Keeping a business secure can't wait. Our Birmingham emergency locksmith team
                    provides rapid entry, on-site repairs, and same-visit rekeying when keys are
                    lost or access changes. If hardware is damaged, we perform immediate cylinder
                    replacement or temporary securement to get the doors closing and locking now. We
                    service office, retail, and industrial doors, panic bars, and key systems, and
                    we test everything before we leave.
                  </p>
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
                    src="/services/emergency/1.jpeg"
                    alt="A locksmith technician programming a new car key fob with a diagnostic tool."
                    className="w-full h-full object-cover aspect-video transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/services/emergency/2.jpg"
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
          style={{ backgroundImage: 'url(/images/electronic-lock-background.webp)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                About Sure Lock & Key Birmingham
              </h2>
              <p className="text-lg text-white/90 text-center text-pretty">
                Sure Lock & Key is a locally rooted, family-run locksmith serving Birmingham with
                fast, dependable emergency locksmith services for homes, cars, and businesses. Our
                licensed, background-checked technicians arrive as a fully equipped mobile locksmith
                unit to diagnose, open, repair, or rekey right on-site. From careful lockout
                services to hardware replacements and fresh keys, you get clear quotes, respectful
                service, and work that lasts. We back parts and labor with a warranty and keep you
                in the loop from start to finish—so you feel safe, informed, and back on schedule
                without the stress.
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
                        Get Emergency Help Now
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
                        <div>
                          <label
                            htmlFor="emergency"
                            className="block text-sm font-medium text-foreground mb-2">
                            Emergency Type
                          </label>
                          <select className="w-full bg-card py-3 px-3 rounded-lg border border-input">
                            <option value="">Select emergency type</option>
                            <option value="residential">Residential Lockout</option>
                            <option value="automotive">Automotive Lockout</option>
                            <option value="commercial">Commercial Lockout</option>
                            <option value="broken-key">Broken Key</option>
                            <option value="lock-repair">Lock Repair</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-2">
                            Describe Your Emergency
                          </label>
                          <Textarea
                            className="bg-card rounded-lg py-2.5"
                            id="message"
                            placeholder="Tell us about your emergency locksmith needs..."
                            rows={4}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full hover:bg-primary/90 h-11 bg-accent text-base">
                          Request Emergency Service
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
