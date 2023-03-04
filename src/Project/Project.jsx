import React from 'react'
import './Style.scss'
import Logo from './images/logo.svg'

const Project = () => {
    return (
        <div className='container'>
            <div className="balance">
                <div className="balance-container">
                    <div className="price">
                        <p>My Balance</p>
                        <h2>$200.99</h2>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
            <div className="expenses">
                <div className="expenses-container">
                    <div className="title">
                        <h2>Spending - Last 7 Days</h2>
                    </div>
                    <div className="charts">
                        <div className="charts-container">
                            <div className="chart"></div>
                                <span>Mun</span>
                        </div>
                    </div>
                    <div className="Total-Price"></div>
                </div>
            </div>
        </div>
    )
}

export default Project