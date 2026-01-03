import { Link } from "wouter";
import { AlertCircle, Home, Users, Heart, ArrowRight } from "lucide-react";

export default function NotFound() {
  const helpfulLinks = [
    { href: "/", label: "Home", icon: Home, description: "Return to our homepage" },
    { href: "/for-donors", label: "For Donors", icon: Heart, description: "Learn about donating" },
    { href: "/for-ngos/charities", label: "For NGOs", icon: Users, description: "NGO partnership info" },
    { href: "/how-it-works", label: "How It Works", icon: ArrowRight, description: "Understand our process" }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl border border-border max-w-2xl w-full text-center">
        <div className="mx-auto w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Helpful Links Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {helpfulLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-primary group-hover:text-primary/80">{link.label}</div>
                <div className="text-sm text-muted-foreground">{link.description}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Homepage
        </Link>

        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Still need help? Contact our support team
          </p>
          <a 
            href="mailto:contact@apnaiyat.pk" 
            className="text-primary hover:text-primary/80 font-medium text-sm underline"
          >
            contact@apnaiyat.pk
          </a>
        </div>
      </div>
    </div>
  );
}
