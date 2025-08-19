import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, Filter, FileText, Download, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LibraryPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const papers = [
    {
      id: 1,
      title: "Attention is All You Need",
      authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar"],
      year: 2017,
      journal: "NeurIPS",
      keywords: ["Transformers", "Attention", "NLP", "Deep Learning"],
      summary: "This paper introduces the Transformer architecture, which relies entirely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
      citations: 89234,
      readTime: "25 min",
      addedDate: "2024-01-15",
      favorite: true
    },
    {
      id: 2,
      title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee"],
      year: 2018,
      journal: "NAACL",
      keywords: ["BERT", "Pre-training", "Bidirectional", "Language Models"],
      summary: "BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context.",
      citations: 67891,
      readTime: "30 min",
      addedDate: "2024-01-10",
      favorite: false
    },
    {
      id: 3,
      title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
      authors: ["Alexey Dosovitskiy", "Lucas Beyer", "Alexander Kolesnikov"],
      year: 2020,
      journal: "ICLR",
      keywords: ["Vision Transformer", "Computer Vision", "Image Recognition"],
      summary: "Vision Transformer (ViT) demonstrates that a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks.",
      citations: 23456,
      readTime: "20 min",
      addedDate: "2024-01-20",
      favorite: true
    }
  ];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterBy === "favorites") return matchesSearch && paper.favorite;
    if (filterBy === "recent") return matchesSearch; // Could add date filtering
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold">Research Library</h1>
          <p className="text-muted-foreground mt-2">
            Browse, search, and manage your research paper collection
          </p>
        </div>

        {/* Search and Filter Bar */}
        <Card className="shadow-card mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search papers, authors, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Papers</SelectItem>
                  <SelectItem value="favorites">Favorites</SelectItem>
                  <SelectItem value="recent">Recently Added</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Library Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{papers.length}</div>
              <p className="text-sm text-muted-foreground">Total Papers</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{papers.filter(p => p.favorite).length}</div>
              <p className="text-sm text-muted-foreground">Favorites</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-sm text-muted-foreground">Topics</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">180k</div>
              <p className="text-sm text-muted-foreground">Total Citations</p>
            </CardContent>
          </Card>
        </div>

        {/* Papers List */}
        <div className="space-y-4">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="shadow-card hover:shadow-glow transition-academic">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold leading-tight">{paper.title}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={paper.favorite ? "text-yellow-500" : "text-muted-foreground"}
                      >
                        <Star className={`h-4 w-4 ${paper.favorite ? "fill-current" : ""}`} />
                      </Button>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {paper.authors.join(", ")} • {paper.year} • {paper.journal}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {paper.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{paper.citations.toLocaleString()} citations</span>
                      <span>{paper.readTime}</span>
                      <span>Added {paper.addedDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex lg:flex-col gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="p-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No papers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;