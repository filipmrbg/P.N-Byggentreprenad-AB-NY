export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'nybyggnation',
    title: 'Nybyggnation',
    shortDescription: 'Vi uppför arkitektritade villor, moderna flerbostadshus och kommersiella byggnader från grundläggning till nyckelfärdig överlämning med högsta precision.',
    heroText: 'Förverkliga ert byggprojekt i Skåne. Professionell nybyggnation för privatpersoner, fastighetsbolag och bostadsrättsföreningar med trygghet och kvalitet i varje moment.',
    detailedDescription: `Att bygga nytt ställer höga krav på noggrann planering, teknisk kompetens och ett strukturerat utförande. Hos P.N Byggentreprenad AB hjälper vi privatkunder, kommersiella fastighetsbolag och BRF:er att förverkliga sina byggprojekt, från moderna villor till större nybyggnationer och kommersiella lokaler i Skåne.

Vi hanterar hela byggprocessen med högsta professionalism och yrkesstolthet. Från projektering och stomresning till fasad, isolering och inredningssnickeri. Med vår breda kompetens och vårt starka engagemang levererar vi kostnadseffektiva helhetslösningar med full garanti.`,
    heroImage: '/service-smahusbyggnation.webp',
    image: '/service-smahusbyggnation.webp',
    href: '/tjanster#nybyggnation',
    tag: 'Nybyggnation',
    badge: 'Kundanpassat',
    highlights: [
      'Kundanpassad arkitektur och energieffektiva konstruktioner',
      'Erfarna yrkessnickare och certifierade hantverkare',
      'För såväl privatpersoner som BRF & kommersiella fastighetsägare',
      'Tydlig tidsplan, fasta avtal och fast pris',
    ],
    sections: [
      {
        heading: 'Från första idé till nyckelfärdigt resultat',
        text: 'Ett framgångsrikt byggprojekt börjar med en nära dialog och noggrann projektering. Vi anpassar byggprocessen efter era unika behov, tomtens förutsättningar och gällande byggnormer.',
        bullets: [
          'Projektering och rådgivning: Tryggt stöd inför byggstart och myndighetskontakter',
          'Stomresning och konstruktion: Gediget hantverk med långsiktig hållbarhet',
          'Interiör och ytskikt: Omsorgsfullt snickeri och förstklassig finish',
          'Slutbesiktning: Trygg och godkänd överlämning av ert färdiga projekt',
        ],
      },
      {
        heading: 'Hållbara material och energieffektiv konstruktion',
        text: 'Vi bygger för framtiden med moderna byggmetoder, beprövade material och energieffektiva lösningar. Det säkerställer lång livslängd, låga driftkostnader och ett behagligt inomhusklimat.',
      },
    ],
    faq: [
      {
        question: 'Hur lång tid tar en nybyggnation?',
        answer: 'Tidsplanen varierar beroende på projektets omfattning och byggnadens konstruktion, men vanligtvis tar byggnationen mellan 6 och 12 månader från godkänt bygglov till färdigställande.',
      },
      {
        question: 'Bygger ni åt både privatpersoner, BRF och företag?',
        answer: 'Ja! Vi har stor vana av att arbeta mot privatpersoner såväl som kommersiella fastighetsägare och bostadsrättsföreningar i hela Skåne.',
      },
    ],
  },
  {
    slug: 'renovering',
    title: 'Renovering',
    shortDescription: 'Varsamma och omfattande renoveringar av fastigheter, villor, lägenheter, kök och badrum som höjer standarden och fastighetsvärdet.',
    heroText: 'Förnya fastigheten med professionell renovering i Skåne. Högsta kvalitet, moderna materialval och ett omsorgsfullt hantverk.',
    detailedDescription: `Oavsett om ni vill förnya en äldre fastighet, genomföra en omfattande stam och lägenhetsrenovering för en BRF eller uppgradera en privatvilla levererar P.N Byggentreprenad AB lösningar med precision och kvalitet.

Vi kombinerar moderna byggtekniker med respekt för byggnadens ursprungliga karaktär. Vårt erfarna team ser till att renoveringen blir funktionell, stilren och långsiktigt hållbar. För privatpersoner administrerar vi självklart 30% ROT avdrag direkt på fakturan.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#renovering',
    tag: 'Invändigt & Utvändigt',
    badge: 'Kvalitetssäkrat',
    highlights: [
      'Totalrenovering och delrenovering av villor, flerbostadshus och lokaler',
      'Kök, badrum, ytskiktsrenovering och finsnickeri',
      'Fasadrenovering, fönsterbyten och takarbeten',
      'Fullständiga garantier och trygga avtal på allt utfört arbete',
    ],
    sections: [
      {
        heading: 'Skräddarsydd renovering med personligt engagemang',
        text: 'Vi lyssnar på era önskemål och tar fram smarta, kostnadseffektiva lösningar för material, funktion och estetik. Vårt mål är att renoveringen ska ske effektivt med minsta möjliga påverkan på vardag eller verksamhet.',
        bullets: [
          'Kök och badrumsrenovering: Behörigt utförande enligt gällande branschregler',
          'Golvläggning och ytskikt: Parkett, listverk, målning och finsnickeri',
          'Fastighetsrenovering: Uppfräschning av trapphus, gemensamhetsytor och lokaler',
          'Fasad och fönster: Energieffektivisering och skydd mot väder och vind',
        ],
      },
    ],
    faq: [
      {
        question: 'Hur fungerar ROT avdraget vid renovering?',
        answer: 'Som privatperson kan du dra av 30% av arbetskostnaden upp till 50 000 kr per person och år. Vi administrerar hela avdraget direkt mot Skatteverket på din faktura.',
      },
      {
        question: 'Utför ni renoveringsarbeten åt bostadsrättsföreningar och kommersiella fastighetsägare?',
        answer: 'Ja, vi utför regelbundet renoveringar, lokalanpassningar och underhållsarbeten åt BRF:er och fastighetsbolag i Skåne.',
      },
    ],
  },
  {
    slug: 'tillbyggnad',
    title: 'Tillbyggnad',
    shortDescription: 'Expandera fastigheten med tillbyggnader, extra våningsplan, uterum eller förändrade planlösningar med perfekt integration.',
    heroText: 'Skapa nya ytor och maximera fastighetens potential. Vi utför tillbyggnader och ombyggnationer med precision och hållbarhet i Skåne.',
    detailedDescription: `När behoven förändras är en tillbyggnad eller ombyggnation det bästa sättet att utöka ytan och optimera planlösningen utan att behöva byta adress.

P.N Byggentreprenad AB hanterar allt från tillbyggnad av villor och vinkelutbyggnader till attefallshus, taklyft och kommersiella lokalanpassningar. Vi ser till att den nya konstruktionen integreras sömlöst med den befintliga byggnaden både arkitektoniskt och konstruktivt.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#tillbyggnad',
    tag: 'Tillbyggnad & Ytor',
    badge: 'Flexibelt',
    highlights: [
      'Tillbyggnad av villor, attefallshus och kommersiella lokaler',
      'Väggändringar, avväxlingar och optimerade planlösningar',
      'Strukturella beräkningar och bärande förstärkningar',
      'Sömlös integration med befintlig arkitektur',
    ],
    sections: [
      {
        heading: 'Fler kvadratmeter och optimerade flöden',
        text: 'En genomtänkt tillbyggnad höjer både trivseln och fastighetens marknadsvärde. Vi säkerställer att alla bärande konstruktioner dimensioneras och utförs med högsta precision.',
        bullets: [
          'Tillbyggnad villa: Extra boyta, master bedroom, allrum eller garage',
          'Attefallshus & komplementbyggnader: Nyckelfärdiga lösningar för gäster eller uthyrning',
          'Avväxling av bärande konstruktioner: Skapa öppna och ljusa ytor',
          'Lokalanpassning: Ombyggnad för företag och kommersiella hyresgäster',
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs det bygglov för en tillbyggnad?',
        answer: 'Mindre tillbyggnader (som Attefallstillbyggnad upp till 15 kvm) kräver ofta endast en anmälan till kommunen, medan större tillbyggnader fordrar bygglov. Vi hjälper er med ritningsunderlag och rådgivning.',
      },
    ],
  },
  {
    slug: 'totalentreprenad',
    title: 'Totalentreprenad',
    shortDescription: 'En enda kontaktperson och ett samlat ansvar från idé, projektering och bygglov till nyckelfärdigt godkänt slutresultat.',
    heroText: 'Bekymmersfritt byggande med en pålitlig helhetspartner. Vi leder och samordnar samtliga yrkesgrupper genom hela projektet.',
    detailedDescription: `Med totalentreprenad från P.N Byggentreprenad AB slipper ni samordna enskilda entreprenörer och hantera tidskrävande överlämningar.

Vi tar det samlade ansvaret för tidsplan, budget, underentreprenörer (el, VVS, måleri, plattsättning m.fl.) och slutbesiktning. Som beställare, vare sig ni är privatperson, BRF styrelse eller fastighetsutvecklare, får ni en dedikerad projektledare och full insyn i varje steg.`,
    heroImage: '/service-totalentreprenad.webp',
    image: '/service-totalentreprenad.webp',
    href: '/tjanster#totalentreprenad',
    tag: 'Helhetslösning',
    badge: '100% Trygghet',
    highlights: [
      'En ansvarig projektledare och kontaktpunkt genom hela bygget',
      'Komplett samordning av snickare, elektriker, VVS-montörer och målare',
      'Fast budget, tydliga avtal och strukturerad tidsplan',
      'Full ansvarsförsäkring och dokumenterade egenkontroller',
    ],
    sections: [
      {
        heading: 'Professionellt, tryggt och kostnadseffektivt',
        text: 'Totalentreprenad är den tryggaste entreprenadformen för er som beställare. Vi tar fullt funktions och utförandeansvar, vilket minimerar risker och garanterar högsta kvalitet och finish.',
        bullets: [
          'Projektledning: Löpande avstämningar och strikt tids och budgetkontroll',
          'Kvalitetssäkrade yrkesgrupper: Certifierade samarbetspartners inom alla discipliner',
          'Dokumentation och egenkontroller: Komplett dokumentation inför slutbesiktning',
          'Garanti och försäkring: Full trygghet och långsiktigt skydd för er investering',
        ],
      },
    ],
    faq: [
      {
        question: 'Vad är fördelen med totalentreprenad jämfört med delad entreprenad?',
        answer: 'Med totalentreprenad har ni endast en avtalspart som bär det fulla ansvaret för både samordning, tidsplan och slutresultat. Det sparar tid, minimerar risker och ger maximal trygghet.',
      },
      {
        question: 'Hur säkerställer ni att budgeten hålls?',
        answer: 'Vi upprättar detaljerade och transparenta offerter där samtliga moment specificeras i förväg. Eventuella tillval eller ändringar godkänns alltid skriftligen innan utförande.',
      },
    ],
  },
];

export default services;
