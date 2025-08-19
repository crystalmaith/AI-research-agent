import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Brain, User, FileText, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  sources?: Array<{ title: string; author: string; relevance: number }>;
}

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI research assistant. I have access to your uploaded research papers and can help you explore, summarize, and find connections across your knowledge base. What would you like to research today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `Based on your research library, I found several relevant insights about "${inputValue}". The transformer architecture papers in your collection suggest that attention mechanisms are particularly relevant to this topic. Here are the key findings...`,
        timestamp: new Date(),
        sources: [
          { title: "Attention is All You Need", author: "Vaswani et al.", relevance: 0.95 },
          { title: "BERT: Pre-training of Deep Bidirectional Transformers", author: "Devlin et al.", relevance: 0.87 }
        ]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const suggestedQuestions = [
    "Summarize the key findings about attention mechanisms",
    "What are the main differences between BERT and GPT?",
    "Find papers related to transformer interpretability",
    "Generate a bibliography for my transformer research"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl p-4">
        {/* Header */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold">AI Research Chat</h1>
          <p className="text-muted-foreground mt-2">
            Ask questions about your research papers and get intelligent, sourced answers
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-card h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Research Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`flex gap-3 max-w-[80%] ${
                            message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-accent text-accent-foreground'
                          }`}>
                            {message.type === 'user' ? <User className="h-4 w-4" /> : <Brain className="h-4 w-4" />}
                          </div>
                          <div
                            className={`rounded-lg p-4 ${
                              message.type === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            {message.sources && (
                              <div className="mt-3 space-y-2">
                                <p className="text-xs font-medium opacity-80">Sources:</p>
                                {message.sources.map((source, idx) => (
                                  <div key={idx} className="text-xs bg-background/20 rounded p-2">
                                    <div className="flex items-center gap-2">
                                      <FileText className="h-3 w-3" />
                                      <span className="font-medium">{source.title}</span>
                                    </div>
                                    <p className="opacity-70">{source.author}</p>
                                    <Badge variant="secondary" className="text-xs mt-1">
                                      {Math.round(source.relevance * 100)}% relevance
                                    </Badge>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                          <Brain className="h-4 w-4" />
                        </div>
                        <div className="bg-secondary rounded-lg p-4">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                {/* Input Area */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask about your research papers..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Suggested Questions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Suggested Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedQuestions.map((question, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    className="w-full text-left h-auto p-3 justify-start"
                    onClick={() => setInputValue(question)}
                  >
                    <Quote className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Research Context */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Current Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-1">
                  <p className="font-medium">Active Research Areas:</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Transformers</Badge>
                    <Badge variant="secondary">NLP</Badge>
                    <Badge variant="secondary">Attention</Badge>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <p className="font-medium">Papers in Library: 2</p>
                  <p className="text-muted-foreground">Last updated: Today</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;