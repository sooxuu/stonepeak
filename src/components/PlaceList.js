import axios from "axios";
import { useEffect, useState } from "react";

const PlaceList = () => {
    const [places, setPlace] = useState([]);
    const getPlace = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPlace(res.data);
        });
    };
    useEffect(() => {
        getPlace();
    }, []);

    return (
        <div className="PlaceList">
        {places.map(place => (
            <div>
                <p className="placeName">{place.title}</p>
                <p className="placeAddres">{place.body}</p>
            </div>
        ))}
        </div>
    );
}

export default PlaceList;