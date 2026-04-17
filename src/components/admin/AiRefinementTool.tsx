
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
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 bg-accent/10 rounded-full mb-4">
            <Sparkles className="text-accent w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">AI Content Refinement</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A specialized tool for staff to polish announcements, newsletters, and circulars for clarity, professional tone, and conciseness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-xl border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="text-primary" />
                Input Draft
              </CardTitle>
              <CardDescription>Paste your school announcement or message draft below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Example: School is closed on Friday due to sports day event near the ground. Bring your water bottles..."
                className="min-h-[300px] bg-background text-base resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button 
                onClick={handleRefine} 
                className="w-full bg-accent hover:bg-accent/90 py-6 text-lg font-bold rounded-xl shadow-lg shadow-accent/20"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Content...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Refine with AI
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-white/50 border-2 border-dashed border-border rounded-xl min-h-[450px]">
                <Info className="text-muted-foreground w-12 h-12 mb-4" />
                <p className="text-muted-foreground text-center font-medium">
                  Refinement suggestions will appear here once you submit your draft.
                </p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-white/50 border-2 border-dashed border-accent/20 rounded-xl min-h-[450px] animate-pulse">
                <Loader2 className="text-accent w-12 h-12 mb-4 animate-spin" />
                <p className="text-accent text-center font-bold">
                  Our AI is analyzing your text for tone and clarity...
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <Card className="border-l-4 border-l-green-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm uppercase tracking-widest text-green-600 font-bold">Clarity Improvements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary leading-relaxed">{result.clarityImprovements}</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm uppercase tracking-widest text-blue-600 font-bold">Tone Adjustments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary leading-relaxed">{result.toneAdjustments}</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm uppercase tracking-widest text-purple-600 font-bold">Conciseness Edits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary leading-relaxed">{result.concisenessEdits}</p>
                  </CardContent>
                </Card>

                <div className="bg-primary p-6 rounded-xl text-white shadow-xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Sparkles size={18} className="text-accent" /> 
                    Overall Feedback
                  </h4>
                  <p className="text-blue-50 text-sm leading-relaxed">{result.overallFeedback}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
