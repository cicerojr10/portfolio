const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://www.cicerojrtechprofessional.software';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  // Adicione outras rotas do seu site aqui conforme necessário
];

async function generate() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  for (const link of links) {
    sitemap.write(link);
  }
  sitemap.end();

  await streamToPromise(sitemap); // aguarda o fim da escrita

  console.log('sitemap.xml gerado com sucesso!');
}

generate().catch((err) => {
  console.error('Erro ao gerar o sitemap:', err);
  process.exit(1);
});
