let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.7,
    engordar(p = 0) {
        this.peso += p
    }
}
amigo.engordar(3)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg.`)