'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LockRepairPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const services = [
    'Deadbolt repair, tuning, and alignment',
    'Cylinder repair and broken key extraction',
    'Latch, bolt, and strike plate adjustments',
    'Door and hinge alignment for smooth closing and locking',
    'Smart lock troubleshooting, updates, and battery service',
    'Keypad lock code resets and hardware repair',
    'Mortise and rim cylinder service for heavy-use doors',
    'Patio and sliding door lock repair and track service',
    'Storefront and office lock hardware servicing',
    'Routine lock maintenance: cleaning, lubrication, and checks',
  ];

  const faqs = [
    {
      question: "My key turns, but the door stays locked—what's the fix?",
      answer:
        'Usually, an engagement or alignment issue. We adjust the latch/strike or internal parts and restore smooth operation.',
    },
    {
      question: 'Do I need a new lock, or can mine be repaired?',
      answer:
        'Many problems respond well to a tune-up, rekey, or small part swap. If the body is worn or cracked, replacement may be the better path.',
    },
    {
      question: "What's the difference between rekeying and replacing?",
      answer:
        'Rekeying changes the pins so old keys no longer work while keeping your hardware. Replacing installs new hardware and keys.',
    },
    {
      question: 'My deadbolt feels stiff. Can you make it smoother?',
      answer:
        'Yes—proper lubrication, alignment, and a strike adjustment usually bring back easy turning.',
    },
    {
      question: "The latch doesn't catch unless I lift the door—can you help?",
      answer: 'We realign the hinges and the strike so the latch seats cleanly every time.',
    },
    {
      question: 'Do you service older mortise locks?',
      answer:
        'We repair, rekey, and refresh many classic mortise sets found in older Birmingham homes and buildings.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/broken-key-hero-background.webp)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Reliable Lock Repair & Maintenance in Birmingham, AL
              </h1>
              <p className="text-lg text-white/90 mb-8 text-pretty">
                Smooth, secure doors make daily life easier. Sure Lock & Key keeps Birmingham homes
                and businesses protected with careful diagnostics and clean, professional lock
                work—mechanical and smart.
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
                  Smart, Keypad & Mechanical Lock Repair & Upkeep
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Locks and doors benefit from occasional tune-ups to stay secure and easy to use.
                  The Sure Lock & Key team checks the hardware and the door/frame together, explains
                  clear options, and completes the fix that fits your setup and budget. From classic
                  deadbolts to keypads and smart locks, we restore smooth operation, tidy up the
                  details, and leave you with a door that feels right every time.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border mb-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between p-6 bg-muted/30 rounded-lg">
                <div className="flex items-center">
                  <HelpCircle className="h-12 w-12 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      Can't find the service you're looking for?
                    </p>
                    <p className="text-muted-foreground">
                      Call us now — we're ready to answer 24/7.
                    </p>
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
                    src="/services/lock-repair/1.jpg"
                    alt="A locksmith technician programming a new car key fob with a diagnostic tool."
                    className="w-full h-full object-cover aspect-video transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/services/lock-repair/2.jpg"
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
          style={{ backgroundImage: 'url(/images/facility-wide-view.jpg)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                About Sure Lock & Key Birmingham
              </h2>
              <p className="text-lg text-white/90 text-pretty leading-relaxed text-center">
                Sure Lock & Key is proud to serve Birmingham as a family-owned locksmith company
                dedicated to keeping homes and businesses safe. Our team of licensed, highly trained
                technicians combines experience with a customer-first approach, offering clear
                solutions and dependable results every time. From everyday lock repair to scheduled
                lock maintenance, we handle each job with care so your locks stay strong, reliable,
                and easy to use. For years, neighbors across Birmingham have relied on us not only
                for quick responses but also for the peace of mind that comes with having a trusted
                local locksmith on call.
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
                    Reach Out for Lock Repair & Maintenance
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
                        placeholder="(205) 952-0215"
                        className="w-full h-11 bg-card rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
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
                        placeholder="Lock Repair Service"
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
                        placeholder="35203"
                        className="w-full h-11 bg-card rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Describe your lock repair needs..."
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
