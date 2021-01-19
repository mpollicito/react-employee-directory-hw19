import React, { Component } from "react"
import Navbar from "./Navbar"
import Table from "./Table";


class Body extends Component {
    handlesearchchange = e => {
        console.log(e.target.value)
    }
    
    headings = [
        {name: "image", width: "10%"},
        {name: "name", width: "10%"},
        {name: "email", width: "10%"},
        {name: "phone", width: "10%"},
        {name: "dob", width: "10%"}
    ]
    
    // function handleSort(heading) {
    
    // }

    render() {
        return (
            <>
                <Navbar handlesearchchange={this.handlesearchchange} />
                <Table headings ={this.headings} />
            </>
        )
    }
}

export default Body