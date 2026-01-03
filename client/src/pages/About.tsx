import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { TeamSection } from "@/components/TeamSection";
import {
  Heart,
  Target,
  Users,
  Shield,
  Lightbulb,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/Button";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We build trust through verification, transparency, and accountability at every step.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of giving and connecting those who can help with those in need.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We use technology to solve the trust gap in charitable giving across Pakistan.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're building a community of verified donors, NGOs, and beneficiaries working together.",
    },
  ];

  const stats = [
    { value: "100%", label: "Verified Campaigns" },
    { value: "0%", label: "Platform Fees" },
    { value: "24/7", label: "Support Available" },
    { value: "100+", label: "Partner NGOs" },
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
            src="/aboutushero.png"
            alt="About us - team working together on charitable giving platform"
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
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="inline-flex items-center gap-2 bg-[#36A085]/20 backdrop-blur-sm text-[#36A085] px-4 py-2 rounded-full mb-6 border border-[#36A085]/30"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">About Us</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                className="text-[48px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.02] tracking-[-0.02em] mb-6"
              >
                Rebuilding trust in{" "}
                <span className="text-[#36A085]">charitable giving.</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="text-[18px] md:text-[20px] font-normal text-[#D9CDB9] leading-[1.4] mb-8 max-w-2xl mx-auto"
              >
                Apnaiyat was born from a simple belief: every donor deserves to know their contribution makes a real difference. We're on a mission to transform charitable giving in Pakistan.
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
                    onClick={() => {
                      const contactSection = document.getElementById('contact-section');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-[#005F4B] hover:bg-[#004a3a] text-white text-[16px] font-semibold px-8 py-4 h-12 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-[#36A085] focus:ring-offset-2 focus:ring-offset-[#003D30]"
                    aria-label="Contact the Apnaiyat team"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                {/* Secondary CTA */}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const missionSection = document.getElementById('mission-section');
                    if (missionSection) {
                      missionSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-[1.5px] border-[#D9CDB9]/60 text-[#D9CDB9] hover:bg-[#D9CDB9]/10 text-[16px] font-semibold px-8 py-4 h-12 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D9CDB9] focus:ring-offset-2 focus:ring-offset-[#003D30]"
                  aria-label="Learn about our mission and values"
                >
                  Our Mission
                </Button>
              </motion.div>

              {/* Microtrust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-[13px] text-[#D9CDB9]/70 mb-10"
              >
                Founded in Pakistan • Trusted by thousands • Building the future of giving
              </motion.p>

              {/* Company Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-6 text-[#D9CDB9]/60 text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>100% verified campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Zero platform fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>Complete transparency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#36A085] rounded-full"></div>
                  <span>24/7 support</span>
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
                    ↑ Learn more about our story
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                Creating a World Where Every Donation Counts
              </h2>
              <p className="text-muted-foreground mb-4">
                Pakistan has a rich tradition of charity and giving. Yet, trust in
                charitable organizations has eroded due to lack of transparency and
                accountability. Apnaiyat bridges this gap.
              </p>
              <p className="text-muted-foreground">
                We've built a platform where every campaign is verified, every rupee
                is tracked, and every donor can see the real impact of their
                generosity. Together, we're restoring faith in giving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 text-center border border-primary/10"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Apnaiyat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Have questions? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-5 h-5" />
                <span>contact@apnaiyat.pk</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                <span>+92 300 0329373</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
            <a 
              href="mailto:contact@apnaiyat.pk?subject=Inquiry%20about%20Apnaiyat&body=Hello%20Apnaiyat%20team%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20your%20platform.%0A%0AThank%20you!"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
