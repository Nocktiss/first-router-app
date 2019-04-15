import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
  render() {
    return (
      <div>
          <br />
        <div className="home">Bienvenue sur l'accueil</div>
        <Link to="/history">Notre Histoire</Link>
      </div>
    )
  }
}

export default Home