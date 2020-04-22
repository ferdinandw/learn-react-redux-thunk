import React, { Component } from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Add from './Add'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main/>
                <Add/>
            </div>
        )
    }
}
