import { disconnect } from 'process';
import * as socketIO from 'socket.io';

class WebSocketIO{
    private io:socketIO.Server;
    private clients: Array<socketIO.Socket> = [];

    constructor(server){
        this.io = socketIO.listen(server);

        this.io.sockets.on('connection', async (socket) =>{
            console.log("Socket Connected");
            console.log("socket id: ", socket.id);

            this.clients.push(socket);
            this.io.to(socket.id).emit('my socket id', {socketId: socket.id});

            socket.on('disconnect', async()=>{
                console.log('client disconnect...', socket.id);
                this.clients = this.clients.filter((s) => s.id !== socket.id);
            });

            socket.on('receive', async(data)=>{
                console.log("receive...");
            });
        });
    }

    public getSocket(id:string){
        return this.clients.filter((s) => s.id ==id );
    }

    //broadcast
    public notifyClients(msg, data){
        this.clients.forEach(socket => socket.emit(msg,data))
    }

};

export default WebSocketIO;