export function HeaderComponent() {
    return (
        <header>
            <div className="horizontalGroup start-end-line">
                <div className="horizontalGroup">
                    <img src="../assets/logo/logo.jpg" className="logo logoX2" alt="logo"/>
                    <div className="verticalGroup">
                        <p className="bigText bigText-accent"><b>Математический факультет</b></p>
                        <p><i>Изучение матеметики - интеллектульные инвестиции в будущее!</i></p>
                    </div>
                </div>
                <div className="verticalGroup">
                    <p className="mediumText">2-208-460, 2-208-553</p>
                    <p className="mediumText">deanery@math.vsu.ru</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="horizontalGroup start-end-line">
                <nav className="horizontalGroup horizontalGroup-gap flex-center">
                    <a href="" className="mediumText tabsName">О факультете</a>
                    <a href="" className="mediumText tabsName">Наука</a>
                    <a href="" className="mediumText tabsName">Актив</a>
                    <a href="" className="mediumText tabsName">Студентам</a>
                    <a href="" className="mediumText tabsName">Абитуриентам</a>
                    <a href="" className="mediumText tabsName">Школьникам</a>
                </nav>
                <div className="horizontalGroup">
                    <p className="bigText"><b>Расписание/</b></p>
                    <p className="bigText" id="week">Знаменатель
                    </p>
                </div>
            </div>
            <div className="line"></div>
        </header>
    )
}

export function FooterComponent() {
    return (
        <footer>
        </footer>
    )
}
