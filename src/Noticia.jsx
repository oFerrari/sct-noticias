import './Noticia.css'

export function Noticia(props){
    return(
        <article className="noticia">
            <h1>{props.titulo}</h1>
            <img src="https://api.lorem.space/image?w=500&h=500" alt="" />
        </article>
    )
}