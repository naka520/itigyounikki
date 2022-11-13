import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <div className="loading-wrapper">
            <ReactLoading type={"bars"} color="#fff" />
            <h3>{"Loading..."}</h3>
        </div>
    )
}

export default Loading