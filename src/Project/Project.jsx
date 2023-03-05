import React from 'react'
import './Style.scss'
import Logo from './images/logo.svg'
import {data} from './Data'
import { createElement } from 'react'


function CreateElements({ST , AMOUNT , MINIMUM}) {
    return React.createElement('div' , {className:'chart'} , 
    createElement('div' , {className: 'body' , style: {height: AMOUNT * 2 + MINIMUM + 'px'}} , null),
    createElement('span' , null , ST)
    )
}

const AddElements = () => {
    for(let i = 0; i < data.length; i++) {
        Elements.push(<CreateElements
        key={i}
        AMOUNT={data[i].amount}
        MINIMUM={data[i].Minimum}
        ST={data[i].day}
        />)
    }
    return Elements
}

const Elements = []



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
                            {/* <div className="chart">
                                <div className="body"></div>
                                <span>Mun</span>
                            </div> */}
                            <AddElements />
                        </div>
                    </div>
                    <div className="Total-Price"></div>
                </div>
            </div>
        </div>
    )
}

export default Project