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

  getListe() {
    this.load()
    return this.liste
  }
}

export default new usersProvider()
