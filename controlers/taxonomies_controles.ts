export const get_post_taxonomies = async(post_type:string)=>{
    try {
        const req = await fetch(`${process.env.API}/wp/v2/taxonomies`)
        const result = await req.json()
        const tax_array = Object.values(result)
        const taxonomies = tax_array.filter((tax:any)=>tax.types==post_type)
       
        return taxonomies
    } catch (error) {
        return []
    }
}

export const get_terms = (taxonomies:any[])=>{
    taxonomies.map(async(tax:any)=>{
      const req = await fetch(`${process.env.API}/wp/v2/${tax.rest_base}`)
      const res = await req.json()
      return res
    })
  }