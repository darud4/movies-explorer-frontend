import './Portfolio.css';

function Portfolio() {
    return <section className='portfolio'>
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
            <li className="portfolio__item">Статичный сайт<button className="portfolio__button">↗</button></li>
            <li className="portfolio__item">Адаптивный сайт<button className="portfolio__button">↗</button></li>
            <li className="portfolio__item">Одностраничное приложение<button className="portfolio__button">↗</button></li>
        </ul>
    </section>
}

export default Portfolio;