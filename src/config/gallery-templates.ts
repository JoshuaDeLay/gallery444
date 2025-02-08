interface GalleryMood {
  id: string;
  name: string;
  inspiration: string;
  mood: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  ambience: string[];
  structure: string;
  interactions: string[];
}

export const galleryTemplates: GalleryMood[] = [
  {
    id: 'norwegian-wood',
    name: 'Melancholic Memories',
    inspiration: 'Norwegian Wood by Haruki Murakami',
    mood: 'wistful, contemplative, magical realist',
    season: 'autumn',
    colorScheme: {
      primary: '#2D3A3A',
      secondary: '#8B4513',
      accent: '#C9A959'
    },
    ambience: [
      'Floating paper lanterns',
      'Gentle rain sounds',
      'Floating wooden walkways',
      'Mirrors that show different seasons'
    ],
    structure: 'A spiraling wooden structure that seems to defy gravity, with rooms that blend into each other like memories',
    interactions: [
      'Visitors can leave whispered messages that float like leaves',
      'Walking creates ripples in the floor like water',
      'Walls shift and change based on time of day'
    ]
  },
  {
    id: 'childhood-wonder',
    name: 'Whimsical Tales',
    inspiration: 'Wes Anderson & Harry Potter',
    mood: 'nostalgic, playful, magical',
    season: 'summer',
    colorScheme: {
      primary: '#FBB454',
      secondary: '#7C4789',
      accent: '#E63946'
    },
    ambience: [
      'Moving portraits that interact with visitors',
      'Secret passages revealed by solving riddles',
      'Floating books that open to display art',
      'Magical creatures as gallery guides'
    ],
    structure: 'A combination of Hogwarts-style moving staircases and Fantastic Mr. Fox\'s tree house system',
    interactions: [
      'Rooms that transform based on the viewer\'s childhood memories',
      'Interactive paper airplanes carrying messages',
      'Magic wand gestures to reveal hidden exhibits'
    ]
  }
]; 