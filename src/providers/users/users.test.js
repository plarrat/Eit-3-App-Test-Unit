import usersProvider from "./users"

let id = usersProvider.add("xxx", "yyy")

describe("Test de la méthode add", () => {
  it("should create an id", () => {
    expect(id).toBeDefined()
  })

  it("should be present in getListe", () => {
    let liste = usersProvider.getListe()
    let res = liste.find((user) => user.id === id)
    expect(res).toBeDefined()
    expect(res.id).toBe(id)
    expect(res.prenom).toBe("xxx")
    expect(res.nom).toBe("yyy")
  })
})

describe("Test de la methode getById", () => {
  it("should find the user", () => {
    let user = usersProvider.getById(id)
    expect(user).not.toBe(-1)
    expect(user.id).toBe(id)
    expect(user.prenom).toBe("xxx")
    expect(user.nom).toBe("yyy")
  })

  it("should not find the user", () => {
    let user = usersProvider.getById("faux id")
    expect(user).toBe(-1)
  })
})

describe("Test de la methode deleteById()", () => {
  it("should delete the user", () => {
    const res = usersProvider.deleteById(id)
    expect(res).toBe(true)

    let existe = usersProvider.getById(id)
    expect(existe).toBe(-1)
  })

  it("should not find after delete", () => {
    const res = usersProvider.deleteById(id)
    expect(res).toBe(-1)
  })
})
