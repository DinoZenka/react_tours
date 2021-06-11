import s from './Tour.module.css';
import { useState } from 'react';

let Tour = ({ tour, deleteTour }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <article className={s.single_tour}>
            <img src={tour.image} alt={tour.name}></img>
            <footer>
                <div className={s.tour_info}>
                    <h4>{tour.name}</h4>
                    <h4 className={s.tour_price}>${tour.price}</h4>
                </div>
                <p>
                    {showMore ? tour.info : `${tour.info.substring(0, 195)} . . .`}
                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "show less" : "read more"}
                    </button>
                </p>
                <button className={s.btn_delete} onClick={() => deleteTour(tour.id)}>Not interested</button>
            </footer>
        </article >
    )
}

export default Tour;