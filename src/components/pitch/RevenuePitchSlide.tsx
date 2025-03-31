
import { motion } from "framer-motion";
import { 
  DollarSign, Briefcase, TrendingUp, 
  Users, Paintbrush, Bookmark, 
  Instagram, Lock, Landmark, HeartHandshake
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartbeatContainer } from "@/components/LoveableAnimations";

export const RevenuePitchSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gallery-soft text-black overflow-hidden">
      <main className="container mx-auto px-4 py-8 max-h-[calc(100vh-4rem)] overflow-auto">
        <header className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <HeartbeatContainer>
              <div className="inline-flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-[10px] font-mono tracking-wider border-gallery-accent/40 bg-white/50 uppercase">
                  GALLERY™ INVESTOR PITCH
                </Badge>
              </div>
            </HeartbeatContainer>
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-gallery-accent uppercase">
              "Business <span className="font-bold italic">Model</span>"
            </h1>
            <p className="text-gallery-accent/70 text-xs uppercase font-mono tracking-wide mt-1">
              MONETIZATION STRATEGY & GROWTH ROADMAP
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Revenue Streams Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border border-gallery-accent/10 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-murakami-teal to-murakami-teal/70 text-white font-mono uppercase text-sm pt-3 pb-3 px-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <h2>Revenue Streams</h2>
                </div>
                <Badge className="bg-white/90 text-gallery-accent text-[10px] font-mono">01</Badge>
              </CardHeader>
              <CardContent className="p-4 bg-white">
                <ul className="space-y-4">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Bookmark className="h-5 w-5 text-murakami-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">EXCLUSIVE CATALOGUES</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Partner with literary houses and artists to offer paid digital experiences</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <Lock className="h-5 w-5 text-murakami-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">PREMIUM MEMBERSHIP</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Unlock exclusive templates, collaborative tools, and private galleries</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Paintbrush className="h-5 w-5 text-murakami-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">ARTIST FEATURES</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Monetize exposure through in-app promotions and events</p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Partnerships Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border border-gallery-accent/10 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-murakami-pink to-murakami-pink/70 text-white font-mono uppercase text-sm pt-3 pb-3 px-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4" />
                  <h2>Key Partnerships</h2>
                </div>
                <Badge className="bg-white/90 text-gallery-accent text-[10px] font-mono">02</Badge>
              </CardHeader>
              <CardContent className="p-4 bg-white">
                <ul className="space-y-4">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-murakami-pink mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">MUSEUMS & GALLERIES</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Feature renowned works and create immersive digital archives</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Paintbrush className="h-5 w-5 text-murakami-pink mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">ARTISTS & WRITERS</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Promote exclusive collaborations and commission-based art sales</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-murakami-pink mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">CULTURAL INSTITUTIONS</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Establish credibility and drive engagement</p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Strategy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="border border-gallery-accent/10 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-murakami-cream to-murakami-wood/20 text-gallery-accent font-mono uppercase text-sm pt-3 pb-3 px-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <h2>Growth Strategy</h2>
                </div>
                <Badge className="bg-white/90 text-gallery-accent text-[10px] font-mono">03</Badge>
              </CardHeader>
              <CardContent className="p-4 bg-white">
                <ul className="space-y-4">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <Instagram className="h-5 w-5 text-murakami-wood mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">CREATOR COLLABORATIONS</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Leverage niche creators on Instagram to drive adoption</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-murakami-wood mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">MUSEUM INTEGRATIONS</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Unlock digital artwork templates when visiting a museum, creating a seamless experience</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="h-5 w-5 text-murakami-wood mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-bold text-gallery-accent">COMMUNITY BUILDING</p>
                      <p className="text-xs text-gallery-accent/70 font-mono">Foster a network of creators who contribute to and promote the platform</p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="border-t border-gallery-accent/10 pt-6 text-center">
          <p className="text-xs text-gallery-accent/60 font-serif italic tracking-wide">
            "Cultural spaces reimagined for the digital era"
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 flex justify-center"
          >
            <Badge variant="outline" className="text-[10px] font-mono border-gallery-accent/20 bg-white/50 text-gallery-accent/70 uppercase">
              GALLERY™ 2024
            </Badge>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RevenuePitchSlide;
