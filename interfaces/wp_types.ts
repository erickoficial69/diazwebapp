export type WP_TYPE={
    
  description:string ,
  hierarchical: boolean,
  name: string,
  slug: string,
  taxonomies: string[],
  rest_base: string,
  _links: {
    collection: [
      {
        href: string
      }
    ],
    "wp:items": [
      {
        href: string
      }
    ]
  }
}

