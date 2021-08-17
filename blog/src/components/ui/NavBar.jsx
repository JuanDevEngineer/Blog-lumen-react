import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, makeStyles, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Sort, FreeBreakfast } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        background: '#009688'
    },
    customNavbar: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    customMenu: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: '#fff',
    },
    btnCustom: {
        margin: 0,
        padding: 0,
        color: '#fff',
        textDecoration: 'none',
        fontSize: 20
        
    }
}))


const NavBar = () => {
    
    const classes = useStyles()
    const arrCssCustom = [ classes.btnCustom, classes.customMenu ]
    
    console.log(arrCssCustom.join(" ").toString())
    return (
        <AppBar position='fixed' className={classes.root} elevation={0}>
            <Toolbar className={classes.customNavbar}>
                <IconButton className={classes.customMenu}>
                    <Link to="/auth/login" className={classes.btnCustom}>
                        <FreeBreakfast />
                    </Link>
                </IconButton>
                <Typography variant='h5'>
                    Blog
                </Typography>
                <IconButton className={classes.customMenu}>
                    <Link to="/auth/login" className={classes.btnCustom}>
                        <Sort />
                    </Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
