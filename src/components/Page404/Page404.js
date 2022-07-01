import './Page404.css';

function Page404({ link }) {
    return <section className='page404'>
        <h2 className="page404__title">404</h2>
        <p className="page404__subtitle">Страница не найдена</p>
        <a href={link} className="page404__link">Назад</a>
    </section>
}

export default Page404;