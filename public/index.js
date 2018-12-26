import Bootstrap from  '../startup/Bootstrap'
import Config from '../configuration/AppConfig'
import Model from '../database/Models/BaseModel'
import RouterConfig from "../routes/RouterConfig"

class InitiateApplication {
    constructor(){
        this.config = new Config()
        this.bootstrap = new Bootstrap()
        this.routerConfig;
        this.initializeDB()
    }

    async initializeDB(){
        this.DB = await this.config.createDBConnection()
        await this.initializeModels(this.DB);
        this.server = await this.bootstrap.initializeExpress()
        this.routerConfig = new RouterConfig(this.server)
        await this.routerConfig.loadRoutes()
        this.server.listen(8010,  ()=> {
            console.log("Example app listening 5000")
        })
    }

    async initializeModels(DB){
        await new Model(DB);
    }
}

new InitiateApplication()