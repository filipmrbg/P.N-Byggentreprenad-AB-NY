/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
 *
 * Recommended dimensions per slot:
 *   hero.background       — 1400×800+ (wide, dark works best with overlay text)
 *   services.*            — 900×600 (landscape, subject-focused)
 *   gallery[]             — 800×800 (square crop)
 *   cta.banner            — 600×420 (portrait/square, shown in right column)
 *   cta.midSection        — 1400×600 (wide, used as background with dark overlay)
 *   about.hero            — 600×750 (portrait, team or company)
 *   about.teamMember      — 300×300 (square, headshot)
 *   whyChooseUs           — 600×auto (portrait or landscape, detail shot)
 *   ideaToResult          — 600×auto (landscape, process/progress shot)
 *   portfolio[]           — 800×600 (landscape, finished project photos)
 *   servicePages.*        — see individual slots below
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo-white.png',
    alt: 'P.N Byggentreprenad AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'P.N Byggentreprenad AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'P.N Byggentreprenad AB byggnation och entreprenad i Skåne',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation i Skåne',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation i Skåne',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Renovering och finsnickeri i Skåne',
    },
    tillbyggnad: {
      url: '/service-ombyggnation.webp',
      alt: 'Tillbyggnad och utbyggnad i Skåne',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Tillbyggnad och ombyggnation i Skåne',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Totalentreprenad och projektledning i Skåne',
    },
  },

  gallery: [
    { url: '/gallery-1.jpg', alt: 'P.N Byggentreprenad AB Nybyggnation i Skåne' },
    { url: '/gallery-2.jpg', alt: 'P.N Byggentreprenad AB Stomresning och snickeri' },
    { url: '/gallery-3.jpg', alt: 'P.N Byggentreprenad AB Renovering och byggarbete' },
    { url: '/gallery-4.jpg', alt: 'P.N Byggentreprenad AB Fasad och takarbete' },
    { url: '/gallery-5.jpg', alt: 'P.N Byggentreprenad AB Finsnickeri och interiör' },
    { url: '/gallery-6.jpg', alt: 'P.N Byggentreprenad AB Färdigställt projekt' },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'P.N Byggentreprenad AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Byggarbetsplats i Skåne',
    },
  },

  about: {
    hero: {
      url: '/about-main.jpg',
      alt: 'P.N Byggentreprenad AB verksamhet och hantverk',
    },
    teamMember: {
      url: '/logo-dark.png',
      alt: 'P.N Byggentreprenad AB medarbetare',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé till färdigt resultat',
  },

  portfolio: [
    {
      image: { url: '/gallery-1.jpg', alt: 'P.N Byggentreprenad AB Nybyggnation' },
      title: 'Nybyggnation',
      category: 'Villa & Fastighet',
    },
    {
      image: { url: '/gallery-2.jpg', alt: 'P.N Byggentreprenad AB Stomresning' },
      title: 'Stommontering',
      category: 'Konstruktion',
    },
    {
      image: { url: '/gallery-3.jpg', alt: 'P.N Byggentreprenad AB Tillbyggnad' },
      title: 'Tillbyggnad',
      category: 'Utbyggnad',
    },
    {
      image: { url: '/gallery-4.jpg', alt: 'P.N Byggentreprenad AB Exteriörrenovering' },
      title: 'Fasad & Tak',
      category: 'Exteriört',
    },
    {
      image: { url: '/gallery-5.jpg', alt: 'P.N Byggentreprenad AB Finsnickeri' },
      title: 'Finsnickeri',
      category: 'Interiört',
    },
    {
      image: { url: '/gallery-6.jpg', alt: 'P.N Byggentreprenad AB Totalentreprenad' },
      title: 'Helhetsentreprenad',
      category: 'Totalentreprenad',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-smahusbyggnation.webp',
        alt: 'Byggnation och stomme',
      },
      section1: {
        url: '/service-smahusbyggnation.webp',
        alt: 'Byggnation i Skåne',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats i Skåne',
      },
    },
    dranering: {
      hero: {
        url: '/service-renovering.webp',
        alt: 'Renoveringsarbete',
      },
      section1: {
        url: '/service-renovering.webp',
        alt: 'Finsnickeri',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbete på plats',
      },
    },
    betong: {
      hero: {
        url: '/service-totalentreprenad.webp',
        alt: 'Totalentreprenad',
      },
      section1: {
        url: '/service-totalentreprenad.webp',
        alt: 'Projektledning',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdigställt resultat',
      },
    },
  },
};

export default images;
