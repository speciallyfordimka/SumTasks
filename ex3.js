class Calculate{
    #calculationLine = ''

    setterCalculationLine(value){
        this.#calculationLine = value
    }

    setLastSymbolCalculationLine(value){
        this.#calculationLine += value
    }

    gettercalCulationLine(){
        return this.#calculationLine
    }

    lastSymbol(){
        return this.#calculationLine.charAt(this.#calculationLine.length - 1)
    }

    deleteLastSymbol(){
        this.#calculationLine = this.#calculationLine.substring(0, (this.#calculationLine.length - 1))  
    }
}

const calc = new Calculate()
calc.setterCalculationLine('calculate')
console.log(calc.gettercalCulationLine())

calc.setLastSymbolCalculationLine('s')
console.log(calc.gettercalCulationLine())

console.log(calc.lastSymbol())

calc.deleteLastSymbol()
console.log(calc.gettercalCulationLine())