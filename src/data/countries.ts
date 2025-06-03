export interface Country {
  code: string;
  name: {
    en: string;
    sq: string;
  };
  flag: string;
}

export const europeanCountries: Country[] = [
  {
    code: 'al',
    name: {
      en: 'Albania',
      sq: 'Shqipëria'
    },
    flag: 'https://flagcdn.com/al.svg'
  },
  {
    code: 'at',
    name: {
      en: 'Austria',
      sq: 'Austria'
    },
    flag: 'https://flagcdn.com/at.svg'
  },
  {
    code: 'be',
    name: {
      en: 'Belgium',
      sq: 'Belgjika'
    },
    flag: 'https://flagcdn.com/be.svg'
  },
  {
    code: 'bg',
    name: {
      en: 'Bulgaria',
      sq: 'Bullgaria'
    },
    flag: 'https://flagcdn.com/bg.svg'
  },
  {
    code: 'hr',
    name: {
      en: 'Croatia',
      sq: 'Kroacia'
    },
    flag: 'https://flagcdn.com/hr.svg'
  },
  {
    code: 'cz',
    name: {
      en: 'Czech Republic',
      sq: 'Republika Çeke'
    },
    flag: 'https://flagcdn.com/cz.svg'
  },
  {
    code: 'dk',
    name: {
      en: 'Denmark',
      sq: 'Danimarka'
    },
    flag: 'https://flagcdn.com/dk.svg'
  },
  {
    code: 'ee',
    name: {
      en: 'Estonia',
      sq: 'Estonia'
    },
    flag: 'https://flagcdn.com/ee.svg'
  },
  {
    code: 'fi',
    name: {
      en: 'Finland',
      sq: 'Finlanda'
    },
    flag: 'https://flagcdn.com/fi.svg'
  },
  {
    code: 'fr',
    name: {
      en: 'France',
      sq: 'Franca'
    },
    flag: 'https://flagcdn.com/fr.svg'
  },
  {
    code: 'de',
    name: {
      en: 'Germany',
      sq: 'Gjermania'
    },
    flag: 'https://flagcdn.com/de.svg'
  },
  {
    code: 'gr',
    name: {
      en: 'Greece',
      sq: 'Greqia'
    },
    flag: 'https://flagcdn.com/gr.svg'
  },
  {
    code: 'hu',
    name: {
      en: 'Hungary',
      sq: 'Hungaria'
    },
    flag: 'https://flagcdn.com/hu.svg'
  },
  {
    code: 'ie',
    name: {
      en: 'Ireland',
      sq: 'Irlanda'
    },
    flag: 'https://flagcdn.com/ie.svg'
  },
  {
    code: 'it',
    name: {
      en: 'Italy',
      sq: 'Italia'
    },
    flag: 'https://flagcdn.com/it.svg'
  }
];