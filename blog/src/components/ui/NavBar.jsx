import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, makeStyles, Toolbar, IconButton } from '@material-ui/core'
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
        color: '#fff',
    },
    btnCustom: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: 20
        
    }
}))

const NavBar = () => {

    const classes = useStyles()

    return (
        <AppBar position='fixed' className={classes.root} elevation={0}>
            <Toolbar className={classes.customNavbar}>
                <Link to="/auth/login" className={classes.btnCustom}>
                    <span>
                    <FreeBreakfast />
                    </span>
                </Link>
                <IconButton className={classes.customMenu}>
                    <Sort />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
