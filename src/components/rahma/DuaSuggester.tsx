'use client';

import { getDuaSuggestions } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Suggestions...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Suggest Du'as
        </>
      )}
    </Button>
  );
}

export function DuaSuggester() {
  const [state, formAction] = useFormState(getDuaSuggestions, undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  useEffect(() => {
    if (state?.duaRecommendations) {
      formRef.current?.reset();
    }
  }, [state?.duaRecommendations]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Lightbulb className="h-6 w-6 text-primary" />
          Successful Du'a
        </CardTitle>
        <CardDescription>
          Describe your situation or feelings, and our AI will suggest relevant
          supplications for you.
        </CardDescription>
      </CardHeader>
      <form action={formAction} ref={formRef}>
        <CardContent>
          <Textarea
            name="situation"
            placeholder="O my allah, make it easy and do not make it difficult, and complete it with good (اللَّهُمَّ لاَ سَهْلاً إِلّاَ مَا جَعَلّتَهٌ سَهْلاً وَأَنّتَ تَجّعَلَ الحَزَنَ إِذَا شِئتَ سَهْلاً)"
            className="min-h-[100px] text-base"
            required
          />
        </CardContent>
        <CardFooter className="flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Powered by Generative AI. Please verify Du'as with authentic
            sources.
          </p>
          <SubmitButton />
        </CardFooter>
      </form>

      {state?.duaRecommendations && state.duaRecommendations.length > 0 && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="mb-4 text-lg font-semibold font-headline">
            Here are some suggested Du'as:
          </h3>
          <div className="space-y-4">
            {state.duaRecommendations.map((dua, index) => (
              <div
                key={index}
                className="rounded-lg border bg-secondary/30 p-4"
              >
                <p className="italic text-foreground">&ldquo;{dua}&rdquo;</p>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
