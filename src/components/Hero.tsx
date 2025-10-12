import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img src={heroBg} alt="" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm<br />
              <span className="text-secondary">Deepak Gupta</span><br />
              A Full Stack Web Developer
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
               I build modern, scalable, and user-friendly web applications. 
  Skilled in the MERN stack, I love turning ideas into powerful digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
             <a href="#">
               <Button className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-lg">
                Get Started
              </Button>
             </a>
              <Button 
                variant="ghost" 
                className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
              >
                <Play className="mr-2" size={20} />
                Watch Intro
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden animate-scale-in">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Decorative circle */}
              <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/30 blur-2xl"></div>
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <img src={profileImg} alt="Deepak Gupta Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-10 right-20 bg-white px-6 py-3 rounded-full shadow-card animate-fade-in z-20">
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>

              {/* Best Customer Badge */}
              <div className="absolute bottom-20 left-10 bg-white px-4 py-2 rounded-xl shadow-card flex items-center gap-2 animate-fade-in z-20">
                <span className="text-sm font-semibold">Best Customer</span>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                  <div className="w-6 h-6 rounded-full bg-secondary"></div>
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
