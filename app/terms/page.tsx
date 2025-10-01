import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Terms and Conditions
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Please read these terms and conditions carefully before using our services
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground mb-8">Last modified: [Ocrober, 2025]</p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Acceptance of Terms of Use
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      By accessing and using the Sure Lock & Key Birmingham website or engaging with
                      any content, services, or products offered by Sure Lock & Key Birmingham, you
                      agree to be bound by these Terms and Conditions. Compliance with applicable
                      local laws and regulations is your responsibility. If you do not agree with
                      these Terms and Conditions, you are prohibited from using our website and
                      services.
                    </p>
                    <p>
                      Our website and all its features, functionality, and content are owned by Sure
                      Lock & Key Birmingham and are protected by United States copyright, trademark,
                      and other intellectual property laws.
                    </p>
                    <p>
                      Sure Lock & Key Birmingham reserves the right to modify or remove any part of
                      the website or its contents at our sole discretion without notice. We are not
                      liable if any part or the entire website is unavailable at any time.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Privacy Policy
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We are committed to protecting your privacy. Please review our Privacy Policy,
                      which governs your use of the site, to understand our practices. By using our
                      services, you consent to the collection, use, and sharing of your information
                      as described in our Privacy Policy.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Use License Agreement
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Permission to use and access this website is granted under a limited license,
                      not a transfer of title. Under this license, you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modify or copy any materials or services;</li>
                      <li>
                        Use the materials or services for any commercial purpose or public display;
                      </li>
                      <li>
                        Attempt to decompile or reverse engineer any software on this website;
                      </li>
                      <li>Remove any proprietary notations from the materials;</li>
                      <li>
                        Transfer the materials to another person or entity, or "mirror" the
                        materials on any other server;
                      </li>
                      <li>
                        Engage in data mining, data harvesting, data extracting, or any other
                        similar activities.
                      </li>
                    </ul>
                    <p>
                      This license will terminate automatically if you violate any of these
                      restrictions, and may be terminated by Sure Lock & Key Birmingham at any time.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Disclaimer
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The information on this website is provided for informational purposes only.
                      Sure Lock & Key Birmingham is not responsible for any content posted on the
                      website and will not be liable for any loss or damage caused by a distributed
                      denial-of-service attack, viruses, or other technologically harmful materials
                      that may infect your computer equipment or data due to your use of our site.
                    </p>
                    <p>
                      The materials on this website are provided on an "AS IS" and "AS AVAILABLE"
                      basis. Sure Lock & Key Birmingham makes no warranties, express or implied,
                      including but not limited to implied warranties of merchantability.
                    </p>
                    <p>
                      Reproduction, distribution, republication, and/or retransmission of materials
                      contained on this website are prohibited without prior written permission from
                      Sure Lock & Key Birmingham.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Limitation of Liability
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Sure Lock & Key Birmingham will not be liable for any damages, under any legal
                      theory, arising out of or in connection with your use or inability to use our
                      website, linked websites, content, or services obtained through our website.
                      This includes any direct, indirect, special, or consequential damages,
                      including but not limited to loss of revenue, profits, business, use, or data.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Indemnification
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      By using this website, you agree to indemnify and hold Sure Lock & Key
                      Birmingham harmless against any and all liability, claims, damages, and
                      expenses arising from or in connection with your use of the website or
                      services.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Revision and Errata
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The materials on this website may contain technical, typographical, or
                      photographic errors. Sure Lock & Key Birmingham does not warrant that any
                      materials on the website are accurate, complete, or current. We may make
                      changes to the materials at any time without notice.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Links
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Sure Lock & Key Birmingham is not responsible for the contents of any linked
                      third-party websites. The inclusion of any link does not imply endorsement by
                      Sure Lock & Key Birmingham. Use of any such linked website is at the user's
                      own risk.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Site Terms and Conditions of Use Modifications
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Sure Lock & Key Birmingham may revise these Terms and Conditions at any time
                      without notice. By using the website, you agree to be bound by the current
                      version of these Terms and Conditions.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Governing Law
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Any claim relating to the Sure Lock & Key Birmingham website shall be governed
                      by the laws of the state in which Sure Lock & Key Birmingham is headquartered,
                      without regard to its conflict of law provisions.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Specific Service Terms
                  </h2>

                  <div className="space-y-6 ml-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground bg-accent/10 px-3 py-2 rounded mb-3 border-l-2 border-accent">
                        Restocking Fees
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you need to return hardware, you must do so within 14 days of purchase.
                        Returned items are subject to a restocking fee that ranges from 30 to 100%
                        of the item's value, depending on the specific item and its condition upon
                        return. Please note that labor costs incurred during the installation or
                        service of the hardware are non-refundable. Restocking fees help cover the
                        costs associated with handling and restocking returned items, ensuring fair
                        business practices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground bg-accent/10 px-3 py-2 rounded mb-3 border-l-2 border-accent">
                        Warranty Services
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For products covered under supplier warranties, Sure Lock & Key Birmingham
                        will facilitate warranty claims and services. However, labor costs
                        associated with the replacement or repair of warrantied products will be
                        charged to the customer unless the defect or issue is determined to be due
                        to an error on our part. This policy ensures transparency and fairness in
                        handling warranty claims, providing clarity on customer responsibilities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground bg-accent/10 px-3 py-2 rounded mb-3 border-l-2 border-accent">
                        Payment by Card
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A 3% convenience fee will be applied to all transactions made using credit
                        or debit cards. This fee will appear on your statement as Sure Lock & Key
                        Birmingham. The card processing fee helps us cover the costs imposed by card
                        payment processing services, ensuring we can continue to offer the
                        convenience of card payments to our customers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground bg-accent/10 px-3 py-2 rounded mb-3 border-l-2 border-accent">
                        Deposits
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        All deposits paid to Sure Lock & Key Birmingham are non-refundable. This
                        policy applies to deposits for services, special orders, and custom work.
                        Non-refundable deposits help secure your commitment to the services or
                        products requested, allowing us to allocate resources and time effectively.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground bg-accent/10 px-3 py-2 rounded mb-3 border-l-2 border-accent">
                        Call Back Policy
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        By calling Sure Lock & Key Birmingham, you agree that we have the right to
                        return your call from any of our portfolio companies listed on any Sure Lock
                        & Key Birmingham websites and related DBAs. This policy ensures that you may
                        receive follow-up calls from any associated companies to provide you with
                        additional services or information.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground bg-primary/10 px-4 py-2 rounded-lg mb-4 border-l-4 border-primary">
                    Entire Agreement
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      These Terms and Conditions, along with our Privacy Policy and any other
                      relevant documents, constitute the entire agreement between you and Sure Lock
                      & Key Birmingham with respect to the website and services, superseding all
                      prior agreements and understandings.
                    </p>
                  </div>
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
