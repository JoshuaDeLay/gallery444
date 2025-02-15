
import { Paintbrush } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const ArtisticRole = () => {
  // Static data to replace Supabase data
  const mockRole = {
    medium: "painter",
    mindfulness_groups: {
      name: "Creative Mindfulness Group"
    }
  };

  const mediumDisplayNames: Record<string, string> = {
    writer: 'The Writer',
    poet: 'The Poet',
    musician: 'The Musician',
    sculptor: 'The Sculptor',
    painter: 'The Painter',
    photographer: 'The Photographer',
    dancer: 'The Dancer'
  };

  return (
    <Card className="bg-murakami.cream/90 border-none shadow-[0_8px_30px_rgb(94,75,86,0.1)]">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-murakami.shadow/5">
            <Paintbrush className="h-4 w-4 text-murakami.wood" />
          </div>
          <div>
            <h3 className="text-lg font-serif text-murakami.wood font-medium">
              {mockRole ? mediumDisplayNames[mockRole.medium] : 'Unassigned'}
            </h3>
            <p className="text-sm text-murakami.shadow/70">
              {mockRole?.mindfulness_groups?.name || 'No group assigned'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
