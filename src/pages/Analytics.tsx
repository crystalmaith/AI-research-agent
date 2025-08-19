import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Clock, Brain, Network } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnalyticsPage = () => {
  const navigate = useNavigate();

  const researchStats = {
    totalPapers: 24,
    totalQueries: 157,
    avgSessionTime: "18m",
    topTopics: ["Transformers", "NLP", "Computer Vision", "Deep Learning"]
  };

  const recentActivity = [
    { action: "Uploaded paper", title: "Attention is All You Need", time: "2 hours ago" },
    { action: "Asked question", title: "How do attention mechanisms work?", time: "4 hours ago" },
    { action: "Generated summary", title: "BERT paper summary", time: "1 day ago" },
    { action: "Created citation", title: "Bibliography for ML project", time: "2 days ago" }
  ];

  const knowledgeConnections = [
    { from: "BERT", to: "Transformers", strength: 0.9 },
    { from: "GPT", to: "Language Models", strength: 0.85 },
    { from: "Vision Transformer", to: "Computer Vision", strength: 0.8 }
  ];

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
          <h1 className="text-4xl font-bold">Research Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Track your research patterns and discover knowledge connections
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Papers Analyzed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{researchStats.totalPapers}</div>
              <p className="text-sm text-muted-foreground">+5 this week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Queries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{researchStats.totalQueries}</div>
              <p className="text-sm text-muted-foreground">+23 this week</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Avg. Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{researchStats.avgSessionTime}</div>
              <p className="text-sm text-muted-foreground">Deep research sessions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research Topics */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Top Research Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {researchStats.topTopics.map((topic, index) => (
                <div key={topic} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="font-medium">{topic}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-primary rounded-full" 
                        style={{ width: `${(4 - index) * 25}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground">{(4 - index) * 25}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gradient-subtle rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Knowledge Network */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5" />
              Knowledge Connections
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Discover how concepts in your research connect to each other
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {knowledgeConnections.map((connection, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg">
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">{connection.from}</Badge>
                  <div className="text-muted-foreground">→</div>
                  <Badge variant="secondary">{connection.to}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Strength:</span>
                  <Badge variant="outline">{Math.round(connection.strength * 100)}%</Badge>
                </div>
              </div>
            ))}
            <div className="text-center pt-4">
              <Button variant="outline">View Full Knowledge Graph</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;