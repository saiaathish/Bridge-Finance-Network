import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Opportunities from "./pages/Opportunities";
import Chapters from "./pages/Chapters";
import Partners from "./pages/Partners";
import Portfolio from "./pages/Portfolio";
import OpenRoles from "./pages/OpenRoles";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Impact from "./pages/Impact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/chapters" component={Chapters} />
      <Route path="/partners" component={Partners} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/open-roles" component={OpenRoles} />
      <Route path="/blog" component={Blog} />
      <Route path="/events" component={Events} />
      <Route path="/resources" component={Resources} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/impact" component={Impact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
