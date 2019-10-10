/**
 * SERVIÇO DE CONEXÃO COM A REDE BLOCKCHAIN EM KUBERNETS
 * Funções: gerenciador de wallet (criador de identidade), registrador de usuário e conexao por gateway da fabric-network
 */
const { FileSystemWallet, Gateway, X509WalletMixin } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const fs = require('fs');
const path = require('path');
// const axios = require('axios');

// BUSCAR CONNECTION PROFILE PARA REDE LOCAL
const ccpPath = path.resolve(__dirname, 'ibpConnection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
var connectionProfile = JSON.parse(ccpJSON);
// const yaml = require('js-yaml');


// criando o file system wallet
// const enderecoDaCarteira = path.join('wallet');
const carteira = new FileSystemWallet('./wallet');

/**
 * Função para criar o adm do peer. Use somente uma vez.
 */
async function criarIdentidade(id, secret) {
    return new Promise(async (resolve, reject) => {

        // Se conectando com a CA da organização
        const ca = new FabricCAServices('https://nec043e-acmeca.ibp-eightbar.us-south.containers.appdomain.cloud:7054');

        // Verificando a existencia de uma identidade dentro da wallet
        const adminExiste = await carteira.exists(id);
        if (adminExiste) {
            console.log('Uma identidade já existe')
            await carteira.delete(id)
            console.log(" -- identidade antiga deletada. Gerando uma nova identidade...")
        }

        // Inscreve usuario admin e salva na carteira
        console.log("ENROLL");
        const enrollment = await ca.enroll({ enrollmentID: id, enrollmentSecret: secret });
        console.log("Gerando identidade...");
        const identidade = X509WalletMixin.createIdentity('acme-msp', enrollment.certificate, enrollment.key.toBytes());
        console.log("Salvando identidade...");
        await carteira.import(id, identidade);
        console.log("Sucesso!");
        resolve("Sucesso!");
    })
}

/**
 * Método padrão para submeter transações
 * @param {*} usuario Proprietário da wallet
 */
function getGatewayContract(usuario) {
    return new Promise(async (resolve, reject) => {

        //Abrindo conexao com a network
        const gateway = new Gateway();

        try {
            // Configura connectionOptions
            console.log("Preparando opcao de conexao");
            let opcoesDeConexao = {
                identity: usuario,
                wallet: carteira,
                discovery: { enabled: true, asLocalhost: false }
            };

            // console.log(opcoesDeConexao);
            await gateway.connect(connectionProfile, opcoesDeConexao);
            console.log("Network connected!");
            const rede = await gateway.getNetwork('talk-and-labs');
            console.log("Getting contract...");
            const contrato = await rede.getContract('blockchain_talkandlabs');
            console.log("Success!");
            resolve(contrato)

        } catch (erro) {
            reject(erro)
        }
    })
}

module.exports = {
    getGatewayContract: getGatewayContract,
    criarIdentidade: criarIdentidade
}