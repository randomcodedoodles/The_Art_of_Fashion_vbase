
import { Gallery } from "./Gallery"
import { Individual } from "./Individual"
import { Introduction } from "./Introduction"
import { Service } from "./Service"


export const Home = () => {
    return (
        <section className="App-container">
            <Gallery />
            <Introduction />
            <Individual />
            <Service />
            
        </section>
    )
}