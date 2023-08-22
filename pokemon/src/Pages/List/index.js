import React from "react";
import useRequestApi from "../../Hooks/useRequestApi";
import ListContainer from "../../Components/Pages/ListContainer";

const List = () => {
  const { data, loading, error, fetchData } = useRequestApi();
  const [endPoint, setEndPoint] = React.useState("/pokemon");

  React.useEffect(() => {
    fetchData(endPoint);
  }, [endPoint]);

  if (loading) {
    return <div>loading</div>;
  } else {
    return <ListContainer data={data} fetchData={fetchData} />;
  }
};

export default List;
