import {useState} from "react";

function DieInput(props) {
    const [numOfDice, setNumOfDice] = useState(1);
    const [numOfSides, setNumOfSides] = useState(6);

    function handleNumOfDice(e) {
        setNumOfDice(e.target.value);
    };

    function handleNumOfSides(e){
        setNumOfSides(e.target.value);
    };

    function handleRoll(e) {
        let total = 0;
        let rolls = [];
        for (let i = 1; i <= numOfDice; i++) {
            let r = getRandomIntInclusive(1, numOfSides);
            total += r;
            rolls.push(r);
        }
        let history = props.dieHistory.slice();
        history.push({id: history.length + 1, dNum: numOfDice, dTotal: total, dRolls: rolls, dSides: numOfSides});
        props.setDieHistory(history);
    };

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };

    return (
        <div className="columns pb-5">
            <div className="column is-one-fifth">
                <div className="field">
                    <input type="number" className="input is-medium" value={numOfDice} min="1" onChange={handleNumOfDice}/>
                </div>
            </div>
            <div className="column is-narrow">
                <h1 className="title is-1">D</h1>
            </div>
            <div className="column">
                <input type="number" className="input is-medium" value={numOfSides} min="2" onChange={handleNumOfSides}/>
            </div>
            <div className="column is-one-fifth">
                <button className="button is-medium is-primary is-fullwidth" onClick={handleRoll}>Roll</button>
            </div>
        </div>
    );
}

export default DieInput;
