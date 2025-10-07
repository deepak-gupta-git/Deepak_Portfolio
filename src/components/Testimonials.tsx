import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Charles Bynum",
      role: "CEO",
      rating: 5,
      text: "Working with Deepak was an absolute pleasure. The attention to detail and creative solutions exceeded our expectations.",
    },
    {
      name: "William Campbell",
      role: "CTO",
      rating: 5,
      text: "Exceptional design skills combined with technical expertise. Delivered our project on time with outstanding quality.",
    },
    {
      name: "Michael Miller",
      role: "Manager",
      rating: 5,
      text: "A true professional who understands both design and business needs. Highly recommend for any digital project.",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">TESTIMONIALS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What People Say's About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-card"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
