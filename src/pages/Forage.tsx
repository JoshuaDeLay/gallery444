
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/BottomNav";
import { Book, BookOpen, Image } from "lucide-react";
import { Card } from "@/components/ui/card";

const ForagePage = () => {
  const entries = [
    {
      type: 'poetry',
      title: 'Morning Light',
      content: 'Through dusty windowpanes,\nGolden threads of dawn weave\nStories in silence.',
      author: 'Emily R. Chen',
      date: '2024'
    },
    {
      type: 'literature',
      title: 'The Hour Before',
      content: 'The coffee pot whispers its morning song, steam rising like memories into the kitchen air...',
      author: 'Marcus Stewart',
      date: '2023'
    },
    {
      type: 'image',
      title: 'Autumn Reflections',
      imageUrl: '/placeholder.svg',
      caption: 'Light dancing through maple leaves',
      date: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF3E0] pb-20">
      <Navigation />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="font-serif text-3xl text-murakami.wood mb-8 text-center">Forage</h1>
        
        <div className="max-w-2xl mx-auto space-y-6">
          {entries.map((entry, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-murakami.cream hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                {entry.type === 'poetry' && <Book className="w-5 h-5 text-murakami.wood mt-1" />}
                {entry.type === 'literature' && <BookOpen className="w-5 h-5 text-murakami.wood mt-1" />}
                {entry.type === 'image' && <Image className="w-5 h-5 text-murakami.wood mt-1" />}
                
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-murakami.wood mb-2">{entry.title}</h3>
                  {entry.type === 'image' ? (
                    <div className="relative aspect-[4/3] mb-3 rounded-lg overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={entry.imageUrl} 
                        alt={entry.caption}
                        className="object-cover w-full h-full sepia hover:sepia-0 transition-all duration-500"
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                        {entry.caption}
                      </p>
                    </div>
                  ) : (
                    <p className="whitespace-pre-line text-murakami.shadow/80 mb-3 font-serif">
                      {entry.content}
                    </p>
                  )}
                  <div className="flex justify-between items-center text-sm text-murakami.shadow/60 mt-2 border-t border-murakami.cream/30 pt-2">
                    <span>{entry.author}</span>
                    <span>{entry.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ForagePage;
