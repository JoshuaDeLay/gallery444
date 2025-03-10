
import { Navigation, BottomNav } from "@/components/Navigation";
import { motion } from "framer-motion";
import { 
  Paintbrush, Feather, Camera, BookOpen, 
  Layers, ArrowRight, ExternalLink, Quote
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
      color: "#000000",
      accentColor: "#000000",
      description: "The writer connects words to emotions, crafting narratives that explore the human experience.",
      skills: ["Storytelling", "Emotional Depth", "Critical Thinking"],
      quote: "IN WORDS LIES THE POWER TO TRANSCEND THE ORDINARY",
      projects: ["Personal Essays", "Poetry Collections", "Literary Critique"]
    },
    {
      id: "painter",
      title: "THE PAINTER",
      icon: Paintbrush,
      color: "#000000",
      accentColor: "#000000",
      description: "The painter sees beyond surface reality, using color and form to interpret universal truths.",
      skills: ["Color Theory", "Composition", "Medium Mastery"],
      quote: "WHAT IS UNSEEN BECOMES VISIBLE THROUGH THE BRUSH",
      projects: ["Abstract Expressions", "Visual Narratives", "Experimental Works"]
    },
    {
      id: "photographer",
      title: "THE PHOTOGRAPHER",
      icon: Camera,
      color: "#000000",
      accentColor: "#000000",
      description: "The photographer captures moments of truth, freezing time to reveal what might otherwise be missed.",
      skills: ["Timing", "Perspective", "Light Manipulation"],
      quote: "THE FRAME IS A WINDOW TO ALTERED PERCEPTION",
      projects: ["Conceptual Series", "Documentary Work", "Surreal Portraits"]
    },
    {
      id: "philosopher",
      icon: BookOpen,
      title: "THE PHILOSOPHER",
      color: "#000000",
      accentColor: "#000000",
      description: "The philosopher questions the nature of existence and meaning, challenging perspectives through deep inquiry.",
      skills: ["Logical Analysis", "Conceptual Thinking", "Disciplined Questioning"],
      quote: "TO INTERROGATE REALITY IS TO TRANSFORM IT",
      projects: ["Thought Experiments", "Conceptual Frameworks", "Social Commentary"],
      prompts: [
        "What does it mean to truly see?",
        "How does art transcend language?",
        "In what ways does creation connect to destruction?",
        "Can silence communicate more than words?",
        "How does memory shape identity?"
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
    <div className="min-h-screen bg-white pb-16">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <header className="mb-12 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-mono tracking-tight text-black uppercase mb-4">
              <span className="font-bold">"ARTISTIC</span> ROLE"
            </h1>
            <p className="text-zinc-700 text-lg leading-relaxed uppercase font-mono">
              Your creative identity within the Gallery ecosystem
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleRoleSelection(role.id)}
            >
              <Card className={`h-full cursor-pointer transition-all duration-300 border-2 ${selectedRole === role.id ? 'border-black bg-white' : 'border-zinc-200 bg-white hover:border-black'}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <role.icon className="h-6 w-6 text-black" />
                    <Badge variant="outline" className="font-mono text-xs uppercase tracking-wide px-2 py-0 h-5 text-black border-black">
                      Role
                    </Badge>
                  </div>
                  <h2 className="text-xl font-mono font-bold tracking-tight text-black uppercase mt-4">
                    {role.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-700 text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-white text-black text-xs border-black">
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
            className="mb-12"
          >
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                  className="p-8 flex flex-col justify-between relative bg-black"
                >
                  <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="h-full w-full flex items-center justify-center overflow-hidden">
                      <selectedRoleData.icon className="w-[150%] h-[150%] text-white" />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <Badge className="mb-4 uppercase font-mono bg-white text-black">
                      {selectedRoleData.id}
                    </Badge>
                    <h3 className="text-3xl font-mono font-bold text-white uppercase tracking-tight mb-4">
                      {selectedRoleData.title}
                    </h3>
                    <p className="text-white/80 mb-8">
                      {selectedRoleData.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 border-l-4 pl-4 border-white">
                    <blockquote className="text-lg font-mono text-white italic">
                      "{selectedRoleData.quote}"
                    </blockquote>
                  </div>
                </div>

                <div className="bg-white p-8 border-t lg:border-t-0 lg:border-l border-black">
                  <h4 className="text-lg font-mono uppercase tracking-wider mb-6 flex items-center">
                    <Layers className="w-5 h-5 mr-2 text-black" />
                    Featured Projects
                  </h4>
                  
                  <ul className="space-y-4 mb-8">
                    {selectedRoleData.projects.map((project, index) => (
                      <motion.li 
                        key={project}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <ArrowRight className="w-4 h-4 mr-3 text-black" />
                        <span className="text-black">{project}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedRoleData.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-2 border-black text-black font-medium py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {selectedRoleData.id === "philosopher" && (
                    <div className="mb-8">
                      <h4 className="text-lg font-mono uppercase tracking-wider mb-4 flex items-center">
                        <Quote className="w-5 h-5 mr-2 text-black" />
                        Philosophical Prompts
                      </h4>
                      <ul className="space-y-2">
                        {selectedRoleData.prompts?.map((prompt, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`border p-3 cursor-pointer transition-all ${activePrompt === index ? 'border-black bg-zinc-50' : 'border-zinc-200 hover:border-black'}`}
                            onClick={() => handlePromptClick(index)}
                          >
                            <div className="flex justify-between items-center">
                              <p className="font-mono text-sm">{prompt}</p>
                              <Badge variant="outline" className="bg-black text-white text-xs border-0">
                                {index + 1}
                              </Badge>
                            </div>
                            {activePrompt === index && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-3 pt-3 border-t border-zinc-200"
                              >
                                <p className="text-xs text-zinc-600 italic">
                                  Reflect on this question. Consider how it relates to your artistic practice.
                                </p>
                                <Button 
                                  onClick={() => navigate('/prompts')}
                                  variant="outline"
                                  className="mt-2 text-xs border-black text-black hover:bg-black hover:text-white w-full"
                                >
                                  Explore Related Prompts
                                </Button>
                              </motion.div>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button 
                    onClick={() => navigate('/groups')}
                    className="flex items-center gap-2 w-full bg-black hover:bg-zinc-800 text-white"
                  >
                    Discover Related Groups
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-zinc-700 text-lg mb-6 font-mono uppercase">
              "Your role influences your interaction with Gallery spaces"
            </p>
            <div className="flex items-center justify-center">
              <Button 
                onClick={() => navigate('/groups')} 
                variant="outline" 
                className="mr-4 border-black text-black hover:bg-black hover:text-white"
              >
                Explore Groups
              </Button>
              <Button 
                onClick={() => navigate('/prompts')}
                className="bg-black hover:bg-zinc-800 text-white"
              >
                Weekly Prompts
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default RolePage;
