class Worker {
    constructor(name, surname, rate, days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary(){
        return this.rate * this.days
    }
}

const Me = new Worker('Andrew','Sergeev', 3000, 15)

console.log(Me)
console.log(Me.getSalary())