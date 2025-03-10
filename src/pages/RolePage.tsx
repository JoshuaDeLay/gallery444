
import { Navigation, BottomNav } from "@/components/Navigation";
import { motion } from "framer-motion";
import { 
  Paintbrush, Feather, Camera, BookOpen, 
  Quote, Eye, Clock, ExternalLink
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RolePage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activePrompt, setActivePrompt] = useState<number | null>(null);

  const roles = [
    {
      id: "writer",
      title: "THE WRITER",
      icon: Feather,
      description: "CONNECTS WORDS TO EMOTIONS",
      skills: ["STORYTELLING", "EMOTION", "THINKING"],
      quote: "IN WORDS LIES POWER",
      prompt: "WHAT STORY IS UNTOLD?"
    },
    {
      id: "painter",
      title: "THE PAINTER",
      icon: Paintbrush,
      description: "SEES BEYOND SURFACE REALITY",
      skills: ["COLOR", "FORM", "VISION"],
      quote: "MAKE INVISIBLE VISIBLE",
      prompt: "WHAT COLOR IS FEELING?"
    },
    {
      id: "photographer",
      title: "THE PHOTOGRAPHER",
      icon: Camera,
      description: "CAPTURES MOMENTS OF TRUTH",
      skills: ["TIMING", "LIGHT", "PERSPECTIVE"],
      quote: "FREEZE TIME TO SEE",
      prompt: "WHAT MOMENT MATTERS?"
    },
    {
      id: "philosopher",
      icon: BookOpen,
      title: "THE PHILOSOPHER",
      description: "QUESTIONS EXISTENCE & MEANING",
      skills: ["INQUIRY", "LOGIC", "WISDOM"],
      quote: "INTERROGATE REALITY",
      prompts: [
        "WHAT IF THE UNIVERSE HAS ALREADY SENT YOU THE MESSAGE?",
        "HOW DOES ART TRANSCEND LANGUAGE?",
        "IS CREATION A FORM OF DESTRUCTION?",
        "CAN SILENCE COMMUNICATE MORE THAN WORDS?",
        "ARE MEMORIES WHO WE ARE?"
      ]
    }
  ];

  const handleRoleSelection = (roleId: string) => {
    setSelectedRole(selectedRole === roleId ? null : roleId);
    setActivePrompt(null);
  };

  const handlePromptClick = (index: number) => {
    setActivePrompt(activePrompt === index ? null : index);
  };

  const selectedRoleData = selectedRole ? roles.find(role => role.id === selectedRole) : null;

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-14 pb-20 md:py-16 max-h-[calc(100vh-8rem)] overflow-auto">
        <header className="mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-[10px] font-mono tracking-wider border-black/40 uppercase">
                LIMITED EDITION GALLERY™
              </Badge>
              <div className="flex items-center gap-1 text-[10px] text-black/70">
                <Eye size={10} />
                <span>1247</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-black/70">
                <Clock size={10} />
                <span>7D 14H 23M</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-mono tracking-tight text-black uppercase">
              "ARTISTIC <span className="font-bold">ROLE</span>"
            </h1>
            <p className="text-black/70 text-xs uppercase font-mono tracking-wide mt-1">
              FIND A PATTERN IN THE ORDINARY.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              onClick={() => handleRoleSelection(role.id)}
            >
              <Card className={`cursor-pointer transition-all duration-300 border ${selectedRole === role.id ? 'border-black bg-black/5' : 'border-black/10 bg-white hover:border-black/30'} overflow-hidden h-full`}>
                <CardHeader className="pt-4 pb-1 px-3">
                  <div className="flex items-center justify-between">
                    <role.icon className="h-5 w-5 text-black/80" />
                    <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wide px-2 py-0 h-4 text-black/80 border-black/30">
                      ROLE
                    </Badge>
                  </div>
                  <h2 className="text-sm font-mono font-bold tracking-tight text-black uppercase mt-2">
                    {role.title}
                  </h2>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-black/70 text-[10px] leading-tight mb-2 font-mono uppercase">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-transparent text-black/80 text-[8px] border-black/20 font-mono">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedRoleData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-b from-white to-gray-100">
              <div className="p-4 relative">
                <div className="mb-2 flex justify-between items-center">
                  <Badge className="uppercase font-mono text-[10px] bg-black text-white border-0">
                    {selectedRoleData.id}
                  </Badge>
                  <div className="flex items-center gap-1 text-[10px] text-black/70">
                    <Eye size={10} />
                    <span>3892</span>
                    <Clock size={10} className="ml-2" />
                    <span>3D 8H 45M</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-mono font-bold text-black uppercase tracking-tight mb-2">
                  "{selectedRoleData.title}"
                </h3>
                
                <div className="relative border-l-2 pl-3 border-black/30 my-4">
                  <Quote className="absolute -left-4 -top-2 h-4 w-4 text-black/50" />
                  <blockquote className="text-sm font-mono text-black/90 uppercase">
                    "{selectedRoleData.quote}"
                  </blockquote>
                </div>
                
                {selectedRoleData.id === "philosopher" && (
                  <div className="mt-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider mb-3 flex items-center">
                      <Quote className="w-4 h-4 mr-1 text-black/70" />
                      UNIVERSAL PROMPT™
                    </h4>
                    <div className="space-y-2">
                      {selectedRoleData.prompts?.map((prompt, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`border p-3 cursor-pointer transition-all ${activePrompt === index ? 'border-black bg-black/5' : 'border-black/20 hover:border-black/50'}`}
                          onClick={() => handlePromptClick(index)}
                        >
                          <div className="flex justify-between items-center">
                            <p className="font-mono text-xs text-black uppercase">{prompt}</p>
                            <Badge variant="outline" className="bg-white text-black text-[10px] border-black/30">
                              {index + 1}
                            </Badge>
                          </div>
                          {activePrompt === index && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="mt-2 pt-2 border-t border-black/20"
                            >
                              <p className="text-[10px] text-black/60 italic font-mono">
                                FIND A PATTERN IN THE ORDINARY.
                              </p>
                              <Button 
                                onClick={() => navigate('/prompts')}
                                variant="outline"
                                className="mt-2 text-[10px] border-black/50 text-black hover:bg-black hover:text-white w-full font-mono"
                              >
                                EXPLORE RELATED PROMPTS
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={() => navigate('/groups')}
                  className="flex items-center gap-2 w-full bg-black hover:bg-black/90 text-white mt-4 font-mono text-xs"
                >
                  SEE YOUR GALLERY™
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="fixed bottom-16 md:bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent pt-12 pb-2 px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center max-w-lg mx-auto"
          >
            <Badge className="text-[10px] uppercase font-mono border-black/20 bg-transparent text-black/70">
              VIRGIL ABLOH'S DESIGN PRINCIPLES
            </Badge>
          </motion.div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default RolePage;
