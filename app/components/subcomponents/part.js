export default function Part(props) {
    return (
        <div className="part">
            <div className="left">
                <h2>{props.date}</h2>
            </div>

            <div className="right">
                <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
                <h3>{props.h3}</h3>
            </div>
        </div>
    )
}