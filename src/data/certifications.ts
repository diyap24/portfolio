export type Certification = {
  title: string;
  issuer: string;
  date: string; // human friendly date or year
  link?: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    issuer: 'Coursera',
    date: '2022',
    link: 'https://www.coursera.org/account/accomplishments/certificate/V2J58GG6WZ9X',
    credentialId: 'V2J58GG6WZ9X'
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    date: '2022',
    link: 'https://www.coursera.org/account/accomplishments/certificate/VUTE97YDFL75',
    credentialId: 'VUTE97YDFL75'
  },
  {
    title: 'Complete Data Science Bootcamp 2022',
    issuer: 'Udemy',
    date: '2022',
    link: 'ude.my/UC-eeadcfaf-3b6b-44ef-adb3-b10a4baf42f2',
    credentialId: 'UC-eeadcfaf-3b6b-44ef-adb3-b10a4baf42f2'
  },
  {
    title: 'SAS Programming 1: Essentials',
    issuer: 'SAS',
    date: '2025',
    link: 'https://www.credly.com/badges/dc4229bf-9ae8-4da7-9452-00f73b85d1ec/linked_in_profile'
  }
];
