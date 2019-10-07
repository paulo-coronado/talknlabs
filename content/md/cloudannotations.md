# Parte 3 - Como usar o Cloud Annotations

Para treinar um modelo de detecção de objeto, precisamos de um conjunto de dados de imagens e anotações delimitadoras do objeto.

O `IBM Cloud` oferece uma pequena camada de armazenamento de objetos, que inclui 25 GB de armazenamento gratuitamente.

## Preparando os dados para treinamento

Para usar o `Cloud Annotations`, navegue para cloud.annotations.ai e clique em Continuar com o `IBM Cloud`.

![paginainicial](/content/images/cloudannotations-1.PNG)

Uma vez logado, se não tivermos uma instância do `Object Storage`, precisaremos criar uma.

O `IBM Cloud Object Storage` é um serviço de armazenamento em nuvem altamente escalável que foi projetado para a alta durabilidade, a resiliência e a segurança.

Clique em Get started para ser direcionado ao `IBM Cloud`, onde é possível criar uma instância do `Object Storage`.

![criarobjectstorage](/content/images/cloudannotations-2.PNG)

Escolha um plano de preços e clique em criar.

![objectstorage](/content/images/cloudannotations-3.PNG)

Depois que sua instância for provisionada, volte para cloud.annotations.ai e atualize a página.

Armazenaremos nosso vídeo e as anotações em um Bucket. Podemos criar um Bucket clicando em iniciar um novo projeto.

![bucket](/content/images/cloudannotations-4.PNG)

Atribua um nome exclusivo ao Bucket.

![bucketname](/content/images/cloudannotations-5.PNG)

Depois de criar e nomear o Bucket, escolha um tipo de anotação. Para o nosso laboratório utilizaremos o Localization. Esse tipo nos permite desenhar retângulos de caixas delimitadoras em nossas imagens.

![buckettype](/content/images/cloudannotations-6.PNG)

O próximo passo é rotular os dados. Na página inicial do Bucket, clicando em File, podemos fazer o upload do vídeo.

![uploadvideo](/content/images/cloudannotations-7.png)

Crie os rótulos desejados e começe as anotações. O nosso rótulo será apenas carro.

![annotations](/content/images/cloudannotations-8.PNG)

***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/intro.md) - **[Parte 2](/content/md/cloudannotations.md)** - [Parte 3](/content/md/instancias.md) - [Parte 4](/content/md/treinamento.md) - [Parte 5](/content/md/rede-ibp.md)