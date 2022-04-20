import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/auth/Login'
import RecoverPassword from '../pages/auth/RecoverPassword'
import Register from '../pages/auth/Register'
import Home from '../pages/Home'

const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/home'
                        render={(props) => <Home {...props} />}a
                    />

                    <Route
                        exact
                        path='/auth/registrar'
                        render={(props) => <Register {...props} />}
                    />

                    <Route
                        exact
                        path='/auth/login'
                        render={(props) => <Login {...props} />}
                    />

                    <Route
                        exact
                        path='/auth/recover-password'
                        render={(props) => <RecoverPassword {...props} />}
                    />

                    <Redirect path='*' to="/auth/login" />
                </Switch>
            </Router>
        </>
    )
}

export default AppRouter
