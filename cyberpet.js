
let petChoice = prompt("Choose your pet type: Dragon, Turtle, Tiger or Shark?");
let petName = prompt(`Choose your pet's name`)
let petColor = prompt(`What color is ${petName}!`)
let petAge = prompt(`How old is ${petName}`)

// variables

const feedButton = document.getElementById("feedButton")
const playButton = document.getElementById("playButton")
const drinkButton = document.getElementById("drinkButton")

const imgDragon = document.createElement("img");
imgDragon.src = "images/dragon.png";
const imgTurtle = document.createElement("img")
imgTurtle.src = "images/turtle.png";
const imgTiger = document.createElement("img")
imgTiger.src = "./images/tiger.png";
const imgShark = document.createElement("img")
imgShark.src = "images/shark.png";
const photoBox = document.getElementById("photobox");

if (petChoice.toLowerCase() == "dragon") {
    photoBox.appendChild(imgDragon);
} else if (petChoice.toLowerCase() == "turtle") {
    photoBox.appendChild(imgTurtle)
} else if (petChoice.toLowerCase() == "shark") {
    photoBox.appendChild(imgShark)
} else if (petChoice.toLowerCase() == "tiger") {
    photoBox.appendChild(imgTiger)
}

const infoBox = document.getElementById("infobox")
const info = document.createElement("p")
info.innerHTML = `${petName} is a ${petChoice}, who is ${petAge} and ${petColor}!`
infoBox.appendChild(info)


class Animal {
    constructor() {
        this._type = petChoice;
        this._name = petName;
        this._age = petAge;
        this.color = petColor;
        this.bored = true;
        this.hunger = 100;
        this.thirst = 100;
        this.boredCount = 0;
    }
    play(){
        this.bored = false;
        this.boredCount--;
        this.thirst += 50;
        this.hunger += 50
        alert(`${this._name} is no longer bored, but thirst level is ${this.thirst}, and hunger level is ${this.hunger}`)
        if (cyberPet.thirst >= 200) {
            alert(`Well ${cyberPet._name} is dead!`)
        } else if (cyberPet.thirst > 100) {
            alert(`Watch out ${cyberPet._name} is thirsty!`)
        }
        
        if (cyberPet.hunger >= 200) {
            alert(`Well ${cyberPet._name} is dead!`)
        } else if (cyberPet.hunger > 100) {
            alert(`Watch out ${cyberPet._name} is hungry!`)
        
        }
        
    }
    feed(){
        this.hunger -= 50;
        this.bored = true;
        this.boredCount += 1;
        if (this.hunger > 100) {
            alert(`${this._name} is less hungry. Hunger level is ${this.hunger}`)
        } else if (this.hunger < 50) {
            alert(`${this._name} is  full! Hunger level is ${this.hunger}`)
        }
        if (this.bored == true) {
            alert(`Watch out ${cyberPet._name} is bored!`)
        }
    }
    drink() {
        this.bored = true;
        this.thirst -= 50;
        this.boredCount += 1;
        alert(`${this._name} is less thirsty, thirst level is ${this.thirst}!`)
        if (this.thirst < 50) {
            alert(`${this._name} has done a wee all over your nice rug.`)
        }
        if (this.bored == true) {
            alert(`Watch out ${cyberPet._name} is bored!`)
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

if (cyberPet.boredCount > 3) {
    alert(`${cyberPet.name} has run away from boredom`)
    photoBox.removeChild(photoBox.childNodes[0])
} 



// buttons

playButton.addEventListener("click", () => {
    cyberPet.play()
})

feedButton.addEventListener("click", ()=>{
    cyberPet.feed()
    if (cyberPet.boredCount > 3) {
        alert(`${petName} has run away from boredom`)
        photoBox.removeChild(photoBox)
    } 
})

drinkButton.addEventListener("click", ()=>{
    cyberPet.drink()
    if (cyberPet.boredCount > 3) {
        alert(`${petName} has run away from boredom`)
        photoBox.removeChild(photoBox)
    } 
})

console.log(cyberPet)