# Comandos 

- npm init // Cria o package.json  para iniciar um projeto node 
- npm i name_pacote // instala um pacote específico
- npm install 
ou 
    npm i // instala todos os pacotes do package.json
- npm run nome_do_script // executa 


# Estudo

- Node é o ambiente ou Runtime que roda o Js no terminal, localhost ou servidor.
- Como mudar o formato de importação/exportação de Require para Import // "type": "module", no Package.json.

# Tópicos importantes

- O que é JavaScript
- O que é framework // conjunto de recursos ou ferramentas pra resolver um problema
- o que é Npm
- O que é Node.js
- O que é Express
- Protocolo http
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

Sintaxe básica de uma rota da API

app.post('/produto', (req, res) => {
    res.json({message: 'Criado com sucesso!'})
})

- método criar ou inserir: post
- Rota ou endereço: /produto
- tipo de resposta: json