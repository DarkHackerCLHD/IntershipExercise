import innovations from '../images/innovation.jpg'

function Box2() {
    return (
        <div className="box box-2">
            <h2>INNOVATIONS</h2>
            <div className="items">
                <div className="item">
                <img src={innovations} alt="innovations" />
                    <p>We always hunger for new idea creation by providing facilities for product development and an environment where creativity leverages our skills and services.</p>
                </div>
            </div>
        </div>
    )
}
export default Box2;