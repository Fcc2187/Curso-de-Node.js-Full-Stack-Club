const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'test');
const filePath = path.join(dirPath, 'teste.html');

// 1. Criar uma pasta
fs.mkdir(dirPath, (mkdirError) => {
  // Se der erro, mas o erro for 'EEXIST' (pasta já existe), tudo bem.
  if (mkdirError && mkdirError.code !== 'EEXIST') {
    return console.error('Erro ao criar a pasta:', mkdirError);
  }
  
  if (!mkdirError) {
    console.log('Pasta criada com sucesso!');
  } else {
    console.log('Pasta "test" já existe.');
  }

  // 2. AGORA (dentro do callback do mkdir), criar o arquivo
  fs.writeFile(filePath, 'Hello World!', (writeError) => {
    if (writeError) {
      return console.error('Erro ao criar o arquivo:', writeError);
    }
    console.log('Arquivo criado com sucesso! (com "Hello World!")');

    // 3. AGORA (dentro do callback do writeFile), adicionar conteúdo
    fs.appendFile(filePath, '\n\nOlá Mundo! Olá Node.js!', (appendError) => {
      if (appendError) {
        return console.error('Erro ao adicionar ao arquivo:', appendError);
      }
      console.log('Conteúdo adicionado ao arquivo com sucesso!');

      // 4. AGORA (dentro do callback do appendFile), ler o arquivo
      fs.readFile(filePath, 'utf-8', (readError, data) => {
        if (readError) {
          return console.error('Erro ao ler o arquivo:', readError);
        }
        console.log('\n--- Conteúdo final do arquivo: ---');
        console.log(data);
      });
    });
  });
});