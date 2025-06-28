import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Curriculo from "./pages/Curriculo";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./context/ThemeContext";
import { Vignette } from "./components/Vignette";
import { FuturisticGrid } from "./components/FuturisticGrid";
import './i18n';

function App() {
  return (
    <ThemeProvider>
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
