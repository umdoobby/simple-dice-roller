import {useEffect, useState} from "react";
import History from "./history";
import DieInput from "./dieInput";

function Roller() {
    const [dieHistory, setDieHistory] = useState([]);

    useEffect(() => {}, [JSON.stringify(dieHistory)]);  // pass value as a dependency

    return (
        <div className="roller">
            <DieInput dieHistory={dieHistory} setDieHistory={setDieHistory} />
            <History  dieHistory={dieHistory}/>
        </div>
    );
}

export default Roller;