import React from 'react'

import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'
import {
    Container,
    Typography,
    makeStyles,
    CssBaseline,
    TextField,
    Avatar,
    Button,
    Grid
} from '@material-ui/core'
import { Group } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    loginCustom: {
        marginTop: theme.spacing(9),
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
}));

const Register = () => {

    const classes = useStyles()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleDataSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={classes.root}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.loginCustom}>
                    <Avatar className={classes.avatarCustom}>
                        <Group />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Registrar
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(handleDataSubmit)}>
                        <TextField
                            {...register('nombres', { required: true })}
                            name='nombres'
                            size='small'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='nombres'
                            label='Nombres'
                            type='text'
                            autoComplete='off'
                        />
                        {errors.nombres?.type === 'required' && "el campo nombres se encuentra vacio"}

                        <TextField
                            {...register('email', { required: true })}
                            name='email'
                            size='small'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            label='Email'
                            type='email'
                            id='email'
                            autoComplete='off'
                        />
                        {errors.email?.type === 'required' && "el campo email se encuentra vacio"}

                        <TextField
                            {...register('phone', { required: true })}
                            name='phone'
                            size='small'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            label='Phone'
                            type='text'
                            id='phone'
                            autoComplete='off'
                        />
                        {errors.phone?.type === 'required' && "el campo phone se encuentra vacio"}

                        <TextField
                            {...register('password', { required: true })}
                            name='password'
                            size='small'
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        {errors.password?.type === 'required' && "el campo password se encuentra vacio"}

                        <Button
                            type='submit'
                            fullWidth
                            variant='outlined'
                            className={classes.btnCustom}
                        >
                            Registrar
                        </Button>
                        <Grid container spacing={1}>
                            <Grid
                                item
                                xs={12}
                                style={{ textAlign: 'center' }}
                            >
                                <Link to='/auth/login'>
                                    Ya tienes Cuenta?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Register
