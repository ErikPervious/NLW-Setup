<h1 align="center">
  <img alt="move.it" title="move.it" src="https://user-images.githubusercontent.com/51729214/214289670-1cb70616-df21-4642-adf5-04a0a67dc6b9.png" />
  <p></p>
  <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=6D28D9&labelColor=27272A" />
  <img alt="NLW Setup" src="https://img.shields.io/static/v1?label=NLW%20Setup&message=5.0&color=6D28D9&labelColor=27272A" />
</h1>

<p align="center">
  <a href="#title">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#preview">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#running">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#license">Licença</a>
</p>

<h1 id="title">💻 Projeto</h1>

<p>&nbsp;&nbsp;Ao longo dos anos a <a href="https://www.rocketseat.com.br/">Rocketseat</a> (plataforma de aprendizagem contínua em programaçao) disponibiliza projetos 
  gratuitos onde qualquer dev de qualquer nível pode participar e criar aplicações desde o back-end ao front-end com web e mobile.<br>
  &nbsp;&nbsp;Nessa edição do NLW Setup desenvolvemos o Habits, aplicação completa com foco em criar e realizar hábitos diários.<br>
  &nbsp;&nbsp;Todas as edições superam as minhas expectativas e essa não fica de fora, sempre aprendo coisas novas em tão pouco tempo... 
  O Ensinamento desse time é surreal!
</p>

<h2 id="features">🚀 Features Novas</h2>

<p>&nbsp;Para levar a aplicação ao próximo nível, vou adicionar integração ao firebase para manter os dados persistidos na nuvem podendo 
  ser acessados pelo usuário de qualquer lugar.<br>
  &nbsp;Além disso, irei adicionar também toggle theme na versão web e mobile, proporcionando uma melhor experiência ao usuário.
</p>

<h2 id="preview">🔖 Layout Web - Mobile</h2>

<div align="center">
  <a href="https://www.figma.com/file/ZlWKFKQvC4S3WuAQwBpdYk/Habits?node-id=0%3A1&t=c3ItDDl11bjEYn25-0">Projeto Completo No Figma</a>
</div>

<div align="center">
  <img alt="Home" title="Home" src="https://user-images.githubusercontent.com/51729214/214294712-4ec31a0a-ad62-4d5f-97a4-435ea39fe49f.png" />
</div>

<h2 id="requirements">:hammer: Pré-requisitos</h2>

<p>&nbsp;Antes de começar, lembre-se de:</p>
<ul>
  <li>Usar um editor de código de sua preferência, recomendo o <a href="https://code.visualstudio.com/">VS Code</a>;</li>
  <li>Instalar o git para fazer o clone da aplicaçao <a href="https://git-scm.com">Git</a>;</li>
  <li>Configurar o <a href="https://nodejs.org/pt-br/">NodeJS</a>;</li>
  <li>Baixar o <a href="https://expo.io/">Expo</a> para rodar o app;</li>
</ul>

<h2 id="running">:game_die: Rodando o Aplicativo</h2>

```bash
# Clone este repositório
$ git clone https://github.com/ErikPervious/NLW-Setup

# Acesse a pasta do projeto no terminal/cmd
$ cd NLW-Setup

# Entre na pasta server, instale as libs, configure o db e rode o back-end
$ cd server
$ npm install
$ npm run seed
$ npm run dev

# Seu back-end precisa ficar rodando em segundo plano, então abra outro terminal e vamo prosseguir.

# entre agora na pasta web, instale as libs e rode a aplicação
$ cd web
$ npm install
$ npm run dev

# Pronto, agora você pode acessar o endereço exibido no terminal para visualisar a versão web...
# Vamos agora para o mobile.

# Entre na pasta mobile e instale as libs
$ cd mobile
$ npm install ou expo install

# Pegue o seu endereço IPv4 e sibstitua o endereço no arquivo /src/lib/axios.ts em baseURL pelo seu IP.
# Agora você pode rodar o app usando o expo e exibi-lo no seu dispositivo através do ExpoGo disponível nas lojas mobile.

# Para rodar o app.
$ npm start
# Ou usando o próprio Expo
$ expo start
```

<h2 id="technologies">✨ Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Tailwindd CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Fastify](https://www.fastify.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

<h2 id="license">📄 Licença</h2>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
