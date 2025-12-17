// src/components/layout/Hero.tsx
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Para os ícones
import MyButton from "@/components/UI/MyButton";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 md:py-24 group relative overflow-hidden">
      {/* Badge de Destaque */}
      <div className="mb-6 mt-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-will-accent/10 border border-will-accent/20 text-will-accent text-sm font-medium animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-will-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-will-accent"></span>
          </span>
          Disponível para novos projetos
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 bg-size-[200%_200%] animate-gradient-flow bg-linear-to-r from-will-primary via-will-p-light to-will-accent bg-clip-text text-transparent flex flex-col items-center justify-center md:flex-row gap-2 leading-relaxed font-bold text-center max-w-5xl font-boldonse">
        <div>
          <div>
            <span className="text-gray-100">
              Desenvolvimento,
            </span>
          </div>
          <div>
            <span>Estratégia & Performance</span>
          </div>
        </div>
      </h1>

      <p className="text-xl text-center mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Transformo sua visão em uma ferramenta de vendas poderosa. Do WordPress
        intuitivo a aplicações Next.js de alta performance, entrego a tecnologia
        exata para o seu negócio crescer e se destacar.
      </p>

      <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-center mb-8">
        <MyButton variant="primary" href="#projects">
          Conhecer Portfólio
        </MyButton>
        <MyButton
          variant="secondary"
          href="https://wa.me/5585988954195?text=Olá Willian! Vi seu site e quero impulsionar meu negócio."
          target="_blank"
        >
          Iniciar Projeto
        </MyButton>
      </div>

      {/* Redes Sociais */}
      <div className="text-center">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://wa.me/5585988954195?text=Olá! Gostaria de conversar sobre um projeto..."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 hover:text-lime-300 transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/williangomes949"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-primary/10 text-will-primary hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/williangomes949"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-will-primary/10 text-will-primary hover:bg-will-primary/20 hover:text-will-p-light transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
