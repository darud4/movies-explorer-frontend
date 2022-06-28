import './AboutMe.css';
import '../Main.css';
import Title from '../Title/Title';

function AboutMe() {
    return <section className="about-me">
        <Title text="Студент" />
        <div className="about-me__person">
            <h3 className="about-me__name">Павел</h3>
            <p className="about-me__about">Начинающий веб-разработчик, 42 года</p>
            <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

            <ul className="about-me__contacts">
                <li>
                    <a href="http://facebook.com" className="about-me__contact">Facebook</a></li>
                <li><a href="http://github.com" className="about-me__contact">Github</a></li>
            </ul>
            <img src='#' alt="Фото студента" className="about-me__photo" />
        </div>
    </section>

}

export default AboutMe;