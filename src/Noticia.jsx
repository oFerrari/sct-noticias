import './Noticia.css'

export function Noticia(props){
    return(
        <article className="noticia">
            <h1>{props.noticia.titulo}</h1>
            <img src={props.noticia.fotos[0]} alt="" />
        </article>
    )
}