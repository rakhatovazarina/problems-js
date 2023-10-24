class Person {
    #name: string = '';
    #age: number = 0;


    constructor(name: string, age:number){
        this.#name = name;
        this.#age = age;
    }
    compareAge(person: Person) {
        if(this.#age > person.#age){
            return `${person.#name} is younger than me.`
        }
        else if(this.#age < person.#age){
            return `${person.#name} is older than me.`
        }
        else{
            return `${person.#name} is the same age as me.`
        }
    }

}

export default Person;
