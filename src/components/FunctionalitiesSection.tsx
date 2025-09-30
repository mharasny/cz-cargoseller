import React, { useState } from 'react';
import addLoadingImg from '@/assets/add-loading.png';
import getPropositionImg from '@/assets/get-proposition.jpg';
import loadingListImg from '@/assets/loading-list.png';
import refreshDeleteImg from '@/assets/refresh-delete.png';
import automailingImg from '@/assets/automailing.jpg';
import myloadingsImg from '@/assets/myloadings.png';
import integrationsImg from '@/assets/integrations.jpg';
import statisticsImg from '@/assets/new-statistics.png';

const FunctionalitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Přidání nákladu",
    "Sběr cenových nabídek",
    "Seznam nákladů",
    "Obnovení a odstranění nákladů",
    "Automatický mailing seznamu nákladů",
    "Náklady v mé firmě",
    "Integrace",
    "Statistiky"
  ];

  const tabImages = [
    addLoadingImg,
    getPropositionImg,
    loadingListImg,
    refreshDeleteImg,
    automailingImg,
    myloadingsImg,
    integrationsImg,
    statisticsImg
  ];

  const tabDescriptions = [
    "Přidejte náklad rychleji díky možnostem rychlého výběru, archivu nebo šablonám, zveřejněte až na 3 burzách, spusťte automatické obnovování nabídek a vyhledávání vozidel na TIMOCOM, volitelně odešlete mailing se svým seznamem nákladů vašim důvěryhodným dopravcům - vše v jednom okně.",
    "Systém sbírá cenové nabídky z burzy TIMOCOM a mailingového kanálu od vašich důvěryhodných dopravců, navíc sbírá z TIMOCOM nabídky volných vozidel v okruhu 100 km od místa nakládky.",
    "Hlavní okno se seznamem nákladů vám ušetří 50-70% času. Odtud můžete mazat, obnovovat, přidávat, upravovat nabídky, procházet cenové nabídky a nabídky volných vozidel, dokončovat transakce s účinkem na 3 burzách.",
    "Cyklické obnovení nákladu je velmi častá praxe u dispečerů vedoucí k prodeji. U nás probíhá proces obnovování automaticky každých 35 minut. Volitelně můžete obnovit ručně. Podobně je to s mazáním nabídek - mažete mnoho nabídek nebo jednotlivé nabídky s účinkem na burzách.",
    "Běžná praxe, tedy odesílání e-mailu se seznamem nákladů vašim důvěryhodným dopravcům. Aktuálně samostatná činnost vedle zadávání na burzy. Náš integrátor zajišťuje, že tuto činnost provedete při zveřejňování na burzy, ušetříte čas a uděláte to pohodlněji než kdy dříve. Systém automaticky vygeneruje personalizovaný e-mail se seznamem nákladů.",
    "Snadno zkontrolujte, co je ve vaší firmě (ve všech pobočkách) aktuálně vystaveno k prodeji a jakými prodejními kanály. Můžete se snadno kontaktovat se spolupracovníkem ohledně nákladu a podporovat kolegy/kolegyně vystavením nákladu jako svého bez jeho přepisování.",
    "Integrace vašeho uživatelského účtu s burzami vám zabere méně než 3 minuty a jste připraveni optimalizovat pracovní proces a dosahovat lepších výsledků v prodeji. Můžete také integrovat svůj TMS systém s naším systémem - to je jedna jednoduchá a rychlá integrace místo rozsáhlých, samostatných integrací s každou burzou. Staneme se pro vás integračním HUBem - to je moderní přístup ve světě digitálních řešení, který zrychluje integrace a výrazně snižuje její náklady.",
    "Prohlédněte si statistiky ukazující, jaký byl celkový objem nákladů, které byly přidány k prodeji. Zjistěte, kolik je neprodaných nákladů a optimalizujte tuto oblast. Porovnávejte měsíce, roky, procházejte údaje o marži a příjmech v členění na pobočky, celou firmu."
  ];

  return (
    <section id="funkcjonalnosci" className="w-full max-w-[1520px] mt-[131px] max-md:max-w-full max-md:mt-10 scroll-mt-24">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Funkce
      </h2>
      <div className="flex w-full flex-col items-stretch text-lg text-[#4E4D4D] font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-stretch gap-[40px_60px] flex-wrap rounded-2xl max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-full items-center gap-3 leading-none flex-wrap max-md:max-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl transition-colors hover:bg-[#5aa085] hover:text-white ${
                    activeTab === index
                      ? 'text-white bg-[#66BC98]'
                      : 'bg-white text-[#4E4D4D]'
                  }`}
                >
                  <div className="flex justify-center items-center">
                    {tab}
                  </div>
                
                </button>
              ))}
            </div>
            <div className="text-czarny font-roboto-condensed text-lg font-normal leading-6 mt-6 max-md:max-w-full">
              {tabDescriptions[activeTab]}
            </div>
          </div>
          <img
            src={tabImages[activeTab]}
            alt={`Screenshot for ${tabs[activeTab]}`}
            className="aspect-[1.8] object-contain w-[897px] shadow-[0px_0px_12px_rgba(0,0,0,0.25)] min-w-60 my-auto rounded-lg max-md:max-w-full"
          />
        </div>
        <div className="self-center flex min-h-[17px] gap-4 mt-10" />
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
