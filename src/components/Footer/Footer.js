import './Footer.css';

function Footer() {
    return <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <ul className="footer__links">
            <li className="footer__link-wrap"><span className="footer__link">© 2020</span></li>
            <li className="footer__link-wrap"><a href="#" className="footer__link">Яндекс.Практикум</a></li>
            <li className="footer__link-wrap"><a href="#" className="footer__link">Github</a></li>
            <li className="footer__link-wrap"><a href="#" className="footer__link">Facebook</a></li>
        </ul>
    </footer>
}

export default Footer;