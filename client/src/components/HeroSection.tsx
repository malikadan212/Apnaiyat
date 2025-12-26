import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { Button } from "./Button";
import { useHeroCampaign } from "@/hooks/use-campaigns";
import heroBackground from "@assets/generated_images/diverse_volunteers_helping_families_with_compassion_and_dignity.png";

export function HeroSection() {
  const { data: campaign, isLoading } = useHeroCampaign();

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary" />
        <img 
          src={heroBackground}
          alt="Diverse volunteers helping families with compassion and dignity"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Dark Overlay Wash for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Hero Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-6">
                With your <span className="inline-block px-4 py-2 rounded-full bg-secondary text-white font-bold mx-2 transform hover:scale-105 transition-transform">
                  secure
                </span> support, we ensure every donation reaches families in need—<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/80">transparently</span> and without fraud.
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg font-light">
                Secure, verified donations reaching families in need directly. Join us in building a community that cares.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="shadow-xl shadow-secondary/40 bg-secondary hover:bg-secondary/90 text-white font-semibold"
                >
                  Start Donating
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = "/api/login"}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                >
                  Sign Up Now
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Floating Campaign Card */}
            <div className="relative h-full flex items-end lg:items-center justify-center lg:justify-end pb-12 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, x: 60, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-md"
              >
                {/* Campaign Card */}
                <div className="bg-white rounded-3xl p-7 shadow-2xl border border-white/10 backdrop-blur-xl space-y-5">
                  {isLoading ? (
                    <div className="animate-pulse space-y-4">
                      <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-12 bg-gray-200 rounded w-full"></div>
                    </div>
                  ) : campaign ? (
                    <>
                      {/* Header */}
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <h3 className="text-sm font-semibold text-muted-foreground">FEATURED CAUSE</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{campaign.description}</p>
                        </div>
                        <div className="bg-accent/80 px-3 py-1 rounded-full flex items-center gap-1">
                          <span className="text-xs font-bold text-accent-foreground">Urgent</span>
                        </div>
                      </div>

                      {/* Amount Raised */}
                      <div className="pt-2 border-t border-border/50">
                        <div className="flex justify-between items-baseline mb-3">
                          <span className="text-2xl font-bold text-primary">
                            PKR {Number(campaign.raisedAmount).toLocaleString()}
                          </span>
                          <span className="text-sm font-medium text-muted-foreground">
                            Raised
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-3">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${campaign.percentFilled}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-secondary to-secondary/70 rounded-full"
                          />
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between text-xs font-medium text-muted-foreground">
                          <span>{campaign.percentFilled}% Funded</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" /> {campaign.donorCount} Donors
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <Button 
                          className="w-full text-sm font-bold bg-white text-primary hover:bg-gray-50 border-0" 
                          size="md"
                        >
                          Start Donating
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full text-sm font-bold text-primary border-primary/20 hover:bg-primary/5" 
                          size="md"
                        >
                          Learn More
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-6 text-muted-foreground">
                      <p className="font-medium">No active campaigns featured right now.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
