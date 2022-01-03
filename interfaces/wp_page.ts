export type WP_PAGE={
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
    content: {rendered:string},
    excerpt: {rendered:string},
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    parent:number,
    menu_order: number,
    format: string,
    meta: [],
    yoast_head_json?: {
      title: string,
      description?: string,
      robots: {
        index: string
        follow: string
        "max-snippet": string,
        "max-image-preview": string,
        "max-video-preview": string
      },
      canonical: string,
      og_type: string,
      og_title: string,
      og_description: string,
      og_url: string,
      og_site_name: string,
      article_modified_time: string,
      twitter_card: string,
      "schema": {
        "@context": string,
        "@graph": [
          {
            "@type": string,
            "@id": string,
            "url": string,
            "name": string,
            "description": string
          },
          {
            "@type": string,
            "@id": string,
            "url": string,
            "name": string,
            "isPartOf": {
              "@id": string
            },
            "datePublished": string,
            "dateModified": string,
            "description": string,
            "breadcrumb": {
              "@id": string
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": [
                  string
                ]
              }
            ]
          },
          {
            "@type": string,
            "@id": string,
            "itemListElement": [
              {
                "@type": string,
                "position": number,
                "name": string,
                "item": string
              },
              {
                "@type": string,
                "position": number,
                "name": string
              }
            ]
          }
        ]
      }
    }
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
    }
  }
