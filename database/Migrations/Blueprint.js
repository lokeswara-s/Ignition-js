class Blueprint {

    constructor(){
        this.object = Object.create(null)
    }

    Table(){
        return({
            increments:this.addIncrementColumn
        })
    }
    addIncrementColumn(type, val){
        if(!this.object){
            this.object = Object.create(null)
        }
        this.object[type] = val
        return(this)
    }
}

export default Blueprint