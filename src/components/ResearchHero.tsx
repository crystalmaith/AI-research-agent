import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Search, BookOpen, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/research-hero.jpg";

export const ResearchHero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-research opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-research bg-clip-text text-transparent">
                AI Research Assistant
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your personal PhD co-pilot. Upload research papers, ask intelligent questions, 
                and let AI help you navigate the vast world of academic knowledge with memory 
                and context that grows with your research journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="research" 
                size="lg" 
                className="shadow-research"
                onClick={() => navigate('/upload')}
              >
                <Brain className="mr-2 h-5 w-5" />
                Start Researching
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/chat')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Try Demo Chat
              </Button>
            </div>
            
            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <Card className="p-6 bg-white/50 backdrop-blur-sm border-none shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Semantic Search</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Find relevant passages across thousands of documents instantly
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/50 backdrop-blur-sm border-none shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Research Memory</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Continuous learning that remembers your research interests
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="AI Research Assistant Interface"
              className="relative w-full h-auto rounded-3xl shadow-research"
            />
          </div>
        </div>
      </div>
    </section>
  );
};