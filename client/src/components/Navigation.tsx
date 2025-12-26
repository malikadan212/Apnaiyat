import { Link } from "wouter";
import { ShieldCheck, MessageSquare } from "lucide-react";
import { Button } from "./Button";
import { useAuth } from "@/hooks/use-auth";

export function Navigation() {
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <ShieldCheck className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-primary">
            APNAIYAT
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "For Donors", "For NGOs/Charities", "How It Works", "About Us"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted">
            <MessageSquare className="w-5 h-5" />
          </button>
          
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-primary">Hi, {user.firstName || user.username}</span>
              <img 
                src={user.profileImageUrl || `https://ui-avatars.com/api/?name=${user.username}`} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-border"
              />
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = "/api/login"}
            >
              Sign Up
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
