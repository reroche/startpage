import React from "react"
import { Helmet } from "react-helmet"
import { render } from "react-snapshot"

import "./normalize.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const Out = () => (
    <div>
        <Helmet><title>home</title></Helmet>
        <App />
    </div>
)

render(<Out />, document.getElementById("root"))
registerServiceWorker()
