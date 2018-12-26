let instance = null;

class BaseModel {
    constructor(DB){
        if(!instance){
            instance = this;
        }
        this.DB = DB
        return instance;
    }

    async getAll(query){
        let response = await new Promise(resolve => {
            this.DB.query(query, (err, res, t)=>{
                resolve(res)
            })
        })
        return response;
    }
}

export default BaseModel