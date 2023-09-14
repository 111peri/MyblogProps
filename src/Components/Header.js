

export function BlogHeader(props) {
    return (
        <header className="w3-container w3-center w3-padding-32">
            <h1><b>{props.title}</b></h1>
            <p>Welcome to the blog of <span className="w3-tag">{props.author}</span></p>
        </header>

    );
}