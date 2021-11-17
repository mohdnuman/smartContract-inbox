const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');  //Web3 is a constructor function....we use this to craete web3 instances....the purpose of each instance to coneect to different ethereum networks.
const web3=new Web3(ganache.provider());