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
        <footer className="horizontalGroup flex-center space-around">
            <div className="verticalGroup space-around">
                <div className="verticalGroup">
                    <p className="bigText">Адрес</p>
                    <p className="mediumText">г. Воронеж, ул. Университетская д. 1<br/>аудитория 333а</p>
                </div>
                <div className="verticalGroup">
                    <p className="bigText">Контакты</p>
                    <p className="mediumText">+7 (473) 220-85-53<br/>+7 (473) 220-84-60</p>
                </div>
            </div>
            <div className="verticalGroup space-around">
                <div className="verticalGroup">
                    <p className="bigText">Премудростная приказная палата</p>
                    <div className="horizontalGroup start-end-line">
                        <p className="mediumText">аудитория 333а</p>
                        <p className="mediumText">2-208-460<br/>2-208-553</p>
                    </div>
                </div>
                <div className="verticalGroup">
                    <p className="bigText">E-mail</p>
                    <p className="mediumText">deanery@math.vsu.ru</p>
                </div>
            </div>
            <div className="verticalGroup">
                <p className="bigText">Часы работы</p>
                <p className="mediumText">Пн-Пт<br/>10:00-17:00<br/>Обед<br/>12:00-13:00</p>
            </div>
        </footer>
    )
}
