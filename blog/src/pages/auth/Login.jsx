import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'

import { loginApp } from '../../redux/actions/auth'

import {
    Container,
    Typography, 
    makeStyles,
    CssBaseline,
    TextField,
    Avatar,
    Button,
    Grid,
    FormControlLabel,
    Checkbox } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import Service from '../../helpers/Service'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'
    },
    loginCustom: {
      marginTop: theme.spacing(11),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatarCustom: {
      margin: theme.spacing(1),
      backgroundColor: '#009688',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    btnCustom: {
      margin: theme.spacing(3, 0, 2),
      color: '#fff',
      backgroundColor: '#009688',
        '&:hover': {
            backgroundColor: '#004d40'
        }
    },
    errorCustom: {
        color: '#d50000'
    }
}));

const Login = () => {

    const classes = useStyles()

    const dispatch = useDispatch()

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleDataSubmit = async (data) => {
        const response = await Service.fetchServericeDown('/auth/login', data, 'POST')
        const token = response.data.token
        localStorage.setItem('token', token)
        dispatch(loginApp(token))
    }

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.loginCustom}>
                    <Avatar className={classes.avatarCustom}>
                        <LockOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(handleDataSubmit)}>
                        <TextField
                            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }) }
                            name='email'
                            size='small'
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Email"
                            type='text'
                            id="email"
                            autoComplete="off"
                        />
                        {errors.email?.type === 'required' && (<p className={classes.errorCustom}>El campo email se encuentra vacio</p>)}
                        {errors.email?.type === 'pattern' && (<p className={classes.errorCustom}>Valida el correo ingresado</p>)}

                        <TextField
                            {...register('password', { required: true }) }
                            name='password'
                            size='small'
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {errors.password?.type === 'required' && (<p className={classes.errorCustom}>El campo password se encuetra vacio</p>)}

                        <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Recordarme"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            className={classes.btnCustom}
                        >
                            Ingresar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/auth/recover-password'>
                                    Olvido la Contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/auth/registrar'>
                                    Aún no tienes cuenta? Registrate!
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
