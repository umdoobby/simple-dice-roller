
function Body(props) {
    return (
        <div className="py-3">
            <div className="container box" role="body" aria-roledescription="body">
                {props.children}
            </div>
        </div>
    );
}

export default Body;
