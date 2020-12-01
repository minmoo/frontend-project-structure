import WebSocketIO from '../configs/ws';

declare global{
    namespace Express{
        interface Request{
            ws? :WebSocketIO;
        }
    }
}