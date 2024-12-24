import React, { useState } from "react";
import TranslationWorkspace from "./TranslationWorkspace";
import StreakCalendar from "./StreakCalendar";
import TutorialOverlay from "./TutorialOverlay";

interface HomeProps {
  isFirstVisit?: boolean;
  savedTranslation?: string;
}

const Home = ({ isFirstVisit = true, savedTranslation = "" }: HomeProps) => {
  const [showTutorial, setShowTutorial] = useState(isFirstVisit);
  const [translation, setTranslation] = useState(savedTranslation);

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Daily Latin Translation</h1>
          <StreakCalendar />
        </header>

        <main>
          <TranslationWorkspace onTranslationChange={setTranslation} />
        </main>

        <TutorialOverlay
          isOpen={showTutorial}
          onClose={() => setShowTutorial(false)}
        />
      </div>
    </div>
  );
};

export default Home;
