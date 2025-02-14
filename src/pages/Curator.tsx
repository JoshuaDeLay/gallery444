
import { Navigation } from "@/components/Navigation";
import { BottomNav } from "@/components/Navigation";
import { Library, Book, BookOpen, FolderOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Curator = () => {
  const collections = [
    {
      title: "Visual Arts",
      description: "A collection of painting, photography, and visual design works",
      books: [
        { title: "Color Theory in Practice", entries: 24 },
        { title: "Digital Art Techniques", entries: 18 },
        { title: "Photography Fundamentals", entries: 32 }
      ],
      icon: Library
    },
    {
      title: "Written Works",
      description: "Essays, poetry, and narrative pieces",
      books: [
        { title: "Poetry Collection 2024", entries: 45 },
        { title: "Personal Essays", entries: 28 },
        { title: "Short Stories", entries: 15 }
      ],
      icon: Book
    },
    {
      title: "Philosophy & Thoughts",
      description: "Reflections, theories, and philosophical explorations",
      books: [
        { title: "Modern Reflections", entries: 21 },
        { title: "Philosophical Dialogues", entries: 16 },
        { title: "Concept Explorations", entries: 29 }
      ],
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F6F7] to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-gallery-accent mb-4">
              The Curator's Library
            </h1>
            <p className="text-gallery-warm/80 max-w-2xl mx-auto">
              Explore our carefully curated collections of artistic works, writings, and philosophical pieces.
              Each section is organized like a library, making it easy to discover and explore content.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <collection.icon className="w-6 h-6 text-gallery-accent" />
                    <div>
                      <h2 className="text-xl font-semibold text-gallery-warm">{collection.title}</h2>
                      <p className="text-sm text-gallery-warm/60">{collection.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {collection.books.map((book) => (
                        <Dialog key={book.title}>
                          <DialogTrigger asChild>
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 cursor-pointer transition-colors">
                              <FolderOpen className="w-5 h-5 text-gallery-accent/70" />
                              <div className="flex-1">
                                <h3 className="text-sm font-medium text-gallery-warm">{book.title}</h3>
                                <p className="text-xs text-gallery-warm/60">{book.entries} entries</p>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{book.title}</DialogTitle>
                              <DialogDescription>
                                This collection contains {book.entries} curated pieces exploring various aspects of {collection.title.toLowerCase()}.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                              {/* Placeholder for book content */}
                              <div className="aspect-square bg-black/5 rounded-lg animate-pulse" />
                              <div className="aspect-square bg-black/5 rounded-lg animate-pulse" />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Curator;
