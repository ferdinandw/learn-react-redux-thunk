import React from 'react'
import {connect} from 'react-redux'
import Item from './Item'

const Main = (props) => {
    const {data} = props;
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Kelas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return(
                                <Item key={item.id} data={item}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        data: state.siswa
    }
}

export default connect(mapStateToProps)(Main)