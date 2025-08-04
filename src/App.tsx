import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// This is the line that was changed to fix the 404 error on GitHub Pages.
// We are using HashRouter instead of BrowserRouter.
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * The main application component.
 * It sets up the tooltip provider, toaster for notifications,
 * and the main routing for the application.
 */
function App() {
  return (
    <TooltipProvider>
      <Toaster />
      {/* The Router component (which is now HashRouter) wraps the application's
        routes. This is essential for client-side routing to work correctly
        when hosted on a static site provider like GitHub Pages.
      */}
      <Router>
        <Routes>
          {/* The main route for the portfolio's index page. */}
          <Route path="/" element={<IndexPage />} />
          {/* A catch-all route to show a "Not Found" page for any other URL. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  );
}

export default App;
