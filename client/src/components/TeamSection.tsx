import { motion } from "framer-motion";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Github,
  Award,
  Users,
  Heart,
  Code,
  Briefcase,
  GraduationCap
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Adan Malik",
    role: "Co-Founder & CTO",
    bio: "Passionate about using technology to solve real-world problems. Leading the technical vision to build a transparent and trustworthy platform for charitable giving in Pakistan.",
    image: "https://ui-avatars.com/api/?name=Adan+Malik&background=005F4B&color=fff&size=300&bold=true",
    skills: ["Full-Stack Development", "System Architecture", "Product Strategy", "Team Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "adan@apnaiyat.pk",
      github: "#"
    }
  },
  {
    name: "Dure Shahwar",
    role: "Co-Founder & CMO",
    bio: "Dedicated to building meaningful connections between donors and causes. Focused on creating impactful marketing strategies that drive positive change in communities.",
    image: "https://ui-avatars.com/api/?name=Dure+Shahwar&background=4B9C8A&color=fff&size=300&bold=true",
    skills: ["Marketing Strategy", "Community Building", "Brand Development", "Partnership Management"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "dure@apnaiyat.pk"
    }
  }
];

const roleIcons = {
  "Co-Founder & CTO": Code,
  "Co-Founder & CMO": Heart,
  "Head of Operations": Briefcase,
  "Lead Developer": Github,
  "UX/UI Designer": Award,
  "Community Manager": Users
};

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Meet the People Behind{" "}
            <span className="text-secondary">Apnaiyat</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're a passionate team of innovators, designers, and changemakers united by a common goal: 
            transforming charitable giving in Pakistan through transparency, trust, and technology.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const RoleIcon = roleIcons[member.role as keyof typeof roleIcons] || GraduationCap;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-sm"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <RoleIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{member.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-100 hover:bg-[#0077B5] hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-gray-100 hover:bg-[#1DA1F2] hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-800 hover:text-white rounded-full flex items-center justify-center transition-colors"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}