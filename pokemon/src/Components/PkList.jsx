import React from "react";
import axios from "axios";

import "./PkList.scss";

const PkList = ({ url, loading }) => {
    const [data, setData] = React.useState(null);
    const [imgChange, setImgChange] = React.useState(null);
    const [cardLoading, setCardLoading] = React.useState(false);

    React.useEffect(() => {
        setCardLoading(true);
        const getData = axios.get(url).then((res) => {
            return res.data;
        });
        getData.then((data) => {
            setData({ name: data.name, img: data.sprites.front_default, imgShy: data.sprites.front_shiny });
            setCardLoading(false);
        });
    }, [url]);

    const changeImg = () => {
        if (imgChange === data.img) {
            setImgChange(data.imgShy);
        }
        if (imgChange === data.imgShy) {
            setImgChange(data.img);
        }
    };
    if (cardLoading) return <h1>Loading...</h1>;

    return (
        <div className="item1">
            {data && (
                <div className="item2">
                    <h1>{data.name}</h1>
                    <img onClick={changeImg} src={imgChange} alt={data.name} title={data.name} />
                </div>
            )}
        </div>
    );
};

export default PkList;
