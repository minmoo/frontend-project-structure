import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';

export default function Dashboard(): React.ReactElement {
  const data = useSelector(({ layout }: RootState) => layout);

  const render = React.useRef(0);

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2">
          Home page
        </Typography>
        <Typography variant="body2" component="p">
          Main
        </Typography>
        <div>Renders: {render.current++}</div>
      </CardContent>
    </Card>
  );
}
