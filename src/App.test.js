import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import App from "./App"

describe("Testing App basics", () => {
  it("should render App without chrashing", () => {
    render(<App />)
  })

  it("should have navBar", () => {
    render(<App />)
    const navbarTitle = screen.getByText(/unit testing Bdd/i)
    expect(navbarTitle).toBeInTheDocument()
  })

  it("should have title Application Utilisateur", () => {
    render(<App />)
    const title = screen.getByText(/Application Utilisateur/i)
    expect(title).toBeInTheDocument()
  })
})

describe("Test de l'importation", () => {
  it("should have importation button", () => {
    render(<App />)
    const btn = screen.getByTestId("btn-import")
    expect(btn).toBeInTheDocument()
  })

  it("should import datas after click", async () => {
    render(<App />)
    const btn = screen.getByTestId("btn-import")
    fireEvent.click(btn)
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
    })
  })
})

describe("Test du formulaire", () => {
  it("should have prenom input", () => {
    render(<App />)
    let prenom = screen.getByTestId("input-prenom")
    expect(prenom).toBeInTheDocument()
  })

  it("should have nom input", () => {
    render(<App />)
    let nom = screen.getByTestId("input-nom")
    expect(nom).toBeInTheDocument()
  })

  it("should have submit button", () => {
    render(<App />)
    let btn = screen.getByTestId("btn-submit")
    expect(btn).toBeInTheDocument()
  })

  it("should add user in the page", async () => {
    render(<App />)
    let prenom = screen.getByTestId("input-prenom")
    fireEvent.change(prenom, { target: { value: "Philippe" } })

    let nom = screen.getByTestId("input-nom")
    fireEvent.change(nom, { target: { value: "Larrat" } })

    let btn = screen.getByTestId("btn-submit")
    fireEvent.click(btn)

    await waitFor(() => {
      expect(screen.getByText("Philippe")).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText("Larrat")).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(prenom.value).toBe("")
    })

    await waitFor(() => {
      expect(nom.value).toBe("")
    })
  })
})
