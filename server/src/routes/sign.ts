import {Router, Request, Response} from 'express';

const route = Router();

//임시 저장
let userInfo = [
    {
        name: "admin",
        id: "admin",
        pwd: "admin" 
    }
]

export default (app:Router) => {
    app.use('/sign', route);

    route.post('/signUp', (req:Request, res:Response) => {
        console.log("signUp");
        
        let sameId = userInfo.filter((info, index, arr) => info.id == req.body.id);

        if(sameId){
            res.json("fail");
        }else{
            userInfo.push({
                name: req.body.name,
                id: req.body.id,
                pwd: req.body.pwd
            });
            res.json("success");
        }
    });

    route.get('/signIn', (req:Request, res:Response) => {
        console.log("signIn");

        let sameId = userInfo.filter((info, index, arr) => info.id == req.body.id);

        if (sameId){
            res.json("success");
        }else{
            res.json("fail");
        }
    });
}