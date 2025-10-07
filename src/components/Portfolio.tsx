import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Saas Landing Page",
      category: "Landing Page",
      tags: ["Web Design", "UI/UX"],
    },
    {
      title: "Education Platform",
      category: "Web App",
      tags: ["App Design", "Development"],
    },
    {
      title: "Litigation Mobile App",
      category: "Mobile App",
      tags: ["Mobile", "UI/UX"],
    },
    {
      title: "Coffee Shop App",
      category: "Mobile App",
      tags: ["App Design", "Branding"],
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
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-white rounded-2xl shadow-card mb-4 mx-auto transform group-hover:scale-110 transition-transform"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded w-3/4 mx-auto"></div>
                      <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
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
