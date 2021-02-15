import { Card, CardContent, Typography, Avatar, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MoneyIcon from '@material-ui/icons/Money';
import GridContainer from '../common/GridContainer';
import GridItem from '../common/GridItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
      height: 56,
      width: 56,
    },
  }),
);

export default function MiniCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <GridContainer justify="space-between" spacing={3}>
          <GridItem>
            <Typography color="textSecondary" gutterBottom variant="h6">
              MiniCard Title
            </Typography>
            <Typography color="textPrimary" gutterBottom variant="h3">
              Value
            </Typography>
          </GridItem>
          <GridItem>
            <Avatar className={classes.avatar}>
              <MoneyIcon />
            </Avatar>
          </GridItem>
        </GridContainer>
        <Box mt={2} display="flex" alignItems="center">
          <Typography variant="body2">MiniCard Body Content</Typography>
          <Typography color="textSecondary" variant="caption">
            MiniCard sub Body Content
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
