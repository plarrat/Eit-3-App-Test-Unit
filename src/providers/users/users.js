class usersProvider {
  constructor() {
    this.liste = []
  }

  add(prenom, nom) {
    const id = Date.now()
    const user = {
      id,
      prenom,
      nom,
    }
    this.load()
    this.liste.push(user)
    this.save()
    return id
  }

  load() {
    let datas = localStorage.getItem("app-test-users")
    datas = datas === null ? "[]" : datas
    datas = JSON.parse(datas)
    this.liste = [...datas]
  }

  save() {
    localStorage.setItem("app-test-users", JSON.stringify(this.liste))
  }

  getById(id) {
    this.load()
    let res = this.liste.find((user) => user.id === id)
    return res === undefined ? -1 : res
  }

  deleteById(id) {
    this.load()
    let liste = this.getListe()
    let index = liste.findIndex((user) => user.id === id)
    if (index === -1) return -1
    liste.splice(index, 1)
    this.liste = liste
    this.save()
    return true
  }

  getListe() {
    this.load()
    return this.liste
  }
}

export default new usersProvider()
