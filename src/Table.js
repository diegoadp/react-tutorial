import React from 'react'

const TableHeader = () => {
    return (
        <tread>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </tread>
    );
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {

        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}


const Table = (props) => {
    const { characterData, removeCharacter } = props; // Study - Destructuring assignment

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    );
}

export default Table