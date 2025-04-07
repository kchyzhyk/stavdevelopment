import { InlineCode } from "@/once-ui/components";

const company = {
  companyName: "SERVICE STAV DEVELOPMENT",
  get name() {
    return `${this.companyName}`;
  },
  role: "Stavební firma",
  avatar: "/images/avatar.jpg",
  location: "Europe/Brno", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Český"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {company.companyName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.s-stavdevelop.com/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.s-stavdevelop.com/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.s-stavdevelop.com/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:info.servicestav@gmail.com",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+420773605898",
  },
];

const home = {
  label: "Home",
  title: `SERVICE STAV DEVELOPMENT`,
  description: `Portfolio website showcasing my work as a ${company.role}`,
  headline: <>Vaše spokojenost je naší prioritou</>,
  subline: (
    <>
      Stavební a developerská firma{" "}
      <InlineCode>Brno, Jihomoravský kraj</InlineCode>
    </>
  ),
};

const about = {
  label: "O nas",
  title: "O nas",
  description: `Meet ${company.companyName}, ${company.role} from ${company.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <>
          Jsme rodinná stavební firma s dlouholetou tradicí, která se
          specializuje na výstavbu vysoce kvalitních staveb.
        </>
        <br />
        <br />
        <>
          Naše společnost se pyšní pečlivým přístupem k detailům a osobním
          nasazením, což nám umožňuje poskytovat služby na nejvyšší úrovni.
          Každý projekt realizujeme s maximální pečlivostí a důrazem na kvalitu,
          což zajišťuje spokojenost našich klientů. <br />
          <br /> Naše rodinné hodnoty se promítají do každé fáze stavebního
          procesu, od návrhu až po dokončení, a zaručují spolehlivost a důvěru v
          naše služby. Nejlepším ukazatelem naší kvality je skutečnost, že se k
          nám naši zákazníci neustále vracejí
        </>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Naše služby",
    services: [
      {
        serviceName: "Rekonstrukce bytů",
        achievements: [
          <>Specializujeme se na kompletní rekonstrukce bytů na klíč.</>,
          <>
            Nabízíme profesionální přístup, kvalitní řemeslné práce, moderní
            řešení a osobní dohled nad každou zakázkou.
          </>,
          <>
            Zajistíme vše od návrhu po předání – spolehlivě, včas a podle vašich
            představ.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        serviceName: "Rekonstrukce domů",
        achievements: [
          <>
            Specializujeme se na výstavbu rodinných domů na klíč s kompletním
            servisem od prvotního návrhu až po předání hotového domu.
          </>,
          <>
            Naši odborníci zajišťují všechny aspekty výstavby, včetně
            projektování, získání stavebního povolení, výběru kvalitních
            materiálů a samotné realizace.
          </>,
          <>
            Díky důrazu na vysokou kvalitu práce a využívání moderních
            technologií splníme všechny vaše představy a požadavky, aby váš nový
            domov byl přesně takový, jaký si přejete.
          </>,
        ],
        images: [],
      },
      {
        serviceName: "Příprava dokumentace pro zákazníky",
        achievements: [
          <>
            Naše společnost se specializuje na profesionální vedení projektů,
            které zahrnuje komplexní řízení všech fází stavebního procesu.
          </>,
          <>
            Od úvodního plánování a návrhu, přes koordinaci stavebních prací, až
            po závěrečnou kontrolu a předání hotového díla.
          </>,
          <>
            Pečlivě dbáme na dodržování stanovených termínů, rozpočtu a vysokých
            standardů kvality, což zajišťuje úspěšnou realizaci projektů a
            maximální spokojenost našich klientů.
          </>,
        ],
        images: [],
      },
      ,
      {
        serviceName: "Výškové a výkopové práce, fasády, rekonstrukce",
        achievements: [
          <>
            Nabízíme široké spektrum služeb v oblasti stavebnictví, včetně
            výškových prací, renovací fasád, výkopových prací a rekonstrukcí.
          </>,
          <>
            Naše zkušená a odborně vyškolená pracovní síla zajišťuje bezpečnost
            a kvalitu ve všech fázích projektu.
          </>,
          <>
            Používáme moderní technologie a osvědčené postupy, abychom dosáhli
            vynikajících výsledků. S námi můžete počítat s precizním provedením
            a dlouhodobou spolehlivostí našich stavebních řešení.
          </>,
        ],
        images: [],
      },
      ,
      {
        serviceName:
          "Architektonické, stavební, odborné inženýrské, rozpočtářské práce",
        achievements: [
          <>
            Poskytujeme komplexní služby v oblasti architektonických,
            stavebních, odborných inženýrských a rozpočtářských prací.
          </>,
          <>
            Náš zkušený tým odborníků zajišťuje pečlivé plánování a realizaci
            každého projektu, od návrhu až po dokončení.
          </>,
          <>
            Používáme moderní technologie a osvědčené postupy, abychom dosáhli
            vysoké kvality a spokojenosti klientů.
          </>,
          <>
            S námi získáte profesionální přístup a spolehlivá řešení pro všechny
            vaše stavební potřeby.
          </>,
        ],
        images: [],
      },
      ,
      {
        serviceName: "Sanační práce, zesílení starých budov, chemická injektáž",
        achievements: [
          <>
            Naše služby zahrnují obnovu a posílení konstrukční integrity
            historických a starších budov, což zajišťuje jejich dlouhodobou
            stabilitu a bezpečnost.
          </>,
          <>
            Používáme moderní technologie chemické injektáže, které efektivně
            řeší problémy s vlhkostí a zajišťují trvanlivost staveb.
          </>,
          <>
            Naši odborníci přistupují ke každému projektu s pečlivostí a důrazem
            na detail, aby dosáhli nejlepších možných výsledků.
          </>,
        ],
        images: [],
      },
      ,
      {
        serviceName: "Poradenské služby, dodání materiálu, odborné vedení",
        achievements: [
          <>
            Naše firma je vaším partnerem od začátku až do konce projektu,
            přičemž se zaměřujeme na individuální potřeby a požadavky každého
            klienta.
          </>,
          <>
            Nabízíme široké spektrum stavebních materiálů a komplexní řízení
            projektů, abychom zajistili úspěšnou a efektivní realizaci vašich
            stavebních plánů.
          </>,
          <>
            Poskytujeme komplexní poradenské služby v oblasti stavebnictví,
            včetně dodávky materiálu a odborného vedení.
          </>,
        ],
        images: [],
      },
      ,
      {
        serviceName: "Výkopové práce, geodetické zaměření, bourací práce",
        achievements: [
          <>
            S pečlivostí a zkušenostmi provádíme rozsáhlé výkopové práce pro
            různé typy staveb a projekty.
          </>,
          <>
            Naše geodetické služby zahrnují přesné měření a zaměření pozemků,
            což je klíčové pro správné plánování a realizaci stavebních
            projektů.
          </>,
          <>
            Bourací práce provádíme s ohledem na bezpečnost a životní prostředí,
            abychom zajistili efektivní a bezproblémové odstranění stávajících
            struktur.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Realizace",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${company.companyName} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Realizace",
  title: "Realizace",
  description: `Design and dev projects by ${company.companyName}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${company.companyName}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { company, social, newsletter, home, about, blog, work, gallery };
