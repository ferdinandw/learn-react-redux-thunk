import axios from 'axios';

export const getSiswa = () => {
    return function(dispatch){
        axios.get(`http://localhost:8000/siswa`)
        .then((resp) => {
            dispatch({
                type: 'SISWA_LIST',
                payload: resp.data
            })
        })
        
    }
} 

export const hapusSiswa = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:8000/siswa/${id}`)
        .then( resp => {
            console.log(resp);
            dispatch({
                type: `SISWA_HAPUS`,
                payload: id
            })
        })
    }
}