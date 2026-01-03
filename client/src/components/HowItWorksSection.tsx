import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  Handshake,
  UserCheck,
  Scale,
  Activity,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: ShieldCheck,
      title: "Verify & Validate",
      description:
        "Every campaign undergoes rigorous KYC verification, document validation, and liveness tests before going live. Our 3-step process ensures only legitimate causes reach donors.",
      features: ["National ID & Biometric Verification", "Document Authentication", "Anti-Fraud Background Checks"],
      gradient: "from-[#005F4B] to-[#4B9C8A]",
    },
    {
      icon: Lock,
      title: "Secure Escrow Protection",
      description:
        "Your donations are held in a smart escrow vault and released only when verified milestones are achieved. Complete protection against misuse of funds.",
      features: ["Milestone-Based Fund Release", "Multi-Signature Approval", "Automatic Refund Protection"],
      gradient: "from-[#4B9C8A] to-[#005F4B]",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description:
        "Track exactly where every rupee goes with real-time financial ledgers, digital receipts, and downloadable audit reports. Full visibility into impact.",
      features: ["Live Donation Tracking", "Digital Receipt System", "Downloadable Financial Reports"],
      gradient: "from-[#005F4B] to-[#3D8B7A]",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#F6F5F0] to-white overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldCheck className="w-10 h-10 text-[#005F4B]" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#005F4B]">
              How Donations Work
            </h2>
          </div>
          <p className="text-lg md:text-xl text-[#3A5B52] leading-relaxed">
            Our secure, transparent process ensures your donations reach those who need them most
          </p>
        </motion.div>
      </div>

      {/* Zig-Zag Steps */}
      <div className="container mx-auto px-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="relative mb-20 md:mb-32 last:mb-0">
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-16 md:translate-y-20 z-0">
                  <svg
                    width="200"
                    height="120"
                    viewBox="0 0 200 120"
                    className="text-[#005F4B]/20"
                  >
                    <path
                      d={isEven ? "M20 20 Q100 80 180 20" : "M180 20 Q100 80 20 20"}
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="8,8"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              )}

              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-6`}
                >
                  {/* Step Number */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#005F4B] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="h-px bg-[#005F4B]/20 flex-1"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-[#005F4B] leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-[#3A5B52] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + featureIndex * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#4B9C8A] flex-shrink-0" />
                        <span className="text-[#3A5B52] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center gap-2 text-[#005F4B] font-semibold pt-4">
                      <span>Next Step</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>

                {/* Illustration/Icon Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 60 : -60, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}
                >
                  <div className="relative">
                    {/* Background Gradient Circle */}
                    <div 
                      className={`w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br ${step.gradient} opacity-10 absolute inset-0 -translate-x-4 -translate-y-4`}
                    ></div>
                    
                    {/* Main Icon Container */}
                    <div 
                      className={`relative w-72 h-72 md:w-88 md:h-88 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}
                    >
                      {/* Icon */}
                      <Icon className="w-32 h-32 md:w-40 md:h-40 text-white drop-shadow-lg" />
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce delay-100"></div>
                      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-300"></div>
                      <div className="absolute top-1/4 -left-8 w-4 h-4 bg-white/25 rounded-full animate-bounce delay-500"></div>
                    </div>

                    {/* Step Indicator */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-[#005F4B]/10">
                      <span className="text-[#005F4B] font-bold">Step {index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container mx-auto px-4 mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-[#005F4B] to-[#4B9C8A] rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make a Secure Donation?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Join thousands of donors who trust our transparent, secure platform
          </p>
          <button className="bg-white text-[#005F4B] px-8 py-3 rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg">
            Start Donating Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}