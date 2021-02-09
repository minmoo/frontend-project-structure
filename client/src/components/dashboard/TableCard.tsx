import { Card, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import React from 'react';

const data = [
  {
    id: 1,
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street',
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
  },
  {
    id: 2,
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road',
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    phone: '712-351-5711',
  },
];

export default function TableCard() {
  return (
    <Card>
      <Box minWidth={1050}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Registration date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((customer) => (
              <TableRow hover key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                </TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
