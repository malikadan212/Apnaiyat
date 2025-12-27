import { motion } from "framer-motion";
import { Users, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "./Button";
import { useHeroCampaign } from "@/hooks/use-campaigns";
import heroBackground from "@assets/generated_images/pakistani_volunteers_helping_families_with_compassion_and_dignity.png";

export function HeroSection() {
  const { data: campaign, isLoading } = useHeroCampaign();

  // Static fallback campaign for frontend-only deployment
  const staticCampaign = {
    id: 1,
    title: "Flood Relief for 50 Families in Sindh",
    raisedAmount: 875000,
    targetAmount: 1250000,
    percentFilled: 70,
    donorCount: 234,
    daysLeft: 12,
    location: "Sindh, Pakistan",
    organizer: "Al-Khidmat Foundation",
  };

  const displayCampaign = campaign || staticCampaign;

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
                  onClick={() => window.location.href = "/auth"}
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
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {isLoading ? (
                    <div className="p-7 animate-pulse space-y-4">
                      <div className="h-32 bg-gray-200 rounded-xl"></div>
                      <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-12 bg-gray-200 rounded w-full"></div>
                    </div>
                  ) : (
                    <>
                      {/* Campaign Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                          alt="Flood relief efforts"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                          <div className="flex items-center gap-2">
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {displayCampaign.daysLeft} days left
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-white/90 text-xs">
                            <MapPin className="w-3 h-3" /> {displayCampaign.location}
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 space-y-4">
                        {/* Title & Verified Badge */}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-primary leading-tight">
                              {displayCampaign.title}
                            </h3>
                            <Shield className="w-4 h-4 text-secondary flex-shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            by <span className="font-semibold text-primary">{displayCampaign.organizer}</span> • Verified NGO
                          </p>
                        </div>

                        {/* Progress Section */}
                        <div>
                          <div className="flex justify-between items-baseline mb-2">
                            <div>
                              <span className="text-2xl font-bold text-primary">
                                PKR {Number(displayCampaign.raisedAmount).toLocaleString()}
                              </span>
                              <span className="text-sm text-muted-foreground ml-1">
                                raised
                              </span>
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">
                              of PKR {Number(displayCampaign.targetAmount).toLocaleString()}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${displayCampaign.percentFilled}%` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                            />
                          </div>

                          {/* Stats Row */}
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span className="font-semibold text-secondary">{displayCampaign.percentFilled}% funded</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" /> {displayCampaign.donorCount} supporters
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          <Button 
                            className="w-full text-sm font-bold bg-secondary hover:bg-secondary/90 text-white" 
                            size="md"
                          >
                            Donate Now
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full text-sm font-semibold text-primary border-primary/30 hover:bg-primary/5" 
                            size="md"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </>
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
