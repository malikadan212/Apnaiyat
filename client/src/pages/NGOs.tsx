import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/FooterSection";
import { Carousel3D } from "@/components/Carousel3D";
import {
  Building2,
  Shield,
  TrendingUp,
  Users,
  FileCheck,
  Banknote,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Globe,
  UserCheck,
  Heart,
  Eye,
} from "lucide-react";
import { Button } from "@/components/Button";

export default function NGOs() {
  // Updated benefits for Carousel3D format
  const benefits = [
    {
      icon: Shield,
      title: "Build Trust",
      description: "Verified badge and transparent reporting builds donor confidence in your organization.",
      features: [
        "KYC Verification Process",
        "Transparent Reporting Tools", 
        "Donor Confidence Building"
      ],
    },
    {
      icon: Banknote,
      title: "Secure Funding",
      description: "Receive donations through secure escrow with milestone-based fund releases.",
      features: [
        "Escrow Protection System",
        "Milestone-Based Releases",
        "Secure Payment Processing"
      ],
    },
    {
      icon: BarChart3,
      title: "Impact Dashboard",
      description: "Showcase your impact with detailed analytics and progress tracking tools.",
      features: [
        "Real-Time Analytics",
        "Progress Tracking Tools",
        "Impact Visualization"
      ],
    },
    {
      icon: Users,
      title: "Donor Network",
      description: "Access a growing community of verified donors looking to support genuine causes.",
      features: [
        "Verified Donor Community",
        "Cause Matching System",
        "Donor Engagement Tools"
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Built-in AML compliance and audit trails that meet SECP and banking standards.",
      features: [
        "AML Compliance Built-in",
        "SECP Standard Compliance",
        "Automated Audit Trails"
      ],
    },
    {
      icon: Globe,
      title: "Wider Reach",
      description: "Expand your reach to donors across Pakistan and internationally.",
      features: [
        "National Donor Network",
        "International Reach",
        "Multi-Language Support"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Full-screen Background with enhanced overlays */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-[#003D30]" />
          {/* Image with reduced opacity and saturation via filter */}
          <img
            src="/ngohero.png"
            alt="NGO workers and volunteers helping communities, symbolizing partnership and impact"
            className="absolute inset-0 w-full h-full object-cover opacity-50 saturate-[0.8]"
          />
          {/* Dark overlay - enhanced gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(8,45,36,0.72), rgba(176,166,151,0.18))"
            }}
          />
          {/* Subtle noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.02] tracking-[-0.02em] mb-6"
              >
                Amplify your impact.{" "}
                <span className="text-[#36A085]">Build trust.</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                className="text-[18px] md:text-[20px] font-normal text-[#D9CDB9] leading-[1.4] mb-8 max-w-2xl mx-auto"
              >
                Partner with Apnaiyat to reach verified donors, streamline fundraising, and showcase your organization's real impact with complete transparency and security.
              </motion.p>

              {/* Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="bg-[#36A085]/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[#36A085]/20 max-w-2xl mx-auto"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#36A085]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#36A085]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Why NGOs Choose Apnaiyat</h3>
                    <p className="text-[#D9CDB9]/90 text-sm leading-relaxed">
                      Join organizations already using our platform to receive secure, milestone-based funding while maintaining complete transparency with donors. No hidden fees, no complex processes—just genuine connections between your cause and people who care.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              >
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#005F4B] hover:bg-[#004a3a] text-white text-[16px] font-semibold px-8 py-4 h-12 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-[#36A085] focus:ring-offset-2 focus:ring-offset-[#003D30]"
                    aria-label="Register your NGO with Apnaiyat"
                  >
                    Register Your NGO
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Secondary CTA */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[1.5px] border-[#D9CDB9]/60 text-[#D9CDB9] hover:bg-[#D9CDB9]/10 text-[16px] font-semibold px-8 py-4 h-12 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CDB9] focus:ring-offset-2 focus:ring-offset-[#003D30]"
                  aria-label="Learn more about our NGO partnership program"
                >
                  Learn More
                </Button>
              </motion.div>

              {/* Microtrust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-[13px] text-[#D9CDB9]/70 mb-6"
              >
                Verified partnerships • Secure escrow • Real-time impact tracking • SECP compliant
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-6 text-[#D9CDB9]/60 text-xs mb-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Minimal platform fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Milestone-based funding</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Automated reporting</span>
                </div>
              </motion.div>

              {/* Subtle CTA pulse after 2s */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    delay: 2.5,
                    duration: 1.5,
                    repeat: 2,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  <span className="text-[12px] text-[#36A085] font-medium">
                    ↑ Start your partnership journey today
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - 3D Carousel */}
      <section className="relative py-16 overflow-hidden">
        {/* LAYER 1: Base beige */}
        <div className="absolute inset-0 bg-[#F6F5F0]" />
        
        {/* LAYER 2: Large organic blob shape behind carousel */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Main large rounded blob - off-center behind active card */}
          <ellipse 
            cx="720" 
            cy="380" 
            rx="420" 
            ry="280" 
            fill="rgba(15, 90, 71, 0.06)"
          />
          {/* Secondary smaller blob - top left */}
          <ellipse 
            cx="180" 
            cy="120" 
            rx="200" 
            ry="140" 
            fill="rgba(15, 90, 71, 0.03)"
          />
          {/* Tertiary blob - bottom right */}
          <ellipse 
            cx="1260" 
            cy="580" 
            rx="180" 
            ry="120" 
            fill="rgba(15, 90, 71, 0.025)"
          />
          {/* Soft diagonal wave */}
          <path 
            d="M0 500 Q360 420 720 480 T1440 400 L1440 700 L0 700 Z" 
            fill="rgba(15, 90, 71, 0.025)"
          />
        </svg>
        
        {/* LAYER 3: Very faint noise/grain */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0F5A47] mb-3 tracking-[-0.02em]">
              Why Partner with Apnaiyat?
            </h2>
            <p className="text-[#3A5B52] max-w-2xl mx-auto text-[16px] md:text-[18px] leading-[1.45]">
              We provide the tools and trust framework your organization needs to succeed.
            </p>
          </motion.div>

          {/* 3D Carousel */}
          <Carousel3D items={benefits} autoPlay={false} autoPlayInterval={12000} />
        </div>
      </section>

      {/* Getting Started Section - Zig-Zag Layout */}
      <section className="relative w-full py-12 md:py-16 bg-gradient-to-b from-[#F6F5F0] to-white overflow-hidden">
        {/* Section Header */}
        <div className="container mx-auto px-4 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#005F4B] mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-base md:text-lg text-[#3A5B52] leading-relaxed">
              Three simple steps to start receiving verified donations
            </p>
          </motion.div>
        </div>

        {/* Zig-Zag Steps - Compact Version */}
        <div className="container mx-auto px-4 max-w-6xl">
          {[
            {
              icon: UserCheck,
              title: "Register & Verify",
              description: "Complete KYC verification with your organization documents and get verified status. Our thorough process ensures donor trust.",
              features: ["Organization Documentation", "KYC Verification Process", "Verified Badge Status"],
              gradient: "from-[#005F4B] to-[#4B9C8A]",
            },
            {
              icon: Heart,
              title: "Create Campaigns",
              description: "Launch fundraising campaigns with clear goals, milestones, and beneficiary details. Set transparent objectives for donors.",
              features: ["Campaign Goal Setting", "Milestone Planning", "Beneficiary Documentation"],
              gradient: "from-[#4B9C8A] to-[#005F4B]",
            },
            {
              icon: BarChart3,
              title: "Receive & Report",
              description: "Receive funds against milestones and share progress updates with donors. Maintain transparency throughout the process.",
              features: ["Milestone-Based Funding", "Progress Updates", "Donor Communication"],
              gradient: "from-[#005F4B] to-[#3D8B7A]",
            },
          ].map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative mb-12 md:mb-16 last:mb-0">
                {/* Connecting Line (except for last item) */}
                {index < 2 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-8 md:translate-y-10 z-0">
                    <svg
                      width="120"
                      height="80"
                      viewBox="0 0 120 80"
                      className="text-[#005F4B]/20"
                    >
                      <path
                        d={isEven ? "M20 20 Q60 50 100 20" : "M100 20 Q60 50 20 20"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                )}

                <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-4`}
                  >
                    {/* Step Number */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#005F4B] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="h-px bg-[#005F4B]/20 flex-1"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#005F4B] leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#3A5B52] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-[#4B9C8A] rounded-full flex-shrink-0"></div>
                          <span className="text-[#3A5B52] text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Arrow */}
                    {index < 2 && (
                      <div className="flex items-center gap-2 text-[#005F4B] font-semibold pt-2 text-sm">
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>

                  {/* Illustration/Icon Side - Compact */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}
                  >
                    <div className="relative">
                      {/* Background Gradient Circle - Smaller */}
                      <div 
                        className={`w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${step.gradient} opacity-8 absolute inset-0 -translate-x-2 -translate-y-2`}
                      ></div>
                      
                      {/* Main Icon Container - Compact */}
                      <div 
                        className={`relative w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}
                      >
                        {/* Icon */}
                        <Icon className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-lg" />
                        
                        {/* Floating Elements - Smaller */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-100"></div>
                        <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute top-1/4 -left-4 w-2 h-2 bg-white/25 rounded-full animate-bounce delay-500"></div>
                      </div>

                      {/* Step Indicator - Compact */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-md border border-[#005F4B]/10">
                        <span className="text-[#005F4B] font-semibold text-sm">Step {index + 1}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Grow Your Impact?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join verified NGOs and charities already using Apnaiyat to connect
              with donors and create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Register Now
                <Building2 className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
