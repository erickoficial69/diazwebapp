export type WP_TAXONOMY={
  description:string ,
  hierarchical: boolean,
  name: string,
  slug: string,
  types: string[],
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

export type WP_TERM={
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
  parent: number
  meta: any[]
  "_links": {
    self: [
      {
        href: string
      }
    ],
    collection: [
      {
        "href": string
      }
    ],
    "up": [
      {
        embeddable: boolean
        href: string
      }
    ],
    "wp:post_type": [
      {
        href: string
      }
    ]
  },
  "_embedded": {
    "up": [
      {
        id: number
        link: string
        name: string
        slug: string
        taxonomy: string
      }
    ]
  }
}