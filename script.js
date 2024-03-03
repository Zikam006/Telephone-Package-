// My learnable Project
// Zita Ikeanyibe



class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.update(phoneNumber));
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index !== -1) {
        this.phoneNumbers.splice(index, 1);
      }
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Invalid phone number");
      }
    }
  }
  
  class PhoneNumberObserver {
    update(phoneNumber) {
      console.log(phoneNumber);
    }
  }
  
  class DialingObserver {
    update(phoneNumber) {
      console.log("Now Dialing", phoneNumber);
    }
  }
  
  // Example usage
  const telephone = new Telephone();
  
  // Create observers
  const observer1 = new PhoneNumberObserver();
  const observer2 = new DialingObserver();
  
  // Add observers to the telephone
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  // Add phone numbers
  telephone.addPhoneNumber("2348078090");
  telephone.addPhoneNumber("2347023232");
  
  // Remove a phone number
  telephone.removePhoneNumber("2348078090");
  
  // Dial a phone number
  telephone.dialPhoneNumber("2347023232");