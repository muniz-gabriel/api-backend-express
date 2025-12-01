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
- Padrão de Projeto Middleware

- Autenticação e login de Usuários
    - Como salvar a senha do usuário no BD de forma segura? Salvar como hash (Bycript)
    - Autenticação (Login), o que verificar e fazer no Login?
    - JWT
        - Qual o significado de JWT? = Json Web Toekn
        - Quais as vantagens do JWT? = Performance, back-end não precisa pegar os dados no BD, pois o payload já está gravado no token.
- Como é enviado o token para o backend? = Por meio da Header Authorization pelo método http.

- Validação de Dados (Regras de Negócio) com Zod
    - Pra que serve o Zod? = ele permite estabelecer regras de negócio, criando regras de validação para cada um dos campos dos meus models.
    - pra que serve o partial do Zod? = Deixar opcional a validação dos campos que não são necessários.

- ErroHandler (Middleware para tratamento de erros da api)
    - Pra que serve o error Handler? 
        - Capturar erros do backend;
        - Evitar que o servidor quebre com erros de exceções;
        - Facilitar a manutenção relativa ao tratamento de erros;
        - Mostrar erros no console para o desenvolvedor;
        - Responder mensagens de erro amigáveis para o usuário (Response)


# Sintaxe básica de uma rota da API

app.post('/produto', (req, res) => {
    res.json({message: 'Criado com sucesso!'})
})

- método criar ou inserir: post
- Rota ou endereço: /produto
- tipo de resposta: json

- Para que serve o Router no express? 
- Organização do código e facilitar a manutenção dos métodos.
- O que é um padrão de projeto? = É uma forma de organizar/codificar que é amplamente conhecida.
- MVC (Model View Controler) - Padrão de projeto que organiza o código, dividindo em 3 camadas.
 Model: acesso e manipulação ao banco de dados e definir as regras de negócio;
View: Visualização que o User vai interagir, o Front-end;
Controler: controla Entrada, Processamento e Saída de dados.
- ORM (Object Relational Model) - Uma forma de relacionar o Objeto do JS com o banco de dados; Ele facilita a  modificação/alterar a base de dados e de executar os comandos.
- Dependências são recursos utilizados dentro do projeto e Dependências Dev são recursos utilizados como ferramentas complementares para ajudar no projeto.
- Middleware é um Padrão de Projeto que separa/organiza uma sequência de funções, ou um fluxo de execução; onde cada uma dessas funções ganha o nome de Middleware, e, após executarem sua função, passam para o próximo middleware.

- SE EU TROCAR O SEGREDO O QUE ACONTECE COM OS USERS LOGADOS NO SISTEMA? = PERDEM ACESSO DO SISTEMA, PRECISA GERAR OUTRO TOKEN, ELES VÃO DESLOGAR DO SISTEMA

- Jwt. Quando a pesoa cadstra, gera senha que foi pro banco (hash). Quando ela loga bate e gera o jwt (token), nesse jwt guarda info do user, (id e email), e esse token garante que as info sejam do user. 

# Comandos do Prisma
- Instalação do Prisma 
    - npm i prisma -D (save.dev pra salvar em dependência dev)
    - npm i @prisma/client

- Inicializar o Prisma
    - npx prisma init

- Gerar o model do prisma a partir de um BD existente
    - npx prisma db pull

- Gerar o BD a partir de um model do prisma
    - npx prisma db push

- Gerar os arquivos necessários para usar o prisma client no código
    - npx prisma generate
