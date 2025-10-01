import { Card } from '@/components/ui/card';
import { Car, Key, KeyRound, Smartphone, Wrench, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Key,
    title: 'Lock Installation & Replacement',
    description:
      'Professional lock installations and replacements that strengthen security across homes and businesses.',
    color: 'text-blue-600',
    href: '/services/lock-installation',
  },
  {
    icon: Wrench,
    title: 'Lock Repair & Maintenance',
    description:
      'Keep your locks reliable with skilled repairs and routine maintenance for lasting performance.',
    color: 'text-blue-600',
    href: '/services/lock-repair',
  },
  {
    icon: Car,
    title: 'Automotive Locksmith Services',
    description:
      'We solve car lockouts, ignition issues, and key problems with expert care for most makes and models.',
    color: 'text-blue-600',
    href: '/services/automotive',
  },
  {
    icon: Zap,
    title: 'Emergency Locksmith Services',
    description:
      'Quick solutions for urgent lockouts and broken locks, giving you safe access when it matters.',
    color: 'text-blue-600',
    href: '/services/emergency',
  },
  {
    icon: KeyRound,
    title: 'Car Key Replacement',
    description:
      'Accurate on-site cutting and programming provide quick replacements for damaged keys.',
    color: 'text-blue-600',
    href: '/services/car-key-replacement',
  },
  {
    icon: Smartphone,
    title: 'Car Key Programming',
    description:
      'We program smart keys and fobs on-site to provide accurate function and dependable use.',
    color: 'text-blue-600',
    href: '/services/car-key-programming',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <Link href="/services" className="text-orange-500 hover:text-orange-600 font-medium">
            View all services →
          </Link>
        </div>

        <p className="text-gray-600 mb-12 max-w-4xl text-lg leading-relaxed">
          Our locksmith services cover every need—emergency lock assistance, lock repair and
          maintenance, new lock installation, and car key solutions. Whether at home, on the road,
          or in your workplace, you can count on us for secure, efficient, and professional support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-orange-500 hover:text-orange-600 font-medium">
                    Learn more ›
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
