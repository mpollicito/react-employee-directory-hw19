import React, { Component } from "react"
import Navbar from "./Navbar"

class Body extends Component {
    handlesearchchange = e => {
        console.log(e.target.value)
    }

    render() {
        return(
            <>
            <Navbar handlesearchchange = {this.handlesearchchange} />
            </>
        )
    }
}

export default Body