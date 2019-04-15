import React from "react"
import { Link } from "react-router-dom"
import king from "../king.gif"

class End extends React.Component {
  render() {
    return (
      <div>
        <div className="history">
          <br />
          <div className="oupas">OU PAS !</div>
          <br/>
          <br/>
          <img src={king} alt="king"/> <br />
          <Link exact to="/">Accueil</Link>
        </div>
      </div>
    )
  }
}

export default End