import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type === 'application/pdf' || file.type.startsWith('text/')
    );
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const processFiles = async () => {
    setIsProcessing(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    toast({
      title: "Files processed successfully!",
      description: `${uploadedFiles.length} documents added to your research library.`,
    });
    setUploadedFiles([]);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-4xl font-bold">Upload Research Documents</h1>
          <p className="text-muted-foreground mt-2">
            Add PDFs, research papers, or academic articles to your AI-powered knowledge base
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Document Upload</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-muted'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">
                  Drag & drop your files here
                </p>
                <p className="text-muted-foreground mb-4">
                  Supports PDF, TXT, and academic papers
                </p>
                <Label htmlFor="file-upload">
                  <Button variant="outline" className="cursor-pointer">
                    Choose Files
                  </Button>
                </Label>
                <Input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.txt,.doc,.docx"
                  className="hidden"
                  onChange={handleFileInput}
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium">Uploaded Files ({uploadedFiles.length})</h4>
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm flex-1">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(1)}MB
                      </span>
                    </div>
                  ))}
                  <Button 
                    onClick={processFiles} 
                    disabled={isProcessing}
                    className="w-full"
                    variant="research"
                  >
                    {isProcessing ? "Processing..." : "Process Documents"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upload Options */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Processing Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tags">Research Tags</Label>
                <Input 
                  id="tags" 
                  placeholder="machine learning, transformers, nlp..."
                />
                <p className="text-xs text-muted-foreground">
                  Add tags to help categorize your research
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Research Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Add any context or notes about these documents..."
                  rows={4}
                />
              </div>

              <div className="space-y-3 p-4 bg-gradient-subtle rounded-lg">
                <h4 className="font-medium flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  AI Processing Features
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automatic text extraction and OCR</li>
                  <li>• Metadata extraction (authors, citations)</li>
                  <li>• Semantic embeddings for search</li>
                  <li>• Key concept identification</li>
                  <li>• Citation network analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;