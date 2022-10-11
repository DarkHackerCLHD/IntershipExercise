import download from '../images/download.png'
import download1 from '../images/download (1).png'
import download2 from '../images/download (2).png'

function Box1() {
    return (
        <div className="box box-1">
            <h2>WE PROVIDE</h2>
            <p>Professional and trusted services with cost-effective and exceptional expertise to deal with any complexities in scalable projects</p>
            <div className="items">
                <div className="item">
                    <img src={download} alt="download" />
                    <h3>SOFTWARE DEVELOPMENT</h3>
                    <p>Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market.</p>
                </div>
                <div className="item">
                    <img src={download1} alt="download1" />
                    <h3>MAINTENANCE AND SUPPORT</h3>
                    <p>Maintain, enhance, and develop new features of existing software applications. We also provide services to migrate from the legacy systems to new technologies to help improve performance and add benefits to the client's businesses.</p>
                </div>
                <div className="item">
                    <img src={download2} alt="download2" />
                    <h3>SOFTWARE TESTING</h3>
                    <p>Provide all kind of testing services including automation tool development, enhancement and execution to assure the quality of our client’s products.</p>
                </div>
            </div>
        </div>
    );
}
export default Box1;
