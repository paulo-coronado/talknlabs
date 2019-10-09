# Parte 3 - Configurando Watson Machine Learning e Conectando Serviços


O **IBM Watson Machine Learning** é uma oferta IBM Cloud que possibilita que desenvolvedores e cientistas de dados trabalhem juntos facilmente para integrar recursos preditivos aos seus aplicativos. O serviço de *Machine Learning* contempla um conjunto de APIs REST que podem ser chamadas utilizando quaisquer linguagem de programação para desenvolver aplicativos inteligentes e performáticos.

## Criando instância e credenciais do Watson Machine Learning

Para criar uma instância do Watson Machine Learning, navegue de volta para o **IBM Cloud**, vá em **catálogo**, clique em **AI** e procure por **Machine Learning**.

![machinelearning-encontrar](/content/images/machinelearning-1.png)

Escolha um plano de preços e clique em **Criar**.

![machinelearning-criar](/content/images/machinelearning-2.PNG)

Após criada a instância do serviço, no menu lateral esquerdo, clique em **Credenciais de Serviço** e adicione uma nova credencial com as seguintes configurações:

![machinelearning-credentials](/content/images/mlcredentials.png)

## Criando credentiais do serviço Object Storage 

Já possuímos uma instância do Object Storage e do Watson Machine Learning. Assim, a fim de treinar um modelo de Inteligência Artificial será necessário utilizarmos os dados armazenados no Cloud Object Storage em conjunto com os poderosos recursos computacionais fornecidos pelo serviço Watson Machine Learning. 

Para isso, acesse seus recursos na página inicial do **IBM Cloud**.

![painelrecursos](/content/images/painelrecursos-1.PNG)

Clique em **Armazenamento** e abra sua instância do Object Storage.

Então, navegue até a guia **Credenciais de Serviço**.

![credentials-objectstorage](/content/images/cloudannotations-9.PNG)

Clique em **Criar Credencial** e preencha as informações como ilustrado na imagem abaixo e clique em **Incluir**.

**OBS.: Não esqueça de incluir a credencial HMAC!**

![credentials-objectstorage](/content/images/cacredentials.png)

Uma vez adicionada as credenciais, clique no menu suspenso em **Visualizar Credenciais** e anote as informações.

![credentials-objectstorage](/content/images/cloudannotations-11.png)

Para Machine Learning, acesse novamente seus recursos na página inicial do `IBM Cloud`. Clique em serviços e abra sua instância `Machine Learning`. Navegue até a guia Credenciais de serviço.

![machinelearning-credentials](/content/images/machinelearning-3.PNG)

Clique em Criar Credencial. Você pode deixar a configuração padrão e incluir.

![machinelearning-credentials-criar](/content/images/machinelearning-4.PNG)

Depois de adicionado, clique no menu suspenso em visualizar credenciais e anote as informações.

![machinelearning-credentials-visualizar](/content/images/machinelearning-5.PNG)

***
Links Rápidos:
[Índice](https://github.com/plcpinho/talknlabs/) - [Parte 1](/content/md/intro.md) - [Parte 2](/content/md/cloudannotations.md) - **[Parte 3](/content/md/instancias.md)** - [Parte 4](/content/md/treinamento.md) - [Parte 5](/content/md/rede-ibp.md)
