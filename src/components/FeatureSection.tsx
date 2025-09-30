import React from 'react';
import statsImage from '@/assets/loading.png';
import searchVehicleImage from '@/assets/find-free.png';
import statisticsImage from '@/assets/ai.png';
import aiFeatureImage from '@/assets/stats.png';
import dotIcon from '@/assets/dot.svg';
interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  features,
  imageSrc,
  reversed = false
}) => {
  return <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className="flex items-center justify-center px-8 lg:px-20 py-16 lg:py-[66px] h-full min-h-[300px] lg:min-h-[400px]">
          <img src={imageSrc} alt={title} className="w-[400px] h-[400px] object-contain rounded-lg" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className={`flex flex-col justify-center h-full min-h-[300px] lg:min-h-[400px] px-6 lg:px-12 xl:px-20 py-16 lg:py-[110px] ${reversed ? 'lg:pr-6 xl:pr-12' : 'lg:pl-6 xl:pl-12'}`}>
          <h3 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-6 leading-normal">
            {title}
          </h3>
          <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 mb-6">
            {description}
          </p>
          <div className="space-y-4 mb-6">
            {features.map((feature, index) => <div key={index} className="flex items-start gap-3 text-czarny text-lg font-roboto-condensed font-normal leading-6">
                <img src={dotIcon} alt="" className="w-[19px] h-[21px] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>)}
          </div>
          
        </div>
      </div>
    </div>;
};
const FeaturesContainer = () => {
  const features = [{
    title: "Zveřejňování spotových nákladů k prodeji",
    description: "V CARGOseller přidáte náklad jednou a určíte, které nástroje a prodejní kanály aktivujete.",
    features: ["odesílání až na 3 nákladní burzy - zveřejňujete náklady na burzy, kde máte účet", "Mailing 4.0 - automatické generování e-mailu se seznamem nákladů pro vybrané skupiny důvěryhodných subdodavatelů"],
    imageSrc: statsImage
  }, {
    title: "Automatické hledání volného vozidla",
    description: "Integrace CARGOseller s TIMOCOM umožňuje automatické vyhledávání volných vozidel v okruhu 100 km od místa nakládky nákladu, který byl přidán do CARGOseller.",
    features: ["od teď nehledáte volná vozidla ručně, dělá to za vás algoritmus", "nalezené výsledky se zobrazují ve sloupci 'Nabídky' spolu s cenovými nabídkami z jiných systémů"],
    imageSrc: searchVehicleImage
  }, {
    title: "AI - rychleji, více, efektivněji",
    description: "Vložte TEXT dotazu a systém s využitím AI vytvoří hotové nabídky. Přidejte OBRÁZEK s nabídkami a systém také vytvoří hotové nabídky rychleji než člověk.",
    features: ["Práce s AI je způsob, jak zlepšit efektivitu a finanční výsledky, protože získáte čas", "Pracovní pohodlí - nepřepisujete nabídky ručně"],
    imageSrc: statisticsImage
  }, {
    title: "Statistiky",
    description: "Rozptýlení objemu spotových nákladů k prodeji v e-mailech mnoha zaměstnanců znemožňuje provádění analýz. Agregace všech spotových nákladů k prodeji v systému CARGOseller umožňuje poskytovat kompletní statistiky.",
    features: ["statistiky v časovém vyjádření", "počet zadaných, prodaných nákladů"],
    imageSrc: aiFeatureImage
  }];
  return <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16">
      

      <div className="space-y-0">
        {features.map((feature, index) => <FeatureItem key={index} title={feature.title} description={feature.description} features={feature.features} imageSrc={feature.imageSrc} reversed={index % 2 !== 0} />)}
      </div>
    </section>;
};
export default FeaturesContainer;