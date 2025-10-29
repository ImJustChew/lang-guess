import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import type { Character } from '@/data';

interface ReferenceSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  characters: Character[];
  languageName: string;
}

export function ReferenceSheet({
  open,
  onOpenChange,
  characters,
  languageName,
}: ReferenceSheetProps) {
  const consonants = characters.filter((c) => c.type === 'consonant');
  const vowels = characters.filter((c) => c.type === 'vowel');

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{languageName} Character Reference</SheetTitle>
          <SheetDescription>
            All characters with their romanization
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-8">
          {/* Consonants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Consonants ({consonants.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {consonants.map((char, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <div className="text-4xl font-bold mb-1">{char.character}</div>
                  <div className="text-sm text-gray-600 font-mono">
                    {char.romanization}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vowels */}
          {vowels.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Vowels ({vowels.length})
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {vowels.map((char, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <div className="text-4xl font-bold mb-1">{char.character}</div>
                    <div className="text-sm text-blue-700 font-mono">
                      {char.romanization}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
