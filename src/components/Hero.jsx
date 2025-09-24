import React from "react";
import { motion } from "framer-motion";
// CORREÇÃO: O caminho foi ajustado para subir dois níveis de diretório.
import { asset } from "../utils/pathHelper"; // Importa a função para corrigir os caminhos

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-black">
      {/* Imagem de fundo com máscara */}
      <div
        className="absolute inset-0"
        style={{
          // Caminho corrigido com a função 'asset'
          backgroundImage: `url(${asset("images/deck_background.webp")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>

      {/* Título + imagem sobre o fundo */}
      <motion.div className="z-10 flex flex-col items-center space-y-6 px-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.3,
            delay: 0.1,
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          // Classes de largura ajustadas para melhor responsividade
          className="bg-slate-100/20 w-full max-w-xs sm:max-w-sm md:max-w-md backdrop-blur-sm p-3 rounded-2xl border-2 border-slate-400/50 shadow-lg shadow-slate-900/50"
        >
          {/* Caminho da imagem corrigido com a função 'asset' */}
          <img
            src={asset("images/big_brother-no_background.png")}
            alt="Big Brother Logo"
            className="w-full h-auto"
          />
        </motion.div>
        <motion.p
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.4 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-5 text-2xl font-bold text-center text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          We Help You Build Your Dreams
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;

