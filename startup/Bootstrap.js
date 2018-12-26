import express from 'express'

import routes from '../routes/routes';
import RequestConfig from "./RequestConfig";

let instance = null
class Bootstrap{
    constructor(){
        if(!instance){
            instance = this
        }
        this.app = express()
        this.requestConfig = new RequestConfig()
        return instance
    }

    async initializeExpress(){
        return this.app
    }

    async initalizeModuleWithRoutes(app){
        routes.map((route)=>{
            switch (route.method) {
                case "POST":
                    return
                case "GET":
                    this.requestConfig.bindGet(route, app)
            }
        })
        return app
    }


}

export default Bootstrap