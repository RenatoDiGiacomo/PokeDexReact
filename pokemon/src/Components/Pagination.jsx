import React from "react";

const Pagination = ({ next, previous, seturl }) => {
    return (
        <div className="pagesButtons">
            <button disabled={previous ? "" : "disabled"} onClick={() => seturl(previous)}>
                {"<"} Previous
            </button>
            <button disabled={next ? "" : "disabled"} onClick={() => seturl(next)}>
                Next {">"}
            </button>
        </div>
    );
};

export default Pagination;
