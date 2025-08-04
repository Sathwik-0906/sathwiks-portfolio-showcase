import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, HashRouter as Router, Routes } from "react-router-dom"; // <-- CHANGED
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router> // 
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  );
}

export default App;