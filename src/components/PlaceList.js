import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const PlaceList = (page = 1) => {
    const [places, setPlace] = useState([]);
    const getPlace = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page : page,
                _limit : 10,
                _sort: "title",
                _order: "asc"
            }
        }).then((res) => {
            setPlace(res.data);
        });
    };
    useEffect(() => {
        getPlace();
    }, []);

    return (
        <div className="place-list-wrap">
        {places.map(place => (
            <div className="place-list">
                <p className="place-name">{place.title}</p>
                <p className="place-addres">{place.body}</p>
            </div>
        ))}
        <Pagination currentPage={2} numberOfPages={5}/>
        </div>
    );
}

export default PlaceList;