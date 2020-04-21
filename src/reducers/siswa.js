const initialState = [];

const Siswa = (state = initialState,action) => {

    switch(action.type){
        case `SISWA_HAPUS`:
            const newState = state.filter ( item => {
                if (item.id !== action.payload)
                    return true;
                return false
            });
            return newState;
            // return state.filter( () =>{
            //     return true
            // })
            // return state
        case `SISWA_LIST`:
            return action.payload
        default:
            return state;
    }
}

export default Siswa;