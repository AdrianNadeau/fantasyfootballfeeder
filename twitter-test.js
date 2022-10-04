// // This will work with Node.js on CommonJS mode (TypeScript or not)
// const { TwitterApi } = require('twitter-api-v2');
// const v2Client = client.v2;

// // OAuth2 (app-only or user context)
// // Create a client with an already known bearer token
// const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAG0FhQEAAAAAW6poliIIxMPPPrBaiPZhxyjsEAc%3DyuYdzRcNvCQ276PqbEJLgy3d7yFb2v5AFPcZtqRP4WgWGEevFV');
// // We also think of users who test v2 labs endpoints :)
// const v2LabsClient = client.v2.labs;

// console.log("client created");

const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'ZYTaMhjrdDeMVIsOTDSbr4X2o',
    appSecret: 'kzU2ryME5ugLYPMEtFwlGLsL7fQuS4xquCUgW8NvGPtZp2ShAU',
    accessToken: 'j9826702-n2j9VNaVfPK6m487WIzZlyWi9iW7vtjZUxIzMca9uR',
    accessSecret: 'jL3DMt1p1R1e2kgseZnh2ZLhOBbAoGyFCCgXwc1AHFsFB',
});

console.log(client);