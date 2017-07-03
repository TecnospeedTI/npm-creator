# Contribuindo to NPM-creator

Ficamos felizes por você contribuir com o NPM-creator e nos ajudar a melhora-lo.
Aqui estão algumas diretrizes que gostaríamos que você seguisse:ou to follow:

 - [Questões e problemas?](#question)
 - [Issues e Bugs](#submit-issue)
 - [Solicitações de recursos](#feature)
 - [Diretrizes de submissão](#submit)
 - [Regras de codificação](#rules)
 - [Mensagem de commits](#commit)

## <a name="question"></a> Tem uma pergunta ou problema?

Fique a vontade para tirar suas dúvidas ou relatar um problema, para isto crie [uma issue na página do projeto](https://github.com/TecnospeedTI/npm-creator/issues).

## <a name="feature"></a> Solicitações de recursos?
Você pode *solicitar* um novo recurso [criando uma issue](#submit-issue) no nosso repositório do GitHub. 
Se você quiser *implementar* um novo recurso, [crie uma issue](#submit-issue) com uma proposta da sua ideia, para ter certeza de que podemos usá-lo. 
Por favor considere que tipo de mudança é:

* Para um **Recurso principal**, primeiro abra uma issue e descreva sua proposta para que ela possa ser
discutida. Isso também nos permitirá coordenar melhor nossos esforços, evitar duplicações de trabalho,
e ajudá-lo a elaborar a mudança para que seja aceita com sucesso no projeto.
* **Pequenos recursos** podem ser criados e diretamente [submetidos como um pedido de PR] (#submit-pr).

## <a name="submit"></a> Diretrizes de submissão

### <a name="submit-issue"></a> Criando uma Issue

Antes de criar uma issue de problema ou dúvida, procure na listagem e issues se já não foi criado algo similar ao que você irá criar.

Para criar uma nova issue preencha o formulário de [new issue](https://github.com/TecnospeedTI/npm-creator/issues/new).


### <a name="submit-pr"></a> Solicitando um Pull Request (PR)
Antes de enviar seu pedido de PR, considere as seguintes diretrizes:

* Procure no [GitHub](https://github.com/TecnospeedTI/npm-creator/pulls) por PR's abertos e fechados para verificar se já existe algo similar ao seu pedido para evitar duplicidade.
* Faça suas mudanças em uma nova branch do git:

     ```shell
     git checkout -b minha-branch-com-correcao master
     ```

* Cria sua tarefa, **incluindo casos de teste apropriados**.
* Comente suas alterações usando uma mensagem de confirmação descritiva seguindo nosso
   [padrão de mensagens de commit] (#commit). 

     ```shell
     git commit -a
     ```
  Nota: a opção de comando `-a` é opcional e irá automaticamente "adicionar" e "remover" arquivos editados.

* Envie sua branch para o GitHub:

    ```shell
    git push origin minha-branch-com-correcao
    ```

* No GitHub, envio um PR para `npm-creator:master`.


É isso aí! Obrigado por sua contribuição!

## <a name="rules"></a> Regras de codificação
Para garantir a consistência em todo o código fonte, mantenha estas regras em mente enquanto você está trabalhando:

* Todos os recursos ou correções de bugs **devem ser testados** por uma ou mais especificações (teste unitário).
...

## <a name="commit"></a> Mensagem de commits

Nós temos regras muito precisas sobre como nossas mensagens de commit git podem ser formatadas. Isso leva a 
**mais mensgens legíveis** que são fáceis de ser utilizada em **história do projeto**. Mas também,
usamos as mensagens de commit git para **gerar o log de mudanças**.

### Formato de mensagem de commit

```
<tipo>: <assunto>
```

### Tipos
Deve ser um dos seguintes:

* **build**: Alterações que afetam o sistema de compilação ou dependências externas (exemplos: gulp, npm)
* **ci**: Alterações nos nossos arquivos de configuração CI e scripts (exemplo: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Mudanças de documentação
* **feat**: Um novo recurso
* **fix**: Um novo bug corrigido
* **perf**: Uma mudança de código que melhora o desempenho
* **refactor**: Uma mudança de código que não corrige um bug nem adiciona um recurso
* **style**: Alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula, etc.)
* **test**: Adicionando testes ou corrigindo testes existentes


### Assunto
O assunto contém descrição sucinta da alteração:

* Use o tempo presente e imperativo: "mudar" não "mudou" nem "mudanças"
* Não deie a primeira letra maiúscula
* Não use (.) no final da mensagem

### Corpo da mensagem
Assim como no **assunto**, use o tempo presente e imperativo: "mudança" não "alterada" nem "mudanças".
O corpo deve incluir a motivação para a mudança e contrastar isso com o comportamento anterior.

