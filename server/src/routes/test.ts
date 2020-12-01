import {Router, Request, Response} from 'express';

const route = Router();

export default (app:Router) => {
    app.use('/test', route);

    route.get('/data', (req:Request, res:Response) => {
        console.log("test data");
        const data = [
            { a: "1", b: "2", c: "3"},
            { a: "4", b: "5", c: "6"},
            { a: "7", b: "8", c: "9"}
        ];
        res.json(data);
    });

    route.get('/wsData', (req:Request, res:Response) => {
        console.log("websocket data");
        const data = [
            { d: "1", e: "2", f: "3"},
            { d: "4", e: "5", f: "6"},
            { d: "7", e: "8", f: "9"}
        ];

        req.ws.notifyClients('data', data);
        res.json(data);
    });
}