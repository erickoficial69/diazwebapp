import { ChangeEvent, useEffect, useState } from "react"

type Post = {
    titulo: string
    meta_desc: string
    keywords: string
    author: string
    content?: string
    uri?: string
    createdAt: Date
}
const default_post: Post = {
    titulo: 'Titulo del post',
    meta_desc: 'meta description del post',
    keywords: 'post inicial, post de prueba',
    author: 'Erick Diaz',
    createdAt: new Date()
}
type Input = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export const Editor = () => {
    const [post, setPost] = useState<Post>(default_post)
    const [editable, setEditable] = useState<HTMLElement | null>()

    const editarPost = (e:Input)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    const remove_element = (e:HTMLElement) => {
        e.parentElement?.remove()
    }
    const start_edit = (e: any) => {
        const element: HTMLElement = document.createElement(e.target.textContent)
        const img = new Image()

        img.src = "/logo.png"
        img.classList.add('remove-btn')
        img.addEventListener('click',()=>remove_element(img))
        element.style.margin = '20px 0 0 0'
        element.style.border = '1px dashed darkgrey'
        element.setAttribute('contenteditable', 'true')
        element.innerText = "Escribe aquí"
        element.appendChild(img)
        editable?.appendChild(element)
        return
    }
    useEffect(() => {
        const element = document.getElementById('content-post')
        setEditable(element)
    })
    return (
        <div id="editor" >
            {/** Start area post */}
            <div id="head-post">
                <div></div>
                <h1>{post.titulo}</h1>
                <p>{post.meta_desc}</p>
                <p>{post.author}</p>
            </div>

            {/** Editable area */}
            <section id="content-post">

            </section>
            {/** End area post */}

            {/** SEO del Post */}
            <aside>
                <span>
                    <input type="text" onChange={editarPost} name="titulo" defaultValue={post.titulo} />
                    <label>titulo</label>
                </span>
               
                <span>
                    <input type="text" onChange={editarPost} name="keywords" defaultValue={post.keywords} />
                    <label>keywords</label>
                </span>

                <span>
                    <input type="text" onChange={editarPost} name="meta_desc" defaultValue={post.meta_desc} />
                    <label>meta description</label>
                </span>

                <span>
                    <input type="text" onChange={editarPost} name="author" defaultValue={post.author} />
                    <label>author</label>
                </span>
            </aside>

            {/** post container-btns */}
            <span id="container-btns" >
                <button onClick={start_edit}>P</button>
                <button onClick={start_edit}>h2</button>
                <button onClick={start_edit}>h3</button>
            </span>
        </div>
    )
}