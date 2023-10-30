import "./Box.css";

const Box = ({ isVisibel }) => {
    if (isVisibel) {
        return (
            <div className="Box active">
            </div>
        )
    } else {
        return (<div className="Box" ></div>)
    }
}

export default Box;