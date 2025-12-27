import { motion } from "framer-motion";

// Placeholder images - replace with actual images later
const leftImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=300&h=300&fit=crop&q=80",
];

const rightImages = [
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=300&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=300&fit=crop&q=80",
];

export function ApnaiyatSection() {
  const leftImageVariants = {
    hidden: { opacity: 0, x: -150, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 150, rotate: 10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-16">
          {/* Left Images Column */}
          <div className="hidden md:flex flex-col gap-4 lg:gap-6">
            {leftImages.map((src, index) => (
              <motion.div
                key={`left-${index}`}
                custom={index}
                variants={leftImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className={`relative ${index === 0 ? "ml-8" : "mr-8"}`}
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={src}
                    alt="Community member"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-lg px-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
              Be Part Of A Movement Where
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
              Every Rupee
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Reaches Those
              </span>
              <br />
              In Need
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
              Apnaiyat means belonging. We're building a community where donors
              and recipients connect with trust, transparency, and the warmth of
              family.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/auth")}
              className="px-8 md:px-10 py-3 md:py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full shadow-lg transition-all duration-300"
            >
              Join Apnaiyat Now!
            </motion.button>
          </motion.div>

          {/* Right Images Column */}
          <div className="hidden md:flex flex-col gap-4 lg:gap-6">
            {rightImages.map((src, index) => (
              <motion.div
                key={`right-${index}`}
                custom={index}
                variants={rightImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className={`relative ${index === 0 ? "mr-8" : "ml-8"}`}
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={src}
                    alt="Community member"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Images - Show below text on small screens */}
        <div className="md:hidden mt-12">
          <div className="flex justify-center gap-4 flex-wrap">
            {[...leftImages, ...rightImages].map((src, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-24 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-white"
              >
                <img
                  src={src}
                  alt="Community member"
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}