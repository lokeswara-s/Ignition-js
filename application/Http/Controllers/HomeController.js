import User from "../../../database/Models/User";

class HomeController{

    constructor(){
        this.user = new User();
    }

    async getUsers(req, res){
        let results = await this.user.getAll("SELECT * FROM Persons")
        res.send(results)
    }

    async getTemplate(req, res){
        res.send(
            `<h1>
                Hello World
            </h1>`
        )
    }
}

export default HomeController