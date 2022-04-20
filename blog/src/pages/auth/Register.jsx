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
import Service from '../../helpers/Service'

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
    errorCustom: {
        color: '#d50000'
    }
}));

const Register = () => {

    const classes = useStyles()
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const handleDataSubmit = async (data) => {
        const response = await Service.fetchServericeDown('/auth/register', data, 'POST')
        console.log(response.data.token)
        // reset({
        //     'name': '',
        //     'email': '',
        //     'phone': '',
        //     'password': ''
        // })
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
                            {...register('name', { required: true })}
                            name='name'
                            size='small'
                            margin='normal'
                            fullWidth
                            id='name'
                            label='Nombres'
                            type='text'
                            autoComplete='off'
                        />
                        {errors.name?.type === 'required' && (<p className={classes.errorCustom}>El campo nombres se encuentra vacio</p>)}

                        <TextField
                            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                            name='email'
                            size='small'
                            margin='normal'
                            fullWidth
                            label='Email'
                            type='email'
                            id='email'
                            autoComplete='off'
                        />
                        {errors.email?.type === 'required' && (<p className={classes.errorCustom}>El campo email se encuentra vacio</p>)}
                        {errors.email?.type === 'pattern' && (<p className={classes.errorCustom}>Valida el correo ingresado</p>)}

                        <TextField
                            {...register('phone', { required: true, maxLength: 10 })}
                            name='phone'
                            size='small'
                            margin='normal'
                            fullWidth
                            label='Phone'
                            type='number'
                            id='phone'
                            autoComplete='off'
                        />
                        {errors.phone?.type === 'required' && (<p className={classes.errorCustom}>El campo phone se encuentra vacio</p>)}
                        {errors.phone?.type === 'maxLength' && (<p className={classes.errorCustom}>min</p>)}
                        {errors.phone?.type === 'min' && (<p className={classes.errorCustom}>min</p>)}
                        {errors.phone?.type === 'max' && (<p className={classes.errorCustom}>max</p>)}

                        <TextField
                            {...register('password', { required: true })}
                            name='password'
                            size='small'
                            margin='normal'
                            fullWidth
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        {errors.password?.type === 'required' && (<p className={classes.errorCustom}>El campo password se encuentra vacio"</p>)}

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
