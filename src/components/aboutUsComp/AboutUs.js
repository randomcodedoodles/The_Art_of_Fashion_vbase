import { Footer } from "../Footer"
import "./AboutUs.css"
import midImg from "../../Resources/shutterstock_696636415.jpg"

export const AboutUs = () => {
    return (
        <section className="App-container">
            <div className="about-us">
                <h2>About us</h2>
                <div className="beforeImg">

                </div>
                <div className="officeImg"><img src={midImg} alt="office" /></div>
                <div className="afterImg">

                </div>
            </div>
            
        </section>
    )
}