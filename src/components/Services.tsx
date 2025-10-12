import { 
  Code, 
  Layout, 
  Database, 
  Globe, 
  MonitorSmartphone, 
  Bot 
} from "lucide-react";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description:
        "Building fast, responsive, and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Crafting modern, mobile-friendly interfaces with React.js and Tailwind CSS for a seamless user experience.",
    },
    {
      icon: Database,
      title: "Backend API Development",
      description:
        "Developing secure and efficient RESTful APIs with Node.js and Express to power dynamic web applications.",
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description:
        "Improving website visibility and search ranking through SEO-friendly code, metadata, and performance tuning.",
    },
    {
      icon: MonitorSmartphone,
      title: "Website Maintenance",
      description:
        "Providing ongoing updates, bug fixes, and performance improvements to keep your website running smoothly.",
    },
    {
      icon: Bot,
      title: "AI Chatbot Integration",
      description:
        "Integrating AI-powered chatbots using Google Gemini API and other tools to enhance user engagement and automation.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">
            SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive web development and optimization solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-fade-in bg-gradient-to-br from-primary/5 to-transparent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-4 bg-gradient-card rounded-2xl text-white group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
