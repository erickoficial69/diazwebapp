import {createContext, useReducer, Dispatch, useEffect } from 'react'
import { PostState } from '../../interfaces/post_interface'
import { get_all_posts } from './posts_api_controllers';
import postsReducer from './post_reducer'

export const initial_state:PostState = {
    allPosts:[],
    post:{
        id: 0,
        author: 0,
        categories: [],
        comment_status: '',
        content: {rendered:'', protected:false},
        date: '',
        excerpt: {rendered: '', protected: false},
        featured_media: 0,
        format: '',
        meta: [],
        modified: '',
        ping_status: '',
        slug: '',
        status: '',
        title: {rendered: ''},
        type: ''
    },
    req:false
}

export const Post_Context = createContext<{state: PostState;dispatch: Dispatch<any>;}>({
    state: initial_state,
    dispatch: () => null
  });

export const Post_Provider = ({children}:any)=>{
    const [postState,dispatch] = useReducer(postsReducer,initial_state)

    const get_posts = async()=>{
        dispatch({type:'req'})
        const result = await get_all_posts()
        dispatch({
            type:'get_all_posts',
            payload:result
        })
    }

    useEffect(()=>{
        get_posts()
    },[])
    return <Post_Context.Provider value={{state:postState,dispatch}} >
        {children}
    </Post_Context.Provider>
}