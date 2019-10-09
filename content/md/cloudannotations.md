# Parte 2 - Cloud Annotations Tool

Cloud Annotations Tool é uma ferramenta *open source* colaborativa de anotação para treinamento de modelos de detecção de objetos em Visão Computacional.

Assim, para o problema proposto será necessário realizar a coleta de dados (*frames* de automóveis e suas anotações) e aplicar algoritmos de I.A. (como *Transfer Learning* e Redes Neurais) para o treinamento do modelo.

Com a finalidade de armazenar as dados que serão utilazado no projeto (como imagens, anotações e o modelo a ser desenvolvido), crie uma instância do **IBM Cloud Object Storage** - serviço da camada gratuíta para armazenamento de dados.

## Preparando ambiente de treinamento

Para usar o **Cloud Annotations Tool**, navegue para https://cloud.annotations.ai e clique em **Continuar com o IBM Cloud**.

![paginainicial](/content/images/cloudannotations-1.PNG)

Uma vez logado, caso não possua uma instância do Object Storage, crie uma.

O **IBM Cloud Object Storage** é um serviço de armazenamento em nuvem altamente escalável que foi projetado para a alta durabilidade, a resiliência e a segurança.

Clique em ***Get started*** para ser direcionado ao IBM Cloud, onde será possível criar uma instância do Object Storage.

![criarobjectstorage](/content/images/cloudannotations-2.PNG)

Escolha o plano de preços ***Lite***, e clique em **Criar**.

![objectstorage](/content/images/cloudannotations-3.PNG)

Uma vez com serviço instanciado, volte para https://cloud.annotations.ai e atualize a página.

Crie um *bucket* para armazenar dados do projeto, tais como modelo, *frames* e as suas respectivas anotações.

![bucket](/content/images/cloudannotations-4.PNG)

Atribua um nome exclusivo ao *bucket*.

![bucketname](/content/images/cloudannotations-5.PNG)

Após sua criação e nomeação, escolha um tipo de anotação. Para o laboratório será utilizado o ***Localization*** pois o sistema não apenas classificará um objeto, mas também o detectará na imagem. Esse tipo de abordagem permite desenhar *bounding boxes* (caixas delimitadoras entorno do objeto alvo).

![buckettype](/content/images/cloudannotations-6.PNG)

É hora de rotular os dados, ou seja, "ensinar" à máquina quais objetos devem ser detectados. Então, na página inicial do *bucket*, clicando em ***File***, podemos fazer o upload do vídeo.

**Clique no [link](https://ibm.biz/ia-blockchain) para fazer o download do vídeo-exemplo que será utilizado neste laboratório, e então faça o seu upload para o Cloud Annotations Tool.**

![uploadvideo](/content/images/cloudannotations-7.png)

Crie o rótulo *target* (carro) e faça as demarcacões com um retângulo entorno dele. Cloud Annotations Tool interpretará as anotações e as armazenará em um *JSON file* no Cloud Object Storage.

![annotations](/content/images/cloudannotations-8.PNG)

***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/md/intro.md) - **[Parte 2](/content/md/cloudannotations.md)** - [Parte 3](/content/md/instancias.md) - [Parte 4](/content/md/treinamento.md)
