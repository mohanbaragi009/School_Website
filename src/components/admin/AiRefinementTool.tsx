
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
        <Card className="shadow-2xl border-none bg-white/10 backdrop-blur-md rounded-[2.5rem]">
          <CardHeader className="p-10 pb-4">
            <CardTitle className="flex items-center gap-4 text-white text-2xl">
              <ClipboardCheck className="text-accent w-8 h-8" />
              Input Draft
            </CardTitle>
            <CardDescription className="text-blue-100/60 font-medium text-lg">Paste your school announcement or message draft below.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-4 space-y-8">
            <Textarea 
              placeholder="Example: School is closed on Friday due to sports day event near the ground. Bring your water bottles..."
              className="min-h-[350px] bg-white/5 border-white/10 text-white placeholder:text-white/20 text-lg resize-none focus:ring-accent rounded-[2rem] p-6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button 
              onClick={handleRefine} 
              className="w-full bg-accent hover:bg-accent/90 py-10 text-xl font-bold rounded-[2rem] shadow-2xl shadow-accent/40 transition-all hover:scale-[1.03] active:scale-95"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-4 h-8 w-8 animate-spin" />
                  Analyzing Content...
                </>
              ) : (
                <>
                  <Sparkles className="mr-4 h-8 w-8" />
                  Refine with AI
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {!result && !loading && (
            <div className="h-full flex flex-col items-center justify-center p-16 bg-white/5 border-4 border-dashed border-white/10 rounded-[2.5rem] min-h-[500px] shadow-inner">
              <Info className="text-white/20 w-20 h-20 mb-8" />
              <p className="text-white/40 text-center text-xl font-bold uppercase tracking-widest">
                AI Suggestions will appear here
              </p>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center p-16 bg-white/5 border-4 border-dashed border-accent/40 rounded-[2.5rem] min-h-[500px] animate-pulse">
              <Loader2 className="text-accent w-24 h-24 mb-10 animate-spin" />
              <p className="text-accent text-center text-2xl font-black uppercase tracking-[0.2em]">
                Analyzing Tone & Clarity...
              </p>
            </div>
          )}

          {result && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-700">
              <Card className="border-none bg-white shadow-2xl rounded-[2rem] transform hover:scale-[1.02] transition-transform">
                <CardHeader className="p-8 pb-3">
                  <CardTitle className="text-[11px] uppercase tracking-[0.3em] text-green-600 font-black flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    Clarity Improvements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-primary font-bold text-lg leading-relaxed">{result.clarityImprovements}</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white shadow-2xl rounded-[2rem] transform hover:scale-[1.02] transition-transform delay-75">
                <CardHeader className="p-8 pb-3">
                  <CardTitle className="text-[11px] uppercase tracking-[0.3em] text-blue-600 font-black flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    Tone Adjustments
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-primary font-bold text-lg leading-relaxed">{result.toneAdjustments}</p>
                </CardContent>
              </Card>

              <Card className="border-none bg-white shadow-2xl rounded-[2rem] transform hover:scale-[1.02] transition-transform delay-150">
                <CardHeader className="p-8 pb-3">
                  <CardTitle className="text-[11px] uppercase tracking-[0.3em] text-purple-600 font-black flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    Conciseness Edits
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-primary font-bold text-lg leading-relaxed">{result.concisenessEdits}</p>
                </CardContent>
              </Card>

              <div className="bg-accent p-10 rounded-[2.5rem] text-white shadow-2xl transform hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                <h4 className="font-bold text-2xl mb-5 flex items-center gap-4 relative z-10">
                  <Sparkles size={28} className="text-white" /> 
                  AI Editor Feedback
                </h4>
                <p className="text-white/90 text-base leading-relaxed font-bold relative z-10">{result.overallFeedback}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
