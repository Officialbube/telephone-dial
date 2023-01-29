class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addPhoneNumber(number) {
      this.phoneNumbers.push(number);
    }
  
    removePhoneNumber(number) {
      this.phoneNumbers = this.phoneNumbers.filter((phoneNumber) => phoneNumber !== number);
    }
  
    dialPhoneNumber(number) {
      if (this.phoneNumbers.includes(number)) {
        this.notifyObservers(number);
      } else {
        console.log("Invalid phone number");
      }
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter((o) => o !== observer);
    }
  
    notifyObservers(number) {
      this.observers.forEach((observer) => observer.update(number));
    }
  }
  
  class Observer {
    update(number) {}
  }
  
  class PrintNumberObserver extends Observer {
    update(number) {
      console.log(number);
    }
  }
  
  class DialNumberObserver extends Observer {
    update(number) {
      console.log(`Now Dialling ${number}`);
    }
  }
  
  const telephone = new Telephone();
  telephone.addPhoneNumber("1234567890");
  telephone.addPhoneNumber("0987654321");
  
  const printNumberObserver = new PrintNumberObserver();
  const dialNumberObserver = new DialNumberObserver();
  
  telephone.addObserver(printNumberObserver);
  telephone.addObserver(dialNumberObserver);
  
  telephone.dialPhoneNumber("1234567890");
  // Output: 1234567890
  // Output: Now Dialling 1234567890
  