let petChoice = prompt("Choose your pet type: Dragon or Turtle?");
let petName = prompt(`Choose your pet's name`)
let petColor = prompt(`What color is ${petName}!`)
let petAge = prompt(`How old is ${petName}`)

class Animal {
    constructor() {
        this._type = petChoice;
        this._name = petName;
        this._age = petAge;
        this.color = petColor;
        this.bored = true;
        this.hunger = 100;
        this.thirst = 100;
    }
    play(){
        this.bored = false;
        this.thirst += 50;
        this.hunger += 50
        console.log(`${this._name} is no longer bored, but thirst level is ${this.thirst}, and hunger level is ${this.hunger}`)
        if (cyberPet.thirst > 100) {
            alert(`Watch out ${cyberPet._name} is thirsty!`)
        } else if (cyberPet.thirst >= 200) {
            alert(`Well ${cyberPet._name} is dead!`)
        } 
        if (cyberPet.hunger > 100) {
            alert(`Watch out ${cyberPet._name} is hungry!`)
        } else if (cyberPet.hunger >= 200) {
            alert(`Well ${cyberPet._name} is dead!`)
        }
    }
    feed(){
        this.hunger -= 50;
        if (this.hunger > 50) {
            console.log(`${this._name} is less hungry. Hunger level is ${this.hunger}`)
        } else if (this.hunger < 50) {
            console.log(`${this._name} is less full! Hunger level is ${this.hunger}`)
        }
    }
    drink() {
        this.thirst -= 50;
        console.log(`${this._name} is less thirsty, thirst level is ${this.thirst}!`)
        if (this.thirst < 50) {
            console.log(`${this._name} has done a wee all over your nice rug.`)
        }
    }
}
const cyberPet = new Animal()




if (cyberPet.thirst > 100) {
    alert(`Watch out ${cyberPet._name} is thirsty!`)
} 

if (cyberPet.bored == true) {
    alert(`Watch out ${cyberPet._name} is bored!`)
}



const imgDragon = document.createElement("img");
imgDragon.src = "images/dragon.png";
const imgTurtle = document.createElement("img")
imgTurtle.src = "images/turtle.png";
const photoBox = document.getElementById("photobox");

if (petChoice.toLowerCase() == "dragon") {
    photoBox.appendChild(imgDragon);
} else if (petChoice.toLowerCase() == "turtle") {
    photoBox.appendChild(imgTurtle)
}


console.log(cyberPet)