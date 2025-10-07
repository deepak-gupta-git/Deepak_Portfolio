import { Palette, Code, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
    },
    {
      icon: Code,
      title: "Webflow Develop",
      description: "Building responsive and performant websites using modern web technologies and best practices.",
    },
    {
      icon: Package,
      title: "Product Design",
      description: "Designing complete digital products from concept to launch with focus on user needs and business goals.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">SERVICES</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive design and development solutions tailored to your business needs
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
