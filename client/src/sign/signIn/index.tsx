import * as React from 'react';
import {Avatar, Box, Button, Grid, Hidden, Paper, TextField, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        main: {
            height: '100vh',
        },
        paper: {
            margin: theme.spacing(10, 5),
            display: 'flex',
        },
        input: {
            margin: theme.spacing(8 ,4),
            width: '20vw',
            minWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        welcome: {
            [theme.breakpoints.down('sm')]:{
                display:'none'
            },
            width: '50vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.secondary.main,
        },
        title: {
            margin: theme.spacing(10, 10),
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    })
);

const defaultValues = {
    userId: '',
    userPwd: '',
};

const schema = yup.object().shape({
    userId: yup.string().required("id를 입력해주세요."),
    userPwd: yup.string().required("password를 입력해주세요.")
});

export default function SignIn(){
    const classes = useStyles();

    const {handleSubmit, register, errors} = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const submitHandle = (data) => {

    };


    return(
        <Grid container justify="center" alignItems="center" className={classes.main}>
            <Paper elevation={6} className={classes.paper}>
                <div className={classes.input}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
            
                    <form onSubmit={handleSubmit(submitHandle)} className={classes.form}>
                    
                        <TextField
                            error={errors.userId ? true: false}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="userId"
                            label="User Id"
                            name="userId"
                            ref={register}
                            helperText={errors.userId?.message}
                            autoFocus
                        />
                        <TextField
                            error={errors.userPwd? true: false}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="userPwd"
                            label="User Password"
                            name="userPwd"
                            ref={register}
                            helperText={errors.userPwd?.message}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
                <div className={classes.welcome}>
                    <Typography variant="h2" className={classes.title}>
                        Welcome<br/> to the<br/> Back Office
                    </Typography>            
                </div>
            
            </Paper>
        </Grid>
    )

};