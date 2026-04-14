export const groups = [
  {
    id: 'masschallenge',
    label: { et: 'MassChallenge London', en: 'MassChallenge London' },
    year: '2025',
    projects: [
      {
        id: '01',
        type: 'photo',
        file: 'MassChallenge_London_2025.jpg',
        title: { et: 'Üritusel kohapeal', en: 'On-site at the event' },
        desc: {
          et: 'Meie poster MassChallenge Londoni üritusel. Idufirmad, investorid, palju kohvi.',
          en: 'Our poster at the MassChallenge London event. Startups, investors, lots of coffee.',
        },
        category: 'photo',
      },
      {
        id: '05',
        type: 'pdf',
        file: 'SKYCORP A1 poster_Mass4.pdf',
        title: { et: 'A1 Messiplakat', en: 'A1 Exhibition Poster' },
        desc: {
          et: 'Plakat MassChallenge messile. A1 formaat, minimaalne, aga mahukas.',
          en: 'Poster for the MassChallenge expo. A1 format, minimal but substantial.',
        },
        category: 'design',
      },
    ],
  },
  {
    id: 'ssd',
    label: { et: 'SSD mess — Tallinn', en: 'SSD Expo — Tallinn' },
    year: '2024',
    projects: [
      {
        id: '02',
        type: 'photo',
        file: 'PXL_20250515_092730849.jpg',
        title: { et: 'Stand messil', en: 'Stand at the expo' },
        desc: {
          et: 'Meie layout eelmise aasta SSD messilt Tallinnas. Disain päriselus.',
          en: 'Our layout from last year\'s SSD expo in Tallinn. Design in real life.',
        },
        category: 'photo',
      },
      {
        id: '04',
        type: 'photo',
        file: 'Apr 26, 2025, 09_05_18 AM.png',
        title: { et: 'Esimene renderdus', en: 'First render' },
        desc: {
          et: 'Esimene renderdus SSD messile. Nii see alguse sai.',
          en: 'First render for the SSD expo. This is how it started.',
        },
        category: 'design',
      },
    ],
  },
  {
    id: 'idet',
    label: { et: 'IDET — Brno', en: 'IDET — Brno' },
    year: '2025',
    projects: [
      {
        id: '03',
        type: 'photo',
        file: 'PXL_20250528_134437124.jpg',
        title: { et: 'Stand IDET messil', en: 'Stand at IDET expo' },
        desc: {
          et: 'Meie stand IDET kaitsemessil Brno. Sõjaline kontekst, tsiviilmeeskond.',
          en: 'Our stand at the IDET defence expo in Brno. Military context, civilian team.',
        },
        category: 'photo',
      },
      {
        id: '06',
        type: 'pdf',
        file: 'SKYCORP IDET design.pdf',
        title: { et: 'Postri disain', en: 'Poster design' },
        desc: {
          et: 'IDET-i postri esialgne disain. Kust kõik algas.',
          en: 'Original poster design for IDET. Where it all began.',
        },
        category: 'design',
      },
      {
        id: '07',
        type: 'pdf',
        file: 'SKYCORP Rollup design.pdf',
        title: { et: 'Rollup — edasiarendus', en: 'Rollup — iteration' },
        desc: {
          et: 'Eelmise postri edasiarendus rollup bänneriks. 85×200cm.',
          en: 'Evolution of the previous poster into a roll-up banner. 85×200cm.',
        },
        category: 'design',
      },
    ],
  },
  {
    id: 'ukraine',
    label: { et: 'Ukraina turg', en: 'Ukrainian market' },
    year: '2025',
    projects: [
      {
        id: '08',
        type: 'pdf',
        file: 'Company profile_SKYCORP Technologies - Ukraine_v2.pdf',
        title: { et: 'Poster väärtuspakkumisega', en: 'Value proposition poster' },
        desc: {
          et: 'SKYCORP Technologies\' ettevõtteprofiil Ukraina turule. Kaheksateist lehekülge.',
          en: 'SKYCORP Technologies company profile for the Ukrainian market. Eighteen pages.',
        },
        category: 'design',
      },
    ],
  },
  {
    id: 'distillery',
    label: { et: 'Distillery', en: 'Distillery' },
    year: '2025',
    projects: [
      {
        id: '09',
        type: 'pdf',
        file: 'Unt_dist_lightBG.pdf',
        title: { et: 'Logo', en: 'Logo' },
        desc: {
          et: 'Logo disain ühele distilleeriale. Puhas, heledal taustal.',
          en: 'Logo design for a distillery. Clean, on a light background.',
        },
        category: 'design',
      },
    ],
  },
  {
    id: 'web',
    label: { et: 'Veeb', en: 'Web' },
    year: '2025',
    projects: [
      {
        id: '10',
        type: 'pdf',
        file: 'screencapture-aiaabc-ee-2025-04-29-09_35_14.pdf',
        title: { et: 'aiaabc.ee', en: 'aiaabc.ee' },
        desc: {
          et: 'Aiaabi kodulehe kuvatõmmis. Uus versioon on juba üleval.',
          en: 'Screenshot of the garden help website. A new version is already live.',
        },
        category: 'web',
      },
      {
        id: '11',
        type: 'pdf',
        file: 'screencapture-skycorp-tech-2025-04-29-09_34_41.pdf',
        title: { et: 'skycorp.tech', en: 'skycorp.tech' },
        desc: {
          et: 'SKYCORP Technologies\' kodulehe kuvatõmmis.',
          en: 'Screenshot of the SKYCORP Technologies website.',
        },
        category: 'web',
      },
    ],
  },
]

// flat list for any component that still needs it
export const projects = groups.flatMap(g => g.projects)
