import axios from "axios";
import { useEffect, useState } from "react";

const [place, setPlace] = useState([]);
const getPlace = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log(res);
    })
};

useEffect(() => {
    getPlace();
}, []);

const PlaceList = () => {
    return (
        <div className="PlaceList">place</div>
    );
}

export default PlaceList;