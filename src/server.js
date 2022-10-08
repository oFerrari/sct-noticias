import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})
export async function listarNoticias() {
    const response = await api.get('noticias/')
    return response.data
}

export async function BuscarNoticia(id) {
    const response = await api.get(`noticias/${id}`)
    return response.data
}