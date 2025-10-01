'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/images/gallery/1.jpg',
      alt: 'Sure Lock & Key business card',
      title: 'Professional Service Vehicle',
    },
    {
      src: '/images/gallery/2.jpeg',
      alt: 'Sure Lock & Key lock box',
      title: 'Professional Service Vehicle',
    },
    {
      src: '/images/gallery/3.jpeg',
      alt: 'garage',
      title: 'Professional Service Vehicle',
    },
    {
      src: '/images/gallery/4.jpeg',
      alt: 'garage',
      title: 'Professional Service Vehicle',
    },
    {
      src: '/images/gallery/5.jpeg',
      alt: 'Van',
      title: 'Professional Service Vehicle',
    },
    {
      src: '/images/gallery/6.jpeg',
      alt: 'Sure Lock & Key service van',
      title: 'Professional Service Vehicle',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/gallery-hero-team-background.jpg)' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Locksmith Work in Birmingham: See Our Team in Action
              </h1>
              <p className="text-xl text-white/90">
                Meet the people and process behind the locks. From the tools we trust to the work we
                do every day, here's a closer look at how we help keep things secure.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
      </main>
      <Footer />
    </div>
  );
}
