class human {
   age = 1.5;
   printAge = () =>  console.log( this.age);
    
}
class person extends human {
    name = "Chitti";
     printName= () => console.log(this.name);
    
}

const age = new person;
age.printAge();
age.printName();
const add = (num1,num2) => {
    return num1+num2;
}
console.log(add(4,4));