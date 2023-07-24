import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const PlaceList = () => {
    // const history = useHistory();
    const [places, setPlace] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPlaces, setNumberOfPlaces] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const limit = 8;

    useEffect(() => {
        setNumberOfPages(Math.ceil(numberOfPlaces/limit));
    }, [numberOfPlaces]);

    const getPlace = (page = 1) => {
        setCurrentPage(page);
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page : page,
                _limit : limit,
                _sort: "title",
                _order: "asc"
            }
        }).then((res) => {
            setNumberOfPlaces(res.headers['x-total-count']);
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
        {numberOfPages > 1 && <Pagination currentPage={currentPage} numberOfPages={numberOfPages} onClick={getPlace} />}
        </div>
    );
}

export default PlaceList;