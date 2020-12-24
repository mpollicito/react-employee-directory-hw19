import React from "react"
import Searchbar from "./Searchbar.jsx"

function Navbar({handlesearchchange}) {
    return (
        <nav className = "navbar" >
            <div>
                <Searchbar handlesearchchange={handlesearchchange} />
            </div>
        </nav>
    )
}

export default Navbar