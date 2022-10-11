import mobie from '../images/http___auvenir_com_.jpeg'
import web from '../images/https___www_mobileiron_com_.jpeg'
import desktop from '../images/http___mindgeek_com_.jpeg'
import cloud from '../images/http___www_techwisenetworks_com_.jpeg'
import televz from '../images/http___www_televz_com_.jpeg'
import sgx from '../images/http___www_saigonx_com_.jpeg'
import green from '../images/http___www_greenpacket_com_.jpeg'
import ssense from '../images/https___www_ssense_com_.jpeg'
import greencopper from '../images/https___www_greencopper_com_.jpeg'
import box from '../images/https___www_bgx_ai_.jpeg'
import wedge from '../images/https___www_wedgenetworks_com_.jpeg'
import digital from '../images/http___www_digitalperformance_de_.jpeg'
import mindgeek from '../images/http___mindgeek_com_.jpeg'
import collec from '../images/http___www_collectiveclarity_net_.jpeg'
import superhippo from '../images/http___superhippo_com_.jpeg'
import etnasoft from '../images/https___www_etnasoft_com_.jpeg'
import traffic from '../images/https___www_trafficpartner_com_.jpeg'
import ewerk from '../images/https___www_ewerk_com_.jpeg'
import ktc from '../images/http___www_ktcc_co_jp_.jpeg'
import frog from '../images/https___frogasia_com_.jpeg'
import tpfcom from '../images/http___www_tpf_com_au_.jpeg'
import tvt from '../images/https___tvt_biz_ (1).jpeg'
import smine from '../images/http___www_sssmine_com_.jpeg'
import eco from '../images/http___www_ecopharma_com_vn_.jpeg'
import empi from '../images/http___empiregroup_vn_.jpeg'


import React, { Component } from 'react'

export default class Clientslider extends Component {
    constructor(props) {
        super(props)
        this.currentClientSliderItem = 1
        this.ClientSliderItemCount = 25
        setInterval(() => {
            this.nextClientSlider(this.currentClientSliderItem, this.ClientSliderItemCount, document.getElementById("sub-slider-2").clientWidth / 4)
          }, 5000);
    }
    nextClientSlider(currentClientSliderItem, ClientSliderItemCount, width) {
        if (currentClientSliderItem === ClientSliderItemCount - 4) {
            this.currentClientSliderItem = 1
        } else {
            this.currentClientSliderItem++
        }
        let leftPosition = (currentClientSliderItem - 1) * width
        let ClientSliderElement = document.getElementById("sub-slider-2-items")
        if (ClientSliderElement) {
            if (currentClientSliderItem === 1) {
                ClientSliderElement.style.left = "0"
            } else {
                ClientSliderElement.style.left = "-" + leftPosition + "px"
            }
        }
    }
    backClientSlider(currentClientSliderItem, ClientSliderItemCount, width) {
        if (currentClientSliderItem === 1) {
            currentClientSliderItem = ClientSliderItemCount - 4
        } else {
            this.currentClientSliderItem--
        }
        let leftPosition = (currentClientSliderItem - 1) * width
        let ClientSliderElement = document.getElementById("sub-slider-2-items")
        if (ClientSliderElement) {
            if (currentClientSliderItem === 1) {
                ClientSliderElement.style.left = "0"
            } else {
                ClientSliderElement.style.left = "-" + leftPosition + "px"
            }
        }
    }
    loadClientSlider() {
        let ClientSliderElm = document.getElementById("sub-slider-2-items")
        if (ClientSliderElm) {
            ClientSliderElm.style.width = ((document.getElementById("sub-slider-2").clientWidth / 4) * this.ClientSliderItemCount) + "px"
        }
        let ClientSliderItems = document.querySelectorAll("#sub-slider-2-items .slide-item")
        ClientSliderItems.forEach((elm) => {
            elm.style.width = (document.getElementById("sub-slider-2").clientWidth / 4) + "px"
        })
    }
    componentDidMount() {
        window.addEventListener("load", this.loadClientSlider)
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.loadClientSlider)
    }
    render() {
        return (
            <div className="full-box full-box-2">
                <div className="box sub-slider" id="sub-slider-2">
                    <div>
                        <h2>OUR CLIENTS</h2>
                        <div className="items">
                            <div className="slides" id="sub-slider-2-items">
                                <div className="slide-item">
                                    <img src={mobie} alt="mobie" />
                                </div>
                                <div className="slide-item">
                                    <img src={web} alt="web" />
                                </div>
                                <div className="slide-item">
                                    <img src={desktop} alt="desktop" />
                                </div>
                                <div className="slide-item">
                                    <img src={cloud} alt="cloud" />
                                </div>
                                <div className="slide-item">
                                    <img src={televz} alt="televz" />
                                </div>
                                <div className="slide-item">
                                    <img src={sgx} alt="sgx" />
                                </div>
                                <div className="slide-item">
                                    <img src={green} alt="green" />
                                </div>
                                <div className="slide-item">
                                    <img src={ssense} alt="ssense" />
                                </div>
                                <div className="slide-item">
                                    <img src={greencopper} alt="greencopper" />
                                </div>
                                <div className="slide-item">
                                    <img src={box} alt="box" />
                                </div>
                                <div className="slide-item">
                                    <img src={wedge} alt="wedge" />
                                </div>
                                <div className="slide-item">
                                    <img src={digital} alt="digital" />
                                </div>
                                <div className="slide-item">
                                    <img src={mindgeek} alt="mindgeek" />
                                </div>
                                <div className="slide-item">
                                    <img src={collec} alt="collec" />
                                </div>
                                <div className="slide-item">
                                    <img src={superhippo} alt="superhippo" />
                                </div>
                                <div className="slide-item">
                                    <img src={etnasoft} alt="etnasoft" />
                                </div>
                                <div className="slide-item">
                                    <img src={traffic} alt="traffic" />
                                </div>
                                <div className="slide-item">
                                    <img src={ewerk} alt="ewerk" />
                                </div>
                                <div className="slide-item">
                                    <img src={ktc} alt="ktc" />
                                </div>
                                <div className="slide-item">
                                    <img src={frog} alt="frog" />
                                </div>
                                <div className="slide-item">
                                    <img src={tpfcom} alt="tpfcom" />
                                </div>
                                <div className="slide-item">
                                    <img src={tvt} alt="tvt" />
                                </div>
                                <div className="slide-item">
                                    <img src={smine} alt="smine" />
                                </div>
                                <div className="slide-item">
                                    <img src={eco} alt="eco" />
                                </div>
                                <div className="slide-item">
                                    <img src={empi} alt="empi" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slider-actions">
                    <button className="btn-previus" onClick={() => this.backClientSlider(this.currentClientSliderItem, this.ClientSliderItemCount, document.getElementById("sub-slider-2").clientWidth / 4)}><img src="back.svg" /></button>
                    <button className="btn-next" onClick={() => this.nextClientSlider(this.currentClientSliderItem, this.ClientSliderItemCount, document.getElementById("sub-slider-2").clientWidth / 4)}><img src="next.svg" /></button>
                </div>
            </div>
        )
    }
}