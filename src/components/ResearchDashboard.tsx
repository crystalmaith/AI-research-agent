import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, MessageSquare, History, FileText, BarChart3 } from "lucide-react";

export const ResearchDashboard = () => {
  const recentPapers = [
    {
      title: "Attention is All You Need",
      authors: "Vaswani et al.",
      year: "2017",
      keywords: ["Transformers", "NLP", "Attention Mechanism"],
      summary: "Introduced the Transformer architecture that revolutionized natural language processing."
    },
    {
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      authors: "Devlin et al.",
      year: "2018", 
      keywords: ["BERT", "Pre-training", "Bidirectional"],
      summary: "Pre-trained bidirectional representations from transformers for language understanding."
    }
  ];

  const researchMemory = [
    "Neural networks and deep learning architectures",
    "Natural language processing techniques", 
    "Attention mechanisms in transformers"
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Research Command Center</h2>
          <p className="text-xl text-muted-foreground">
            Manage your research library, chat with your documents, and track your academic journey
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-glow transition-academic bg-gradient-subtle border-none">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary p-4 rounded-full w-fit">
                <Upload className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle>Upload Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-4">
                Add PDFs, research papers, or academic articles to your knowledge base
              </p>
              <Button variant="research" className="w-full">
                Upload Papers
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-glow transition-academic bg-gradient-subtle border-none">
            <CardHeader className="text-center">
              <div className="mx-auto bg-accent p-4 rounded-full w-fit">
                <MessageSquare className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>AI Research Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-4">
                Ask questions and get intelligent answers from your research collection
              </p>
              <Button variant="academic" className="w-full">
                Start Chatting
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-glow transition-academic bg-gradient-subtle border-none">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary-glow p-4 rounded-full w-fit">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Research Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-4">
                Track your research patterns and discover knowledge connections
              </p>
              <Button variant="outline" className="w-full">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Research Library & Memory */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Papers */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Research Library
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPapers.map((paper, index) => (
                <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                  <h4 className="font-semibold text-sm">{paper.title}</h4>
                  <p className="text-xs text-muted-foreground">{paper.authors} ({paper.year})</p>
                  <p className="text-xs text-muted-foreground">{paper.summary}</p>
                  <div className="flex flex-wrap gap-1">
                    {paper.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Papers
              </Button>
            </CardContent>
          </Card>

          {/* Research Memory */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Research Memory
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Your AI assistant remembers your research focus areas:
              </p>
              <div className="space-y-3">
                {researchMemory.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-subtle rounded-lg">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground italic">
                  "Based on your recent queries, you might be interested in exploring 
                  transformer interpretability and attention visualization techniques."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};