import { Clock, Phone } from 'lucide-react';
import Image from 'next/image'; // Import the Next.js Image component
import Link from 'next/link';

// Define social media links for easier management
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/surelockkeybirmingham/',
    iconSrc: '/social-media/instagram.svg',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Sure-Lock-Key-Birmingham/61577845615173/',
    iconSrc: '/social-media/facebook.svg',
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/abirmingham3217/',
    iconSrc: '/social-media/pinterest.svg',
  },
  {
    name: 'Yelp',
    href: 'https://www.yelp.com/biz/sure-lock-and-key-birmingham-3',
    iconSrc: '/social-media/yelp.svg',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@surelockkeybirmingham',
    iconSrc: '/social-media/tik-tok.svg',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@ALBirmingham',
    iconSrc: '/social-media/youtube.svg',
  },
  {
    name: 'X',
    href: 'https://x.com/surebirmingham',
    iconSrc: '/social-media/x.svg',
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@albirmingham',
    iconSrc: '/social-media/medium.svg',
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex flex-col"></div>
            </Link>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              Professional locksmith services in Birmingham, AL. We're a family-owned business with
              decades of hands-on experience, offering everything from lockout services to car key
              programming.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">(205) 952-0215</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm opacity-80">Open 7 Days: 9:00 AM - 5:00 PM</span>
            </div>

            {/* Social Media Links - START of new code */}
            <div className="mt-6 flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:opacity-75 transition-opacity">
                  <span className="sr-only">{social.name}</span>
                  <Image
                    src={social.iconSrc}
                    alt={`Sure Lock & Key Birmingham on ${social.name}`}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
            {/* END of new code */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link
                  href="/services/lock-installation"
                  className="hover:opacity-100 transition-opacity">
                  Lock Installation & Replacement
                </Link>
              </li>
              <li>
                <Link href="/services/lock-repair" className="hover:opacity-100 transition-opacity">
                  Lock Repair & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/automotive" className="hover:opacity-100 transition-opacity">
                  Automotive Locksmith Services
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="hover:opacity-100 transition-opacity">
                  Emergency Locksmith Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/car-key-replacement"
                  className="hover:opacity-100 transition-opacity">
                  Car Key Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/car-key-programming"
                  className="hover:opacity-100 transition-opacity">
                  Car Key Programming
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li></li>
              <li>
                <Link href="/gallery" className="hover:opacity-100 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:opacity-100 transition-opacity">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 transition-opacity">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Sure Lock & Key Birmingham. All rights reserved. Licensed & Insured Locksmith
            Services.
          </p>
        </div>
      </div>
    </footer>
  );
}
