import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Dashboard } from "./components/Dashboard";
import { PostJob } from "./pages/dashboard/PostJob";
import { JobListings } from "./pages/dashboard/JobListings";
import { Profile } from "./pages/dashboard/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard><JobListings /></Dashboard>} />
          <Route path="/dashboard/post-job" element={<Dashboard><PostJob /></Dashboard>} />
          <Route path="/dashboard/jobs" element={<Dashboard><JobListings /></Dashboard>} />
          <Route path="/dashboard/profile" element={<Dashboard><Profile /></Dashboard>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;