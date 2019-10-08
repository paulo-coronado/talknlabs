# Parte 2 - Cloud Annotations Tool

Para treinar um modelo de detecção de objetos, será necessário realizar a coleta de dados (*frames* de automóveis e suas anotações) e aplicar algoritmos de I.A. (como *Transfer Learning* e Redes Neurais).

Para armazenar as dados relatados acima, crie uma instância do **IBM Cloud Object Storage** (serviço da camada gratuíta para armazenamento de dados).

## Preparando os dados para treinamento

Para usar o **Cloud Annotations Tool**, navegue para https://cloud.annotations.ai e clique em **Continuar com o IBM Cloud**.

![paginainicial](/content/images/cloudannotations-1.PNG)

Uma vez logado, caso não possua uma instância do Object Storage, crie uma.

O **IBM Cloud Object Storage** é um serviço de armazenamento em nuvem altamente escalável que foi projetado para a alta durabilidade, a resiliência e a segurança.

Clique em ***Get started*** para ser direcionado ao IBM Cloud, onde será possível criar uma instância do Object Storage.

![criarobjectstorage](/content/images/cloudannotations-2.PNG)

Escolha o plano de preços ***Lite***, e clique em **Criar**.

![objectstorage](/content/images/cloudannotations-3.PNG)

Uma vez que com serviço instanciado, volte para https://cloud.annotations.ai e atualize a página.

Crie um *bucket* para armazenar dados do projeto, tais como modelo, *frames* e as suas respectivas anotações.

![bucket](/content/images/cloudannotations-4.PNG)

Atribua um nome exclusivo ao *bucket*.

![bucketname](/content/images/cloudannotations-5.PNG)

Após sua criação e nomeação, escolha um tipo de anotação. Para o laboratório será utilizado o ***Localization*** pois o sistema não apenas classificará um objeto, mas também o detectará na imagem. Esse tipo de abordagem permite desenhar *bounding boxes* (caixas delimitadoras entorno do objeto alvo).

![buckettype](/content/images/cloudannotations-6.PNG)

É hora de rotular os dados, ou seja, "ensinar" à máquina quais objetos devem ser detectados. Então, na página inicial do *bucket*, clicando em ***File***, podemos fazer o upload do vídeo.

<span style='color:red'>A fim de padronizar os dados, clique no <b>link</b> para fazer o <b>download</b> do um vídeo-exemplo que será utilizado neste laboratório, e então faça o seu <b>upload</b> para o Cloud Annotations Tool.</span>
<span style="color:blue">some *This is Blue italic.* text</span>
![uploadvideo](/content/images/cloudannotations-7.png)

Crie os rótulos desejados e começe as anotações. O nosso rótulo será apenas carro.

![annotations](/content/images/cloudannotations-8.PNG)

***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/intro.md) - **[Parte 2](/content/md/cloudannotations.md)** - [Parte 3](/content/md/instancias.md) - [Parte 4](/content/md/treinamento.md) - [Parte 5](/content/md/rede-ibp.md)
