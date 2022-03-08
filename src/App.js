import NavbarApp from "./components/navbarApp/navbarApp"
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap"
import usersProvider from "./providers/users/users"
import { useEffect, useState } from "react"

function App() {
  const [liste, setListe] = useState([])
  const [formUser, setFormUser] = useState({
    prenom: "",
    nom: "",
  })

  useEffect(() => {
    let datas = usersProvider.getListe()
    setListe(datas)
    // usersProvider.add("philippe", "LARRAT")
  }, [])

  const displayListe = liste.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.id}</td>
        <td>{user.prenom}</td>
        <td>{user.nom}</td>
      </tr>
    )
  })
  return (
    <div className="App">
      <NavbarApp />

      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Application Utilisateur </h1>
            <hr />
          </Col>
        </Row>

        <Form
          onSubmit={(e) => {
            e.preventDefault()
            usersProvider.add(formUser.prenom, formUser.nom)
          }}
        >
          <Row>
            <Col md="5">
              <Form.Control
                placeholder="Prénom"
                value={formUser.prenom}
                onChange={(e) => {
                  let tmp = { ...formUser }
                  tmp.prenom = e.target.value
                  setFormUser(tmp)
                }}
              />
            </Col>
            <Col md="5">
              <Form.Control
                placeholder="Nom de famille"
                value={formUser.nom}
                onChange={(e) => {
                  let tmp = { ...formUser }
                  tmp.nom = e.target.value
                  setFormUser(tmp)
                }}
              />
            </Col>
            <Col md="2">
              <Button type="submit">Enregistrer</Button>
            </Col>
          </Row>
        </Form>

        <Row className="mt-3">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>id</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                </tr>
              </thead>
              <tbody>{displayListe}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
