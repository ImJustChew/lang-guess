import { useState } from "react";
import { Game } from "@/components/Game";
import { ReferenceSheet } from "@/components/ReferenceSheet";
import { getLanguage, languages } from "@/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function App() {
  const [showReference, setShowReference] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("thai");

  const language = getLanguage(currentLanguage);

  return (
    <>
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <Card className="p-3">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Language:
            </label>
            <div className="flex gap-2">
              {Object.entries(languages).map(([key, lang]) => (
                <Button
                  key={key}
                  onClick={() => setCurrentLanguage(key)}
                  variant={currentLanguage === key ? "default" : "outline"}
                  size="sm"
                >
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Game
        characters={language.characters}
        languageName={language.name}
        onShowReference={() => setShowReference(true)}
      />
      <ReferenceSheet
        open={showReference}
        onOpenChange={setShowReference}
        characters={language.characters}
        languageName={language.name}
      />
    </>
  );
}

export default App;
