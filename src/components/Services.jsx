import React from "react";
import { asset } from "../utils/pathHelper";

const servicesData = [
  {
    title: "Renovate",
    image: "images/renovate.webp",
    description: "Modernizamos e transformamos seus espaços existentes com acabamentos impecáveis.",
  },
  {
    title: "Build",
    image: "images/build.webp",
    description: "Construímos estruturas de madeira novas, da fundação ao telhado, com precisão e qualidade.",
  },
  {
    title: "Metal Frame",
    image: "images/metal_frame.webp",
    description: "Soluções estruturais leves e duráveis para projetos residenciais e comerciais.",
  },
  {
    title: "Deck & Repair",
    image: "images/deck.webp",
    description: "Criamos e reparamos decks, pátios e outras estruturas externas para seu lazer.",
  },
  {
    title: "Demolition",
    image: "images/demolition.webp",
    description: "Executamos demolições seletivas e seguras para preparar o local para novas construções.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">
            A Nossa Especialidade
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Serviços de Carpintaria Completos
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Do planeamento à execução, oferecemos soluções sob medida para cada
            projeto.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2"
            >
              {/* CAMADA 1: Imagem (Fundo) */}
              <img
                src={asset(service.image)}
                alt={`Serviço de ${service.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* CAMADA 2: Sobreposição e Conteúdo combinados */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/50 group-hover:bg-black/70 transition-colors duration-300">
                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>
                <p className="text-gray-300 mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

