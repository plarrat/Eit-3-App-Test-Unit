import axios from "axios"

class usersProvider {
  constructor() {
    this.liste = []
  }

  add(prenom, nom) {
    const dateNow = Date.now()
    const random = Math.floor(Math.random() * 10000)
    const id = "" + dateNow + random
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

  async importation() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((datas) => {
    //   console.log(datas)
    // })

    let datas = await axios.get("https://jsonplaceholder.typicode.com/users")
    datas.data.forEach((user) => this.add(user.name, user.username))
    return datas
  }
}

export default new usersProvider()
