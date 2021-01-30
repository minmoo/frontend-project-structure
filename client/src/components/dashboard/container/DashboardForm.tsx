import React from 'react';
import Dashbaord from '../Dashboard';

export default function DashboardForm(): React.ReactElement {
  const [count, setCount] = React.useState(0);
  const onAdd = (addCount: number) => {
    setCount(count + addCount);
  };
  return <Dashbaord onAdd={onAdd} count={count}></Dashbaord>;
}
