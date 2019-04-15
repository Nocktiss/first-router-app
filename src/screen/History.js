import React from "react"
import { Link } from "react-router-dom"
import king1 from "../king1.gif"

class History extends React.Component {
  render() {
    return (
      <div>
        <div className="history">
          <br />
          <div className="home">C'est l'histoire de la viiiiiiieeee !!!!!!!</div>
          <img src={king1} alt="king"/> <br />
          La suite c'est par <Link exact to="/end"><strong>ICI</strong></Link>
        </div>
      </div>
    )
  }
}

export default History