import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-card rounded-lg text-white">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-muted-foreground">deepak.gupta@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-card rounded-lg text-white">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-card rounded-lg text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Input placeholder="Your Name" className="h-12" />
            <Input type="email" placeholder="Your Email" className="h-12" />
            <Input placeholder="Subject" className="h-12" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all hover:scale-105 h-12 text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
