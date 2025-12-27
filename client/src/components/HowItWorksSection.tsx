import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  Handshake,
  UserCheck,
  Scale,
  Activity,
} from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function HowItWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const steps = [
    {
      icon: ShieldCheck,
      title: "Verify & Validate",
      description:
        "Every campaign is rigorously checked with KYC, documents, and liveness tests before launch.",
      gradient: "from-[#005F4B] to-[#4B9C8A]",
    },
    {
      icon: Lock,
      title: "Secure Escrow",
      description:
        "Funds are held safely in escrow and released only against approved milestones with proof.",
      gradient: "from-[#4B9C8A] to-[#005F4B]",
    },
    {
      icon: Eye,
      title: "Total Transparency",
      description:
        "Donors see where every rupee goes through real-time updates and impact tracking.",
      gradient: "from-[#005F4B] to-[#3D8B7A]",
    },
    {
      icon: UserCheck,
      title: "Fraud Prevention",
      description:
        "Strong identity checks, beneficiary validation, and continuous monitoring reduce fake campaigns.",
      gradient: "from-[#3D8B7A] to-[#005F4B]",
    },
    {
      icon: Handshake,
      title: "Trust for All",
      description:
        "Donors, NGOs, CSR teams, and banks operate on one secure, auditable system.",
      gradient: "from-[#005F4B] to-[#4B9C8A]",
    },
    {
      icon: Scale,
      title: "Regulator Ready",
      description:
        "Built with AML, audit trails, and compliance workflows that meet SECP and banking standards.",
      gradient: "from-[#4B9C8A] to-[#005F4B]",
    },
    {
      icon: Activity,
      title: "Real-Time Impact",
      description:
        "Track campaign progress and see the direct impact of your donations as they happen.",
      gradient: "from-[#005F4B] to-[#3D8B7A]",
    },
  ];

  const totalCards = steps.length;
  const cardWidth = isMobile ? 200 : 290;
  const overlap = isMobile ? 160 : 120;

  // Calculate spread positions for desktop
  const getSpreadX = (index: number) => {
    const totalWidth = (totalCards - 1) * (cardWidth - overlap);
    const startX = -totalWidth / 2;
    return startX + index * (cardWidth - overlap);
  };

  return (
    <section className="relative w-full py-16 md:py-32 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary">
              How It Works
            </h2>
          </div>

          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
            Apnaiyat ensures your donations are secure, verified, and impactful.
            Here's our simple, trust-building process.
          </p>
        </motion.div>

        {/* Desktop Card Deck */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative h-[480px] w-full flex justify-center items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{
                    x: 0,
                    y: index * 4,
                    scale: 1,
                    rotateZ: index * 0.5,
                  }}
                  whileInView={{
                    x: getSpreadX(index),
                    y: 0,
                    scale: 1,
                    rotateZ: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  animate={
                    isHovered
                      ? {
                          y: -40,
                          zIndex: 50,
                        }
                      : {
                          y: 0,
                          zIndex: index + 1,
                        }
                  }
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="absolute cursor-pointer"
                  style={{
                    zIndex: isHovered ? 50 : index + 1,
                  }}
                >
                  {/* Card */}
                  <motion.div
                    animate={
                      isHovered
                        ? { width: 300, height: 440 }
                        : { width: 260, height: 400 }
                    }
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br ${step.gradient} ${
                      isHovered ? "shadow-3xl" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col p-7">
                      {/* Step Number */}
                      <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/85 text-sm leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-6 px-2 snap-x snap-mandatory scrollbar-hide">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="snap-center flex-shrink-0"
                >
                  {/* Card */}
                  <div
                    className={`relative w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-gradient-to-br ${step.gradient}`}
                  >
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col p-6">
                      {/* Step Number */}
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/85 text-sm leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}