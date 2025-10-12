import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile_image from "@/assets/new_Profile_Image.jpg"
// import { NavLink } from "react-router-dom";

const About = () => {
  const highlights = [
    { number: "30+", label: "Complete Project" },
    { number: "2+", label: "Years of Experience" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative w-full h-[500px] bg-gradient-accent rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
  <div className="w-[400px] h-[400px] rounded-full border-8 border-white/30 flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-sm">
    {/* Replace the text with your image */}
    <img
      src={profile_image} // <-- replace with your image path
      alt="Deepak Gupta"
      className="w-full h-full object-cover rounded-full"
    />
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
             I am a passionate Full Stack Developer with 2+ years of experience building scalable and dynamic web applications. Over this period, I have successfully developed and deployed 30+ full-stack projects using MERN stack (MongoDB, Express, React, Node.js), along with modern tools like Tailwind CSS, Git, and REST APIs.
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

           <a href="https://github.com/deepak-gupta-git">
             <Button className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-lg">
              Github 
            </Button>
           </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
