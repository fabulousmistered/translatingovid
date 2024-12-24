import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TutorialOverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const TutorialOverlay = ({
  isOpen = true,
  onClose = () => console.log("Tutorial closed"),
}: TutorialOverlayProps) => {
  const tutorialSteps = [
    {
      title: "Welcome to Daily Latin Translation!",
      content:
        "Practice your Latin translation skills with daily passages from Ovid's Metamorphoses.",
    },
    {
      title: "Two-Column Layout",
      content:
        "The original Latin text appears on the left, and you can enter your translation on the right.",
    },
    {
      title: "Word Hints",
      content:
        "Hover over any Latin word to see its definition and grammatical information.",
    },
    {
      title: "Save Your Progress",
      content: "Use the save button to store your work and return to it later.",
    },
    {
      title: "Track Your Streak",
      content:
        "Complete daily translations to build your streak and track your progress over time.",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Tutorial
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          {tutorialSteps.map((step, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card">
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.content}</p>
            </div>
          ))}

          <div className="flex justify-center pt-4">
            <Button onClick={onClose} className="w-full max-w-sm">
              Get Started
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialOverlay;
