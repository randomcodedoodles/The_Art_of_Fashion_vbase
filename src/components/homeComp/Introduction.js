import rightImg from "../../Resources/shutterstock_696636415.jpg"
import "./Introduction.css"
export const Introduction = () => {
    return (
        <div className="introduction">
            <div className="left-brief">
                <h2>gfdgfd gfdgfd fdsgfds</h2>
                <p className="brief">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                Vero, quasi saepe. Laborum, minus. Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <div className="list">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati libero asperiores amet nam labore ea! 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </div>
                <button className="detail-btn">Learn more</button>
            </div>
            <div className="right-img">
                <img src={rightImg} alt="office" />
            </div>
            
        </div>
    )
}
/*
<div className="introduction">
            <div className="description">
                <div className="left-brief">gfdgfd</div>
                <div className="right-img">fdsfd</div>
            </div>
        </div>
*/