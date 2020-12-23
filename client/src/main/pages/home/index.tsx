import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function Home(): React.ReactElement {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h2">
          Home page
        </Typography>
        <Typography variant="body2" component="p">
          Main
        </Typography>
      </CardContent>
    </Card>
  );
}
