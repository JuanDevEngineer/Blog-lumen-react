import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Typography,
    makeStyles,
    CssBaseline,
    TextField,
    Avatar,
    Button,
    Grid, } from '@material-ui/core'
import { Lock } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        // minHeight: '90vh',
    },
    loginCustom: {
      marginTop: theme.spacing(15),
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

const RecoverPassword = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.loginCustom}>
                    <Avatar className={classes.avatarCustom}>
                        <Lock />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Recuperar Contraseña
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            size='small'
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            className={classes.btnCustom}
                        >
                            Recuperar Contraseña
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/auth/login'>
                                    Volver al Login?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/auth/register'>
                                    {"Aún no tienes cuenta? Registrate!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    )
}


export default RecoverPassword