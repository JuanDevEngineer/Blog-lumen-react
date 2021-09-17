import Service from '../../helpers/Service'
import * as type_blog from '../types/BlogType'

export const loandingInit = () => ({
    type: type_blog.LOANDING_INIT_BLOGS,
    payload: true
})

export const loandingEnd = () => ({
    type: type_blog.LOANDING_FINISH_BLOGS,
    payload: false
})

export const getBlogs = async () => {
    return (dispatch) => {
        const response = await Service.fetchServericeUp('/blog')
        console.log(response.data);
    }
}