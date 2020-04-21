import React from 'react';
import {connect} from 'react-redux';
import {hapusSiswa} from './../../actioncreators/siswa'

const Item = (props) => {
    const { id, nama,kelas} = props.data

    const hapus = () =>{
        props.hapusSiswa(id)
    }
    return (
        <tr>
            <td>{nama}</td>
            <td>{kelas}</td>
            <button onClick={hapus}>Hapus</button>
        </tr>
    )
}

const mapDispatchToProps = {
    hapusSiswa
}

export default connect(null, mapDispatchToProps) (Item);