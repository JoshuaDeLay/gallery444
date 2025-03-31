import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prompts from "./pages/Prompts";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import Social from "./pages/Social";
import Memories from "./pages/Memories";
import Gallery from "./pages/Gallery";
import Templates from "./pages/Templates";
import Mindfulness from "./pages/Mindfulness";
import Groups from "./pages/Groups";
import RolePage from "./pages/RolePage";
import Curator from "./pages/Curator";
import ForagePage from "./pages/Forage";
import Login from "./pages/Login";
import RevenuePitchSlide from "./components/pitch/RevenuePitchSlide";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/prompts" element={<Prompts />} />
            <Route path="/create" element={<Create />} />
            <Route path="/social" element={<Social />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/curator" element={<Curator />} />
            <Route path="/forage" element={<ForagePage />} />
            <Route path="/role" element={<RolePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pitch" element={<RevenuePitchSlide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
