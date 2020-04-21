import React from 'react';
import Index from '.';

const Item = (props) => {
    const { nama,kelas} = props.data
    return (
        <tr>
            <td>{nama}</td>
            <td>{kelas}</td>
        </tr>
    )
}

export default Item;