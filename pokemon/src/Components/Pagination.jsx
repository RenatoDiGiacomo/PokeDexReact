import React from "react";

const Pagination = ({next,previous}) => {
    return (
        <div className="pagesButtons">
            <button>{"<"} Previous</button>
            <button>Next {">"}</button>
        </div>
    );
};

export default Pagination;
