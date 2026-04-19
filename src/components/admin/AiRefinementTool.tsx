"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, ClipboardCheck, Info } from 'lucide-react';
import { aiContentRefinement, type AiContentRefinementOutput } from '@/ai/flows/ai-content-refinement';
import { toast } from '@/hooks/use-toast';

export function AiRefinementTool() {
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<AiContentRefinementOutput | null>(null);

  const handleRefine = async () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please paste your draft content first.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const refined = await aiContentRefinement({ draftContent: content });
      setResult(refined);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to refine content. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-4 bg-accent/20 rounded-2xl mb-6 backdrop-blur-sm border border-accent/20 rotate-3">
          <Sparkles className="text-accent w-10 h-10" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-6">AI Content Refinement</h2>
        <p className="text-blue-100/70 text-lg max-w-2xl font-medium leading-relaxed">
          A specialized tool for staff to polish announcements, newsletters, and circulars for clarity, professional tone, and conciseness.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <Card className="shadow-2xl border-none bg-white/10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <ClipboardCheck className="text-accent" />
              Input Draft
            </CardTitle>
            <CardDescription className="text-blue-100/60 font-medium">Paste your school announcement or message draft below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea 
              placeholder="Example: School is closed on Friday due to sports day event near the ground. Bring your water bottles..."
              className="min-h-[300px] bg-white/5 border-white/10 text-white placeholder:text-white/20 text-base resize-none focus:ring-accent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button 
              onClick={handleRefine} 
              className="w-full bg-accent hover:bg-accent/90 py-8 text-xl font-bold rounded-2xl shadow-xl shadow-accent/20 transition-all hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  Analyzing Content...
                </>
              ) : (
                <>
                  <Sparkles className="mr-3 h-6 w-6" />
                  Refine with AI
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {!result && !loading && (
            <div className="h-full flex flex-col items-center justify-center p-12 bg-white/5 border-2 border-dashed border-white/10 rounded-2xl min-h-[450px]">
              <Info className="text-white/30 w-16 h-16 mb-6" />
              <p className="text-white/50 text-center text-lg font-medium">
                Refinement suggestions will appear here once you submit your draft.
              </p>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center p-12 bg-white/5 border-2 border-dashed border-accent/30 rounded-2xl min-h-[450px] animate-pulse">
              <Loader2 className="text-accent w-16 h-16 mb-6 animate-spin" />
              <p className="text-accent text-center text-lg font-bold">
                Our AI is analyzing your text for tone and clarity...
              </p>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              <Card className="border-none bg-white shadow-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-widest text-green-600 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Clarity Improvements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium leading-relaxed">{result.clarityImprovements}</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white shadow-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-widest text-blue-600 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Tone Adjustments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium leading-relaxed">{result.toneAdjustments}</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white shadow-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs uppercase tracking-widest text-purple-600 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Conciseness Edits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium leading-relaxed">{result.concisenessEdits}</p>
                </CardContent>
              </Card>

              <div className="bg-accent p-8 rounded-2xl text-white shadow-2xl transform hover:-translate-y-1 transition-transform">
                <h4 className="font-bold text-xl mb-3 flex items-center gap-3">
                  <Sparkles size={24} className="text-white" /> 
                  Overall Feedback
                </h4>
                <p className="text-white/90 text-sm leading-relaxed font-medium">{result.overallFeedback}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
