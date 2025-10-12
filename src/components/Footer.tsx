import { Github, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-accent bg-clip-text text-transparent">
              Deepak Gupta
            </h3>
            <p className="text-white/70">Full Stack Developer | MERN Stack Specialist</p>
          </div>

          {/* Middle: Contact Info */}
          <div className="space-y-2 text-white/80">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-secondary" />
              Gorakhpur, Uttar Pradesh, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-secondary" />
              +91 9565816707
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-secondary" />
              deepakgupta6707@example.com
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://x.com/Deepakgupta014"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak--gupta/"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/deepak-gupta-git"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Deepak Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
