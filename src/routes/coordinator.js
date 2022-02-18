export const goToLogin = (history) =>{
    history.push("/login")
}
export const goToFeed = (history) =>{
    history.push("/")
}
export const goToResult = (history, id) =>{
    history.push(`/restaurante/${id}`)
}
export const goToAdress = (history) =>{
    history.push("/cadrastro-endereco")
}
export const goToCar = (history) =>{
    history.push("/carrinho")
}
export const goToProfile = (history) =>{
    history.push("/perfil")
}
export const goToEdit = (history) =>{
    history.push("/edicao-cadastro")
}
export const goToSearch = (history) =>{
    history.push("/busca")
}
export const goToSingUp = (history) =>{
    history.push("/cadastro")
}