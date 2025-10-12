import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ✅ Use clean, professional images that look consistent
import hotelImage from "@/assets/hotel-booking.webp";
import blogImg from "@/assets/blogging.jpg";
import saasImg from "@/assets/saas-dashboard.webp";
// import coffeeImg from "@/assets/";
import foodImg from "@/assets/food-delivery.webp";
import portfolioImg from "@/assets/portfolio-showcase.webp";

const Portfolio = () => {
  const projects = [
  {
    title: "Hotel Booking Website",
    category: "Web Development",
    tags: ["React", "UI/UX", "Responsive"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80", // Hotel booking theme
  },
  {
    title: "Blogging Platform",
    category: "Web App",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1000&q=80", // Blog workspace
  },
  {
    title: "SaaS Dashboard",
    category: "SaaS Application",
    tags: ["Analytics", "MERN", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80", // SaaS dashboard look
  },
  {
    title: "Coffee Shop App",
    category: "E-Commerce",
    tags: ["Branding", "Design", "Frontend"],
    image: "https://images.unsplash.com/photo-1734585123087-cc579225f09e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMHNob3AlMjB3ZWJzaXRlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" // Coffee shop
  },
  {
    title: "Food Delivery Website",
    category: "Full Stack",
    tags: ["React", "API Integration", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80", // Food delivery theme
  },
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    tags: ["Design", "Frontend", "Animations"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80", // Developer desk setup
  },
];


  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Digital Product Showcases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my best projects — blending creativity, performance, and modern web technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-2xl animate-fade-in bg-gradient-to-br from-primary/5 to-transparent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Title overlay */}
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.title}
                </h3>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{project.category}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
