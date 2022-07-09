import './More.css';

function More({ isVisible }) {
    return (isVisible && <section className='more'>
        <button className="more__button" type="button">Ещё</button>
    </section>);
}

export default More;