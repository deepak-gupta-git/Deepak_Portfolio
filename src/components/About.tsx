import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    { number: "50+", label: "Complete Project" },
    { number: "8+", label: "Years of Experience" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative w-full h-[500px] bg-gradient-accent rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-full border-8 border-white/30 flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-sm">
                  <div className="text-white text-center p-8">
                    <p className="text-6xl font-bold mb-2">DG</p>
                    <p className="text-xl">Designer & Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div className="animate-fade-in">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider">ABOUT ME</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Designing Solutions, Not Just Visuals
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              I'm a passionate UI/UX designer and developer focused on creating beautiful, 
              functional digital experiences. With years of experience in the industry, 
              I help businesses transform their ideas into reality through thoughtful design 
              and clean code.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-xl">{highlight.number}</p>
                    <p className="text-muted-foreground">{highlight.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-lg">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
