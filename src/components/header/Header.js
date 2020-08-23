import React, { Component } from 'react'
import "./header.css" ;

export default class Header extends Component {
    render() {
        return (
            <div className="header"> 
                <div className="header-section">
                    <div className="title-section">
                        <h3>COVID-19 STATUS</h3>
                    </div>
                    <div className="nav-section">
                        <nav className="nav-links">
                            <div><a href="#">india</a></div>
                            <div><a href="#">world</a></div>
                        </nav>
                    </div>
                </div> 
            </div>           
        )
    }
}
