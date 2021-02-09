import React from 'react';
import DashboardForm from '../../../components/dashboard/container/DashboardForm';
import Page from '../../../components/common/Page';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import GridContainer from '../../../components/common/GridContainer';
import GridItem from '../../../components/common/GridItem';
import MiniCard from '../../../components/dashboard/MiniCard';
import ChartCard from '../../../components/dashboard/ChartCard';
import TableCard from '../../../components/dashboard/TableCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100%',
    },
  }),
);

export default function Dashboard(): React.ReactElement {
  const classes = useStyles();
  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth={false}>
        <GridContainer spacing={3}>
          <GridItem xs={12} xl={3} sm={6} lg={3}>
            <MiniCard />
          </GridItem>
          <GridItem xs={12} xl={3} sm={6} lg={3}>
            <MiniCard />
          </GridItem>
          <GridItem xs={12} xl={3} sm={6} lg={3}>
            <MiniCard />
          </GridItem>
          <GridItem xs={12} xl={3} sm={6} lg={3}>
            <MiniCard />
          </GridItem>

          <GridItem xs={12} xl={9} md={12} lg={8}>
            <ChartCard />
          </GridItem>

          <GridItem xs={12} xl={3} md={6} lg={4}>
            <TableCard />
          </GridItem>
        </GridContainer>
      </Container>
    </Page>
  );
}
