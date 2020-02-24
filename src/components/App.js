import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Form from "./Form"
import Thanks from "./Thanks"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Form} />
        <Route exact path="/thankyou" component={Thanks} />
      </div>
    </Router>
  )
}
