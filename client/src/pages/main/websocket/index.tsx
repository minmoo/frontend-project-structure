import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { useWsConnect } from '../../../modules/websocket';

export default function Websocket(): React.ReactElement {
  const onConnect = useWsConnect();
  const websocket = useSelector((state: RootState) => state.websocket);

  const handleConnect = () => {
    onConnect();
  };

  return (
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
}
