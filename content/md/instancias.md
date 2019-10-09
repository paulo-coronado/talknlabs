# Parte 3 - Configurando Watson Machine Learning e Conectando Serviços


O **IBM Watson Machine Learning** é uma oferta IBM Cloud que possibilita que desenvolvedores e cientistas de dados trabalhar juntos para integrar recursos preditivos aos seus aplicativos. O serviço de *Machine Learning* contempla um conjunto de APIs REST que podem ser chamadas utilizando quaisquer linguagem de programação para desenvolver aplicativos inteligentes e performáticos.

## Criando instância e credenciais do Watson Machine Learning

Para criar uma instância do Watson Machine Learning, navegue de volta para o **IBM Cloud**, vá em **catálogo**, clique em **AI** e procure por **Machine Learning**.

![machinelearning-encontrar](/content/images/machinelearning-1.png)

Escolha um plano de preços e clique em **Criar**.

![machinelearning-criar](/content/images/machinelearning-2.PNG)

Criado a instância de Machine Learning, navegue até a guia **Credenciais de serviço**.

![machinelearning-credentials](/content/images/machinelearning-3.PNG)

Adicione uma nova credencial com as seguintes configurações:

![machinelearning-credentials](/content/images/mlcredentials.png)

Depois de criado, clique no menu suspenso em **Visualizar credenciais** e anote as informações.

![machinelearning-credentials](/content/images/mlcredview.png)

## Criando credenciais do serviço Object Storage 

Agora que possuímos a instância de Object Storage e Watson Machine Learning, com a finalidade de treinar um modelo de Inteligência Artificial será necessário utilizarmos os dados armazenados no Cloud Object Storage em conjunto com os poderosos recursos computacionais fornecidos pelo serviço Watson Machine Learning. Para isso, acesse seus recursos na página inicial do **IBM Cloud**.

![painelrecursos](/content/images/painelrecursos-1.PNG)

Clique em **Armazenamento** e abra sua instância do Object Storage.

Então, navegue até a guia **Credenciais de Serviço**.

![credentials-objectstorage](/content/images/cloudannotations-9.PNG)

Clique em **Criar Credencial** e preencha as informações como ilustrado na imagem abaixo e clique em **Incluir**.

**OBS.: Não esqueça de incluir a credencial HMAC!**

![credentials-objectstorage](/content/images/cacredentials.png)

Uma vez adicionada as credenciais, clique no menu suspenso em **Visualizar Credenciais** e anote as informações.

![credentials-objectstorage](/content/images/cloudannotations-11.png)

***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/md/intro.md) - [Parte 2](/content/md/cloudannotations.md) - **[Parte 3](/content/md/instancias.md)** - [Parte 4](/content/md/treinamento.md)
