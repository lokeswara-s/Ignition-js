import HomeController from '../application/Http/Controllers/HomeController'
import Bootstrap from '../startup/Bootstrap';

let instance = null

class RouterConfig {
    constructor(APP){
        if(!instance){
            instance = this
        }
        this.app = APP
        return instance
    }

    async loadRoutes(){
        let app = await new Bootstrap().initalizeModuleWithRoutes(this.app)
        app.use(function (err, req, res, next) {
                if(err){
                    res.send(err)
                }
        });

        return app
    }
}

export default RouterConfig