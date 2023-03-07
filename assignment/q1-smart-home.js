/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

class BaseSignal {
    constructor( type ){
        if(this.constructor.type === "base"){
            throw new Error("This class cannot be instantiated");
        }
        this.type = type;
    }
    
    print() {
        console.log(`Sending ${this.type} signal`);
    }
  }
  
  class TvSignal extends BaseSignal {
  constructor(type){
        super(type);
    }
  }
  
  class AirconSignal extends BaseSignal {
  constructor(type){
        super(type);
    }
  }
  
  class DoorSignal extends BaseSignal {
  constructor(type){
        super(type);
    }
  }
  
  const tv = new TvSignal('tv');
  tv.print(); // prints "Sending tv signal"
  
  const door = new DoorSignal('door');
  door.print(); // prints "Sending door signal"
  
  const aircon = new AirconSignal('aircon');
  aircon.print(); // prints "Sending aircon signal"

  