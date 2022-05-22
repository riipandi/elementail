const siteUrl = process.env.NODE_ENV === 'production'
  ? 'https://elementail.js.org'
  : 'http://localhost:3000';

export const siteMeta = {
  siteUrl: siteUrl,
  defaultTitle: 'Elementail',
  description: `Just another UI Kit using Tailwind CSS`,
  imageUrl: '/images/og-image.png',
  twitterUsername: '@riipandi',


  socials: {
    GitHub: 'https://github.com/riipandi',
    Twitter: 'https://twitter.com/riipandi'
  }
}
