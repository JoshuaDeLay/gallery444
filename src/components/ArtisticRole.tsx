
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Paintbrush } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const getArtisticRole = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("No session");

  const { data, error } = await supabase
    .from('artistic_roles')
    .select(`
      medium,
      mindfulness_groups(name)
    `)
    .eq('user_id', session.user.id)
    .single();

  if (error) throw error;
  return data;
};

export const ArtisticRole = () => {
  const { data: role, isLoading } = useQuery({
    queryKey: ['artisticRole'],
    queryFn: getArtisticRole
  });

  if (isLoading) {
    return <div className="animate-pulse h-20 bg-murakami.shadow/5 rounded-lg"></div>;
  }

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
              {role ? mediumDisplayNames[role.medium] : 'Unassigned'}
            </h3>
            <p className="text-sm text-murakami.shadow/70">
              {role?.mindfulness_groups?.name || 'No group assigned'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
