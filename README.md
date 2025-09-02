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
- Router (Para que separar as rotas?)
- O que é um padrão de projeto? 
- ORM. Por que usar ORM?
- Qual a diferenças das Dependências Desenvolvimento e Dev?

# Sintaxe básica de uma rota da API

app.post('/produto', (req, res) => {
    res.json({message: 'Criado com sucesso!'})
})

- método criar ou inserir: post
- Rota ou endereço: /produto
- tipo de resposta: json

- Para que serve o Router no express? 
-Organização do código e facilitar a manutenção dos métodos.
- O que é um padrão de projeto? = É uma forma de organizar/codificar que é amplamente conhecida.
- MVC (Model View Controler) - Padrão de projeto que organiza o código, dividindo em 3 camadas.
 Model: acesso e manipulação ao banco de dados e definir as regras de negócio;
View: Visualização que o User vai interagir, o Front-end;
Controler: controla Entrada, Processamento e Saída de dados.
- ORM (Object Relational Model) - Uma forma de relacionar o Objeto do JS com o banco de dados; Ele facilita a  modificação/alterar a base de dados e de executar os comandos.
- Dependências são recursos utilizados dentro do projeto e Dependências Dev são recurasos utilizados como ferramentas complementares para ajudar no projeto.

# Comandos do Prisma
- Instalação do Prisma 
    - npm i prisma -D
    - npm i @prisma/client

- Inicializar o Prisma
    - npx prisma init

- Gerar o model do prisma a partir de um BD existente
    - npx prisma db pull

- Gerar o BD a partir de um model do prisma
    - npx prisma db push

- Gerar os arquivos necessários para usar o prisma client no código
    - npx prisma generate