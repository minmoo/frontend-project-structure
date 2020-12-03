import * as React from 'react';
import {Avatar, Grid, Paper, Typography, Grow} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        main: {
            height: '100vh',
        },
        paper: {
            margin: theme.spacing(10, 5),
            borderRadius: '15px',
            display: 'flex',
        },
        input: {
            margin: theme.spacing(8 ,4, 4),
            width: '20vw',
            minWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        side: {
            [theme.breakpoints.down('sm')]:{
                display:'none'
            },
            width: '50vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.secondary.main,
        },
        sideTitle: {
            margin: theme.spacing(10, 10),
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
    })
);
type TSignProps = {
    children: React.ReactNode,
    title: string
}

export default function Sign(props:TSignProps){
    const classes = useStyles();
    const {children, title} = props;

    return(
        <Grid container justify="center" alignItems="center" className={classes.main}>
            <Paper elevation={6} className={classes.paper}>
                <div className={classes.input}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {title}
                    </Typography>
            
                    {children}
                   
                </div>
                <div className={classes.side}>
                    <Grow in={true} {...({timeout: 1000})}>
                        <Typography variant="h2" className={classes.sideTitle}>
                            Welcome<br/> to the<br/> Back Office
                        </Typography>            
                    </Grow>
                </div>
            
            </Paper>
        </Grid>
    )
}