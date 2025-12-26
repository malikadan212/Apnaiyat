import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users } from "lucide-react";
import { Button } from "./Button";
import { useHeroCampaign } from "@/hooks/use-campaigns";

export function HeroSection() {
  const { data: campaign, isLoading } = useHeroCampaign();

  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#F5F2EB]">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract organic shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005F4B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-semibold mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verified & Secure Platform</span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-6">
            With your <span className="text-secondary relative">
              secure
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span> support, we ensure every donation reaches families in need.
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Transparently and without fraud. Secure, verified donations reaching families in need directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-xl shadow-primary/20">
              Start Donating
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = "/api/login"}
            >
              Sign Up Now
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Verified NGOs
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" />
              Direct Impact
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Community Driven
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Card & Hero Image */}
        <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full max-w-md lg:max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
          >
             {/* empathetic helping scene - volunteers helping community */}
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000" 
              alt="Volunteers helping community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Floating Campaign Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-12 left-4 lg:-left-12 bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-[90%] border border-border/50 backdrop-blur-sm"
          >
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            ) : campaign ? (
              <>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{campaign.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{campaign.description}</p>
                  </div>
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Heart className="w-5 h-5 text-secondary fill-current" />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-primary">PKR {Number(campaign.raisedAmount).toLocaleString()}</span>
                    <span className="text-muted-foreground">of PKR {Number(campaign.targetAmount).toLocaleString()}</span>
                  </div>
                  
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${campaign.percentFilled}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-secondary rounded-full"
                    />
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{campaign.percentFilled}% Funded</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {campaign.donorCount} Donors
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full text-xs font-bold" size="md">Donate</Button>
                  <Button variant="outline" className="w-full text-xs" size="md">Share</Button>
                </div>
              </>
            ) : (
              <div className="text-center py-4 text-muted-foreground">
                No active campaigns featured right now.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
