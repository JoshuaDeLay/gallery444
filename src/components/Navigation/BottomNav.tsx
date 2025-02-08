import { Home, Grid, Gallery, Users, Settings } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Prompt' },
    { icon: Grid, path: '/templates', label: 'Templates' },
    { icon: Gallery, path: '/galleries', label: 'Galleries' },
    { icon: Users, path: '/community', label: 'Community' },
    { icon: Settings, path: '/settings', label: 'Settings' }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, path, label }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`p-3 rounded-lg transition-all ${
              location.pathname === path 
              ? 'text-yellow-400 scale-110' 
              : 'text-gray-400'
            }`}
          >
            <Icon size={24} />
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}; 