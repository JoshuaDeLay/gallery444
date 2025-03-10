
import { Navigation, BottomNav } from "@/components/Navigation";
import { motion } from "framer-motion";
import { 
  Paintbrush, Feather, Camera, BookOpen, 
  Quote, Layers, ArrowRight, ExternalLink 
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RolePage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "writer",
      title: "THE WRITER",
      icon: Feather,
      color: "#403E43",
      accentColor: "#8B5CF6",
      description: "The writer connects words to emotions, crafting narratives that explore the human experience.",
      skills: ["Storytelling", "Emotional Depth", "Critical Thinking"],
      quote: "IN WORDS LIES THE POWER TO TRANSCEND THE ORDINARY",
      projects: ["Personal Essays", "Poetry Collections", "Literary Critique"]
    },
    {
      id: "painter",
      title: "THE PAINTER",
      icon: Paintbrush,
      color: "#403E43",
      accentColor: "#F97316",
      description: "The painter sees beyond surface reality, using color and form to interpret universal truths.",
      skills: ["Color Theory", "Composition", "Medium Mastery"],
      quote: "WHAT IS UNSEEN BECOMES VISIBLE THROUGH THE BRUSH",
      projects: ["Abstract Expressions", "Visual Narratives", "Experimental Works"]
    },
    {
      id: "photographer",
      title: "THE PHOTOGRAPHER",
      icon: Camera,
      color: "#403E43",
      accentColor: "#0EA5E9",
      description: "The photographer captures moments of truth, freezing time to reveal what might otherwise be missed.",
      skills: ["Timing", "Perspective", "Light Manipulation"],
      quote: "THE FRAME IS A WINDOW TO ALTERED PERCEPTION",
      projects: ["Conceptual Series", "Documentary Work", "Surreal Portraits"]
    },
    {
      id: "philosopher",
      icon: BookOpen,
      title: "THE PHILOSOPHER",
      color: "#403E43",
      accentColor: "#10B981",
      description: "The philosopher questions the nature of existence and meaning, challenging perspectives through deep inquiry.",
      skills: ["Logical Analysis", "Conceptual Thinking", "Disciplined Questioning"],
      quote: "TO INTERROGATE REALITY IS TO TRANSFORM IT",
      projects: ["Thought Experiments", "Conceptual Frameworks", "Social Commentary"]
    }
  ];

  const handleRoleSelection = (roleId: string) => {
    setSelectedRole(selectedRole === roleId ? null : roleId);
  };

  const selectedRoleData = selectedRole ? roles.find(role => role.id === selectedRole) : null;

  return (
    <div className="min-h-screen bg-[#F8F7F4] pb-16">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <header className="mb-12 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-mono tracking-tight text-[#403E43] uppercase mb-4">
              <span className="font-bold">ARTISTIC</span> ROLE
            </h1>
            <p className="text-[#8A898C] text-lg leading-relaxed">
              Your creative identity within the Gallery ecosystem. Each role provides a unique lens through which 
              to explore and contribute to the collective artistic experience.
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
              <Card className={`h-full border-2 cursor-pointer transition-all duration-300 ${selectedRole === role.id ? 'border-black bg-white' : 'border-transparent bg-white/70 hover:bg-white'}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <role.icon className={`h-6 w-6 ${selectedRole === role.id ? `text-[${role.accentColor}]` : 'text-[#403E43]'}`} />
                    <Badge variant="outline" className="font-mono text-xs uppercase tracking-wide px-2 py-0 h-5">
                      Role
                    </Badge>
                  </div>
                  <h2 className="text-xl font-mono font-bold tracking-tight text-[#403E43] uppercase mt-4">
                    {role.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8A898C] text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-[#F1F0FB] text-[#403E43] text-xs">
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
                  className="p-8 flex flex-col justify-between relative"
                  style={{ backgroundColor: selectedRoleData.color }}
                >
                  <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="h-full w-full flex items-center justify-center overflow-hidden">
                      <selectedRoleData.icon className="w-[150%] h-[150%] text-white" />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <Badge className={`mb-4 uppercase font-mono`} style={{ backgroundColor: selectedRoleData.accentColor, color: 'white' }}>
                      {selectedRoleData.id}
                    </Badge>
                    <h3 className="text-3xl font-mono font-bold text-white uppercase tracking-tight mb-4">
                      {selectedRoleData.title}
                    </h3>
                    <p className="text-white/80 mb-8">
                      {selectedRoleData.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 border-l-4 pl-4" style={{ borderColor: selectedRoleData.accentColor }}>
                    <blockquote className="text-lg font-mono text-white italic">
                      "{selectedRoleData.quote}"
                    </blockquote>
                  </div>
                </div>

                <div className="bg-white p-8">
                  <h4 className="text-lg font-mono uppercase tracking-wider mb-6 flex items-center">
                    <Layers className="w-5 h-5 mr-2" style={{ color: selectedRoleData.accentColor }} />
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
                        <ArrowRight className="w-4 h-4 mr-3" style={{ color: selectedRoleData.accentColor }} />
                        <span className="text-[#403E43]">{project}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedRoleData.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-2 text-[#403E43] font-medium py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => navigate('/groups')}
                    className="flex items-center gap-2 w-full"
                    style={{ backgroundColor: selectedRoleData.accentColor }}
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
            <p className="text-[#8A898C] text-lg mb-6">
              Your role influences your interaction with Gallery spaces and how you contribute 
              to collaborative mindfulness experiences.
            </p>
            <div className="flex items-center justify-center">
              <Button 
                onClick={() => navigate('/groups')} 
                variant="outline" 
                className="mr-4 border-[#403E43] text-[#403E43]"
              >
                Explore Groups
              </Button>
              <Button 
                onClick={() => navigate('/prompts')}
                className="bg-[#403E43] hover:bg-[#2A292D]"
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
