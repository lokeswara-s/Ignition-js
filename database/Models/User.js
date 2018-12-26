import BaseModel from "./BaseModel";

class User extends BaseModel{
    constructor(DB){
        super(DB)
        this.name = "Persons"
    }

    async getAll() {
        return super.getAll(`SELECT * FROM ${this.name}`);
    }
}

export default User