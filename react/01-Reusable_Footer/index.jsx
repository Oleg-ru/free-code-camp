export const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-section">
                <ul className="list">
                    <li className="list-item">Фильмы</li>
                    <li className="list-item">Ужасы</li>
                </ul>
                <ul className="list">
                    <li className="list-item">Сериалы</li>
                    <li className="list-item">Аниме</li>
                </ul>
                <ul className="list">
                    <li className="list-item">Мультфильмы</li>
                    <li className="list-item">Советские</li>
                </ul>
            </div>
            <p className="copyright">© 2026 Все права защищены. Развелечения для всех бесплатно!</p>
            <div className="bottom-section">
                <a href="#" className="link">🎃</a>
                <a href="#" className="link">🎭</a>
                <a href="#" className="link">🎯</a>
                <a href="#" className="link">🎈</a>
            </div>
        </footer>
    )
};