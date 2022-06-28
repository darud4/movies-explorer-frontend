import '../Main.css';
import './Techs.css';
import Title from '../Title/Title';

function Techs() {
    return <section className="techs">
        <Title text="Технологии" />
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__techs">
            <li className="techs__tech">HTML</li>
            <li className="techs__tech">CSS</li>
            <li className="techs__tech">JS</li>
            <li className="techs__tech">React</li>
            <li className="techs__tech">Git</li>
            <li className="techs__tech">Express.js</li>
            <li className="techs__tech">mongoDB</li>
        </ul>
    </section>
}

export default Techs;