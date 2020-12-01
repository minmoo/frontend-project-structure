import * as React from 'react';
import {Button, Card, CardContent, CardActions, Typography} from '@material-ui/core';
import { useWsConnect } from '../../modules/websocket';

export default function Websocket(){
    const onConnect = useWsConnect();

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
                    body
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleConnect}>Connect</Button>
            </CardActions>
        </Card>
    );
};