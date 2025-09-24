import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { asset } from "./utils/pathHelper"; // 1. Importar a função 'asset'

const App = () => {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <Hero />
      <div
        className="h-96 bg-cover bg-fixed bg-center flex items-center justify-center"
        // 2. Usar a função 'asset' para construir o URL da imagem
        style={{ backgroundImage: `url(${asset("images/roof.webp")})` }}
      >
        <h2 className="text-4xl text-white font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
          Qualidade e Confiança
        </h2>
      </div>
      <Services />
    </div>
  );
};

export default App;

