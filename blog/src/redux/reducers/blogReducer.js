import * as type_blog from '../types/BlogType'

const initState = {
    blogs: [],
    loading: false
}

const blogReducer = (state = initState, action) => {
    
    switch (action.type) {
        case type_blog.LOANDING_INIT_BLOGS:
            return {
                ...state,
                loading: action.payload
            }
        case type_blog.LOAD_BLOGS:
            return {
                ...state,
                blogs: [ ...action.payload.data ],
            }
        case type_blog.LOANDING_FINISH_BLOGS:
            return {
                ...state,
                loading: action.payload
            }
    
        default:
            return state
    }
}

export default blogReducer