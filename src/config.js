module.exports = {
  siteTitle: 'venkateswari | Devops Engineer',
  siteDescription:
    'venkateswari is a software engineer based in banglore, MA who specializes in building and managing infrastructure.',
  siteKeywords:
    'Venkateswari sudalai, venkateswari, sudalai, Devops engineer, Site realiability engineer, SRE,',
  siteUrl: 'https://Venkateswari.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Venkateswari',
  location: 'Banglore, KA',
  email: 'venkateswari1095@gmail.com',
  github: 'https://github.com/venkateswarisudalai',
  twitterHandle: '@venkateswari_s',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/venkateswarisudalai',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/venkateswari-sudalai-371a77bb/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/venkateswari_s',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/venkateswaris',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
