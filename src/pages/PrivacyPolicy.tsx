import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] min-h-screen flex flex-col items-center py-[26px]">
      <Header />
      
      <main className="w-full max-w-[1200px] px-8 py-16">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">Hlavní stránka</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span>Zásady ochrany osobních údajů</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#4D4D4D] mb-8">Zásady ochrany osobních údajů</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">1. Kdo jsme</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Tyto zásady se týkají webových stránek fungujících na adrese www.cargoseller.pl</li>
              <li>Správce přikládá velký význam respektování práv uživatelů využívajících služby a funkce nabízené v rámci Webu, stejně jako uživatelů využívajících Web bez použití služeb a funkcí nabízených v rámci Webu, se zvláštním důrazem na právo na ochranu soukromí. Proto shromažďujeme pouze minimum informací, které nám pomáhají lépe porozumět potřebám Uživatelů a přizpůsobit Web, jeho funkce a ergonomii měnícím se očekáváním Uživatelů. Mimo jiné za tímto účelem shromažďujeme a zpracováváme nezbytné údaje Uživatelů, včetně Osobních údajů a dalších údajů, které tento charakter nemají. Shromažďování probíhá v závislosti na typu údajů z iniciativy Uživatele nebo automaticky.</li>
              <li>Správce zpracovává Osobní údaje v souladu s ustanoveními nařízení GDPR a dalšími příslušnými ustanoveními platného práva, zejména vnitrostátními předpisy týkajícími se ochrany osobních údajů. Správce pro účinnou ochranu Údajů používá bezpečnostní opatření při zpracování Údajů odpovídající hrozbám a kategoriím Údajů, která splňují požadavky stanovené v platných právních předpisech (např. přístupová hesla, omezení osob s přístupovými právy nebo umístění serverů shromažďujících data v určených místnostech nebo jejich předání do správy specializovaným subjektům).</li>
              <li>Provozovatelem webu a Správcem osobních údajů je:
                <div className="ml-6 mt-2 font-semibold">CS SOFT Monika Janczukowicz z siedzibą Szydłowo 189, 64-930 Szydłowo<br/>NIP: 7651604754 REGON: 302309608</div>
              </li>
              <li>Kontaktní e-mailová adresa provozovatele: kontakt@cargoseller.pl</li>
              <li>Provozovatel je Správcem vašich osobních údajů ve vztahu k údajům dobrovolně poskytnutým na Webu.</li>
              <li>Web využívá osobní údaje k následujícím účelům:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Zpracování dotazů prostřednictvím formuláře</li>
                  <li>Prezentace nabídky nebo informací</li>
                </ul>
              </li>
              <li>Web plní funkce získávání informací o uživatelích a jejich chování následujícím způsobem:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Prostřednictvím dobrovolně zadaných údajů ve formulářích, které jsou zavedeny do systémů Provozovatele.</li>
                  <li>Ukládáním souborů cookies (tzv. „sušenky") do koncových zařízení.</li>
                </ul>
              </li>
              <li>Web cargoseller.pl si vyhrazuje právo provádět změny v Zásadách ochrany osobních údajů. Pro každého uživatele webu platí aktuální Zásady ochrany osobních údajů umístěné na stránce https://cargoseller.pl/polityka-prywatnosci/. Jakékoli provedené změny neovlivňují základní zásadu: <strong>Web neprodává ani neposkytuje třetím stranám osobní údaje nebo adresy klientů/uživatelů svých webů a časopisů pro marketingové účely.</strong></li>
              <li>Pokud nesouhlasíte se Zásadami ochrany osobních údajů, nenavštěvujte prosím web, nenakupujte produkty a služby nabízené webem.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">2. Osobní údaje</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Při používání webů patřících do Webu můžete být požádáni o poskytnutí některých svých osobních údajů vyplněním kontaktního formuláře. Údaje, o které budete požádáni, jsou Jméno a příjmení, Telefonní číslo, E-mailová adresa, Název firmy.</li>
              <li>Vyžadujeme pouze ty údaje, které jsou nezbytné pro kontakt. Nevyplnění požadovaných polí formuláře znemožňuje kontakt.</li>
              <li>Údaje Uživatelů budou zpracovávány k následujícím účelům:
                <ol className="ml-6 mt-2 list-decimal list-inside">
                  <li>umožnění Uživatelům používat služby Webu (čl. 6 odst. 1 písm. a) nařízení GDPR – dobrovolný souhlas a čl. 6 odst. 1 písm. b) nařízení GDPR – v rozsahu Údajů nezbytných pro poskytování služeb/plnění smlouvy);</li>
                  <li>odpovídání Správcem na dotazy, výzvy nebo žádosti Uživatelů (čl. 6 odst. 1 písm. a) nařízení GDPR – dobrovolný souhlas a čl. 6 odst. 1 písm. b) nařízení GDPR – v rozsahu Údajů nezbytných pro poskytování služeb/plnění smlouvy),</li>
                  <li>plnění oprávněných účelů Správce v podobě marketingu produktů a služeb Správce (čl. 6 odst. 1 písm. f) nařízení GDPR – oprávněný zájem Správce);</li>
                </ol>
              </li>
              <li>V některých situacích má Správce právo předávat vaše osobní údaje jiným příjemcům, pokud to bude nezbytné pro plnění s vámi uzavřené smlouvy nebo pro splnění povinností ležících na Správci. To se týká těchto skupin příjemců:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>hostingová společnost na základě pověření</li>
                  <li>veřejné orgány</li>
                  <li>společnosti poskytující služby ve prospěch Správce (Software house)</li>
                </ul>
              </li>
              <li>Vaše osobní údaje zpracovává Správce ne déle, než je to nezbytné pro provádění s nimi souvisejících činností stanovených samostatnými předpisy.</li>
              <li>Máte právo požadovat od Správce:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>přístup k osobním údajům, které se vás týkají,</li>
                  <li>jejich opravu,</li>
                  <li>výmaz,</li>
                  <li>omezení zpracování,</li>
                  <li>a přenositelnost údajů.</li>
                </ul>
              </li>
              <li>Máte právo podat námitku v rozsahu zpracování uvedeném v bodě 3.3 c) proti zpracování osobních údajů za účelem plnění oprávněných zájmů realizovaných Správcem, včetně profilování, přičemž právo na námitku nebude moci být uplatněno v případě existence závažných právně oprávněných důvodů pro zpracování, nadřazených vašim zájmům, právům a svobodám, zejména zjištění, uplatňování nebo obhajování nároků.</li>
              <li>Na činnosti Správce lze podat stížnost u Úřadu pro ochranu osobních údajů (Prezesa Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Varšava.</li>
              <li>Poskytnutí osobních údajů je dobrovolné, ale nezbytné pro obsluhu Webu.</li>
              <li>Ve vztahu k vám mohou být prováděny činnosti spočívající v automatizovaném rozhodování, včetně profilování za účelem poskytování služeb v rámci uzavřené smlouvy a za účelem provádění přímého marketingu Správcem.</li>
              <li>Osobní údaje nejsou předávány do třetích zemí ve smyslu předpisů o ochraně osobních údajů. To znamená, že je nepřenášíme mimo území Evropské unie.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">3. Důležité marketingové techniky</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Provozovatel používá statistickou analýzu provozu na stránce prostřednictvím Google Analytics (Google Inc. se sídlem v USA). Provozovatel nepředává provozovateli této služby osobní údaje, pouze anonymizované informace. Služba je založena na použití cookies v koncovém zařízení uživatele. V rozsahu informací o preferencích uživatele shromažďovaných reklamní sítí Google může uživatel prohlížet a upravovat informace vyplývající ze souborů cookies pomocí nástroje: https://www.google.com/ads/preferences/</li>
              <li>Provozovatel používá remarketingové techniky umožňující přizpůsobení reklamních sdělení chování uživatele na stránce, což může vyvolat dojem, že osobní údaje uživatele jsou využívány k jeho sledování, avšak v praxi nedochází k předávání žádných osobních údajů od Provozovatele operátorům reklam. Technologickou podmínkou takových činností je zapnutá obsluha souborů cookie.</li>
              <li>Provozovatel používá Facebook pixel. Tato technologie způsobuje, že web Facebook (Facebook Inc. se sídlem v USA) ví, že daná v něm registrovaná osoba používá Web. V tomto případě vychází z údajů, vůči kterým je sám správcem, Provozovatel nepředává ze své strany žádné další osobní údaje službě Facebook. Služba je založena na použití cookies v koncovém zařízení uživatele</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">4. Neohlášené zprávy</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Web si vyhrazuje právo zasílat neohlášené zprávy osobám, jejichž kontaktní údaje má a které souhlasily se Zásadami ochrany osobních údajů. Pod pojmem neohlášené zprávy se rozumí informace týkající se přímo jeho webu a produktu.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">5. Cookies (Sušenky)</h2>
            <p className="text-gray-700">
              Některé oblasti webů patřících do Webu mohou využívat cookies, tedy malé textové soubory zasílané do počítače uživatele internetu identifikující ho způsobem potřebným pro zjednodušení nebo umořování dané operace. Cookies jsou neškodné ani pro počítač ani pro jeho uživatele a jeho data. Podmínkou fungování cookies je jejich akceptace prohlížečem a jejich nemazání z disku.
            </p>
          </section>
        </div>
      </main>
      
      <div className="w-full flex justify-center px-4">
        <ContactSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;