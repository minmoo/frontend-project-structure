import * as React from 'react';
import {Link, Button, TextField, Typography, Box, Snackbar} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Sign from './Sign';
import {useSignUp} from '../../modules/sign/hooks';


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
    name: '',
    id: '',
    password: '',
    passwordConfirm: '',
};

const schema = yup.object().shape({
    name: yup.string().required("이름을 입력해주세요."),
    id: yup.string().required("id를 입력해주세요."),
    password: yup.string().required("password를 입력해주세요."),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "password가 일치하지 않습니다.")
});

function Alert(props: AlertProps){
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignIn(){
    const classes = useStyles();

    const onSignUp = useSignUp();

    const {handleSubmit, register, errors} = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    const [open, setOpen] = React.useState(false);

    const submitHandle = (data) => {
        console.log(data);
        onSignUp(data);
    };

    const handleClose = (event?:React.SyntheticEvent, reason?:string) => {
        if(reason == 'clickaway'){
            return;
        }
        setOpen(false);
    };


    return(
        <Sign title={"Sign Up"}>
            <form onSubmit={handleSubmit(submitHandle)} className={classes.form}>
                <TextField
                    error={errors.name ? true: false}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    inputRef={register}
                    helperText={errors.name?.message}
                    autoFocus
                />
                <TextField
                    error={errors.id ? true: false}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="id"
                    label="ID"
                    name="id"
                    inputRef={register}
                    helperText={errors.id?.message}
                />
                <TextField
                    error={errors.password ? true: false}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    inputRef={register}
                    helperText={errors.password?.message}
                />
                <TextField
                    error={errors.passwordConfirm ? true: false}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="passwordConfirm"
                    label="Password (Confirm)"
                    name="passwordConfirm"
                    inputRef={register}
                    helperText={errors.passwordConfirm?.message}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                >
                    CREATE AN ACCOUNT
                </Button>
            </form>
            
            <Box className={classes.box}>
                <Typography variant="body2">
                    Already have an account?
                </Typography>
                <Link href="/signIn" variant="body2">
                    {"Sign in"}
                </Link>
            </Box>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    성공했습니다.
                </Alert>
            </Snackbar>
        </Sign>
    )

};