export const get_post_taxonomies = async(post_type:string)=>{
    const req = await fetch(`${process.env.api}/taxonomies`)
    const result = await req.json()
    const tax_array = Object.values(result)
    const rs = tax_array.map((tax:any)=>{
       if(tax.types == post_type) return tax
    })
    return rs
}