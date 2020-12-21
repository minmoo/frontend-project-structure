import * as React from 'react';
import {Link, Button, TextField, Typography, Box} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useSignIn} from '../../modules/sign/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import Sign from './Sign';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        box: {
            margin: theme.spacing(15, 0, 0),
            textAlign: 'center',
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

export default function SignIn({history}){
    const classes = useStyles();

    const onSignIn = useSignIn();
    const sign = useSelector((state:RootState) => state.sign);

    const {handleSubmit, register, errors} = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const submitHandle = (data) => {
        onSignIn({id: data.userId, pwd: data.userPwd});
    };


    return(

        <Sign title={"Sign In"}>
            <form onSubmit={handleSubmit(submitHandle)} className={classes.form}>
                <TextField
                    error={errors.userId ? true: false}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="userId"
                    label="User Id"
                    name="userId"
                    inputRef={register}
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
                    inputRef={register}
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
            
            <Box className={classes.box}>
                <Typography variant="body2">
                    Don't have an account?
                </Typography>
                <Link href="/signUp" variant="body2">
                    {"Create an account"}
                </Link>
            </Box>
        </Sign>
    )

};