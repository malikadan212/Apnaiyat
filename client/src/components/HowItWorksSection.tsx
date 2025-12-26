import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Eye, Handshake } from "lucide-react";
import { Button } from "./Button";

export function HowItWorksSection() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Verify & Validate",
      description: "Every campaign is rigorously checked with KYC, documents, and liveness tests before launch.",
    },
    {
      icon: Lock,
      title: "Secure Donations",
      description: "Funds are held in escrow and released only against proven milestones.",
    },
    {
      icon: Eye,
      title: "Total Transparency",
      description: "Track every rupee in real-time with updates and audit trails.",
    },
    {
      icon: Handshake,
      title: "Build Trust",
      description: "Fraud prevention and regulator-ready compliance for donors, NGOs, and more.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ x: [0, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4B9C8A" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#005F4B" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">
              How It Works
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Apnaiyat ensures your donations are secure, verified, and impactful. Here's our simple, trust-building process.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            onClick={() => window.location.href = "/api/login"}
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg px-8 md:px-10"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
