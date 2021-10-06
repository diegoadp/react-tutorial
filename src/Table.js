import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <tread>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </tread>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const characterData = this.props.characterData

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}

export default Table