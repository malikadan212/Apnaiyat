import { motion } from "framer-motion";
import { Heart, Users, TrendingUp } from "lucide-react";

export function ApnaiyatSection() {
  const stats = [
    { icon: Heart, label: "Active Campaigns", value: "500+" },
    { icon: Users, label: "Community Members", value: "50K+" },
    { icon: TrendingUp, label: "Funds Distributed", value: "PKR 100Cr+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Apnaiyat</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A feeling of belonging, warmth, and kinship. Where every donation feels like helping family, and every giver becomes part of our community.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                {/* Stat Value */}
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-muted-foreground font-semibold text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/30 via-secondary/10 to-primary/10 border border-secondary/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-8 h-8 text-secondary mx-auto mb-2 opacity-60" />
                  <p className="text-xs font-semibold text-muted-foreground opacity-70">Donor {index + 1}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Join thousands of compassionate donors who've embraced <span className="font-semibold text-primary">Apnaiyat</span> — a movement where trust meets action, and every rupee carries the warmth of human connection. Together, we're not just raising funds; we're building a family united in the mission to help.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = "/api/login"}
            className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
          >
            Join the Apnaiyat Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
