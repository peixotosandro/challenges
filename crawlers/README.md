# Crawlers
Aplicação para obter posts de subreddits acessando a pagina web da Reddit. A seleção de subreddits pode ser feita pela interface da aplicação ou através de um bot do Telegram.

## Para preparar ambiente ##
Necessário ter o Node.js instalado.

Instalar as dependências da aplicação com *yarn* ou *npm*. No diretório raiz da aplicação digitar:

```shell
$ yarn
```
ou

```shell
$ npm install
```

## Para executar os testes ##
Execute o comando no diretório raiz da aplicação para executar os testes:

```shell
$ yarn test
```
ou

```shell
$ npm test
```

## Para executar a Aplicação ##
Execute o comando no diretório raiz da aplicação para executar:

```shell
$ yarn start
```
ou

```shell
$ npm start
```

Será solicitado para entrar com os subreddits separados por ";", por exemplo: cats;askreddit;worldnews.

## Executar o Bot para responder no Telegram ##
Execute o comando no diretório raiz da aplicação para executar o Bot:

```shell
$ yarn startBot
```
ou

```shell
$ npm startBot
```

Com a aplicação em execução, acesse o telegram e procure o Bot com @GetRedditPosts ou pelo link t.me/RedditPostsBot

No Bot, através do comando /nadaprafazer digite os subreddits a serem pesquisados, por exemplo: /nadaprafazer cats;askreddit;worldnews
