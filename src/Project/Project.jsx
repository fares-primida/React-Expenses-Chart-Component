import React from 'react'
import './Style.scss'
import Logo from './images/logo.svg'
import {data} from './Data'
import { createElement } from 'react'


function CreateElements({ST , AMOUNT , MINIMUM}) {
    return React.createElement('div' , {className:'chart'} , 
    createElement('div' , {className: 'body' , style: {height: AMOUNT * 2 + MINIMUM + 'px'}} , null),
    createElement('span' , {className: 'SPAN'} , ST)
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




// const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, );
// console.log(sum); // 6


const Project = () => {
    return (
        <div className='container'>
            <div className="balance">
                <div className="balance-container">
                    <div className="price">
                        <p>My Balance</p>
                        <h2>$921.48</h2>
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
                            <AddElements />
                        </div>
                    </div>
                    <div className="Total-Price">
                        <div className="Total">
                            <p>Total This Month</p>
                            <h2>$478.33</h2>
                        </div>
                        <div className="percent">
                            <p>+2.4%</p>
                            <h3>From Last Month</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project