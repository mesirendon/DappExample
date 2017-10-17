import contract from 'truffle-contract';
import PersonContract from '@contracts/Person.json';

const Person = {
  contract: null,
  instance: null,

  init: () => {
    let self = this;
    new Promise((resolve, reject) => {
      self.contract = contract(PersonContract);
      self.contract.setProvider(window.web3.currentProvider);
      self.instance = self.contract.deployed().then(instance => {
        return instance;
      }).catch(error => {
        reject(error);
      });
    });
  },

  setName: (name) => {
    let self = this;
    return new Promise((resolve, reject) => {
      self.instance.setName(name, {from: window.web3.eth.accounts[0]})
        .then(response => {resolve(response)})
        .catch(error => {reject(error)});
    });
  },

  getName: () => {
    let self = this;
    return new Promise((resolve, reject) => {
      self.instance
        .then(Person => {
          return Person.name();
        })
        .then(name => {
          console.log(name);
          resolve(name);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }
};

export default Person;
