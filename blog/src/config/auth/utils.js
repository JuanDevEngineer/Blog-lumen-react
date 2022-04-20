
export const isUserLogin = () => {
    return localStorage.getItem('data');
}

export const getUserData = () => JSON.parse(localStorage.getItem('data'))

export const getHomeRouteForLoggedInUser = (userRole) => {
    if (userRole === 'admin') return '/'
    if (userRole === 'client') return { name: 'access-control' }
    return { name: 'auth-login' }
}