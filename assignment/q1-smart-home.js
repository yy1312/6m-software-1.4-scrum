/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/



class TvSignal extends BaseSignal {
    constructor(){
        // Having some difficulties with the assingment 1.4 qn 1 and 2 as of today night on 5 march. 
        // I will attempt this question again tomorrow.
        //Will push this repository first hopefully will not get zero. Thank you :)
    }
}

class AirconSignal extends BaseSignal {
    constructor(){
        // Add code here
    }
}

class DoorSignal extends BaseSignal {
    constructor(){
        // Add code here
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"