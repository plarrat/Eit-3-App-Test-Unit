import NavbarApp from "./components/navbarApp/navbarApp"
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap"
import usersProvider from "./providers/users/users"
import { useEffect, useState } from "react"

function App() {
  const [formUser, setFormUser] = useState({
    prenom: "",
    nom: "",
  })

  useEffect(() => {
    // usersProvider.add("philippe", "LARRAT")
  }, [])

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
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>Philippe</td>
                  <td>Larrat</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
