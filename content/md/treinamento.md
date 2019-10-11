# Parte 4 - Treinamento do Modelo

Após prepararmos o ambiente de treinamento (Watson Machine Learning) e os dados (anotações + imagens do problema), estamos prontos para treinar o modelo de detecção. Ou então, utilize o modelo já treinado [aqui](https://ibm.biz/ia-blockchain)!

**ATENÇÃO: Certique-se de estar com os pré-requisitos instalados para o sucesso da aplicação.**

## Instalação

Primeiramente, faça o *clone* ou baixe o .zip deste projeto.

Utilizaremos o CLI (*command line interface*) da ferramenta Cloud Annotations para realizar a transferência de aprendizagem e o treinamento de um novo modelo customizado. Assim,  O modelo pré-treinado base utilizado neste projeto é o MobileNet e o classifcador, SSD. Esta é uma popular *stack*, denominada MobileNet SSD, a qual substituiremos as últimas camadas da rede classificadora para acomodar o nosso problema, a detecção de carros.

Para isso, instale Cloud Annotations Tool CLI:

```
npm install -g cloud-annotations
```

E inicie o treinamento, executando o comando:

```
cacli train
```

Este comando exigirá as credenciais dos serviços criados (Cloud Object Storage e Watson Machine Learning). Preencha de acordo com as informações coletadas anteriormente. 

![credenciais-cli](/content/images/treinamento-1.png)

## Download do modelo

Após a conclusão do treinamento, faça o download do modelo treinado:

```
cacli download <model_id>
```

Este comando efetuará o download do modelo para algumas aplicações (iOS, Android, Web etc.). Para o projeto, iremos utilizar o modelo localizado no diretório `model_web`.

## Integração do modelo com a aplicação TensorFlow.js

Assim que o download for concluído, copie o `model_web` gerado e cole-o na pasta `public` deste repositório. Esta aplicação é capaz de carregar o modelo no caminho referenciado e realizar inferências em *real-time*.

## Executação do aplicativo

Primeiramente instale as dependências:

```
npm install
```

E finalmente, execute o aplicativo com:

```
npm start
```

Abra a página http://127.0.0.1:3000 para visualizar as detecções e as transações ocorrendo em tempo real.

**Parabéns!!! Você conclui o laboratório com sucesso!!! :tada::tada::tada:**

Quaisquer dúvidas, sugestões ou problemas com o código, não hexite em abrir uma *issue* ou contactar os desenvolvedores do projeto. 

Obrigado por participar desta jornada!

***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/md/intro.md) - [Parte 2](/content/md/cloudannotations.md) - [Parte 3](/content/md/instancias.md) - **[Parte 4](/content/md/treinamento.md)**
