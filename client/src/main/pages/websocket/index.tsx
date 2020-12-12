import * as React from 'react';
import { useSelector } from 'react-redux';
import {Button, Card, CardContent, CardActions, Typography} from '@material-ui/core';
import { useWsConnect } from '../../../modules/websocket';
import { RootState } from '../../../modules';


export default function Websocket(){
    const onConnect = useWsConnect();
    const websocket = useSelector((state:RootState) => state.websocket);

    const handleConnect = () => {
        onConnect();
    };

    return(
        <Card>
            <CardContent>
                <Typography variant="h4" component="h2">
                    Websocket Test
                </Typography>
                <Typography variant="body2" component="p">
                    {websocket.data}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleConnect}>Connect</Button>
            </CardActions>
        </Card>
    );
};