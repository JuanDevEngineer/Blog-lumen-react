import Service from '../../helpers/Service'
import * as type_blog from '../types/BlogType'

/**
 * actions syncronous
 * 
 */

export const loandingInit = () => ({
    type: type_blog.LOANDING_INIT_BLOGS,
    payload: true
})

export const loandingEnd = () => ({
    type: type_blog.LOANDING_FINISH_BLOGS,
    payload: false
})

export const getBlogs = (data) => ({
    type: type_blog.LOAD_BLOGS,
    payload: data
})


/**
 * actions asyncronous
 */
export const getBlogsFetch =  () => {
    return async (dispatch) => {
        dispatch(loandingInit())
        const response = await Service.fetchServericeUp('/blog')
        dispatch(getBlogs(response.data))
        dispatch(loandingEnd())
    }
}