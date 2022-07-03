import './AboutMe.css';
import '../Main.css';
import Title from '../Title/Title';
import photo from '../../../images/photo.jpg';

function AboutMe() {
    return <section className="about-me">
        <Title text="Студент" />
        <div className="about-me__person">
            <h3 className="about-me__name">Павел</h3>
            <p className="about-me__about">Начинающий веб-разработчик, 42 года</p>
            <p className="about-me__bio">Я родился и живу в Астрахани, у меня есть жена и две дочки. Люблю банги-джампинг и запускать дронов.
                Вcю жизнь работаю сисадмином в одной госкомпании, но какое-то время назад ощутил, что уперся в потолок, развитие остановилось. Хочется работать с современным стеком, делать классные продукты.
            </p>

            <ul className="about-me__contacts">
                <li>
                    <a href="http://facebook.com" className="about-me__contact">Facebook</a></li>
                <li><a href="https://github.com/darud4" className="about-me__contact">Github</a></li>
            </ul>
            <img src={photo} alt="Фото студента" className="about-me__photo" />
        </div>
    </section>

}

export default AboutMe;