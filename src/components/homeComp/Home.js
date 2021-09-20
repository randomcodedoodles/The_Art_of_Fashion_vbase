
import { Gallery } from "./Gallery"
import { Individual } from "./Individual"
import { Introduction } from "./Introduction"
import { Service } from "./Service"
import "../styles/App-container.css"
//import "./styles/Home.css"

export const Home = (props) => {
    return (
        <section className={`App-container ${props.dropDownManuShown ? 'drop-down' : ''}`}>
            <Gallery {...props} />
            <Introduction />
            <Individual />
            <Service />
            
        </section>
    )
}





//{${dropDownManuShown ? "App-container drop-down" : ""}