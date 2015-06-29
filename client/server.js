import deepstream from 'deepstream.io-client-js';

export default {
  init(){
    return deepstream('localhost:6020').login();
  }
};
