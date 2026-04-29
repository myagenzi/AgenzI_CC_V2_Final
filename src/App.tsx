import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CreativeCaaS from "./pages/what-we-do/CreativeCaaS.tsx";
import MarketingMaaS from "./pages/what-we-do/MarketingMaaS.tsx";
import IntelligenceZenzai from "./pages/what-we-do/IntelligenceZenzai.tsx";
import About from "./pages/About.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Pricing from "./pages/Pricing.tsx";
import BookAudit from "./pages/BookAudit.tsx";
import Auth from "./pages/Auth.tsx";
import { Cursor } from "./components/site/effects/Cursor.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Cursor />
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do/creative-caas" element={<CreativeCaaS />} />
          <Route path="/what-we-do/marketing-maas" element={<MarketingMaaS />} />
          <Route path="/what-we-do/intelligence-zenzai" element={<IntelligenceZenzai />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-audit" element={<BookAudit />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
