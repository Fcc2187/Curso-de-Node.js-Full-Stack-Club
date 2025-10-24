const path = require('path');

console.log('Apenas o nome do arquivo:', path.basename(__filename));
console.log('Diretório do arquivo:', path.dirname(__filename));
console.log('Extensão do arquivo:', path.extname(__filename));

console.log('Objeto path:', path.parse(__filename));