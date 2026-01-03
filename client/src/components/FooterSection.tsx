import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

export function FooterSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={sectionRef} className="relative w-full overflow-hidden">
      {/* CTA Section with Background Image */}
      <div className="px-4 md:px-8 pt-8">
        <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3rem]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
              alt="Happy children smiling"
              className="w-full h-full object-cover"
              width={1920}
              height={400}
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-8 pb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-12 italic">
              Connect with us on social media and stay engaged with our updates.
              Your feedback and enthusiasm are crucial to our{" "}
              <span className="inline-block px-4 py-1 bg-secondary rounded-full text-white font-bold not-italic">
                success
              </span>
            </h2>

            {/* Contact Button - Positioned at bottom center, overlapping */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                (window.location.href = "mailto:contact@apnaiyat.org")
              }
              className="absolute left-1/2 -translate-x-1/2 -bottom-10 inline-flex flex-col items-center justify-center w-32 h-32 bg-primary text-white font-bold rounded-full shadow-2xl border-4 border-background hover:bg-primary/90 transition-all"
            >
              <span className="text-3xl mb-1">👋</span>
              <span className="text-xs tracking-wider font-bold">
                CONTACT US
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Card Container */}
      <div className="bg-background px-4 md:px-8 pb-8">
        <div className="border-2 border-foreground/10 rounded-3xl overflow-hidden shadow-xl">
          {/* Footer Links Section */}
          <div className="bg-background pt-16 px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img 
                  src="/favicon.png" 
                  alt="Apnaiyat Logo" 
                  className="h-8 w-auto object-contain"
                />
                <span className="font-sans font-bold text-lg text-primary">
                  Apnaiyat
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 border-t border-foreground/10">
              <p className="text-foreground/70 text-sm max-w-sm">
                Your contribution is more than just a pledge—it's a step towards
                making Apnaiyat a reality. Together, we can achieve something
                amazing.
              </p>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-6 h-6 rounded-full border-2 border-secondary flex items-center justify-center">
                  <ArrowUp className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-sm font-medium">Scroll Up</span>
              </button>
            </div>
          </div>

          {/* Large Brand Name Section */}
          <div className="bg-primary py-4 md:py-6 overflow-hidden">
            <motion.div
              initial={{ x: "100%" }}
              animate={isInView ? { x: 0 } : { x: "100%" }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              }}
              className="w-full flex justify-center"
            >
              <div
                className="font-extrabold text-background leading-[0.85] tracking-tighter text-center"
                style={{ fontSize: "clamp(5rem, 18vw, 35rem)" }}
              >
                APNAIYAT
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}