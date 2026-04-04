import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CourseDetail from "./pages/CourseDetail.tsx";
import BlogHome from "./pages/BlogHome.tsx";
import ArticleDetail from "./pages/ArticleDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        const target = document.getElementById(location.hash.slice(1));
        if (!target) return;

        const navbarOffset = 88;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
