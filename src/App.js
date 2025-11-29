import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";

// Layout wrapper component that includes Header and Footer
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
