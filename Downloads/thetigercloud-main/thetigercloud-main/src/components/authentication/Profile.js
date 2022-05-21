import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"


export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  let history = useHistory();


  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Échec de la déconnexion")
    }
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">mon compte</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Mettre à jour mon compte
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      <Button variant="link" onClick={() =>
          history.goBack()
        }>
          retour
        </Button>
        <Button variant="link" onClick={handleLogout}>
          Se déconnecter
        </Button>
     
      </div>
    </CenteredContainer>
  )
}
