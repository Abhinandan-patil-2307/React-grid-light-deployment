import "./Box.css";

const Box = ({ isVisibel }) => {
    if (isVisibel) {
        return (
            <div className="Box"></div>
        )
    } else {
        return (<div ></div>)
    }
}

export default Box;