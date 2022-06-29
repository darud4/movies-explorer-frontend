import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Profile from '../Profile/Profile';

function Main() {
    return <section className="main">
        <Promo />
        <Profile />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
    </section>

}


export default Main;