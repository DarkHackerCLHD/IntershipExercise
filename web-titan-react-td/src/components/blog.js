import download from '../images/5-Tech-Trends-in-Healthcare-and-Medical-App-Development-01.jpg'
import download1 from '../images/A-developers-tale-of-deadlines-and-fantasy-time-estimates-01.jpg'
import download2 from '../images/A-Practical-Guide-to-Better-Code-Reviews-01.jpg'

function Blog() {
    return (
        <div className="box box-1">
            <h2>BLOGS</h2>
            <div className="items">
                <div className="event">
                    <img src={download} alt="download" />
                    <h3>5 TECH TRENDS IN HEALTHCARE AND MEDICAL APP DEVELOPMENT</h3>
                    <p>By Admin - 10/06/2021</p>
                    <p>There are many medical apps on the <br/>market; every day there are more and more healthcare startups. If you decide to create a medical app, you need to think outside the box and you need to....</p>
                </div>
                <div className="event">
                    <img src={download1} alt="download1" />
                    <h3>A DEVELOPER’S TALE OF DEADLINES AND FANTASY TIME ESTI …</h3>
                    <p>By Admin - 10/06/2021</p>
                    <p>You were asked to write a program, and during the discovery phase of the discussions, you were asked how long it was going to take.....</p>
                </div>
                <div className="event">
                    <img src={download2} alt="download2" />
                    <h3>A PRACTICAL GUIDE TO BETTER ASSESSMENT REVIEWS</h3>
                    <p>By Admin - 10/06/2021</p>
                    <p>A CODE REVIEW is a part of the development process in which a developer and their colleagues work together and look for bugs within some code...</p>
                </div>
            </div>
        </div>
    );
}
export default Blog;
