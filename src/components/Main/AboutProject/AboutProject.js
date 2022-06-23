import './AboutProject.css';

function AboutProject() {
    return (<div className='about-project'>
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__texts">
            <li className='about-project__text'>
                <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </li>
            <li className='about-project__text'>
                <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
        </ul>
        <div className="about-project__time">
            <div className="about-project__time-backend">1 неделя</div>
            <div className="about-project__time-frontend">4 недели</div>
            <div className="about-project__time-backend-caption">Back-end</div>
            <div className="about-project__time-frontend-caption">Front-end</div>
        </div>

    </div>)
}

export default AboutProject;