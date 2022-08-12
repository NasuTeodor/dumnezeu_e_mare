import axios from "axios";

export class API{
    instanta;
    
    constructor(){
        this.instanta = axios.create({
                baseURL:"http://localhost/backend/",
            method:"POST",
        })
    }

    async post(path, data, options={}){
        return await this.instanta.post(path, data, options)
    }

}