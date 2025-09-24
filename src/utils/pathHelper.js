/**
 * Constrói o caminho correto para um asset na pasta 'public'.
 * Ele adiciona o prefixo 'base' (ex: /bigbrother/) apenas em produção.
 * @param {string} path - O caminho para o asset a partir da pasta 'public' (ex: 'images/logo.png').
 * @returns {string} - O caminho completo e correto para o asset.
 */
export const asset = (path) => {
  // A variável import.meta.env.BASE_URL é fornecida pelo Vite.
  // Em desenvolvimento, ela é '/', e em produção, é o que você definiu em vite.config.js (ex: '/bigbrother/').
  const publicPath = import.meta.env.BASE_URL;

  // Remove barras extras para evitar caminhos como '/bigbrother//images/logo.png'
  const cleanedPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `${publicPath}${cleanedPath}`;
};

