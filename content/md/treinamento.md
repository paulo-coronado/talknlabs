# Parte 4 - Treinamento do Modelo

Depois de coletarmos e rotularmos nossas imagens, estamos prontos para começar a treinar nosso modelo.

## Instalação

Faça o Clone ou baixe o ZIP desse projeto para iniciarmos o treinamento.

Você precisará ter o Node 10.13.0 ou posterior instalado em sua máquina.
Para verificar se você já possui, insira o comando `node -v` em seu terminal.
Se não possuir, faça o download no link: https://nodejs.org/en/

Assim que obtido o Node, podemos instalar a CLI do Cloud Annotation:

` npm install -g cloud-annotations `

Para iniciar o treinamento, execute o seguinte comando:

`cacli train`

Poderá ser solicitado que você coloque as credenciais dos serviços que criamos, de Machine Learning e Object Storage. Preencha de acordo com as informações que você coletou na etapa anterior. 

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
