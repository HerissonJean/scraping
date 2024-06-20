Foi utilizado uma estrutura básica de mvc (model - view - controller), quebrando a responsabilidade de cada parte do sistema
Inicialmente temos o arquivo src/server.ts, o qual cria nossa api e a configura, disponibilizando os endpoints para os usuários.
Uma rota criada com o padrão rest para o get, chamando uma função do nosso objeto de funções do controller (responsável por gerenciar a entrada e saída de dados), o controller chama um service que pode executar diversas funções de processamento para retornar o dado que desejamos para o controller ( o qual devolve para a rota e para o usuário), neste caso, chamamos o service para
fazer o scraping do site pedido utilizando cheerio para ler os dados do site e caso o scraping seja bem sucedido, é retornado para o controller os dados do title, h1 da pagina o html puro, caso contrario é retornado uma mensagem de erro (também temos uma interface que tipa o retorno do service)

##Como rodar o projeto
Clone do repositório o projeto e instale as dependências com `npm i` finalizado a instalação, rode o seguinte comando para iniciar o projeto
npx ts-node -r tsconfig-paths/register src/server.ts
