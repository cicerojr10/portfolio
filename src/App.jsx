import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Curriculo from "./pages/Curriculo";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./context/ThemeContext";
import { Vignette } from "./components/Vignette";
import { FuturisticGrid } from "./components/FuturisticGrid";
import { StarBackground } from "./components/StarBackground"; // Import StarBackground
import './i18n';

function App() {
  const [parallaxStyles, setParallaxStyles] = useState({
    distant: {},
    mid: {},
    near: {},
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      // Define depth multipliers
      const distantDepth = 0.05;
      const midDepth = 0.15;
      const nearDepth = 0.3;

      setParallaxStyles({
        distant: { transform: `translate(${x * distantDepth}%, ${y * distantDepth}%)` },
        mid: { transform: `translate(${x * midDepth}%, ${y * midDepth}%)` },
        near: { transform: `translate(${x * nearDepth}%, ${y * nearDepth}%)` },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <StarBackground 
        distantStarsStyle={parallaxStyles.distant}
        midStarsStyle={parallaxStyles.mid}
        nearParticlesStyle={parallaxStyles.near}
      />
      <Vignette />
      <FuturisticGrid />
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Rota padrão da home */}
          <Route index element={<Home />} />

          {/* Rota do currículo */}
          <Route path="/curriculo" element={<Curriculo />} />

          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
