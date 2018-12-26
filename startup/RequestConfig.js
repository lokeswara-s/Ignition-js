import * as Controller from '../application/Http/Controllers';

let instance = null

class RequestConfig {
    constructor(){
        if(!instance){
            instance = this
        }
        return instance
    }

    bindPost(){

    }

    bindGet(route, app){
        app[route.method.toLowerCase()](
            route.url,
            this.generateRouteEntity(route.action)
        )
        return app
    }

    generateRouteEntity(route){
        let instanceEntity = route.split('@')
        try{
            let prototype = Controller[instanceEntity[0]];
            let instance = new prototype()
            return instance[instanceEntity[1]].bind(instance)
        }catch (e) {
            let header = "";
            if(e.message.indexOf('constructor') >= 0){
                header = `<h1 style="background-color: #bbbbbb;display: block;padding: 3%;">Could'nt find class ${instanceEntity[0]}</h1>`
            }
            console.trace(e.message)
            return (req, res)=>{
                let stackTrace = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
                    .split('\n');
                let htmlString ="<div style='" +
                    "margin: auto;" +
                    "width: 80%; " +
                    "background-color: grey;" +
                    "height:auto;" +
                    "padding: 5%;" +
                    "font-size: 18px;" +
                    "font-family: monospace'>"+header;
                stackTrace.map((stackItem)=>{
                    htmlString += `<p>${stackItem}</p>`
                })
                htmlString += "</div>"
                res.send(htmlString)
            }
        }
    }
}

export default RequestConfig