import { Link } from "wouter";
import { ShieldCheck, MessageSquare, Menu } from "lucide-react";
import { Button } from "./Button";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

export function Navigation() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-5xl md:w-11/12">
      {/* Floating Navbar Container */}
      <div className="bg-gradient-to-r from-white/10 via-background/10 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <ShieldCheck className="w-7 h-7 text-accent-foreground transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
              <div className="absolute inset-0 bg-background/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-white drop-shadow-md hidden sm:inline">
              APNAIYAT
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {["Home", "For Donors", "For NGOs/Charities", "How It Works", "About Us"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-xs font-semibold text-white/80 hover:text-accent-foreground transition-colors px-3 py-2 rounded-lg hover:bg-background/20 relative group"
              >
                {item}
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
                onClick={() => window.location.href = "/api/login"}
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
            <div className="px-6 py-4 space-y-2">
              {["Home", "For Donors", "For NGOs/Charities", "How It Works", "About Us"].map((item) => (
                <Link 
                  key={item} 
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="block text-sm font-semibold text-white/80 hover:text-accent-foreground px-3 py-2 rounded-lg hover:bg-background/20 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
