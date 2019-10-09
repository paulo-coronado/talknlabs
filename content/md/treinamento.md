# Parte 4 - Treinamento do Modelo

Após preparmos o ambiente de treinamento (Watson Machine Learning) e os dados (anotações + imagens do problema), estamos prontos para começar a treinar o modelo.

## Instalação

Primeiramente, faça o *clone* ou baixe o .zip deste projeto.

**ATENÇÃO: Certique-se de estar com os pré-requisitos instalados para o sucesso da aplicação.**

Utilizaremos o CLI (*command line interface*) da ferramenta Cloud Annotations para realizar a transferência de aprendizagem e o treinamento de um novo modelo customizado. Assim,  O modelo pré-treinado base utilizado neste projeto é o MobileNet e o classifcador, SSD. Esta é uma popular *stack*, denominada MobileNet SSD, a qual substituiremos as últimas camadas da rede classificadora para acomodar o nosso problema, a detecção de carros.

Para isso, instale Cloud Annotations Tool CLI:

` npm install -g cloud-annotations `

E inicie o treinamento, executando o comando:

`cacli train`

Este comando exigirá as credenciais dos serviços criados (Cloud Object Storage e Watson Machine Learning). Preencha de acordo com as informações coletadas anteriormente. 

![credenciais-cli](/content/images/treinamento-1.png)

## Download

Após a conclusão do treinamento, podemos fazer o download do nosso modelo:

`cacli download <model_id>`

Isso fará o download de um model_*diretório do nosso gráfico TensorFlow, que é o que usaremos em nossa API.


## Adicionar o modelo TensorFlow.js ao aplicativo

Assim que o download for concluído, copie o `model_web` gerado a partir do passo a passo de detecção de objetos e cole-o na `public` - pasta deste repositório.

## Executar o aplicativo

Para instalar as dependências, execute: `npm install`

Para iniciar o aplicativo, execute: `npm start`

Abra http://localhost:3000 para visualizá-lo no navegador.


***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/md/intro.md) - [Parte 2](/content/md/cloudannotations.md) - [Parte 3](/content/md/instancias.md) - **[Parte 4](/content/md/treinamento.md)** - [Parte 5](/content/md/rede-ibp.md)
