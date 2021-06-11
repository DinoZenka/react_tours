import Tour from './Tour';
import s from './Tours.module.css';

let Tours = (props) => {

    return (
        <section>
            <div className={s.title}>
                <h2>Our tours:</h2>
                <div className={s.underline}></div>
            </div>
            <div className={s.tours}>
                {props.tours.map(elem => {
                    return <Tour key={elem.id} tour={elem} deleteTour={props.deleteTour} />
                })}
            </div>
        </section >
    )
}

export default Tours;