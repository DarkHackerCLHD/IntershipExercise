import download from '../images/20220607_2020_Tax_Compliance_Awards_0.jpeg'
import download1 from '../images/2022_Titan_Lunar_New_Year_Wish_0.png'
import download2 from '../images/Titan_Charity_Activity_012022_0.jpeg'

function Event() {
    return (
        <div className="box box-1">
            <h2>NEWS & EVENTS</h2>
            <div className="items">
                <div className="event">
                    <img src={download} alt="download" />
                    <h3>2020 TAX COMPLIANCE AWARDS</h3>
                    <p>Titan Technology Corporation won the “2020 Tax Compliance Excellence Award” and the “2020 Taxation Responsibility Fulfillment Excellence Awa… ...</p>
                </div>
                <div className="event">
                    <img src={download1} alt="download1" />
                    <h3>WELCOMING THE YEAR OF THE TIGER</h3>
                    <p>Tiger is a confident, enthusiastic, courageous, and competitive animal. 2022 is the Year of the Tiger. Titan Technology wishes you a new yea… ...</p>
                </div>
                <div className="event">
                    <img src={download2} alt="download2" />
                    <h3>CHARITABLE GIVING IN CELEBRATION OF THE YEAR</h3>
                    <p>Lunar New Year is almost upon us. Family, friends, and spreading goodwill and cheer are what the holidays really mean. Being a socially cons. ...</p>
                </div>
            </div>
        </div>
    );
}
export default Event;
