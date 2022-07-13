import './More.css';

function More({ isVisible, onClick }) {
    return (isVisible && <section className='more'>
        <button className="more__button" type="button" onClick={onClick}>Ещё</button>
    </section>);
}

export default More;