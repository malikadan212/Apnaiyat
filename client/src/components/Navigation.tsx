import { Link } from "wouter";
import { MessageSquare, Menu } from "lucide-react";
import { Button } from "./Button";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navigation() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide when scrolling down, show when scrolling up
    if (latest > previous && latest > 100) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu when hiding
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-0"
    >
      <div className="mx-auto max-w-5xl w-full md:w-11/12">
      {/* Floating Navbar Container */}
      <div className="bg-gradient-to-r from-white/10 via-background/10 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <img 
                src="/favicon.png" 
                alt="Apnaiyat Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-background/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-white drop-shadow-md hidden sm:inline">
              APNAIYAT
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "For Donors", href: "/for-donors" },
              { label: "For NGOs", href: "/for-ngos/charities", fullLabel: "For NGOs/Charities" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "About Us", href: "/about-us" }
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-xs xl:text-sm font-semibold text-white/80 hover:text-accent-foreground transition-colors px-2 xl:px-3 py-2 rounded-lg hover:bg-background/20 relative group"
                title={item.fullLabel || item.label}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-background to-background/50 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button className="text-white/70 hover:text-accent-foreground transition-colors p-2 rounded-lg hover:bg-background/20">
              <MessageSquare className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="flex items-center gap-2 pl-2 border-l border-white/20">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-bold text-white drop-shadow-md">Hi, {user.firstName || user.email?.split('@')[0]}</span>
                </div>
                <img 
                  src={user.profileImageUrl || `https://ui-avatars.com/api/?name=${user.firstName || 'User'}&background=${Math.random().toString(16).slice(2, 8)}&color=fff`} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-lg border border-background/40 shadow-lg"
                />
              </div>
            ) : (
              <Button 
                size="sm"
                onClick={() => window.location.href = "/auth"}
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white font-semibold rounded-lg text-xs shadow-lg border border-background/30"
              >
                Sign Up
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white/70 hover:text-accent-foreground transition-colors p-2 rounded-lg hover:bg-background/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 backdrop-blur-2xl bg-white/5">
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "For Donors", href: "/for-donors" },
                { label: "For NGOs/Charities", href: "/for-ngos/charities" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "About Us", href: "/about-us" }
              ].map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="block text-sm font-semibold text-white/80 hover:text-accent-foreground px-3 py-2 rounded-lg hover:bg-background/20 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
    </motion.nav>
  );
}
