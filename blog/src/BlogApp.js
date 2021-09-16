import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AppRouter from './routers/AppRouter'

import { statusSession } from './redux/actions/auth'
import './app.css'


function BlogApp() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(statusSession())
        return () => {}
    }, [dispatch])

    return (
        <>
            <AppRouter />
        </>
    );
}

export default BlogApp
