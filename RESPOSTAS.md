# Perguntas de JavaScript - Com respostas

1. Explique com suas palavras a diferença entre a utilização de var, const e let?
  Res: Var é utilizado em um escopo global, o const pode ser utilizado fora do escopo global da clase e tambem dentro da função local da classe. O let é utilizado em escopo local no metodo da classe.

2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?
  Res: Funções normais guardam escopo
  Res: Arrow function não guardam escopo

3. qual o valor da constante name após a execução da função?
  Res: **James**

4. Qual o retorno da função event.getTitle()
  Res: **The event 04/02/2019 will take place on Event Test**

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?
  Res:
  - document.getElementById(id) -> Retorna um objeto do tipo Element e acessa o DOM exclusivamente por meio do seletor css ID fazendo um match de string.
  - document.getElementsByClassName(className) -> Retorna um objeto HTMLCollection que funciona como um array. E acessa o DOM por meio do css class fazendo um match de string.

  - document.getElementsByTagName(tagName) -> Retorna um objeto HTMLCollection que funciona como um array. E acessa o DOM por das tags do HTML.
  - document.querySelector(cssSelector) -> Retorna um objeto do tipo Element e acessa o DOM exclusivamente por meio do seletor css
  - document.querySelectorAll(cssSelector) -> Este ultimo pode retornar uma lista de elementos sendo do tipo tags, seletores, id ou class.

6. Como inserir um evento em determinado elemento?
  Res: Pode-se aplicar eventos de forma inline ou externa, sendo a inline como no exemplo abaixo:
  `<h1 onclick="this.innerHTML='Isso acontece quando usamos o evento onClick!'">Clique aqui</h1>`

  Para chamar um evento externo iremos precisar de um manipulador de eventos, nesse caso vamos usar o event listener que adiciona ou remove um evento sobre qualquer elemento.
  addEvent - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.

7. Como remover um evento em determinado elemento?
  Res: Pode remover usando a função removeEvent() que remove um listerner previamente adicionado a um objeto e retorna true se o houver for sucesso.

8. Descreva com suas palavras o que é event bubbling?
  Res: Quando um evento é disparado dentro de uma cadeia de elementos aninhados do DOM ele é disparado em seus elementos ancestrais na ordem crescente do aninhamento.

9.  Descreva qual a diferença nos métodos de declaração de objetos?
  ```js
  const object = {} -> Criação já inicializada.
  const object = new Object() -> Quando esta sendo instanciado o objeto.
  const object =  -> Cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.
  ```
10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?
  Res: XMLHttpRequest tem a necessidade de ser criado um listener passando uma função de callback para abrir a conexão e fazer o envio da requisição. Enquanto que o Fetch simplifica esse processo com a premissa de substituir o XMLHttpRequest com uma nova API, e atualmente a maioria dos navegadores modernos ja tem suporte a sua API.

  Na minha opinião o uso do Fetch permite ao desenvolvedor maior produtividade e menor complexidade para o uso de requisições HTTP, sendo também uma API mais moderna em sua sintaxe.

11. O que são Promises ? Como podemos declarar uma promise em javascript ?
  Res: A promise é um objeto usado para o processamento assincrono de uma requisição e representa um valor que pode estar disponivel no seu estado atual, futuro ou ate mesmo nunca, visto que a promise contem alguns estados, como pendente, realizada ou rejeitada.

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?
  Res:
  - For -> O laço é repetido ate que a condição especificada seja falsa.
  - For...in -> A declaração executa iterações a partir de uma variável específica, percorrendo todas as propriedades de um objeto.
  - While -> Executa instruções até quando uma condição especifica for verdadeira.

13. Quando utilizar map, reduce ou filter ?
  Res: O uso destas funcoes fazem muito sentido quando for necessario ganhar em praticidade e produtividade, pois essas funcoes tratam estruturas de dados de forma ate similar a outras funcoes, porem fazem manipulacoes de dados de forma especializada, a exemplo da funcao filter, que pode iterar um array e filtrar pelos items desejados.

14. Qual o método do Array é mais indicado para remover elementos ?
  Res: Pode-se utilizar a funcao splice() passando via parametro o indice para iniciar e o numero de elementos a serem removidos do array.

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;
  Res:
  - length -> Retorna o tamanho total da string.
  - indexOf -> Retorna a primeira posicao de um determinado pedaco da string
  - slice -> O método slice extrai uma parte de uma string e retorna a parte extraída em uma nova string.
  - UpperCase -> Transforma toda a string em maiscula

16. Escreva um código para inserir e resgatar items do LocalStorage/
  ```js
  function setLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function getLocalStorage(key) {
    JSON.parse(window.localStorage.getItem(key));
  }
  ```

17. Qual a melhor forma para definir um cookie utilizando javascript ?
  Res: Para definir um cookie em js basta utilizar o objeto document e em seguida a palavra cookie.
  ex: document.cookie = 'nome_cookie=Valor definido do cookie';

18. Quais os tipos de Loops existentes em javascript ?
  Res: For, While, do...while, for...in, for...of

19. Descreva com suas palavras o que é hoisting ?
  Res: Hoisting foi pensado no js em como os contextos de execucao, fases de criacao e execusao de escopos funcionam no js, este é um conceito relativamente complexo e ate mesmo pouco mencionado na comunidade js.

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";
  Res: Undefined

21. Quando eu posso utilizar o "Use-strict" no meu código ?
  Res: No inicio do código, sendo que esta opção se aplica ao script inteiro e também pode ser adicionado ao inicio de uma função, sendo esta instrução antes de qualquer outra declaração.
