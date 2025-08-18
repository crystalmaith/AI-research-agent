import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Search, 
  Brain, 
  FileText, 
  Quote, 
  Network,
  Zap,
  Shield
} from "lucide-react";

export const ResearchFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Persistent Knowledge Base",
      description: "Store and organize thousands of research papers with intelligent metadata extraction and categorization.",
      benefits: ["ChromaDB integration", "Metadata extraction", "Smart categorization"]
    },
    {
      icon: Search,
      title: "Lightning-Fast Search", 
      description: "FAISS-powered semantic search finds relevant passages across your entire research collection in milliseconds.",
      benefits: ["FAISS optimization", "Semantic similarity", "Instant results"]
    },
    {
      icon: Brain,
      title: "Research Memory System",
      description: "AI that remembers your research interests, previous queries, and provides personalized recommendations.",
      benefits: ["Long-term memory", "Personalized insights", "Research continuity"]
    },
    {
      icon: FileText,
      title: "Intelligent Summarization",
      description: "Generate short, medium, or detailed summaries tailored to your research needs and comprehension level.",
      benefits: ["Multi-level summaries", "Key insights extraction", "Custom formats"]
    },
    {
      icon: Quote,
      title: "Citation Management",
      description: "Auto-generate citations and bibliographies in APA, MLA, IEEE, and other academic formats.",
      benefits: ["Multiple formats", "Auto-generation", "Reference tracking"]
    },
    {
      icon: Network,
      title: "Research Connections",
      description: "Discover hidden connections between papers and automatically generate related work sections.",
      benefits: ["Paper linking", "Related work", "Knowledge graphs"]
    }
  ];

  const techStack = [
    { name: "Vector Database", tech: "ChromaDB", color: "bg-blue-500" },
    { name: "Semantic Search", tech: "FAISS", color: "bg-green-500" },
    { name: "AI Models", tech: "OpenAI/HuggingFace", color: "bg-purple-500" },
    { name: "Memory System", tech: "Persistent Storage", color: "bg-orange-500" }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-subtle">
      <div className="space-y-16">
        {/* Features Overview */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Powerful Research Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI and machine learning technologies working together to create 
            your ultimate research companion
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-academic border-none bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Built on Cutting-Edge Technology</h3>
            <p className="text-muted-foreground">
              Leveraging the latest advances in AI, vector databases, and semantic search
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((item, index) => (
              <Card key={index} className="text-center p-6 shadow-card border-none bg-white/70 backdrop-blur-sm">
                <div className={`${item.color} w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-1">{item.name}</h4>
                <Badge variant="secondary" className="text-xs">{item.tech}</Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <Card className="p-8 bg-gradient-research/5 border-accent shadow-card">
          <div className="flex items-start gap-4">
            <div className="bg-accent p-3 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Privacy-First Research</h4>
              <p className="text-muted-foreground">
                Your research data is encrypted and stored securely. We never share your documents 
                or research insights. Full data ownership and control remains with you.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};