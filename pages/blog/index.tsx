import { GetStaticProps, GetStaticPropsContext } from "next"


const Custom_page = ()=>{
    return <></>
}

export const getStaticProps:GetStaticProps = async (_:GetStaticPropsContext)=>{
    return {
        props:{},
        redirect:{
            destination:"/",
            permanent:false
        }
    }
}
export default Custom_page