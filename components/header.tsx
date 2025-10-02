'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Locations', href: '/locations' }, // Changed from "Location" to "Locations" and updated href to "/locations"
  ];

  const services = [
    { name: 'Lock Installation & Replacement', href: '/services/lock-installation' },
    { name: 'Lock Repair & Maintenance', href: '/services/lock-repair' },
    { name: 'Automotive Locksmith Services', href: '/services/automotive' },
    { name: 'Emergency Locksmith Services', href: '/services/emergency' },
    { name: 'Car Key Replacement', href: '/services/car-key-replacement' },
    { name: 'Car Key Programming', href: '/services/car-key-programming' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-full.svg"
              alt="Sure Lock & Key Birmingham"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <div className="flex flex-col"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}

            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setIsServicesOpen(false)}>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right"></div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="tel:2059520215" className="flex">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2 border-t border-border mt-4">
                <a href="tel:2059520215" className="text-sm font-semibold text-foreground">
                  (205) 952-0215
                </a>
                <div className="text-xs text-muted-foreground">Available 24/7</div>
                <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="tel:2059520215" className="flex">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
