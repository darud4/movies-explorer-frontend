import './Portfolio.css';

function Portfolio() {
    return <section className='portfolio'>
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__items">
            <li className="portfolio__item">Статичный сайт
                <a href="https://github.com/darud4/how-to-learn" target="_blank" className="portfolio__button" rel="noreferrer">↗</a>
            </li>
            <li className="portfolio__item">Адаптивный сайт
                <a href="https://github.com/darud4/russian-travel" target="_blank" className="portfolio__button" rel="noreferrer">↗</a>
            </li>
            <li className="portfolio__item">Одностраничное приложение
                <a href="https://github.com/darud4/mesto-frontend" target="_blank" className="portfolio__button" rel="noreferrer">↗</a>
            </li>
        </ul>
    </section>
}

export default Portfolio;