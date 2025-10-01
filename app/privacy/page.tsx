import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Your privacy is important to us. Learn how we collect, use, and protect your
                information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground mb-8">Last modified: Ocrober 2025</p>

              <div className="space-y-8">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Sure Lock & Key Birmingham
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    Sure Lock & Key Birmingham ("Company" or "We") respects your privacy and is
                    committed to protecting it through our compliance with this policy.
                  </p>
                </div>

                <div>
                  <p className="text-foreground leading-relaxed mb-6">
                    This policy describes the types of information we may collect from you or that
                    you may provide when you visit the website{' '}
                    <a href="/" className="text-primary">
                      birmingham.surelockkey.com
                    </a>{' '}
                    (our "Website") and our practices for collecting, using, maintaining,
                    protecting, and disclosing that information.
                  </p>

                  <div className="bg-accent/10 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">
                      This policy applies to information we collect:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>On this website</li>
                      <li>
                        In email, text, and other electronic messages between you and this website
                      </li>
                    </ul>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    Please read this policy carefully to understand our policies and practices
                    regarding your information and how we will treat it. If you do not agree with
                    our policies and practices, your choice is not to use the Services.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Information We Collect About You And How We Collect It
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We collect several types of information from and about users of our Website,
                    including information by which you may be personally identified, such as name,
                    postal address, email address, and telephone number ("personal information").
                  </p>

                  <div className="bg-white/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-accent mb-3">
                      We collect this information:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Directly from you when you provide it to us</li>
                      <li>
                        Automatically, as you navigate through the site (usage details, IP address,
                        and information collected through cookies)
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-accent/10 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-accent mb-3">
                      The information we collect on or through our Website may include:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>Information that you provide us by filling in the form on our website</li>
                      <li>Details of your visits to our site and the resources that you access</li>
                      <li>Records and copies of your correspondence, if you contact us</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Information We Collect Through Automatic Data Collection Technologies
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We may use automatic data collection technologies to collect certain
                    information:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                    <li>About your equipment, browsing actions, and patterns</li>
                    <li>
                      Details of your visits to our website (traffic data, location data, logs, and
                      other communication data)
                    </li>
                    <li>
                      About your computer and internet connection (including your IP address,
                      operating system, and browser type)
                    </li>
                  </ul>

                  <p className="text-foreground leading-relaxed">
                    This information may include personal information, or we may associate it with
                    personal information we collect in other ways or receive from third parties. It
                    will help us to improve our Website and to deliver a better and more
                    personalized service.
                  </p>

                  <div className="bg-white/50 p-4 rounded-lg mt-4">
                    <p className="text-foreground leading-relaxed">
                      Cookies and other tracking technologies may be used in connection with
                      personal information.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We use information that we collect about you or that you provide to us,
                    including personal information:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>To present the website and its services and contents to you</li>
                    <li>To provide you with the information that you requested from us</li>
                    <li>
                      To notify you about changes to our website or any products or services we
                      offer or provide through it
                    </li>
                    <li>To fulfill any other purpose for which you provide it</li>
                    <li>
                      To carry out our obligations and enforce our rights arising from any contracts
                      entered into between you and us
                    </li>
                    <li>In any other way, we may describe when you provide the information</li>
                    <li>For any other purpose with your consent</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Disclosure Of Your Information
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We may disclose aggregated information about our users and information that does
                    not identify any individual without restriction. We may disclose personal
                    information that we collect or you provide as described in this privacy policy:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>
                      To contractors, service providers, and other third parties we use to support
                      our business, such as website hosting, data analysis, IT services and
                      infrastructure, customer service, email delivery, and other similar services
                    </li>
                    <li>
                      To a third party (whether affiliated or unaffiliated with us) in the event of
                      any reorganization, merger, sale, joint venture, assignment, transfer, or
                      other disposition of all or any portion of our business, assets, or stock
                      (including in connection with any bankruptcy or similar proceeding)
                    </li>
                    <li>To fulfill the purpose for which you provide it</li>
                    <li>
                      For any other purpose disclosed by us when you provide the information with
                      your consent
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Choices About How We Use And Disclose Your Information
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    We strive to provide you with choices regarding the information you provide to
                    us.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    We have created mechanisms to provide you with the following control over your
                    information:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-accent mb-2">
                        Tracking Technologies
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        For purposes of advertising and other behavioral tracking, our systems
                        recognize "do not track" signals from your browser. However, the Website may
                        still utilize cookies even if you have enabled Do Not Track in your browser,
                        in order to track session data that is critical to the Website's
                        functionality, such as verifying a user's identity.
                      </p>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-accent mb-2">Promotional Offers</h3>
                      <p className="text-foreground leading-relaxed">
                        If you do not wish to have your contact information used by the company to
                        promote our own or third parties' products or services, you can opt out by
                        sending us an email stating your request to support@surelockkey.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Changes To Our Privacy Policy
                  </h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    It is our policy to post any changes we make to our privacy policy on this page
                    with a notice that the privacy policy has been updated on the Website home page.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    If we make material changes to how we treat your personal information, we will
                    notify you through a notice on the website home page, through email, and through
                    an alert when you next log in to the website. The date the privacy policy was
                    last revised is identified at the top of the page.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
                  <p className="text-foreground leading-relaxed">
                    To ask questions or comment about this privacy policy and our privacy practices,
                    contact us at{' '}
                    <a
                      href="mailto:support@surelockkey.com"
                      className="text-primary hover:underline font-semibold">
                      support@surelockkey.com
                    </a>
                  </p>
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
