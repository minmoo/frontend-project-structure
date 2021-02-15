import { useState, useCallback } from 'react';
import * as React from 'react';
import { Button, Card, CardContent, Typography, TextField } from '@material-ui/core';

type TDashboard = {
  onAdd: (addCount: number) => void;
  count: number;
};

export default function Dashboard({ onAdd, count }: TDashboard): React.ReactElement {
  const [toggle, setToggle] = useState(false);
  const [addCount, setAddCount] = useState(0);

  const render = React.useRef(0); //지역변수

  //1초 후 toggle 값 반전
  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setAddCount(e.target.value);
  };

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
        <Button onClick={onToggle} data-testid="toggle">
          Toggle
        </Button>
        <div>
          상태: <span>{toggle ? 'ON' : 'OFF'}</span>
        </div>
        <TextField onChange={handleChange} value={addCount}></TextField>
        <Button onClick={() => onAdd(addCount)}>Add</Button>
        <div>Count: {count}</div>
      </CardContent>
    </Card>
  );
}
