// src/pages/preco.tsx
import PortfolioPricing from "@/components/layout/PortfolioPricing";
import { SectionTitle } from "@/components/UI/SectionTitle";

export default function PrecoGrade() {
  return (
    <div className="min-h-screen mt-24">
      <SectionTitle
        section="Preços"
        subtitle="Explore as opções de investimento para o seu projeto. Ofereço soluções flexíveis e personalizadas para atender às suas necessidades e orçamento, garantindo sempre a melhor qualidade e retorno.
          "
        title="Seu Investimento com Transparência e Qualidade"
        className="py-24 md:py-34"
      />

      <div className="container mx-auto px-2">
        <PortfolioPricing />
      </div>
    </div>
  );
}
