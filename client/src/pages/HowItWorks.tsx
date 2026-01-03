import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/FooterSection";
import {
  ShieldCheck,
  Lock,
  Eye,
  UserCheck,
  Handshake,
  Scale,
  Activity,
  ArrowRight,
  CheckCircle,
  Heart,
  DollarSign,
  TrendingUp,
  Users,
  FileText,
  Camera,
  BarChart3,
  Wallet,
  CreditCard,
  PieChart,
} from "lucide-react";
import { Button } from "@/components/Button";

export default function HowItWorks() {
  const process = [
    {
      icon: UserCheck,
      title: "Campaign Verification",
      description:
        "Every campaign creator undergoes rigorous KYC verification including identity checks, document validation, and liveness tests. We verify beneficiary details and ensure the cause is genuine.",
      details: [
        "Government ID verification",
        "Address proof validation",
        "Beneficiary documentation",
        "Liveness detection",
      ],
    },
    {
      icon: Lock,
      title: "Secure Escrow System",
      description:
        "Donations are held in a secure escrow account, not directly transferred to campaign creators. Funds are released only when verified milestones are achieved.",
      details: [
        "Bank-grade security",
        "Milestone-based releases",
        "Proof of utilization required",
        "Automated tracking",
      ],
    },
    {
      icon: Eye,
      title: "Transparent Tracking",
      description:
        "Donors can track their contributions in real-time. Every rupee is accounted for with detailed reports showing exactly how funds are being utilized.",
      details: [
        "Real-time updates",
        "Photo/video proof",
        "Expense breakdowns",
        "Impact metrics",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Fraud Prevention",
      description:
        "Our multi-layered fraud prevention system uses AI and manual reviews to detect and prevent fake campaigns before they can harm donors.",
      details: [
        "AI-powered detection",
        "Manual review process",
        "Community reporting",
        "Continuous monitoring",
      ],
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description:
        "Built with AML compliance, audit trails, and workflows that meet SECP and banking standards. Your donations are legally protected.",
      details: [
        "SECP compliant",
        "AML/CFT protocols",
        "Complete audit trails",
        "Tax documentation",
      ],
    },
    {
      icon: Activity,
      title: "Impact Reporting",
      description:
        "See the real difference your donation makes. Campaign creators provide regular updates with photos, videos, and detailed progress reports.",
      details: [
        "Progress updates",
        "Beneficiary stories",
        "Outcome tracking",
        "Long-term impact",
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
          {/* Base gradient - fallback if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003D30] via-[#004a3a] to-[#005F4B]" />
          {/* Image with increased opacity for better visibility */}
          <img
            src="/howitworkshero.png"
            alt="Transparent process illustration showing trust and verification in charitable giving"
            className="absolute inset-0 w-full h-full object-cover opacity-70 saturate-[0.9]"
          />
          {/* Dark overlay - increased for better text visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(8,45,36,0.75), rgba(8,45,36,0.4))"
            }}
          />
          {/* Additional text contrast overlay */}
          <div className="absolute inset-0 bg-black/20" />
          
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
                transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.02] tracking-[-0.02em] mb-6"
              >
                Trust through{" "}
                <span className="text-[#36A085]">transparency.</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="text-[18px] md:text-[20px] font-normal text-[#D9CDB9] leading-[1.4] mb-8 max-w-2xl mx-auto"
              >
                Learn how Apnaiyat ensures every donation is secure, verified, and creates real impact. Our six-pillar approach builds trust at every step.
              </motion.p>

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
                    aria-label="Start donating with Apnaiyat"
                  >
                    Start Donating
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Secondary CTA */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[1.5px] border-[#D9CDB9]/60 text-[#D9CDB9] hover:bg-[#D9CDB9]/10 text-[16px] font-semibold px-8 py-4 h-12 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CDB9] focus:ring-offset-2 focus:ring-offset-[#003D30]"
                  aria-label="Register your NGO with Apnaiyat"
                >
                  Register as NGO
                </Button>
              </motion.div>

              {/* Microtrust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-[13px] text-[#D9CDB9]/70 mb-10"
              >
                Six-pillar security • Complete transparency • SECP compliant
              </motion.p>

              {/* Process Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-6 text-[#D9CDB9]/60 text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>KYC verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Secure escrow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Real-time tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Impact reporting</span>
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
                    ↑ Discover our transparent process
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Floating Components */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating donation icons */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-12 h-12 bg-[#36A085]/10 rounded-full flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-[#36A085]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-16 w-10 h-10 bg-[#005F4B]/10 rounded-full flex items-center justify-center"
          >
            <DollarSign className="w-5 h-5 text-[#005F4B]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-96 left-20 w-14 h-14 bg-[#4B9C8A]/10 rounded-full flex items-center justify-center"
          >
            <TrendingUp className="w-7 h-7 text-[#4B9C8A]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-96 right-12 w-11 h-11 bg-[#36A085]/10 rounded-full flex items-center justify-center"
          >
            <Users className="w-6 h-6 text-[#36A085]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-40 left-16 w-13 h-13 bg-[#005F4B]/10 rounded-full flex items-center justify-center"
          >
            <FileText className="w-6 h-6 text-[#005F4B]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 12, 0],
              x: [0, 8, 0]
            }}
            transition={{ 
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-80 right-32 w-9 h-9 bg-[#4B9C8A]/10 rounded-full flex items-center justify-center"
          >
            <Camera className="w-5 h-5 text-[#4B9C8A]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -22, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute bottom-80 right-20 w-12 h-12 bg-[#36A085]/10 rounded-full flex items-center justify-center"
          >
            <BarChart3 className="w-6 h-6 text-[#36A085]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 16, 0],
              x: [0, -12, 0]
            }}
            transition={{ 
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-60 left-32 w-10 h-10 bg-[#005F4B]/10 rounded-full flex items-center justify-center"
          >
            <Wallet className="w-5 h-5 text-[#005F4B]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -14, 0],
              rotate: [0, 7, 0]
            }}
            transition={{ 
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
            className="absolute bottom-60 left-40 w-11 h-11 bg-[#4B9C8A]/10 rounded-full flex items-center justify-center"
          >
            <CreditCard className="w-6 h-6 text-[#4B9C8A]" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 18, 0],
              x: [0, 6, 0]
            }}
            transition={{ 
              duration: 9.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.2
            }}
            className="absolute top-32 right-40 w-13 h-13 bg-[#36A085]/10 rounded-full flex items-center justify-center"
          >
            <PieChart className="w-6 h-6 text-[#36A085]" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {process.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  {/* Icon Card */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-xl">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full mb-3">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              Ready to Experience Trusted Giving?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join the movement for transparent charitable giving in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Donating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Register as NGO
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
