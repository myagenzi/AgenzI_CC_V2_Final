import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CreativeCaaS from "./pages/what-we-do/CreativeCaaS.tsx";
import MarketingMaaS from "./pages/what-we-do/MarketingMaaS.tsx";
import ComingSoon from "./pages/what-we-do/ComingSoon.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do/creative-caas" element={<CreativeCaaS />} />
          <Route path="/what-we-do/marketing-maas" element={<MarketingMaaS />} />
          <Route
            path="/what-we-do/intelligence-zenzai"
            element={<ComingSoon title="Intelligence — Zenzai" eyebrow="03 / Intelligence as a Service" />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
