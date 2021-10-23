import Text from "../components/text.js";
import Body from "../components/body";
import Roller from "../components/roller";

function Home() {
    return (
        <div className="home">
            <Body>
                <p>Roll some fucking dice!</p>
                <Roller/>
            </Body>
        </div>
    );
}

export default Home;
