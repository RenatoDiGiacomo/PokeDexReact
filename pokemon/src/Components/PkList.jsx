import React from "react";
import axios from "axios";

const PkList = ({ url }) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const getData = axios.get(url).then((res) => res.data);
        getData.then((data) => setData({name:data.name}));
    }, [url]);
console.log(data)
    const Style = {
        display: "flex",
        flexDirection:"row",
        width:'25%',
        border: "1px solid black",
    };
    return (
        <div>
            {data && <div style={Style}>{data.name}</div>}
        </div>
    );
};

export default PkList;
