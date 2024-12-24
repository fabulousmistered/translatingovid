import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import ProgressTracker from "./ProgressTracker";

interface TranslationWorkspaceProps {
  latinText?: string;
  onTranslationChange?: (translation: string) => void;
  wordDefinitions?: Record<string, string>;
}

const TranslationWorkspace = ({
  latinText = `Primus amor Phoebi Daphne Peneia, quem non
fors ignara dedit, sed saeva Cupidinis ira.
Delius hunc nuper, victo serpente superbus,
viderat adducto flectentem cornua nervo
'quid' que 'tibi, lascive puer, cum fortibus armis?'`,
  onTranslationChange = () => {},
  wordDefinitions = {
    Primus: "first",
    amor: "love",
    Phoebi: "of Phoebus",
    Daphne: "Daphne",
    Peneia: "daughter of Peneus",
  },
}: TranslationWorkspaceProps) => {
  const [translation, setTranslation] = useState("");
  const [progress, setProgress] = useState(0);

  const handleTranslationChange = (value: string) => {
    setTranslation(value);
    onTranslationChange(value);
    // Simple progress calculation based on translation length
    const progressValue = Math.min(
      (value.length / latinText.length) * 100,
      100,
    );
    setProgress(progressValue);
  };

  return (
    <div className="w-full h-full p-6 bg-background">
      <ProgressTracker
        progress={progress}
        onSave={() => console.log("Saving translation:", translation)}
        onLoad={() => console.log("Loading saved translation")}
      />

      <div className="mt-6 grid grid-cols-2 gap-6 h-[calc(100%-4rem)]">
        <Card className="p-4 bg-card">
          <div className="prose max-w-none">
            <TooltipProvider>
              {latinText.split(/\s+/).map((word, index) => (
                <span key={index} className="inline-block mr-1">
                  {wordDefinitions[word] ? (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help hover:text-primary">
                        {word}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{wordDefinitions[word]}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <span>{word}</span>
                  )}
                </span>
              ))}
            </TooltipProvider>
          </div>
        </Card>

        <Card className="p-4 bg-card">
          <Textarea
            className="w-full h-full resize-none"
            placeholder="Enter your translation here..."
            value={translation}
            onChange={(e) => handleTranslationChange(e.target.value)}
          />
        </Card>
      </div>
    </div>
  );
};

export default TranslationWorkspace;
