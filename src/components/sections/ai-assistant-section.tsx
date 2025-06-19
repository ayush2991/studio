"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { analyzePortfolio, AnalyzePortfolioInput } from "@/ai/flows/portfolio-assistant";
import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const aiAssistantFormSchema = z.object({
  projectDescriptions: z.string().min(10, { message: "Please provide some project descriptions." }),
  targetRoles: z.string().min(3, { message: "Please specify target roles." }),
});

type AiAssistantFormValues = z.infer<typeof aiAssistantFormSchema>;

const AiAssistantSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[] | null>(null);

  const form = useForm<AiAssistantFormValues>({
    resolver: zodResolver(aiAssistantFormSchema),
    defaultValues: {
      projectDescriptions: "",
      targetRoles: "",
    },
  });

  const onSubmit = async (data: AiAssistantFormValues) => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const input: AnalyzePortfolioInput = {
        projectDescriptions: data.projectDescriptions.split('\n').map(s => s.trim()).filter(s => s.length > 0),
        targetRoles: data.targetRoles,
      };
      const result = await analyzePortfolio(input);
      if (result.suggestions && result.suggestions.length > 0) {
        setSuggestions(result.suggestions);
      } else {
        setSuggestions(["No specific suggestions at the moment, but keep up the great work!"]);
      }
    } catch (error) {
      console.error("AI Assistant Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
          AI Portfolio Assistant
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          Get AI-powered suggestions to improve your portfolio based on your project descriptions and target roles.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 rounded-lg border bg-card p-6 shadow-lg md:p-8">
            <FormField
              control={form.control}
              name="projectDescriptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Descriptions (one per line)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your projects here..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetRoles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Roles</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior ML Engineer, AI Researcher" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Get Suggestions
            </Button>
          </form>
        </Form>

        {suggestions && (
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary flex items-center">
                <Sparkles className="mr-2 h-5 w-5" /> AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default AiAssistantSection;
