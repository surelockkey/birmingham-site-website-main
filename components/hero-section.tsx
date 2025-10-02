import { Button } from '@/components/ui/button';
import { Clock, Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center space-x-2 mb-6  bg-foreground rounded-sm mx-auto px-2">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-lg font-medium text-white/90">
                We&#39;re Open Every Day From 9:00 AM to 5:00 PM
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Sure Lock & Key in Birmingham, AL —
            <span className="text-accent"> Locksmith Services</span> You Can Trust
          </h1>

          <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
            Professional locksmith services covering every need—emergency lock assistance, lock
            repair and maintenance, new lock installation, and car key solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="tel:2059520215" className="flex">
                <Phone className="h-5 w-5 mr-2" />
                (205) 952-0215 — Reach out anytime
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
