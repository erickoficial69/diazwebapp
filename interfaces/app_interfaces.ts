export type App ={
    authentication: []
    description: string
    gmt_offset: string
    home: string
    name: string
    namespaces: string[]
    routes: {
        "":{}
    }
    timezone_string: string
    url: string
    loader_app:boolean
}

export type AppAction = 
| { type: 'get_app_info', payload:App }
| { type: 'loader_app' }