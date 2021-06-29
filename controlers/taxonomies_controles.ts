export const get_taxonomies = async ()=>{
    const req = await fetch(`${process.env.API}/wp/v2/taxonomies`)
    const taxs = await req.json()
    return taxs
}
export const get_terms = async (taxonomies:any[])=>{
    let terms = []
    for(let taxonomy of taxonomies){
        const req = await fetch(`${process.env.API}/wp/v2/taxonomies?slug=${taxonomy}`)
        const tax = await req.json()
        
        const req_ = await fetch(`${process.env.API}/wp/v2/${tax[taxonomy].rest_base}`)
        const res = await req_.json()

        terms.push({...tax[taxonomy],terms:res})
    }
    return terms
}