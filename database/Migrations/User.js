import Schema from "./Schema";

class User extends Schema{
    constructor(){
        super()
    }

    up(){
        super.create('User', ((Blueprint)=>{
            return Blueprint.increments('id', "Primary")
                .increments('Fname', 'String')
                .increments('Lname', 'String')
                .increments('Phone', 'Number')
        })(this.blueprint))
        return
    }
}

export default User