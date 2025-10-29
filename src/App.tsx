import { useState } from 'react';
import { Game } from '@/components/Game';
import { ReferenceSheet } from '@/components/ReferenceSheet';
import { getLanguage } from '@/data';

function App() {
  const [showReference, setShowReference] = useState(false);
  const [currentLanguage] = useState('thai'); // Can be made dynamic later

  const language = getLanguage(currentLanguage);

  return (
    <>
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
