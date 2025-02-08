import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { TemplateProps } from '@/types/components'

interface CollaborationZone {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

const CollaborationCard = ({ zone }: { zone: CollaborationZone }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 p-4 rounded-lg backdrop-blur-sm"
    >
      <span className="text-4xl mb-2 block">{zone.emoji}</span>
      <h3 className="text-lg font-semibold text-yellow-400">{zone.name}</h3>
      <p className="text-sm text-[#f0e6d2]/80">{zone.description}</p>
    </motion.div>
  );
};

export const TemplatesPage: FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const collaborationZones: CollaborationZone[] = [
    {
      id: 'heart-space',
      name: 'Heart Space',
      emoji: '💝',
      description: 'Share emotions through your art'
    },
    {
      id: 'inspiration-corner',
      name: 'Inspiration Corner',
      emoji: '✨',
      description: 'Exchange creative sparks'
    },
    // Add more zones...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery Templates</h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {collaborationZones.map(zone => (
          <CollaborationCard key={zone.id} zone={zone} />
        ))}
      </div>
      {/* Existing template content */}
    </div>
  );
};

export default TemplatesPage 