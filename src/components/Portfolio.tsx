import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import saasImg from "@/assets/portfolio-saas.jpg";
import educationImg from "@/assets/portfolio-education.jpg";
import litigationImg from "@/assets/portfolio-litigation.jpg";
import coffeeImg from "@/assets/portfolio-coffee.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Saas Landing Page",
      category: "Landing Page",
      tags: ["Web Design", "UI/UX"],
      image: saasImg,
    },
    {
      title: "Education Platform",
      category: "Web App",
      tags: ["App Design", "Development"],
      image: educationImg,
    },
    {
      title: "Litigation Mobile App",
      category: "Mobile App",
      tags: ["Mobile", "UI/UX"],
      image: litigationImg,
    },
    {
      title: "Coffee Shop App",
      category: "Mobile App",
      tags: ["App Design", "Branding"],
      image: coffeeImg,
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
