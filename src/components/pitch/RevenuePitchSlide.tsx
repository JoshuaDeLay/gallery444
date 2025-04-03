
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
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-[#E5DEFF] text-black overflow-hidden">
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
                <Badge variant="outline" className="text-[10px] font-mono tracking-wider border-[#86A376]/20 bg-white/50 uppercase">
                  GALLERY™ INVESTOR PITCH
                </Badge>
              </div>
            </HeartbeatContainer>
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-[#4A6741] uppercase">
              "Business <span className="font-normal italic">Model</span>"
            </h1>
            <p className="text-[#86A376] text-xs uppercase font-mono tracking-wide mt-1">
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
            <Card className="border-none overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-[#FAF3E0]/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-[#F2FCE2] to-[#D3E4C5] font-serif italic text-[#4A6741] text-sm pt-4 pb-4 px-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-[#6B8E4E]" />
                  <h2>Revenue Streams</h2>
                </div>
                <Badge className="bg-white/90 text-[#4A6741] text-[10px] font-serif italic">01</Badge>
              </CardHeader>
              <CardContent className="p-5 bg-[#FAF3E0]/90">
                <ul className="space-y-5">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Bookmark className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Exclusive Catalogues</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Partner with literary houses and artists to offer paid digital experiences</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <Lock className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Premium Membership</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Unlock exclusive templates, collaborative tools, and private galleries</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Paintbrush className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Artist Features</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Monetize exposure through in-app promotions and events</p>
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
            <Card className="border-none overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-[#FAF3E0]/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-[#D3E4C5] to-[#A2C5AC] font-serif italic text-[#4A6741] text-sm pt-4 pb-4 px-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4 text-[#4A6741]" />
                  <h2>Key Partnerships</h2>
                </div>
                <Badge className="bg-white/90 text-[#4A6741] text-[10px] font-serif italic">02</Badge>
              </CardHeader>
              <CardContent className="p-5 bg-[#FAF3E0]/90">
                <ul className="space-y-5">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Museums & Galleries</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Feature renowned works and create immersive digital archives</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Paintbrush className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Artists & Writers</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Promote exclusive collaborations and commission-based art sales</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Cultural Institutions</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Establish credibility and drive engagement</p>
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
            <Card className="border-none overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-[#FAF3E0]/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-[#F2FCE2] to-[#D3E4C5] font-serif italic text-[#4A6741] text-sm pt-4 pb-4 px-5 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#6B8E4E]" />
                  <h2>Growth Strategy</h2>
                </div>
                <Badge className="bg-white/90 text-[#4A6741] text-[10px] font-serif italic">03</Badge>
              </CardHeader>
              <CardContent className="p-5 bg-[#FAF3E0]/90">
                <ul className="space-y-5">
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <Instagram className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Creator Collaborations</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Leverage niche creators on Instagram to drive adoption</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start gap-3"
                  >
                    <Landmark className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Museum Integrations</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Unlock digital artwork templates when visiting a museum</p>
                    </div>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="h-5 w-5 text-[#86A376] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-serif italic font-medium text-[#4A6741]">Community Building</p>
                      <p className="text-xs text-[#6B8E4E] font-sans mt-1">Foster a network of creators who contribute to the platform</p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="border-t border-[#A2C5AC]/30 pt-8 text-center">
          <p className="text-sm text-[#6B8E4E] font-serif italic tracking-wide">
            "Cultural spaces reimagined for the digital era"
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <Badge variant="outline" className="text-[10px] font-serif italic border-[#A2C5AC]/40 bg-white/50 text-[#4A6741]/70 px-4 py-1">
              GALLERY™ 2024
            </Badge>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RevenuePitchSlide;
