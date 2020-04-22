export const tampilkanTambahSiswa = () => {
    return function(dispatch){
        dispatch({
            type: `TAMPILKAN_TAMBAH_SISWA`
        })
    }
}

export const sembunyikanTambahSiswa = () => {
    return function(dispatch){
        dispatch({
            type:`SEMBUNYIKAN_TAMBAH_SISWA`
        })
    }
}