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


let ninja1 = new Ninja("John Sina",100)
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()