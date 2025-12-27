// src/components/layout/BenefitsMarquee.tsx
import {
  MdSpeed,
  MdDevices,
  MdTrendingUp,
  MdSecurity,
  MdSearch,
  MdBarChart,
  MdGroup,
  MdPhoneIphone,
  MdLock,
  MdAttachMoney,
  MdCloud,
  MdRocketLaunch,
  MdAccessTime,
  MdVerified,
} from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";

const benefitsList = [
  { 
    icon: MdSpeed, 
    name: "Alta Performance", 
    description: "Carregamento ultrarrápido para melhor experiência do usuário",
    color: "from-red-500 to-orange-500"
  },
  { 
    icon: MdDevices, 
    name: "100% Responsivo", 
    description: "Perfeito em celulares, tablets e desktops",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: MdTrendingUp, 
    name: "Mais Conversões", 
    description: "Design focado em gerar resultados e vendas",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: MdSecurity, 
    name: "Segurança Máxima", 
    description: "Proteção de dados, SSL e backups automáticos",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: MdSearch, 
    name: "SEO Otimizado", 
    description: "Melhor posicionamento no Google e buscas",
    color: "from-yellow-500 to-amber-500"
  },
  { 
    icon: SiGooglesearchconsole, 
    name: "Presença 24/7", 
    description: "Seu negócio sempre disponível online",
    color: "from-indigo-500 to-blue-500"
  },
  { 
    icon: MdBarChart, 
    name: "Analytics", 
    description: "Métricas detalhadas para decisões inteligentes",
    color: "from-teal-500 to-green-500"
  },
  { 
    icon: MdGroup, 
    name: "UX Premium", 
    description: "Interface que encanta e retém clientes",
    color: "from-pink-500 to-rose-500"
  },
  { 
    icon: MdPhoneIphone, 
    name: "Mobile First", 
    description: "Otimizado primeiro para dispositivos móveis",
    color: "from-violet-500 to-purple-500"
  },
  { 
    icon: MdLock, 
    name: "LGPD Compliant", 
    description: "Totalmente adequado à legislação brasileira",
    color: "from-gray-500 to-gray-700"
  },
  { 
    icon: MdAttachMoney, 
    name: "ROI Garantido", 
    description: "Retorno mensurável sobre o investimento",
    color: "from-lime-500 to-green-500"
  },
  { 
    icon: MdCloud, 
    name: "Hospedagem Premium", 
    description: "99.9% de disponibilidade e suporte",
    color: "from-sky-500 to-blue-500"
  },
  { 
    icon: MdRocketLaunch, 
    name: "Escalável", 
    description: "Cresça sem limitações técnicas",
    color: "from-will-primary to-will-accent"
  },
  { 
    icon: MdAccessTime, 
    name: "Entrega Rápida", 
    description: "Desenvolvimento ágil e eficiente",
    color: "from-orange-500 to-red-500"
  },
  { 
    icon: MdVerified, 
    name: "Suporte Contínuo", 
    description: "Manutenção e atualizações periódicas",
    color: "from-cyan-500 to-teal-500"
  },
];

export default function BenefitsMarquee() {
  // Duplica o array para criar um efeito de loop contínuo
  const duplicatedBenefits = [
    ...benefitsList,
    ...benefitsList,
    ...benefitsList,
    ...benefitsList,
  ];

  return (
    <div className="w-full py-12 md:py-20 lg:py-24 flex justify-center items-center overflow-hidden bg-linear-to-b from-will-bg-dark via-gray-900/30 to-will-bg-dark">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-16 px-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-linear-to-r from-will-primary/20 to-will-accent/20 border border-will-primary/30 mb-4">
            <span className="text-sm font-medium text-will-light">VANTAGENS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-3 md:mb-5">
            <span className="bg-linear-to-r from-will-primary via-will-secondary to-will-accent bg-clip-text text-transparent">
              Benefícios Exclusivos
            </span>{" "}
            para Seu Negócio
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-will-text-light max-w-3xl mx-auto">
            Tudo que você precisa em um site profissional para destacar sua marca e aumentar suas vendas
          </p>
        </div>

        {/* Gradientes nas bordas */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-will-bg-dark via-will-bg-dark/95 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-will-bg-dark via-will-bg-dark/95 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Principal */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedBenefits.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="shrink-0 flex items-center justify-center px-3 sm:px-4 md:px-6"
                >
                  <div className="relative group">
                    {/* Card */}
                    <div className={`flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 min-w-[140px] sm:min-w-40 md:min-w-[180px] lg:min-w-[200px] h-[140px] sm:h-40 md:h-[180px] lg:h-[200px] group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gray-900/50`}>
                      
                      {/* Ícone com gradiente */}
                      <div className={`mb-3 sm:mb-4 p-2.5 sm:p-3 md:p-4 rounded-full bg-linear-to-br ${item.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500`}>
                        <item.icon className="text-2xl sm:text-3xl md:text-4xl text-white" />
                      </div>
                      
                      {/* Nome */}
                      <h3 className="text-sm sm:text-base md:text-lg font-bold font-montserrat text-white text-center mb-1">
                        {item.name}
                      </h3>
                      
                      {/* Descrição (aparece no hover) */}
                      <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-xs sm:text-sm text-center text-will-light bg-gray-900/90 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Indicador de hover */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center space-x-1">
                          <div className="w-1 h-1 rounded-full bg-will-accent animate-pulse"></div>
                          <div className="w-1 h-1 rounded-full bg-will-accent animate-pulse delay-150"></div>
                          <div className="w-1 h-1 rounded-full bg-will-accent animate-pulse delay-300"></div>
                        </div>
                      </div>
                    </div>

                    {/* Efeito de brilho */}
                    <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segunda Linha (Versão Compacta) */}
        <div className="mt-8 md:mt-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-will-bg-dark via-will-bg-dark/95 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-will-bg-dark via-will-bg-dark/95 to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-reverse">
              {[...benefitsList, ...benefitsList].reverse().map((item, index) => (
                <div
                  key={`${item.name}-reverse-${index}`}
                  className="shrink-0 flex items-center justify-center px-2 sm:px-3 md:px-4"
                >
                  <div className="group">
                    <div className="flex items-center p-3 sm:p-4 md:p-5 rounded-lg md:rounded-xl bg-gray-800/10 hover:bg-gray-800/30 transition-all duration-300 min-w-40 sm:min-w-[180px] md:min-w-[200px] h-[60px] sm:h-[70px] md:h-20 border border-gray-700/20 group-hover:border-gray-600/40">
                      
                      {/* Ícone pequeno */}
                      <div className={`p-2 rounded-lg bg-linear-to-br ${item.color} bg-opacity-10 mr-3 sm:mr-4`}>
                        <item.icon className="text-lg sm:text-xl text-white" />
                      </div>
                      
                      {/* Texto */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-will-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-16 px-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-will-primary animate-pulse"></div>
            <span className="text-xs sm:text-sm text-will-text-light">
              Passe o mouse para ver detalhes
            </span>
          </div>
          <div className="hidden sm:block text-will-text-light">•</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-will-accent animate-pulse delay-500"></div>
            <span className="text-xs sm:text-sm text-will-text-light">
              {benefitsList.length} benefícios exclusivos
            </span>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 45s linear infinite;
        }
        
        /* Responsividade das animações */
        @media (max-width: 1024px) {
          .animate-scroll {
            animation: scroll 35s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 40s linear infinite;
          }
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 30s linear infinite;
          }
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 25s linear infinite;
          }
        }
        
        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}