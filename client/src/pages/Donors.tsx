import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/FooterSection";
import { Carousel3D } from "@/components/Carousel3D";
import {
  Heart,
  Shield,
  Eye,
  Users,
  ArrowRight,
  Wallet,
  Bell,
  BarChart3,
  UserCheck,
  FileSearch,
  Lock,
  MapPin,
  Mail,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/Button";

export default function Donors() {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Campaigns",
      description:
        "Every campaign undergoes rigorous KYC verification and document checks before going live.",
      features: [
        "National ID & Biometric Verification",
        "On-ground Community Validation",
        "Anti-Fraud Background Checks"
      ],
      watermarkIcon: UserCheck, 
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description:
        "Track exactly where your donation goes with real-time updates and milestone reports.",
      features: [
        "Live Donation Tracking",
        "Vendor Receipt Uploads",
        "Downloadable Financial Statements"
      ],
      watermarkIcon: FileSearch,
    },
    {
      icon: Wallet,
      title: "Secure Escrow",
      description:
        "Your funds are held safely and released only when verified milestones are achieved.",
      features: [
        "Milestone-Based Fund Release",
        "Multi-Signature Approval",
        "Automatic Refund Protection"
      ],
      watermarkIcon: Lock,
    },
    {
      icon: BarChart3,
      title: "Impact Tracking",
      description:
        "See the real difference your contribution makes with detailed impact metrics.",
      features: [
        "GPS Project Geotagging",
        "Before & After Photo Evidence",
        "Visual Completion Timelines"
      ],
      watermarkIcon: MapPin,
    },
    {
      icon: Bell,
      title: "Regular Updates",
      description:
        "Receive notifications about campaign progress and how your donation is being used.",
      features: [
        "Instant Email & WhatsApp Alerts",
        "Monthly Impact Newsletters",
        "Direct Campaigner Q&A"
      ],
      watermarkIcon: Mail,
    },
    {
      icon: Users,
      title: "Community Trust",
      description:
        "Join thousands of donors who trust Apnaiyat for transparent charitable giving.",
      features: [
        "5,000+ Active Donors",
        "Verified NGO Partners",
        "24/7 Support Channel"
      ],
      watermarkIcon: HeartHandshake,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F5F0]">
      {/* Subtle grain texture overlay for entire page */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <Navigation />

      {/* Hero Section - Refined */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Full-screen Background with enhanced overlays */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-[#003D30]" />
          {/* Image with reduced opacity and saturation via filter */}
          <img
            src="/donorhero.png"
            alt="Two hands reaching toward each other over a dark green background, symbolizing donation and connection"
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
              {/* Headline - refined size */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.02] tracking-[-0.02em] mb-4 sm:mb-6"
              >
                Give with confidence.{" "}
                <span className="text-[#36A085]">See the impact.</span>
              </motion.h1>

              {/* Subhead - warm beige color */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl font-normal text-[#D9CDB9] leading-[1.4] mb-6 sm:mb-8 max-w-xl mx-auto px-4 sm:px-0"
              >
                Donate to verified campaigns and track your contribution in real
                time.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 px-4 sm:px-0"
              >
                {/* Primary CTA - with hover lift effect */}
                <motion.div
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#005F4B] hover:bg-[#004a3a] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 h-11 sm:h-12 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-[#36A085] focus:ring-offset-2 focus:ring-offset-[#003D30] w-full sm:w-auto"
                    aria-label="Explore donation campaigns"
                  >
                    Explore campaigns
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Secondary CTA - ghost/outline */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[1.5px] border-[#D9CDB9]/60 text-[#D9CDB9] hover:bg-[#D9CDB9]/10 text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 h-11 sm:h-12 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CDB9] focus:ring-offset-2 focus:ring-offset-[#003D30] w-full sm:w-auto"
                  aria-label="Learn how the donation process works"
                >
                  How it works
                </Button>
              </motion.div>

              {/* Microtrust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="text-[13px] text-[#D9CDB9]/70 mb-10"
              >
                Verified NGOs • Secure payments • 30-day impact reports
              </motion.p>

              {/* Trust Metrics - refined */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 px-4 sm:px-0"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-[#D9CDB9]/80 mt-1">
                    Verified projects
                  </div>
                </div>
                <div className="w-px bg-[#D9CDB9]/20 h-12 self-center hidden sm:block" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-[#D9CDB9]/80 mt-1">
                    Donation tracking
                  </div>
                </div>
                <div className="w-px bg-[#D9CDB9]/20 h-12 self-center hidden sm:block" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">
                    0%
                  </div>
                  <div className="text-xs sm:text-sm text-[#D9CDB9]/80 mt-1">
                    No hidden fees
                  </div>
                </div>
              </motion.div>

              {/* Subtle CTA pulse after 2s */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-8"
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
                    ↑ Start your first donation today
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
              Why donate through Apnaiyat?
            </h2>
            <p className="text-[#3A5B52] max-w-2xl mx-auto text-[16px] md:text-[18px] leading-[1.45]">
              Trust and transparency at the heart of charitable giving.
            </p>
          </motion.div>

          {/* Pass the updated benefits array with features and watermark icons */}
          <Carousel3D items={benefits} autoPlay={false} autoPlayInterval={10000} />
        </div>
      </section>

      {/* How Donating Works Section - Optimized for Large Screens */}
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
              How Donating Works
            </h2>
            <p className="text-base md:text-lg text-[#3A5B52] leading-relaxed">
              Three simple steps to make a verified, trackable donation
            </p>
          </motion.div>
        </div>

        {/* Zig-Zag Steps - Compact Version */}
        <div className="container mx-auto px-4 max-w-6xl">
          {[
            {
              icon: Eye,
              title: "Browse Campaigns",
              description: "Explore verified campaigns across education, healthcare, and emergency relief. Every campaign is vetted through our KYC process.",
              features: ["Verified NGO Partners", "Document Authentication", "Community Validation"],
              gradient: "from-[#005F4B] to-[#4B9C8A]",
            },
            {
              icon: Heart,
              title: "Choose & Donate",
              description: "Select a cause close to your heart and donate securely through our escrow-protected platform with multiple payment options.",
              features: ["Secure Payment Gateway", "Escrow Protection", "Multiple Payment Options"],
              gradient: "from-[#4B9C8A] to-[#005F4B]",
            },
            {
              icon: BarChart3,
              title: "Track Impact",
              description: "Follow your donation's journey with real-time updates, progress photos, and detailed impact reports showing your difference.",
              features: ["Real-Time Updates", "Progress Photos", "Impact Metrics"],
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
      <section 
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0F5A47 0%, #1F7A60 100%)"
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#F8F7F3] mb-4 tracking-[-0.02em]">
              Ready to make a difference?
            </h2>
            <p className="text-[#F8F7F3]/80 max-w-2xl mx-auto mb-8 text-[16px] md:text-[18px] leading-[1.45]">
              Join thousands of donors who trust Apnaiyat for transparent,
              impactful charitable giving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-[#F8F7F3] text-[#0F5A47] hover:bg-[#F8F7F3]/90 text-[16px] font-semibold px-8 h-12 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F8F7F3] focus:ring-offset-2 focus:ring-offset-[#0F5A47]"
                  aria-label="Start donating now"
                >
                  Start donating
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <Button
                size="lg"
                variant="outline"
                className="border-[1.5px] border-[#F8F7F3]/50 text-[#F8F7F3] hover:bg-[#F8F7F3]/10 text-[16px] font-semibold px-8 h-12 focus:outline-none focus:ring-2 focus:ring-[#F8F7F3] focus:ring-offset-2 focus:ring-offset-[#0F5A47]"
                aria-label="Create a new account"
              >
                Create account
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}