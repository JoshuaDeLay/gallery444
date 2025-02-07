
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const getGroupMembers = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    toast.error("Please sign in to view group members");
    return [];
  }

  try {
    const { data: userRole, error: roleError } = await supabase
      .from('artistic_roles')
      .select('group_id')
      .eq('user_id', session.user.id)
      .maybeSingle();

    if (roleError) throw roleError;
    if (!userRole?.group_id) return [];

    const { data: members, error: membersError } = await supabase
      .from('artistic_roles')
      .select(`
        user_id,
        medium,
        profiles (
          full_name
        )
      `)
      .eq('group_id', userRole.group_id);

    if (membersError) throw membersError;
    return members || [];
  } catch (error: any) {
    toast.error("Failed to load group members");
    console.error("Error fetching group members:", error.message);
    return [];
  }
};

export const WeeklyPrompt = () => {
  const { data: groupMembers = [], isLoading } = useQuery({
    queryKey: ['groupMembers'],
    queryFn: getGroupMembers
  });

  return (
    <Card className={`
      relative w-full
      bg-gradient-to-br from-[#F1F0FB] via-[#E5DEFF] to-[#FFDEE2]
      animate-fade-up
      shadow-[0_8px_30px_rgb(94,75,86,0.2)]
      border-none overflow-hidden
      before:absolute before:inset-0
      before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM1RTRCNTYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]
      before:opacity-20 before:pointer-events-none
    `}>
      <CardHeader className="relative border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-md">
            <Calendar className="h-4 w-4 text-indigo-900" />
          </div>
          <h3 className="font-serif text-xl text-indigo-900 font-medium italic
            [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]">
            This Week's Gallery Theme
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative prose prose-gray max-w-none p-4">
        <blockquote className={`
          text-lg font-serif italic
          border-l-4 border-indigo-300/30 pl-4 my-4
          text-indigo-900 font-medium
          transform transition-all duration-500
          motion-safe:hover:scale-105
          [text-shadow:_1px_1px_2px_rgb(94_75_86_/_10%)]
          [font-family:'Playfair_Display',_serif]
        `}>
          "Whispers of Time: A Journey Through Epochs"
        </blockquote>
        <p className="mt-2 text-base leading-relaxed text-indigo-800/80
          [font-family:'Playfair_Display',_serif]">
          Create a gallery space that explores the dialogue between different eras.
          Consider how ancient artifacts might converse with contemporary pieces,
          or how traditional techniques could blend with modern aesthetics.
          Let your curation tell a story of time's endless flow.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs text-indigo-800/60 font-serif italic">
            New theme in: 5 days, 3 hours
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="relative border-t border-white/10 pt-3 pb-2">
        <div className="w-full">
          <p className="text-xs mb-1.5 flex items-center gap-1.5 text-indigo-800/70">
            <Eye className="h-3 w-3" />
            Fellow Curators
          </p>
          <div className="flex flex-wrap gap-1.5">
            {isLoading ? (
              <div className="animate-pulse bg-white/20 h-6 w-32 rounded-full" />
            ) : groupMembers.length > 0 ? (
              groupMembers.map((member) => (
                <div
                  key={member.user_id}
                  className="px-2 py-0.5 rounded-full text-xs
                    transition-all duration-300
                    backdrop-blur-md font-serif
                    bg-white/20 text-indigo-900 shadow-sm
                    hover:bg-white/30"
                >
                  {member.profiles?.full_name || 'Anonymous'} • {member.medium}
                </div>
              ))
            ) : (
              <span className="text-xs text-indigo-800/60 italic">
                No curators found in your group
              </span>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
