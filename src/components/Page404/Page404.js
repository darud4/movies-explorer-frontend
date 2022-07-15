import './Page404.css';
import { useNavigate } from 'react-router-dom';

function Page404({ link }) {
    
    const navigate = useNavigate();

    return <section className='page404'>
        <h2 className="page404__title">404</h2>
        <p className="page404__subtitle">Страница не найдена</p>
        <button type="button" onClick={() => navigate(-1)} className="page404__link">Назад</button>
    </section>
}

export default Page404;