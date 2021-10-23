
function History(props) {
    return (
        <div className="is-fullwidth">
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th className="is-narrow"><abbr title="Num Rolled">Dice Rolled</abbr></th>
                    <th><abbr title="Results" className="is-pulled-left is-fullwidth">Results</abbr></th>
                    <th><abbr title="Total" className="is-pulled-right">Total</abbr></th>
                </tr>
                </thead>
                <tbody>
                {props.dieHistory.slice(0).reverse().map((his) => {
                    return (
                        <tr key={his.id}>
                            <td className="is-narrow">{`${his.dNum}D${his.dSides}`}</td>
                            <td><span className="is-pulled-left">{his.dRolls.join(" + ")}</span></td>
                            <td><span className="is-pulled-right">{his.dTotal}</span></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default History;
