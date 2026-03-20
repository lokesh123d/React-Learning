// class MyFristClass{
//     constructor(name){
//         console.log('My First Class Created a One Object.')
//         // return 'My return message..'
// console.log(this.name);

//     }
// }

// const holdingVariable = new MyFristClass('lokesh');

// const inputList = document.querySelectorAll('input')
// const form = document.querySelector('form')

// class Ractangle{
//     constructor(width,height,color){
//         this.width = width;
//         this.height= height;
//         this.color = color;
//     }

//     getArea(){
//         return this.width*this.height;
//     }

// }

// const Ractangle1 = new Ractangle(5,3,'red');
// const Ractangle2 = new Ractangle(4,9,'blue');
// console.log(Ractangle1.getArea());

// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     let newRactangle = new Ractangle(inputList[0].value,inputList[1].value,inputList[2].value)
//     // console.log(newRactangle);

// const newRact =     document.createElement('div')
// newRact.style.width = newRactangle.width+'px';
// newRact.style.height = newRactangle.height+'px';
// newRact.style.backgroundColor = newRactangle.color;

// document.querySelector('body').appendChild(newRact);

//     // console.log('form submitted')
// })




// ////////////////////// In heritance 



class Animal {
  constructor(_name, _age) {
    this._name = _name;
    this._age = _age;
  }
  speak() {
    console.log(`${this._name} can Speak with the age ${this._age}`);
  }
}

class Dog extends Animal {
  constructor(_name,_age,_dogCategory) {
    super(_name, _age);
    this._dogCategory = _dogCategory;
  }

  bark() {
    console.log(`${this._dogCategory} can bark and his name is ${this._name} and age is ${this._age}`);
  }
}



class KuchBhe extends Dog{
    constructor(_name,_age,_dogCategory,_kuchBhe){
        super(_name,_age,_dogCategory)
        this._kuchBhe = _kuchBhe;
    }
    kuchBheKar(){
        console.log(`kuch bhe kartain kartain mai ya kar eaha hu ${this._name, this._age ,this._dogCategory,this._kuchBhe}`)
    }
}


const animal1 = new Animal('cat',2);
const dog1 = new Dog('rocky', 4 ,'rotwiller')
const kuchBhe1 = new KuchBhe('ranchau',10,'normal','kuch nahi karta hai');


// console.log(kuchBhe1);
// console.log(dog1)
// console.log(animal1)




//////////////////////////// polymorphysim

class Animal2 {
    constructor(name){
this.name = name;
    }
    makeSound(){
        console.log('generic sound');
    }
}


class Dog2 extends Animal2{
    constructor(name){
        super(name);
    }
    makeSound(){
        // super.makeSound();
        console.log('barking now')
    }
}



const a1 = new Animal2('cow');
const a2 = new Dog2('dog');

a1.makeSound();
a2.makeSound();