import Award from '../images/Award_08.png'
import Award1 from '../images/Award_01.png'
import Award2 from '../images/Award_03.png'
import Award3 from '../images/Award_04.png'
import Award4 from '../images/Award_05.png'
import Award5 from '../images/Award_02.png'
import Award6 from '../images/Award_06.png'
import Award7 from '../images/Award_07.png'


import React, { Component } from 'react'

export default class Box6 extends Component {
    constructor(props) {
        super(props)
        this.currentBox6Item = 1
        this.Box6ItemCount = 9
        setInterval(() => {
            this.nextBox6(this.currentBox6Item, this.Box6ItemCount, (document.getElementsByClassName("items-recon")[0].clientWidth / 5))
        }, 3000);
    }
    nextBox6(currentBox6Item, Box6ItemCount, width) {
        if (currentBox6Item === Box6ItemCount - 5) {
            this.currentBox6Item = 1
        } else {
            this.currentBox6Item++
        }
        let leftPosition = (currentBox6Item - 1) * width
        let Box6Element = document.getElementById("recoid")
        if (Box6Element) {
            if (currentBox6Item === 1) {
                Box6Element.style.left = "0"
            } else {
                Box6Element.style.left = "-" + leftPosition + "px"
            }
        }
    }

    loadBox6() {
        let Box6Elm = document.getElementById("recoid")
        if (Box6Elm) {
            Box6Elm.style.width = ((document.getElementsByClassName("items-recon")[0].clientWidth / 5) * this.Box6ItemCount) + "px"
        }
        let Box6Items = document.querySelectorAll(".recognized-item")
        Box6Items.forEach((elm) => {
            elm.style.width = (document.getElementsByClassName("items-recon")[0].clientWidth / 5) + "px"
        })
    }
    componentDidMount() {
        window.addEventListener("load", this.loadBox6)
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.loadBox6)
    }
    render() {
        return (
            <div className="box6">
                <div className="recon" id="sub-slider-3">
                    <div className="recon-nd">
                        <h3>As Recognized <br></br> By</h3>
                        <div className="items-recon">
                            <div className="recognized" id="recoid">
                                <div className="recognized-item">
                                    <img src={Award} alt="Award" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award1} alt="Award1" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award2} alt="Award2" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award3} alt="Award3" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award4} alt="Award4" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award5} alt="Award5" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award6} alt="Award6" />
                                </div>
                                <div className="recognized-item">
                                    <img src={Award7} alt="Award7" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
