
import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, 
  Users, Paintbrush, Bookmark, 
  Instagram, Lock, Landmark, HeartHandshake
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartbeatContainer } from "@/components/LoveableAnimations";

export const RevenuePitchSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] to-[#E5DEFF] text-black overflow-hidden">
      <main className="container mx-auto px-4 py-8 max-h-[calc(100vh-4rem)] overflow-auto">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <HeartbeatContainer>
              <div className="inline-flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-[10px] font-mono tracking-wider border-[#8B4513]/20 bg-white/50 uppercase">
                  GALLERY™ INVESTOR PITCH
                </Badge>
              </div>
            </HeartbeatContainer>
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#5E4B56] uppercase">
              "Business <span className="font-normal italic">Model</span>"
            </h1>
            <p className="text-[#8E9196] text-xs uppercase font-mono tracking-wide mt-1">
              MONETIZATION STRATEGY & GROWTH ROADMAP
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Revenue Streams Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-none overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-[#FAF3E0] to-[#FDE1D3] text-[#5E4B56] font-mono uppercase text-sm pt-4 pb-4 px-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-[#8B4513]" />
                  <h2>Revenue Streams</h2>
                </div>
                <Badge className="bg-white/90 text-[#8B4513] text-[10px] font-mono">01</Badge>
              </CardHeader>
              <CardContent className="p-5 bg-white/90">
                <ul className="space-y-5">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Bookmark className="h-5 w-5 text-[#FFB5C5] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">EXCLUSIVE CATALOGUES</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Partner with literary houses and artists to offer paid digital experiences</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <Lock className="h-5 w-5 text-[#FFB5C5] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">PREMIUM MEMBERSHIP</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Unlock exclusive templates, collaborative tools, and private galleries</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Paintbrush className="h-5 w-5 text-[#FFB5C5] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">ARTIST FEATURES</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Monetize exposure through in-app promotions and events</p>
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
            <Card className="border-none overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-[#D3E4FD] to-[#98D8D8] text-[#5E4B56] font-mono uppercase text-sm pt-4 pb-4 px-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4 text-[#5E4B56]" />
                  <h2>Key Partnerships</h2>
                </div>
                <Badge className="bg-white/90 text-[#5E4B56] text-[10px] font-mono">02</Badge>
              </CardHeader>
              <CardContent className="p-5 bg-white/90">
                <ul className="space-y-5">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-[#98D8D8] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">MUSEUMS & GALLERIES</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Feature renowned works and create immersive digital archives</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Paintbrush className="h-5 w-5 text-[#98D8D8] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">ARTISTS & WRITERS</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Promote exclusive collaborations and commission-based art sales</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-[#98D8D8] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">CULTURAL INSTITUTIONS</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Establish credibility and drive engagement</p>
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
            <Card className="border-none overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-[#FEF7CD] to-[#FEC6A1] text-[#5E4B56] font-mono uppercase text-sm pt-4 pb-4 px-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#8B4513]" />
                  <h2>Growth Strategy</h2>
                </div>
                <Badge className="bg-white/90 text-[#8B4513] text-[10px] font-mono">03</Badge>
              </CardHeader>
              <CardContent className="p-5 bg-white/90">
                <ul className="space-y-5">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <Instagram className="h-5 w-5 text-[#FEC6A1] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">CREATOR COLLABORATIONS</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Leverage niche creators on Instagram to drive adoption</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-[#FEC6A1] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">MUSEUM INTEGRATIONS</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Unlock digital artwork templates when visiting a museum</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="h-5 w-5 text-[#FEC6A1] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-mono uppercase font-medium text-[#5E4B56]">COMMUNITY BUILDING</p>
                      <p className="text-xs text-[#8E9196] font-sans mt-1">Foster a network of creators who contribute to the platform</p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="border-t border-[#E5DEFF] pt-8 text-center">
          <p className="text-sm text-[#8E9196] font-serif italic tracking-wide">
            "Cultural spaces reimagined for the digital era"
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <Badge variant="outline" className="text-[10px] font-mono border-[#98D8D8]/40 bg-white/50 text-[#5E4B56]/70 uppercase px-4 py-1">
              GALLERY™ 2024
            </Badge>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RevenuePitchSlide;
