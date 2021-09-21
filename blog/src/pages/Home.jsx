import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBlogsFetch } from '../redux/actions/blogActions' 

import NavBar from '../components/ui/NavBar'
import {
    CssBaseline,
    Typography,
    Grid,
    Container,
    makeStyles,
    Button
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        minHeight: '100vh',
        background: 'none',
        backgroundColor: '#000',
    },
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
    }
}))

const Home = () => {

    const classes = useStyles()

    const state = useSelector(state => state.blog)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlogsFetch())
        return () => {}
    }, [dispatch])


    if(state.blogs.loading) {
        return (
            <div>Cargando...</div>
        )
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <div className={classes.offset} />
            <div className={classes.page} >
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" gutterBottom
                                style={{ color: '#fff' }}
                            >
                                Album layout
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph
                                style={{ color: '#fff' }}
                            >
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" gutterBottom
                                style={{ color: '#fff' }}
                            >
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Button variant='outlined' color='secondary'>
                                Hello world 1
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.page} style={{backgroundColor: 'white'}} >
                <ul>
                    { state.blogs.length > 0 ? 
                        (
                            state.blogs.map((item, index) => (
                                <li key={index}> {item.titulo} </li>
                            ))
                        ) : (
                            <Typography>Se encuentra Vacio</Typography>
                        )
                    } 
                </ul>
            </div>
            <div className={classes.page} style={{backgroundColor: 'black'}} >
                <Typography>
                    Hello world 3
                </Typography>
            </div>
        </div>
    )
}

export default Home
