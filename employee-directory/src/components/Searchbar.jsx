import React from "react"

function Searchbar({handlesearchchange}) {
    return (
            <div className = "searchbar" >
                <form className = "form-inline">
                    <input className = "form-control" type="search" placeholder="search" onChange={e => handlesearchchange(e)} />
                </form>
            </div>
    )
}

export default Searchbar