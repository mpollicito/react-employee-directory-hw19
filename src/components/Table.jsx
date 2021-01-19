import React from "react"
import TableBody from "./TableBody"


function Table({headings, handleSort, users}) {
    return (
        <div className="table" >
            <table>
                <thead>
                    <tr>
                        {
                            headings.map(({name, width})=>{
                                return (
                                    <th
                                    className = "col"
                                    key = {name}
                                    style = {{width}}
                                    onClick = {() => {
                                        handleSort(name.toLowerCase())
                                    }}
                                    >
                                    {name}

                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <TableBody users = {users} />
            </table>
        </div>
    )
}

export default Table