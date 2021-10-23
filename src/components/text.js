

function Text(props) {
    return (
        <p>
            {
                props.isBold ? <strong>{props.children}</strong> : <>{props.children}</>
            }
        </p>
    );
}

export default Text;
