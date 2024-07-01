class Worker {

    #name
    #surname
    #rate
    #days

    constructor(name, surname, rate, days){
        this.#name = name
        this.#surname = surname
        this.#rate = rate
        this.#days = days
    }

    get getName(){
        return this.#name
    }
    get getSurname(){
        return this.#surname
    }

    get getRate(){
        return this.#rate
    }

    get getDays(){
        return this.#days
    }

    getSalary(){
        return this.rate * this.days
    }
}

const Me = new Worker('Andrew','Sergeev', 3000, 15)

console.log(Me.getName)
console.log(Me.name)
