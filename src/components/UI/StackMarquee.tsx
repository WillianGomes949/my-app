import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAmazon,
  SiWordpress,
  SiAdobephotoshop,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiAmazon, name: "AWS" },
  { icon: SiAdobephotoshop, name: "Photoshop" },
];

export default function StackMarquee() {
  // Duplica o array várias vezes - IMPORTANTE: precisa ser suficiente para cobrir a tela
  const duplicatedStack = [
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
  ];

  return (
    <div className="w-full h-12 py-16 sm:py-20 md:py-24 flex justify-center items-center overflow-hidden relative">
      
      <div className="w-11/12 md:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 mask-x-from-90% mask-x-to-95%">
        <div className="overflow-hidden">
          <div className="flex">
            {/* Primeira parte (visível) */}
            <div className="flex animate-scroll-slow">
              {duplicatedStack.map((item, index) => (
                <div
                  key={`first-${item.name}-${index}`}
                  className="shrink-0 flex items-center justify-center p-4 sm:p-6 md:p-8"
                >
                  <div className="relative">
                    <div className="group flex flex-col items-center justify-center text-gray-600 hover:text-will-accent transition-colors duration-300 cursor-pointer">
                      <item.icon className="text-4xl sm:text-4xl md:text-5xl ml-6" />
                      <span className="opacity-0 group-hover:opacity-100 text-xs sm:text-sm font-medium mt-2 sm:mt-3 transition-opacity duration-300 ml-6">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Segunda parte (cópia para transição suave) */}
            <div className="flex animate-scroll-slow">
              {duplicatedStack.map((item, index) => (
                <div
                  key={`second-${item.name}-${index}`}
                  className="shrink-0 flex items-center justify-center p-4 sm:p-6 md:p-8"
                >
                  <div className="relative">
                    <div className="group flex flex-col items-center justify-center text-gray-600 hover:text-will-accent transition-colors duration-300 cursor-pointer">
                      <item.icon className="text-3xl sm:text-4xl md:text-5xl ml-6" />
                      <span className="opacity-0 group-hover:opacity-100 text-xs sm:text-sm font-medium mt-2 sm:mt-3 transition-opacity duration-300 ml-6">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Adiciona animação ao globals.css ou aqui inline */}
      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-slow {
          animation: scroll-smooth 180s linear infinite;
        }
        
        /* Mais lento no mobile para evitar pulos */
        @media (max-width: 640px) {
          .animate-scroll-slow {
            animation: scroll-smooth 200s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}