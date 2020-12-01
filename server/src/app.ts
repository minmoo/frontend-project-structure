import * as express from 'express';
import envs from './configs/envs';
import WebSocketIO from './configs/ws';

const app = express();

let server = require('http').Server(app);

const ws = new WebSocketIO(server);

app.use((req:express.Request, res:express.Response, next: express.NextFunction) =>{
    req.ws = ws;    //middleware에서 reqeust에 websocket을 담아준다.
    return next();
});

export const {db} = require('./loaders').default({expressApp: app});

server.listen(envs.port, () => {
    console.log(`
          ################################################
          🛡️  Server listening on port: ${envs.port} 🛡️ 
          ################################################
        `);
});