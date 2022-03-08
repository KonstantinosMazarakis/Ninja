class Ninja {
    constructor(name,health){
    this.name = name
    this.health = health
    this.speed = 3
    this.strength = 3
    }

    sayName(){
        console.log(`AND HIS NAME ISSSSSSS ${this.name} Tan Taaaaaaan tan taaaan`)
    }

    showStats(){
        console.log(`Name: ${this.name} , Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake(){
        this.health = this.health + 10
    }
}

class Sensei extends Ninja{
    constructor(name){
    super(name)
    this.health = 200
    this.speed = 10
    this.strength = 10
    this.wisdom = 10
    }

    speakWisdom(){
        this.drinkSake()
        console.log("did the chicken or the egg came first")
    }
}

// let ninja1 = new Ninja("John Sina",100)
// ninja1.sayName()
// ninja1.drinkSake()
// ninja1.showStats()

let sensei1 = new Sensei("kostas")
sensei1.showStats()
sensei1.speakWisdom()
sensei1.showStats()