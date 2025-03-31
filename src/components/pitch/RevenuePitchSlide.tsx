
import { motion } from "framer-motion";
import { 
  DollarSign, Briefcase, TrendingUp, 
  Users, Paintbrush, Bookmark, 
  Instagram, Lock, Landmark
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RevenuePitchSlide = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <main className="container mx-auto px-4 py-8 max-h-[calc(100vh-4rem)] overflow-auto">
        <header className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-[10px] font-mono tracking-wider border-black/40 uppercase">
                GALLERY™ INVESTOR PITCH
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-mono tracking-tight text-black uppercase">
              "BUSINESS <span className="font-bold">MODEL</span>"
            </h1>
            <p className="text-black/70 text-xs uppercase font-mono tracking-wide mt-1">
              MONETIZATION STRATEGY & GROWTH ROADMAP
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Revenue Streams Section */}
          <Card className="border border-black/10 overflow-hidden">
            <CardHeader className="bg-black text-white font-mono uppercase text-sm pt-3 pb-3 px-4 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <h2>Revenue Streams</h2>
              </div>
              <Badge className="bg-white text-black text-[10px] font-mono">01</Badge>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Bookmark className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">EXCLUSIVE DIGITAL CATALOGUES</p>
                    <p className="text-xs text-black/70 font-mono">Partner with literary houses and artists to offer paid digital experiences</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <Lock className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">PREMIUM MEMBERSHIP</p>
                    <p className="text-xs text-black/70 font-mono">Unlock exclusive templates, collaborative tools, and private galleries</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <Paintbrush className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">ARTIST & AUTHOR FEATURES</p>
                    <p className="text-xs text-black/70 font-mono">Monetize exposure through in-app promotions and events</p>
                  </div>
                </motion.li>
              </ul>
            </CardContent>
          </Card>

          {/* Key Partnerships Section */}
          <Card className="border border-black/10 overflow-hidden">
            <CardHeader className="bg-black text-white font-mono uppercase text-sm pt-3 pb-3 px-4 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <h2>Key Partnerships</h2>
              </div>
              <Badge className="bg-white text-black text-[10px] font-mono">02</Badge>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <Landmark className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">LITERARY HOUSES & MUSEUMS</p>
                    <p className="text-xs text-black/70 font-mono">Feature renowned works and create immersive digital archives</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <Paintbrush className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">ARTISTS & WRITERS</p>
                    <p className="text-xs text-black/70 font-mono">Promote exclusive collaborations and commission-based art sales</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <Landmark className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">CULTURAL INSTITUTIONS</p>
                    <p className="text-xs text-black/70 font-mono">Establish credibility and drive engagement</p>
                  </div>
                </motion.li>
              </ul>
            </CardContent>
          </Card>

          {/* Growth Strategy Section */}
          <Card className="border border-black/10 overflow-hidden">
            <CardHeader className="bg-black text-white font-mono uppercase text-sm pt-3 pb-3 px-4 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <h2>Growth Strategy</h2>
              </div>
              <Badge className="bg-white text-black text-[10px] font-mono">03</Badge>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-start gap-3"
                >
                  <Instagram className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">INFLUENCER COLLABORATIONS</p>
                    <p className="text-xs text-black/70 font-mono">Leverage niche creators on Instagram to drive adoption</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-3"
                >
                  <Landmark className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">MUSEUM ACTIVATIONS</p>
                    <p className="text-xs text-black/70 font-mono">Unlock digital artwork templates when visiting a museum, creating a seamless offline-to-online bridge</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-start gap-3"
                >
                  <Users className="h-5 w-5 text-black/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-mono uppercase font-bold">COMMUNITY BUILDING</p>
                    <p className="text-xs text-black/70 font-mono">Foster a network of creators who contribute to and promote the platform</p>
                  </div>
                </motion.li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-black/10 pt-6 text-center">
          <p className="text-xs text-black/60 font-mono uppercase tracking-wide">
            "CULTURAL SPACES REIMAGINED FOR THE DIGITAL ERA"
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 flex justify-center"
          >
            <Badge variant="outline" className="text-[10px] font-mono border-black/20 bg-transparent text-black/70 uppercase">
              GALLERY™ 2024
            </Badge>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RevenuePitchSlide;
