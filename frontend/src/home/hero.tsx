export function HeroComponent() {
    return (
        <div className="verticalGroup verticalGroup-gap">
            <p className="biggerText heroTitle">Математический факультет</p>
            <div className="horizontalGroup horizontalGroup-gap space-around">
                <div className="flex-center">
                    <div className="container container-indicators shadow verticalGroup-wrap">
                        <div className="verticalGroup container-indicators-items">
                            <p className="biggerText biggerText-hero-section">153</p>
                            <p className="bigText bigText-hero-section">Бюджетных мест</p>
                        </div>
                        <div className="verticalGroup container-indicators-items">
                            <p className="biggerText biggerText-hero-section">164</p>
                            <p className="bigText bigText-hero-section">Минимальных проходной балл</p>
                        </div>
                        <div className="verticalGroup container-indicators-items">
                            <p className="biggerText biggerText-hero-section">212</p>
                            <p className="bigText bigText-hero-section">Средний проходной балл</p>
                        </div>
                        <div className="verticalGroup container-indicators-items">
                            <p className="biggerText biggerText-hero-section">50+</p>
                            <p className="bigText bigText-hero-section">Участников актива</p>
                        </div>
                        <div className="verticalGroup container-indicators-items">
                            <p className="biggerText biggerText-hero-section">6+</p>
                            <p className="bigText bigText-hero-section">Программ обучения</p>
                        </div>
                    </div>
                    <div className="container-turquoise container-indicators shadow"></div>
                    <div className="container-accent container-indicators shadow"></div>
                </div>
                <div className="verticalGroup verticalGroup-gap">
                    <div className="horizontalGroup container-info shadow">
                        <i className="fas fa-atom fa-4x"></i>
                        <p className="mediumText">Мощная научная школа</p>
                    </div>
                    <div className="horizontalGroup container-info shadow">
                        <i className="fas fa-user-graduate fa-4x"></i>
                        <p className="mediumText">Высококвалифицированный профессорско-преподавательский состав</p>
                    </div>
                    <div className="horizontalGroup container-info shadow">
                        <i className="far fa-question-circle fa-4x"></i>
                        <p className="mediumText">Совет по защите докторских и кандидатских диссертаций, аспирантура</p>
                    </div>
                    <div className="horizontalGroup container-info shadow">
                        <i className="fas fa-university fa-4x"></i>
                        <p className="mediumText">Сотрудничество с другими университетами России и Европы</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
