import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/automotive-locksmith-work.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Locksmiths Near You — Residential, Commercial & Automotive
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Explore our service areas, where our locksmith team is ready to assist you
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Locations</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Here is a full list of cities where we offer our services
              </p>

              {/* Location Card */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/facility-entrance.jpg"
                      alt="Sure Lock & Key Birmingham facility entrance with garage door"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Birmingham, AL</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Serving Birmingham and surrounding areas with professional locksmith services for residential,
                      commercial, and automotive needs.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <p>
                        <strong>Phone:</strong> (205) 952-0215
                      </p>
                    </div>
                    <Button variant="outline" className="w-full md:w-auto bg-transparent" asChild>
                      <Link href="/locations/birmingham">View more</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
