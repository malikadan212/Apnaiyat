import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface CarouselItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  // Added these new optional fields
  features?: string[];
  watermarkIcon?: React.ComponentType<{ className?: string }>;
}

interface Carousel3DProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// Responsive breakpoint hook
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    const checkBreakpoint = () => {
      if (window.innerWidth < 640) setBreakpoint("sm");
      else if (window.innerWidth < 1024) setBreakpoint("md");
      else setBreakpoint("lg");
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
}

export function Carousel3D({
  items,
  autoPlay = false,
  autoPlayInterval = 10000,
}: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();

  // Responsive card dimensions
  const cardConfig = {
    sm: { width: 300, height: 480, xOffset: 160, padding: "p-6" }, // Increased height slightly for content
    md: { width: 340, height: 520, xOffset: 200, padding: "p-8" },
    lg: { width: 380, height: 560, xOffset: 240, padding: "p-10" },
  }[breakpoint];

  const totalItems = items.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, autoPlayInterval, totalItems, prefersReducedMotion]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % totalItems);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (prefersReducedMotion) return;
    const threshold = 50;
    if (info.offset.x > threshold) handlePrev();
    else if (info.offset.x < -threshold) handleNext();
    animate(dragX, 0, { duration: 0.3 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Benefits carousel"
    >
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative h-[540px] sm:h-[580px] md:h-[620px] lg:h-[640px] overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* Shadow layer - large soft dark-green glow behind cards */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] pointer-events-none"
          style={{
            width: cardConfig.width + 60,
            height: cardConfig.height + 20,
            background: "rgba(31, 61, 43, 0.12)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
          drag={prefersReducedMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            const WatermarkIcon = item.watermarkIcon;
            const offset = index - activeIndex;
            const normalizedOffset =
              ((offset % totalItems) + totalItems) % totalItems;
            const adjustedOffset =
              normalizedOffset > totalItems / 2
                ? normalizedOffset - totalItems
                : normalizedOffset;

            const isActive = adjustedOffset === 0;
            const absOffset = Math.abs(adjustedOffset);

            // Only show active card + 1 card on each side (max 2 background cards)
            if (absOffset > 2) return null;

            // Responsive position calculations
            const xOffset = adjustedOffset * cardConfig.xOffset;
            const zOffset = -absOffset * 100;

            // Background cards: same hue, lower saturation, higher lightness
            const opacity = isActive ? 1 : absOffset === 1 ? 0.85 : 0.7;
            const scale = isActive ? 1 : absOffset === 1 ? 0.96 : 0.94;

            // Background colors - same green hue family
            const getCardBackground = () => {
              if (isActive) {
                return "linear-gradient(180deg, #0F5A47 0%, #1F7A60 100%)"; // Original vibrant green gradient
              }
              if (absOffset === 1) {
                return "#3E5F4D"; // Light desaturated green
              }
              return "#4A6B58"; // Even lighter green
            };

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: cardConfig.width,
                  transformStyle: "preserve-3d",
                  cursor: isActive ? "default" : "pointer",
                }}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  opacity,
                  scale,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.42, ease: [0.16, 0.84, 0.3, 1] }
                }
                onClick={() => !isActive && setActiveIndex(index)}
                aria-hidden={!isActive}
              >
                {/* Card */}
                <div
                  className="relative rounded-[20px] overflow-hidden"
                  style={{
                    height: cardConfig.height,
                    background: getCardBackground(),
                    boxShadow: isActive
                      ? "0 24px 48px rgba(31, 61, 43, 0.28), 0 12px 24px rgba(31, 61, 43, 0.18)"
                      : "0 10px 24px rgba(31, 61, 43, 0.1)",
                  }}
                >
                  {/* --- NEW: Watermark Icon (Background) --- */}
                  {WatermarkIcon && isActive && (
                    <div className="absolute -bottom-8 -right-8 opacity-[0.04] pointer-events-none transform rotate-12 z-0">
                      <WatermarkIcon className="w-56 h-56 text-white" />
                    </div>
                  )}

                  {/* Content - visible on all cards */}
                  <div
                    className={`relative z-10 h-full flex flex-col ${cardConfig.padding} text-left`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-6 shrink-0 ${
                        isActive ? "bg-white/15" : "bg-white/8"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                          isActive ? "text-white" : "text-[#D9CDB9]"
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl sm:text-[22px] lg:text-2xl font-bold mb-4 leading-tight shrink-0 ${
                        isActive ? "text-white" : "text-[#D9CDB9]/90"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-[15px] sm:text-base lg:text-[17px] leading-relaxed mb-6 shrink-0 ${
                        isActive ? "text-white/90" : "text-[#D9CDB9]/70"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* --- NEW: Features List (Fill empty space) --- */}
                    {isActive && item.features && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="pt-4 border-t border-white/20 mt-auto"
                      >
                        <div className="space-y-3">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#36A085] mt-2 flex-shrink-0 shadow-[0_0_6px_rgba(54,160,133,0.8)]" />
                              <span className="text-white/90 text-sm font-medium leading-snug">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Subtle gradient overlay for active card */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          onClick={handlePrev}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1F3D2B]/10 hover:bg-[#1F3D2B]/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2"
          aria-label="Previous benefit"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F3D2B]" />
        </button>

        <div className="flex gap-2 items-center">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-1 ${
                index === activeIndex
                  ? "w-7 bg-[#1F3D2B]"
                  : "w-2.5 bg-[#1F3D2B]/25 hover:bg-[#1F3D2B]/40"
              }`}
              aria-label={`Go to: ${item.title}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1F3D2B]/10 hover:bg-[#1F3D2B]/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2"
          aria-label="Next benefit"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F3D2B]" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1F3D2B]/10 hover:bg-[#1F3D2B]/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2 ml-1 sm:ml-2"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F3D2B]" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F3D2B] ml-0.5" />
          )}
        </button>
      </div>

      {/* Current item label */}
      <div className="text-center mt-4 sm:mt-5">
        <span className="text-sm sm:text-[15px] text-[#3A5B52]/70">
          {items[activeIndex].title}
        </span>
      </div>
    </div>
  );
}