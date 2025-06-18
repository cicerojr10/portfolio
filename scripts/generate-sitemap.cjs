const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://www.cicerojrtechprofessional.software';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  // Adicione mais rotas do seu site conforme necessário.
];

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(
  sitemap
    .pipe(writeStream)
    .on('finish', () => {
      console.log('sitemap.xml gerado!');
    })
);

links.forEach(link => sitemap.write(link));
sitemap.end();
