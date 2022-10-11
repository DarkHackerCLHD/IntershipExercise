import download from '../images/Chief_Technical_Officer.png'
import download1 from '../images/Director_of_Application_Development.png'
import download2 from '../images/VP_of_Technology.png'
import download3 from '../images/CEO_&_CTO_(co-founder).png'
import download4 from '../images/Project_Manager.png'
import download5 from '../images/CEO.png'
import React, { Component } from 'react'



export default class Box7 extends Component {
    constructor(props) {
        super(props)
        this.Box7ItemCount = 6
        this.currentBox7Item = 1
        setInterval(() => {
            this.nextBox7(this.currentBox7Item, this.Box7ItemCount, (document.getElementsByClassName("items-7")[0].clientWidth))
        }, 3000);
    }
    nextBox7(currentBox7Item, Box7ItemCount, width) {
        if (currentBox7Item === Box7ItemCount) {
            this.currentBox7Item = 1
        } else {
            this.currentBox7Item++
        }
        let leftPosition = (currentBox7Item - 1) * width
        let Box7Element = document.getElementById("sub-slider-4-items")
        if (Box7Element) {
            if (currentBox7Item === 1) {
                Box7Element.style.left = "0"
            } else {
                Box7Element.style.left = "-" + leftPosition + "px"
            }
        }

    }

    loadBox7() {
        let Box7Elm = document.getElementById("sub-slider-4-items")
        if (Box7Elm) {
            Box7Elm.style.width = ((document.getElementsByClassName("items-7")[0].clientWidth) * this.Box7ItemCount) + "px"
        }
        let Box7Items = document.querySelectorAll(".slide-item-4")
        Box7Items.forEach((elm) => {
            elm.style.width = (document.getElementsByClassName("items-7")[0].clientWidth) + "px"
        })
    }
    componentDidMount() {
        window.addEventListener("load", this.loadBox7())
    }
    componentWillUnmount() {
        window.removeEventListener('unload', this.loadBox7())
    }
    render() {
        return (
            <div className="box box-7">
                <div className="box sub-slider-4" id="sub-slider-4">
                    <h2>CUSTOMER TESTIMONIALS</h2>
                    <h3>We deeply appreciate all feedbacks from our customers and keep those as realistic results of high-quality service in Titan</h3>
                    <div className="items-7">
                        <div className="slides" id="sub-slider-4-items">
                            <div className="slide-item-4">
                                <img src={download} alt="download" />
                                <h2>DR. TIM PARKER</h2>
                                <h3>Chief Technical Officer</h3>
                                <div className='grey'>
                                    <blockquote >“We have worked with Titan Technology for the last three years on a complex and evolving software product.  We are delighted with the quality of the deliverables, the enthusiasm of the team, and the dedication to our project.  We look forward to continuing this excellent relationship in the years to come, and I strongly recommend Titan Technology as a software outsourcing provider.”</blockquote>
                                </div>
                            </div>
                            <div className="slide-item-4">
                                <img src={download1} alt="download1" />
                                <h2>THOMAS SANTONJA</h2>
                                <h3>Director of Application Development</h3>
                                <div className='grey'>
                                    <blockquote >“A professional and dedicated team with a spirit of delivery. Successfully worked along us for delivery of years of features.”</blockquote>
                                </div>
                            </div>
                            <div className="slide-item-4">
                                <img src={download2} alt="download2" />
                                <h2>HONGWEN ZHANG, PH.D</h2>
                                <h3>CEO & CTO (co-founder)</h3>
                                <div className='grey'>
                                    <blockquote >“Wedge Networks Inc, based in Canada, is a leader in Real-time Threat Prevention for the cloud networks. Our products and services are distributed world-wide. Product quality, reliability, and supportability are critical to our success. That’s why we partnered with Thanh Nguyen and his Titan team. Working as an extended team of Wedge Networks, the Titan team provided world class QA and product support services for us. The team is highly skilled, dependable, and flexible. The successes of our recent product launches are testaments of their significant contributions.”</blockquote>
                                </div>
                            </div>
                            <div className="slide-item-4">
                                <img src={download3} alt="download3" />
                                <h2>VALERY KHVATO</h2>
                                <h3>VP of Technology</h3>
                                <div className='grey'>
                                    <blockquote >“The work of Titan Technology is distinguished by high professionalism and initiative. It is a wonderful combination for a tech company. Our project consisted of building a mobile app for a blockchain platform. The team asked many right questions throughout the development process and in the end the app was even better and more thought out than in our initial view. And to add, we were on budget and schedule. The quality of development is very high as well. Another very positive factor is communication. It is of utmost importance for a remote team. We are delighted to recommend working with Titan Technology, a very mature and responsible company.”</blockquote>
                                </div>
                            </div>
                            <div className="slide-item-4">
                                <img src={download4} alt="download4" />
                                <h2>CHRIS HENNIGFELD</h2>
                                <h3>Project Manager</h3>
                                <div className='grey'>
                                    <blockquote>“We greatly appreciate the reliable and cost-effective team Titan has provided to us to develop and maintain one of our systems with over a thousand internal users for several years.”</blockquote>
                                </div>
                            </div>
                            <div className="slide-item-4">
                                <img src={download5} alt="download5" />
                                <h2>STEPHEN COLE</h2>
                                <h3>CEO</h3>
                                <div className='grey'>
                                    <blockquote>“In these challenging times, I wanted to say thank you for the outstanding effort and service we have experienced with Titan.They are professionals who really take customer care to the highest levels.We will definitely be using Titan services for our new upcoming projects. Your Company is exemplary in the world of software development and project management. Our projects have always been on time and within budget at Ai6 and Collective Clarity.”</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}