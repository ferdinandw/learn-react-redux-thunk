const initialState = [{
    id: 1,
    nama: "dina",
    kelas: 13
}]

const Siswa = (state = initialState,action) => {

    switch(action.type){
        case `SISWATAMBAH`:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default Siswa;