export type WP_POST={
    id: number
    date: string
    date_gmt: string,
    guid: [Object],
    modified: string,
    modified_gmt: string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {rendered:string},
    content: [Object],
    excerpt: [Object],
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    template: string,
    format: string,
    meta: [],
    categories: [],
    tags: [],
    deportes: [],
    _links: [Object],
    _embedded: {
        author: [
            {
              id: 1,
              name: string,
              url: string,
              description: string,
              link: string,
              slug: string,
              avatar_urls: [Object],
              _links: [Object]
            }
          ]
          ["wp:featuredmedia"]: [
            {
              id: number,
              date: string,
              slug: string,
              type: string,
              link: string,
              title: [Object],
              author: number,
              caption: [Object],
              alt_text: string,
              media_type: string,
              mime_type: string,
              media_details: {
                width: number,
                height: number,
                file: string,
                sizes: {
                  medium: {
                    file: string,
                    width: number,
                    height: number,
                    mime_type: string,
                    source_url: string
                  },
                  thumbnail: {
                    file: string,
                    width: number,
                    height: number,
                    mime_type: string,
                    source_url: string
                  },
                  full: {
                    file: string,
                    width: number,
                    height: number,
                    mime_type: string,
                    source_url: string
                  }
                },
                image_meta: {
                  aperture: string,
                  credit: string,
                  camera: string,
                  caption: string,
                  created_timestamp: string,
                  copyright: string,
                  focal_length: string,
                  iso: string,
                  shutter_speed: string,
                  title: string,
                  orientation: string,
                  keywords: []
                }
              }
              ,
              source_url: string,
              _links: [Object]
            }
          ] | undefined,
          
        ["wp:term"]:[
            [
              {
                id: number,
                link: string,
                name: string,
                slug: string,
                taxonomy: string,
                _links: [Object]
              }
            ],
            [],
            []
          ] | undefined  
    }
  }
