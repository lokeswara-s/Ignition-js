import Blueprint from './Blueprint'

let instance = null
class Schema{
    constructor() {
        if(!instance){
            instance = this
            this.create = this.create
        }
        this.blueprint = new Blueprint().Table()
        return instance
    }

    create(Table, Entities){
        console.log(Table, Entities)
    }
}

export default Schema